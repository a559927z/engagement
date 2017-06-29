; (function () {


	if (window.Tc == undefined) {
		window.Tc = {};
	}
	var Tc = window.Tc;

	Tc.chartObj = {
		jyBgColor: '#698ACF',   //敬业前景
		jyColor: '#D8E3F5',     //敬业字体
		myBgColor: '#D8E3F5',
		myBgColorB:'#69cfb3',
		myColor: '#698ACF',
		labelPos: 'insideBottom'
	}

	//------------------------------------------echartOption------------------
	Tc.chartXBarOption = {
		color: [Tc.chartObj.jyBgColor],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		legend: {
			data: [],
			left: '60'
		},
		grid: {
			top: 50,
			bottom: 140,
			width:'85%'
		},
		dataZoom: [{
			show: true,
			realtime: true,
			startValue: 0,
			endValue: 10,
			showDetail: false,
			bottom: 0,
		}, {
			type: 'inside',
			realtime: true,
			endValue: 0,
			endValue: 10,
		}],
		xAxis: [
			{
				min:0,
				// max:10,
				type: 'category',
				data: [],
				axisPointer: {
					type: 'shadow'
				},
				axisLine: {
					show: false
				},
				axisLabel: {
					rotate: 45,
					interval: 0
				},
				axisTick: false
			}
		],
		yAxis: [
			{ show: true },
			{ show: false }
		],
		series: [
			{
				name: '',
				type: 'bar',
				barWidth: '60%',
				data: [],
				label: { normal: { show: true, position: Tc.chartObj.labelPos, textStyle: { color: Tc.chartObj.jyColor } } },
				markLine: {
					symbolSize: [0, 0],
					itemStyle: {
						normal: {
							color: '#ff1800',
							lineStyle: {
								type: 'solid'
							}
						}
					},
					data: [{
						yAxis: 0
					}]
				}
			}
		]
	}

	//------------------------------------------echartOption------------------




	// 算数渐变
	Tc.oneToTen = function (minV, maxV) {
		if (typeof minV == 'number') {
			var oneToTen = parseInt((minV / maxV).toFixed(1) * 10);
			return oneToTen;
		}
		return null;
	}

	Tc.getGradient2 = function (minV, maxV) {
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
		} else {
			return '';
		}
	}

	/**
	 *
	 * minV在maxV里的等份数 (获得步数，对应下标)
	 * by jxzhang on 2017-06-19
	 */
	Tc.getGradientIndex = function (minV, maxV, step) {
		if (typeof minV == 'number') {
			// 步数的十等份
			var equalNumber = step / 10
			// 0到1之间 = 最少/最大
			// 提升单位 = zero2one *10
			// 转换后等份数 = 转换后 * 步数的十等份
			return parseInt(((minV / maxV) * 10) * equalNumber);
		} else {
			return null;
		}
	}
	Tc.getGradient = function (minV, maxV, step) {
		var index = Tc.getGradientIndex(parseFloat(minV), parseFloat(maxV), step);
		if (null != index) {
			var color = [
				'gradient0', 'gradient1', 'gradient2', 'gradient3', 'gradient4',
				'gradient5', 'gradient6', 'gradient7', 'gradient8', 'gradient9',
				'gradient10', 'gradient11', 'gradient12', 'gradient13', 'gradient14',
				'gradient15', 'gradient16', 'gradient17', 'gradient18'];
			return color[index];
		}
		return '';
	}

	/**
	 * 差值标题
	 */
	Tc.tipDiff = `
			<ul class="list-inline">
				<li><div style='background-color:`+ Tc.chartObj.jyBgColor + `' class="tipDiff-left "></div> <div class="tipDiff-right">敬业度指数</div></li>
				<li><div style='background-color:`+ Tc.chartObj.myBgColor + `' class="tipDiff-left "></div> <div class="tipDiff-right">满意度指数</div></li>

				<li><div class="tipDiff-left diff10"></div> <div class="tipDiff-right">差值>10%</div></li>
				<li><div class="tipDiff-left diff5-10"></div> <div class="tipDiff-right">差值5%-10%</div></li>
				<li><div class="tipDiff-left diff-5-10"></div> <div class="tipDiff-right">差值（-5%）-（-10%）</div></li>
				<li><div class="tipDiff-left diff-10"></div> <div class="tipDiff-right">差值<-10%</div></li>
			</ul>
		`;
	Tc.tipDiffB = `
			<ul class="list-inline">
				<li><div class="tipDiff-left diff10"></div> <div class="tipDiff-right">差值>10%</div></li>
				<li><div class="tipDiff-left diff5-10"></div> <div class="tipDiff-right">差值5%-10%</div></li>
				<li><div class="tipDiff-left diff-5-10"></div> <div class="tipDiff-right">差值（-5%）-（-10%）</div></li>
				<li><div class="tipDiff-left diff-10"></div> <div class="tipDiff-right">差值<-10%</div></li>
			</ul>
			<div class="lineBetweenB25"></div>
		`;

	Tc.tipDiffC = `
			<ul class="list-inline">
				<li><div class="tipDiff-left diff10"></div><div class="tipDiff-right">差值>5</div></li>
				<li><div class="tipDiff-left diff-10"></div><div class="tipDiff-right">差值<5</div></li>
			</ul>
		`;

	/**
	 * 排名标题
	 */
	Tc.tipRank = `
			<ul class="list-inline">
				<li><div class="tipDiff-left topThree"></div><div class="tipDiff-right">排名前三</div></li>
				<li><div class="tipDiff-left reciprocalThree"></div><div class="tipDiff-right">排名后三</div></li>
			</ul>
		`;


    /**
    *  获取指定值的className
    */
	Tc.getDiffClass = function (v) {
		var diff = '';
		return diff = v < -10 ? 'diff-10' : -5 > v && v > -10 ? 'diff-5-10' : 5 < v && v < 10 ? 'diff5-10' : v > 10 ? 'diff10' : '';
	}
	/**
	 * 字体
	 */
	Tc.getDiffClassB = function (v) {
		var diff = '';
		return diff = v < -10 ? 'diff-10B' : -5 > v && v > -10 ? 'diff-5-10B' : 5 < v && v < 10 ? 'diff5-10B' : v > 10 ? 'diff10B' : '';
	}

	Tc.curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
	Tc.pathName = window.document.location.pathname;
	Tc.pos = Tc.curWwwPath.indexOf(Tc.pathName);
	//获取主机地址，如： http://localhost:8083  
	Tc.localhostPaht = Tc.curWwwPath.substring(0, Tc.pos);
	//获取带"/"的项目名，如：/uimcardprj  
	Tc.projectName = Tc.pathName.substring(0, Tc.pathName.substr(1).indexOf('/') + 1);
	Tc.baseRoot = Tc.localhostPaht + Tc.projectName;



	/**
	 * 获取id
	 */
	Tc.splitId = function (getIdsUmIds) {
		var ids = [];
		if (getIdsUmIds) {
			for (var i = 0; i < getIdsUmIds.length; i++) {
				var id = getIdsUmIds[i].split("_")[0];
				ids.push(id);
			}
		}
		return ids;
	}
	/**
	 * 获取umId
	 */
	Tc.splitUmId = function (getIdsUmIds) {
		var umIds = [];
		if (getIdsUmIds) {
			for (var i = 0; i < getIdsUmIds.length; i++) {
				var umId = getIdsUmIds[i].split("_")[1];
				umIds.push(umId);
			}
			var umIdsStr = umIds.join(",");
		}
		return umIdsStr;
	}




	/**
	 * 格式化千位分割 val:值 comma:分割符
	 */
	Tc.formatNumber = function (val, comma) {
		comma = comma || ",";
		var reg = /(\d+)(\d{3})/;
		if (val == undefined || val == null) return '';
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

	Tc.getYesterday = function (date) {
		var now = new Date();
		date = date || now;
		date.setDate(date.getDate() - 1);
		return date;
	}
	Tc.getYesterdayInt = function (date) {
		return Tc.getYearMonth(Tc.getYesterday());
	}
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
		return y + "" + sm;
	};

	/**
	 * 格式化日期
	 * pattern : Y代表年, m代表月, d代表天
	 */
	Tc.formatDate = function (jsDate, fmt) {
		var o = {
			"M+": jsDate.getMonth() + 1, //月份            
			"d+": jsDate.getDate(), //日            
			"h+": jsDate.getHours() % 12 == 0 ? 12 : jsDate.getHours() % 12, //小时            
			"H+": jsDate.getHours(), //小时            
			"m+": jsDate.getMinutes(), //分            
			"s+": jsDate.getSeconds(), //秒            
			"q+": Math.floor((jsDate.getMonth() + 3) / 3), //季度            
			"S": jsDate.getMilliseconds() //毫秒            
		};
		var week = {
			"0": "/u65e5",
			"1": "/u4e00",
			"2": "/u4e8c",
			"3": "/u4e09",
			"4": "/u56db",
			"5": "/u4e94",
			"6": "/u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (jsDate.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[jsDate.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	};

    /**
	 * 格式化日期(日历组件引用)
	 * pattern : Y代表年, m代表月, d代表天
	 */
	Tc.formatPickerDate = function (jsDate, pattern) {
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
	 * 截取url参数
	 */
	Tc.getUrlParam = function (paramName) {
		var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null)
			return unescape(r[2]);
		return null;
	}
    /**html特殊字符处理
    **/
	Tc.escapeHtml = function (string) {
		var special = {
			' ': '&nbsp;',
			'<': '&lt',
			'>': '&gt;',
			'&': '&amp;',
			'\t': '\\t',
			'\n': '&nbsp;',
			'\f': '\\f',
			'\r': '\\r',
			'"': '&quot;',
			'\\': '\\\\'
		};
		var escape = function (chr) {
			return special[chr] || '\\u'
				+ ('0000' + chr.charCodeAt(0).toString(16)).slice(-4);
		};
		function _escape(obj) {
			if (obj) {
				return '"' + obj.replace(/[\x00-\x1f\\"]/g, escape) + '"';
			}
			return '""';
		}
		return _escape(string);

	}


	String.prototype.trim = function () {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	}

})();

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

/**
 * ajax download plugin
 */
(function () {
	var Cookie = Tc.Cookie = {
		get: function (name) {
			var cookie = document.cookie;
			if (cookie.length > 0) {
				var beginIndex = cookie.indexOf(name + "=");
				if (beginIndex !== -1) {
					beginIndex = beginIndex + name.length + 1;
					var endIndex = cookie.indexOf(";", beginIndex)
					if (endIndex === -1) {
						endIndex = cookie.length;
					}
					return unescape(cookie.substring(beginIndex, endIndex))
				}
			}
			return "";
		},
		remove: function (name) {
			document.cookie = name + "=;expires=" + new Date(0).toUTCString() + ";path=/";
		},
		pop: function (name) {
			var v = this.get(name);
			v && this.remove(name);
			return v;
		}
	};
})();
