import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

var _hmt = _hmt || [];
(function () {
  if (ExecutionEnvironment.canUseDOM) {
    var hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?4debd66ec73a32e236b30b46d219e2e3';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  }
})();


(function (w, d, s, q, i) {
	if (!ExecutionEnvironment.canUseDOM) {
		return;
	}
	w[q] = w[q] || [];
	var f = d.getElementsByTagName(s)[0],
		j = d.createElement(s);
	j.async = true;
	j.id = 'beacon-aplus';
	j.setAttribute('exparams', 'userid=&aplus&sidx=aplusSidex&ckx=aplusCkx');
	j.src = '//g.alicdn.com/alilog/mlog/aplus_v2.js';
	j.crossorigin = 'anonymous';
	f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'aplus_queue');

(function (d) {
	if (!ExecutionEnvironment.canUseDOM) {
		return;
	}
	var t = d.createElement('script');
	t.type = 'text/javascript';
	t.async = true;
	t.src =
		'//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js';
	t.onload = function () {
		if (window.location.hostname !== 'higress.io') {
			return;
		}
		window.AES_CONFIG = window.AES_CONFIG || {
			// 判断当前环境
			env: 'prod',
		};
		window.aes = new AES({
			pid: 'ZAwmfA',
			user_type: 6,
		});
		window.AESPluginAutologConfig = { exposure: 'auto' };
		window.AEMPluginInstances = [
			aes.use(
				AESPluginPV,
				window.AESPluginPVConfig || { enableHistory: true },
			),
			aes.use(AESPluginEvent, window.AESPluginEventConfig || {}),
			aes.use(AESPluginSurvey, window.AESPluginEventConfig || {}),
			aes.use(AESPluginAutolog, window.AESPluginAutologConfig || {}),
			aes.use(AESPluginJSError, window.AESPluginJSError || {}),
			aes.use(AESPluginResourceError, window.AESPluginResourceError || {}),
		];
	};
	setTimeout(function () {
		d.getElementsByTagName('body')[0].appendChild(t);
	}, 800);
})(document);
