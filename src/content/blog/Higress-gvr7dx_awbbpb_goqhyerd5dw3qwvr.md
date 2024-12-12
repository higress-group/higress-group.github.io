---
title: "SpringCloud应用Nacos配置中心注解"
description: "SpringCloud应用Nacos配置中心注解"
date: "2024-12-12"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

# 前言

在Spring Cloud应用中可以非常低成本地集成Nacos实现配置动态刷新，在应用程序代码中通过Spring官方的注解@Value和@ConfigurationProperties，引用Spring enviroment上下文中的属性值, 关于这部分的介绍可以参照[《Spring Cloud+Nacos+KMS 动态配置最佳实践》]([https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA)](https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA))一文，这种用法的最大优点是无代码层面侵入性，但也存在诸多限制，比如：



        * Nacos中配置是作为Spring上下文enviroment的属性源之一，获取属性时会收到其他属性源的干扰，比如通过JVM参数和环境变量注入的属性优先级比Nacos中的更高

        * 通过spring.config.import导入多个Nacos配置时，其中相同的key对应的属性只会有一个生效，需要控制多个属性源的key不重复或者处理因优先级问题导致的属性覆盖问题。无法精准获取指定Nacos配置中的属性

        * 无法将Nacos配置自动注入对象类型的字段

        * 只能被动接受配置最终内容，无法在配置变更时对配置进行二次处理或者触发其他业务动作，无法感知指定的属性变更前后的详细信息

        * 通过@Value注解引用的配置要支持动态刷新，需要在SpringBean上添加@RefreshScope，配置更新时会先将Bean销毁再重新创建新的Bean，使用不当易产生线上问题。



为了解决以上问题，提升应用接入Nacos配置中心的易用性，Spring Cloud Alibaba发布一套全新的Nacos配置中心的注解。



    - @NacosConfig：作用于SpringBean的字段，将Nacos中指定的配置注入字段；作用于SpringBean Class，将Nacos中指定的配置注入Bean的属性中；作用于FactoryBean 方法，将Nacos中指定的配置注入Bean的属性中，不依赖RefreshScope注解即可生效。

    - @NacosConfigListener：作用于SpringBean的方法，在Nacos中的配置发生变化时，以方法参数形式接受变更后的最新配置内容，支持以对象类型接收结果。

    - @NacosConfigKeysListener：作用于SpringBean的方法，在Nacos中的配置的指定属性key集合发生变化时，以方法参数ConfigChangeEvent接受变更前后的属性值。



以下将详细介绍三种注解的用法。



# @NacosConfig注解用法介绍

使用该注解可以将指定nacos配置注入Spring Bean的字段中，可以作用于SpringBean的单一字段上，也可以作用于SpringBean上(包括将注解加在BeanClass上以及结合@Bean注解工厂Bean注入模式)，注入的目标类型中支持基础类型，Properties，集合List<T>，Set<T>，Map<T>泛型，以及其他任意自定义Java Bean。



如果配置格式为yaml和properties，也可以额外指定key字段名，加载指定key对应的属性值。



**注解字段解释**



```plain

@Retention(RetentionPolicy.RUNTIME)

@Target({ElementType.FIELD, ElementType.TYPE, ElementType.METHOD})

@Documented

public @interface NacosConfig {

    

    String group();



    String dataId();



    String key() default "";



    String defaultValue() default "";

}



```



+ group：引入的配置所属分组

+ dataId: 引入的配置DataId

+ key : 配置格式为yaml和properties时，也可以额外指定key字段名，加载指定key对应的属性值。

+ defaultValue：当配置不存在或者配置内指定key属性为空时，加载的默认值。



*访问nacos的全局参数通过application.properties中spring.cloud.nacos.config.server-addr, spring.cloud.nacos.config.namespace参数配置。通过spring.config.import导入的配置作用于Spring的@Value引用属性源，和通过注解引入的方式相互独立，但其内部是共享同一个NacosClient对象，并且访问的是同一个Nacos实例以及同一个命名空间下的配置。







**用法示例**



## 1、加载完整配置内容至String类型字段

```plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default")

String configContent;

```



将dataId=SampleApp.application.properties，group = default对应的配置的完整内容注入到configContent字段。



## 2、加载配置中的指定key属性至基础类型字段

```plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default", key = "useCache", defaultValue = "false")

boolean booleanValue;

```



将dataId=SampleApp.application.properties，group = default对应的配置中的useCache属性值注入到booleanValue字段。



*支持int, long,float,double,boolean 5种基础类型以及其封装类型。



## 3、加载JSON格式配置至基础类型数组字段

```plain

@NacosConfig(dataId = "scoreintArray.json", group = "default")

int[] scores;

```



将dataId=scoreintArray.json，group = default对应的json格式配置注入到scores字段，需保证配置格式可正常反序列化。



*支持int, long,float,double,boolean 5种基础类型数组以及其封装类型。



*配置需以.json结尾且配置内容为json格式。



## 4、加载配置至Properties类型字段

```plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default")

Properties properties = new Properties();

```



将dataId = "SampleApp.application.properties", group = "default"的配置内容注入到properties字段中。可以通过properties.getProperty方法获取其内部属性值。当远端Nacos配置发生变化中，properties对象会被替换，引用也会更新。



*支持properties及yaml格式，dataId需以properties,yaml,yml结尾，其中yaml格式中不能包含数组列表格式属性。



## 5、加载至自定义JavaBean字段

```plain

@NacosConfig(dataId = "myobject.json", group = "default")

MyObject json2Object;



@NacosConfig(dataId = "myobjectArray.json", group = "default")

MyObject[] json2ObjectArray;

    

@NacosConfig(dataId = "myobjectArray.json", group = "default")

List<MyObject> json2ObjectList;

    

@NacosConfig(dataId = "myobjectMap.json", group = "default")

Map<String, MyObject> json2ObjectMap;

```



将dataId = "myobject.json", group = "default"的配置加载至json2Object字段



将dataId = "myobjectArray.json", group = "default"的json数组/列表格式的配置加载至json2ObjectArray字段



将dataId = "myobjectArray.json", group = "default"的json数组/列表格式的配置加载至json2ObjectList字段



将dataId = "myobjectMap.json", group = "default"的json map格式的配置加载至json2ObjectMap字段



*支持自定义数组，集合类型，支持自动根据指定泛型进行反序列化



*当远端Nacos配置发生变化中，字段对应的对象会被替换，引用也会更新。







## 6、加载JSON格式配置至SpringBean

```plain

@Component

@NacosConfig(dataId = "myobject.json", group = "default")

public class MyObject {

    

    String name;

    

    String age;

    

    public String getName() {

        return name;

    }

    

    public void setName(String name) {

        this.name = name;

    }

    

    public String getAge() {

        return age;

    }

    

    public void setAge(String age) {

        this.age = age;

    }

}

```



将dataId = "myobject.json", group = "default"的JSON配置加载至指定SpringBean的字段中，配置中的JSON属性名需要和SpringBean中字段完全一致，且保证每个字段有getter及setter方法。



*@NacosConfig所在的类必须被发布为一个SpringBean才能生效



*@NacosConfig类级别的注入优先级高于字段级别，如在其Bean内部字段中额外添加@NacosConfig将不会生效。







## 7、加载JSON格式配置至工厂Bean

```plain

public class SampleConfiguration {

  

  @NacosConfig(dataId = "myobject1.json", group = "default")

	@Bean

	public MyObject bean1(){

		return new MyObject();

	}



  @NacosConfig(dataId = "myobject2.json", group = "default")

	@Bean

	public MyObject bean2(){

		return new MyObject();

	}

	

}

```



将dataId = "myobject1.json", group = "default"的配置内容加载至beanName=bean1的MyObject类型的SpringBean中。



将dataId = "myobject2.json", group = "default"的配置内容加载至beanName=bean2的MyObject类型的SpringBean中。



*必须配合@Bean注解使用。



# @NacosConfigListener注解用法介绍

NacosConfig注解作用的目标主体是字段，是将目标字段的属性直接变更，当我们需要对配置的内容进行二次处理时，比如当某个属性发生变化时触动程序执行一个业务动作或者在变更后的配置基础上在代码中做二次处理时，NacosConfig注解将无法胜任，此时可以使用NacosConfigListener注解来实现这个诉求，该注解作用于SpringBean的方法上，支持指定配置发生变化时将配置内容以方法参数形式回调指定方法。和NacosConfig注解相似，方法参数支持基础类型，Properties，数组，集合以及自定义JavaBean。



*如果希望在Bean初始化时接受初始回调，可以设置initNotify=true，默认为false。



<font style="color:rgb(0, 0, 0);">*以下示例中的回调方法名均为示例，方法名可以自定义</font>







**用法示例**



## 1、String参数方法接收原生配置内容

```plain

@NacosConfigListener(dataId = "myobjectArray.json", group = "default")

private void fullContentChanged(String content) {

    System.out.println("receive ：" + content);

}

```



当dataId = "myobjectArray.json", group = "default"的配置发生变更时，将完整内容以content参数回调fullContentChanged方法。



## 2、基础类型参数方法接受指定key值内容

```plain

@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default",key="score")

private void scoreChanged(int score) {

    System.out.println("receive ：" + score);

}



```



当dataId = "SampleApp.application.properties", group = "default"的配置中key="score"的属性值发生变更时，将对应属性值score参数回调scoreChanged方法。



*支持int, long,float,double,boolean 5种基础类型



## 3、基础类型数组参数方法接受JSON格式配置内容

```plain

@NacosConfigListener(dataId = "scoresArray.json", group = "default")

private void scoresChanged(int[] scores) {

    System.out.println("receive ：" + scores);

}



```



当dataId = "scoresArray.json", group = "default"的JSON格式配置发生变更时，将配置内容反序列化为基础类型数组对象以scores参数回调scoresChanged方法



*支持int, long,float,double,boolean 5种基础类型数组



*配置dataId必须以.json结尾，并且配置内容必须为json数组格式



## 4、Properties参数方法接受属性参数

```plain

@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default")

private void propertiesChanged(Properties properties) {

    System.out.println("receive ：" + properties);

}

```



当dataId = "SampleApp.application.properties", group = "default"的properties格式配置发生变更时，将配置内容解析为Properties对象以Properties类型参数回调propertiesChanged方法。



## 5、自定义Java Bean参数

```plain

    @NacosConfigListener(dataId = "myobject.json", group = "default")

    private void myObjectChanged(MyObject object) {

        System.out.println("receive ：" + object);

    }



    @NacosConfigListener(dataId = "myobjectArray.json", group = "default")

    private void myObjectArrayChanged(MyObject[] objectArray) {

        System.out.println("receive ：" + objectArray);

    }



    @NacosConfigListener(dataId = "myobjectArray.json", group = "default")

    private void myObjectListChanged(List<MyObject> objectList) {

        System.out.println("receive ：" + objectList);

    }



    @NacosConfigListener(dataId = "myobjectMap.json", group = "default")

    private void myObjectMapChanged(Map<String,MyObject> objectMap) {

        System.out.println("receive ：" + objectMap);

    }

```



当指定配置内容发生变更时，以对象，对象数组，对象列表，对象模式类型回调方法。



*支持自定义数组，集合类型，自动根据指定泛型进行反序列化







# @NacosConfigKeysListener注解用法介绍

该注解支持propertie及yaml格式配置中指定keys发生变更时，通过ConfigChangeEvent参数接受指定keys变更前后的内容。



通过interestedKeys指定监听的keys集合，通过interestedKeyPrefixes指定需要监听的key前缀集合，如果符合任意任一条件的key发生变化时都会触发回调。



**用法示例**



```plain

@NacosConfigKeysListener(dataId = "SampleApp.122110test.properties", group = "default", interestedKeys = {

        "useLocalCache,"}, interestedKeyPrefixes = {"122110."})

private void onKeysChangeSingle(ConfigChangeEvent changeEvent) {

    System.out.println("interestedKeyPrefixes:nacos." + changeEvent.getChangeItems());

}

```



*支持properties及yaml格式，dataId需以properties,yaml,yml结尾。







# 结语

当前Spring Cloud Alibaba在全系列版本(包括2.2.x，2021.x，2022.x，2023.x)中都已经正式发布新版本支持以上注解。



+ 2023.x 系列需升级版本至2023.0.3.2

+ 2022.x 系列需升级版本至<font style="color:rgb(0, 0, 0);">2022.0.0.2 </font>

+ <font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.x 系列需升级版本至</font><font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.0.6.2</font>

+ 2.2.x 系列需升级至2.2.11



其中在2023.x版本中，我们对spring-cloud-alibaba配置模块进行了重构，单独抽取了spring-alibaba-nacos-config模块，该模块不依赖SpringCloud框架，所以基于SpringBoot3 的应用通过单独引入spring-alibaba-nacos-config也可以使用@Value引用Nacos中的配置以及本文介绍的三种注解。



```plain



#pom.xml中引入spring-alibaba-nacos-config依赖

<dependency>

      <groupId>com.alibaba.cloud</groupId>

      <artifactId>spring-alibaba-nacos-config</artifactId>

      <version>2023.0.3.2</version>

</dependency>



#application.properties中添加如下配置

spring.config.import=nacos:optional:nacos:{此处按需替换为需导入的nacos dataId}?group={此处按需替换为需导入的nacos group}&refreshEnabled=true

spring.nacos.config.server-addr={此处按需替换为nacos的serverAddr}

spring.nacos.config.namespace={此处按需替换为nacos的命名空间，public请填空}



//其他参数请参照sca官方文档，将spring.cloud.nacos前缀替换为spring.nacos即可,本文中的注解用法完全一致



```














