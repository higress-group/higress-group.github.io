  (function (w, d, s, q, i) {
      w[q] = w[q] || [];
      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s);
      j.async = true;
      j.id = "beacon-aplus";
      j.src = "//g.alicdn.com/alilog/mlog/aplus_v2.js";
      j.crossorigin = "anonymous";
      f.parentNode.insertBefore(j, f);
  })(window, document, "script", "aplus_queue");

  (function (d) {
      var t = d.createElement("script");
      t.type = "text/javascript";
      t.async = true;
      t.src =
          "//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js";
      t.onload = function () {
          // TODO: 设置aem sdk环境
          if (window.location.hostname !== "higress.io" && window.location.hostname !== "higress.cn") {
              // return;
          }
          window.AES_CONFIG = window.AES_CONFIG || {
              // 判断当前环境
              env: "prod",
          };
          window.aes = new AES({
              pid: "ZAwmfA",
              user_type: 6,
          });
          window.AEMPluginInstances = [
              aes.use(
                  AESPluginPV,
                  window.AESPluginPVConfig || { enableHistory: true },
              ),
          ];
      };
      setTimeout(function () {
          d.getElementsByTagName("body")[0].appendChild(t);
      }, 800);
  })(document);

  var _hmt = _hmt || [];
  (function () {
      if (window.location.hostname !== "higress.io" && window.location.hostname !== "higress.cn") {
              return;
      }
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?4debd66ec73a32e236b30b46d219e2e3";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
  })();


  window.dataLayer = window.dataLayer || [];
  function gtag() {
      dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-YHS75WKFBR");
