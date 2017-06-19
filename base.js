(function ($) {

	if (window.Tc == undefined) {
		window.Tc = {};
	}
	var Tc = window.Tc;


	// 算数渐变
	Tc.changeZeroToOne = function (minV, maxV) {
		if (typeof minV == 'number') {
			var oneToTen = parseInt((minV / maxV).toFixed(1) * 10);
			switch (oneToTen) {
				case 0: return "gradient0";
				case 1: return "gradient1";
				case 2: return "gradient2";
				case 3: return "gradient3";
				case 4: return "gradient4";
				case 5: return "gradient5";
				case 6: return "gradient6";
				case 7: return "gradient7";
				case 8: return "gradient8";
				case 9: return "gradient9";
				case 10: return "gradient10";
			}
		}else{
			return '';
		}

	}

	Tc.getDiffClass = function (v) {
		var diff = '';
		return diff = v < -10 ? 'diff-10' : -5 > v && v > -10 ? 'diff-5-10' : 5 < v && v < 10 ? 'diff5-10' : v > 10 ? 'diff10' : '';
	}

	/**
	 * 格式化千位分割 val:值 comma:分割符
	 */
	Tc.formatNumber = function (val, comma) {
		comma = comma || ",";
		var reg = /(\d+)(\d{3})/;
		var number = val.toString();
		while (reg.test(number)) {
			number = number.replace(reg, "$1" + comma + "$2");
		}
		return number;
	}
    /**
     * 截取字符
     */
	Tc.limit = function (objString, num) {

		var objLength = objString.length;

		if (objLength > num) {
			return objString.substring(0, num) + "...";
		}
		return objString;
	}
	/**
	 * 获得浏览器
	 */
	Tc.getBrower = function () {
		var browser = navigator.appName;
		var b_version = navigator.appVersion;
		var version = b_version.split(';');
		var trim_Version = ''
		if (version.length > 1) {
			trim_Version = version[1].replace(/[ ]/g, '');
		}
		if (browser === 'Microsoft Internet Explorer') {
			return trim_Version;
		} else if (!window.ActiveXObject) {
			return 'MFF';
		} else {
			return browser;
		}
	}


	Tc.displayDiv = function (divId, blockOrNone) {
		var whatBrower = Tc.getBrower();
		var treeDiv = document.getElementById(divId);
		var lockWindowDiv = null;
		treeDiv.style.display = blockOrNone;
		if (blockOrNone.toUpperCase() === 'BLOCK') {
			lockWindowDiv = document.createElement('div');
			with (lockWindowDiv.style) {
				zIndex = 10000;
				top = '30px';
				left = '0px';
				width = '99%';
				height = '100%';
				border = 'none';
				display = 'none';
				margin = padding = 0;
				position = 'absolute';
				filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60)';
				if (whatBrower === 'MFF') {
					backgroundColor = 'transparent';
				} else {
					backgroundColor = '#FFFFFF';
				}
			}
			document.body.insertBefore(lockWindowDiv, document.body.firstChild);

			lockWindowDiv.style.width = '100%';
			lockWindowDiv.style.height = '100%';
			var bodyCW, bodyCH;
			if (window.innerWidth)
				bodyCW = window.innerWidth;
			else if (document.documentElement && document.documentElement.clientWidth)
				bodyCW = document.documentElement.clientWidth;
			else if (document.body)
				bodyCW = document.body.clientWidth;
			if (window.innerHeight)
				bodyCH = window.innerHeight;
			else if (document.documentElement && document.documentElement.clientHeight)
				bodyCH = document.documentElement.clientHeight;
			else if (document.body)
				bodyCH = document.body.clientHeight;
			var thelockWindowDiv = lockWindowDiv;
			setTimeout(function () {
				bodyCW = Math.max(document.body.scrollWidth, bodyCW);
				bodyCH = Math.max(document.body.scrollHeight, bodyCH);
				thelockWindowDiv.style.width = bodyCW + 'px';
				thelockWindowDiv.style.height = bodyCH + 'px';
			}, 1);
			treeDiv.style.visibility = 'visible';
			if (whatBrower === 'MSIE6.0') {
				var selectElement = document.getElementsByTagName('select');
				for (var n = 0; n < selectElement.length; n++) {
					selectElement[n].style.display = 'none';
				}
			} else if (whatBrower === 'MFF') {
				document.body.style.backgroundColor = '#EFEFEF';
			}
		} else {
			if (lockWindowDiv !== null) {
				document.body.removeChild(lockWindowDiv);
			}
			if (whatBrower === 'MSIE6.0') {
				var selectElement = document.getElementsByTagName('select');
				for (var n = 0; n < selectElement.length; n++) {
					selectElement[n].style.display = 'block';
				}
			} else if (whatBrower === 'MFF') {
				document.body.style.backgroundColor = '';
			}
		}
	}

	/**
	 * 解析字符串为Date
	 */
	Tc.parseToDate = function (str) {
		var arr;
		if (!str || !$.trim(str) || !(arr = str.match(/\d+/g)).length) {
			return new Date();
		}

		var ret = new Date();
		ret.setFullYear(arr[0]);
		if (arr.length > 1) {
			ret.setMonth(arr[1] - 1);
		}
		if (arr.length > 2) {
			ret.setDate(arr[2]);
		}
		return ret;
	};

	/**
	 * 获取最后每月的最后一天的日期
	 */
	Tc.getLastDay = function (date) {
		var now = new Date();
		date = date || now;
		if (date.getMonth() == now.getMonth()) {
			return date;
		}
		return new Date(date.getFullYear(), date.getMonth() + 1, 0);
	}

	/**
	 * 得到201405格式的日期类型
	 */
	Tc.getYearMonth = function (jsDate) {
		if (!jsDate) {
			return "";
		}
		var m = jsDate.getMonth() + 1;
		var y = jsDate.getFullYear();
		var sm = m < 10 ? ("0" + m) : m;
		return y + sm;
	};

	/**
	 * 格式化日期
	 * pattern : Y代表年, m代表月, d代表天
	 */
	Tc.formatDate = function (jsDate, pattern) {
		if (!jsDate) {
			return "";
		}
		pattern = pattern || 'Y年m月d日';
		var y = jsDate.getFullYear();
		var m = Tc.padZero(jsDate.getMonth() + 1);
		var d = Tc.padZero(jsDate.getDate());
		return pattern.replace('Y', y).replace('m', m).replace('d', d);
	};

	/**
	 * 往数字前填充0
	 * @param num 要填充的数字
	 * @param len 填充完成后的字符串长度
	 */
	Tc.padZero = function (num, len) {
		len = len || 2;

		var ret = "" + num;
		while (ret.length < len) {
			ret = "0" + ret;
		}
		return ret;
	}

	/**
	 * Loading
	 */
	$(document).ready(function () {
		var loading = $("<div class='f-loading'>").appendTo("body").hide();
		loading.ajaxComplete(function (event, request, settings) {
			$(this).hide();
		});
		loading.ajaxStart(function () {
			$(this).show();
		});
		loading.ajaxError(function (event, request, settings, thrownError) {
			if (console && console.error) {
				console.error(settings.type + "请求[" + settings.url + "]时出错啦!参数: " + settings.data);
			}
		});
	});

})(jQuery);

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function () {
	if (!window.console) {
		window.console = {};
	}
	// union of Chrome, FF, IE, and Safari console methods
	var m = [
		"log", "info", "warn", "error", "debug", "trace", "clear"
	];
	// define undefined methods as noops to prevent errors
	for (var i = 0; i < m.length; i++) {
		if (!window.console[m[i]]) {
			window.console[m[i]] = function () { };
		}
	}
})();
