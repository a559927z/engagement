$(function () {
    var webRoot = 'http://localhost:8080/code/';
    urls = {
        query1: webRoot + '/json/敬满指数高低矩阵图.json'
    }
    var fourSAnalysis = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
        },
        templateA: function (zone) {
            $(zone).find('.fourSAnalysis').remove();
            var html = `
                <div class="fourSAnalysis">
                    <div class="w800">
                        <div>
                            <div class="table-responsive">
                                <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb1" >
                                    <thead>
                                        <tr>
                                            <th class="th1">组织</th>
                                            <th class="th1">Great boss</th>
                                            <th class="th1">Great Company</th>
                                            <th class="th1">Great job</th>
                                            <th class="th1">Great reward</th>
                                            <th class="th1">高管</th>
                                            <th class="th1">中干</th>
                                            <th class="th1">直接上级</th>
                                            <th class="th1">Job</th>
                                            <th class="th1">薪酬</th>
                                            <th class="th1">肯定</th>
                                            <th class="th1">晋升</th>
                                            <th class="th1">福利</th>
                                            <th class="th1">客户导向</th>
                                            <th class="th1">创新</th>
                                            <th class="th1">人才管理</th>
                                            <th class="th1">上下沟通</th>
                                            <th class="th1">协作信任</th>
                                            <th class="th1">工作支持</th>
                                            <th class="th1">公司未来</th>
                                            <th class="th1">文化价值观</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params) {
            this.templateA(zone);
            this.getDataA(zone, params);
        },
        reanderStyleA: function (zone, colNum) {
            var $tb1 = zone.find('.fourSAnalysis ._tb1');
            var x0y = 150; // 第一行第一列
            var xnyn = 80; // 其它列

            $tb1.find('tr td').css({ "width": xnyn + "px" });
            $tb1.find('tr td:nth-child(1)').css({ "width": x0y + "px" });
            $tb1.find('tbody > tr > td').css({ "vertical-align": "middle", "text-align": "center" });
            $tb1.find('.dept').css({ "text-align": "left" });
            $tb1.find('thead > tr > th').css({ "vertical-align": "middle", "text-align": "center" });
            // 计算表宽
            var tableWidth = (colNum * xnyn) + x0y;
            $tb1.width(tableWidth);
        },
        getDataA: function (zone, params) {
            var $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "tableData":
                            [
                                [{ "name": "XX部门", "value": 999 }, { "name": "3", "value": 72.4 }, { "name": "2", "value": 1.9 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "2", "value": 72.7 }, { "name": "1", "value": 80.8 }, { "name": "3", "value": -6.4 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 78.0 }, { "name": "3", "value": -10.6 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }],
                                [{ "name": "中心1", "value": 9999 }, { "name": "1", "value": 80.8 }, { "name": "3", "value": -6.4 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 78.0 }, { "name": "3", "value": -10.6 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }, { "name": "3", "value": 72.7 }, { "name": "2", "value": 68.0 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.0 }, { "name": "1", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }],
                                [{ "name": "中心2", "value": 9999 }, { "name": "3", "value": 72.7 }, { "name": "2", "value": 68.0 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.0 }, { "name": "1", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }, { "name": "2", "value": 6.5 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }],
                                [{ "name": "中心3", "value": 9999 }, { "name": "1", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 72.7 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": 72.7 }, { "name": "2", "value": 68.0 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.0 }, { "name": "1", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": -0.1 }, { "name": "1", "value": 70.5 }],
                                [{ "name": "中心4", "value": 9999 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }, { "name": "2", "value": 6.5 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }, { "name": "2", "value": 6.5 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }]
                            ]
                        }
                    });
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var html = '';
                $.each(rs.chartData1.tableData, function (index, tr) {
                    var trcolor = 'single';
                    if (index % 2 == 1) {
                        trcolor = 'double';
                    }
                    html += "<tr class='" + trcolor + "'>";
                    $.each(tr, function (index2, td) {
                        // 其它列
                        if (td.value != 999 && td.value != 9999) {
                            var v = parseFloat(td.value);
                            // 前三
                            if (td.name == '1') {
                                html += "<td class='topThree'>" + v + "</td>";
                                // 后三
                            } else if (td.name == '2') {
                                html += "<td class='reciprocalThree'>" + v + "</td>";
                            } else {
                                html += "<td>" + v + "</td>";
                            }
                        } else {
                            // 部门
                            if (td.value == 999 && td.value != 9999) {
                                html += "<td class='dept'>" + td.name + "</td>";
                                // 中心
                            } else {
                                html += "<td>" + td.name + "</td>";
                            }
                        }
                    });
                    html += "</tr>";
                });
                $zone.find('.fourSAnalysis ._tb1').append(html);
                fourSAnalysis.reanderStyleA(zone, 21);
            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        chartOptionB: {},
        templateB: function (zone) {
            $(zone).find('.fourSAnalysis').remove();
            var html = `
                <div class="fourSAnalysis">
                    <div class="w800">
                        <div>
                            <table  border="1" cellspacing="0" cellpadding="0"  class="table table-bordered _tb2" >
                                <tbody>
                                    <tr class="fontStyle">
                                        <td>满意度指标</td>
                                        <td>项目</td>
                                    </tr>
                                    <tr class="single">
                                        <td rowspan="3" class="fontStyle">Great boss</td>
                                        <td class="fontStyle">高管</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">中干</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">直接上级</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">Great job</td>
                                        <td class="fontStyle">Job</td>
                                    </tr>
                                    <tr class="single">
                                        <td rowspan="4" class="fontStyle">Great reward</td>
                                        <td class="fontStyle">薪酬</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">肯定</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">晋升</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">福利</td>
                                    </tr>
                                    <tr class="single">
                                        <td rowspan="8" class="fontStyle">Great Company</td>
                                        <td class="fontStyle">客户导向</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">创新</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">人才管理</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">上下沟通</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">协作信任</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">工作支持</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">公司未来</td>
                                    </tr>
                                    <tr class="single">
                                        <td class="fontStyle">文化价值观</td>
                                    </tr>
                                    <tr class="single">
                                        <td colspan="2" class="fontStyle">满意度指数</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageB: function (zone, params) {
            this.templateB(zone);
            this.getDataB(zone, params);
        },
        reanderStyleB: function (zone, decisionColNum) {
            var $tb2 = zone.find('.fourSAnalysis ._tb2');
            var x0y = 150; // 第一行第一列
            var x1y = 100; // 第一行第二列
            var xnyn = 100; // 其它列

            $tb2.find('tr td').css({ "width": xnyn + "px" });
            $tb2.find('tr:nth-child(1) td').css({ "height": "100px" });
            $tb2.find('tr td:nth-child(1)').css({ "width": x0y + "px" });
            $tb2.find('tr td:nth-child(2)').css({ "width": x1y + "px" });
            $tb2.find('tbody > tr > td').css({ "vertical-align": "middle", "text-align": "center" });

            // 计算表宽
            var tableWidth = (decisionColNum * xnyn) + x0y + x1y;
            zone.find('.fourSAnalysis ._tb2').width(tableWidth);
        },
        getDataB: function (zone, params) {
            var $zone = zone;
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData3": {
                            "data": [
                                { "name": "xx部门", "value": [70.5, 78, 69.2, 10, 80.5, 78, 69.2, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98] },
                                { "name": "中心1", "value": [52.8, 79, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 68.2, 26, 41, 34, 33] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心幽幽幽幽幽幽幽幽2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心3", "value": [86.0, 78.5, 67.0, 46.2, 52.8, 79, 68.2, 26, 41, 34, 33, 62.0, 39.2, 98, 55, 44, 32] }
                            ]
                        }
                    });
                }, 500);
            }

            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var decisionColNum = rs.chartData3.data.length;
                var _data = rs.chartData3.data;
                var decisionRowNum = 18; // _data[0].value.length;
                // el行对像数组
                var rows = [];
                for (var i = 1; i < 19; i++) {
                    var row = $zone.find('.fourSAnalysis ._tb2 tbody tr:nth-child(' + i + ') ');
                    rows.push(row);
                }
                // 数据对像数组
                var arrs = [];
                for (var i = 1; i < 19; i++) {
                    var arr = [];
                    arrs.push(arr);
                }
                // 数据最小值和最大值
                var minV = _data[0].value[0];
                var maxV = _data[0].value[0];
                // 必须满足： 每个对像的数据列+标题列 == 固定行数
                if ((_data[0].value.length + 1) == decisionRowNum) {
                    // 标题
                    $.each(_data, function (i, o) {
                        var name = o.name;
                        arrs[0].push(name);
                    });
                    var i = 0;
                    while (i < decisionRowNum) {
                        var j = 0;
                        var temp = [];
                        while (j < decisionColNum) {
                            // 值
                            var v = _data[j].value[i];
                            minV = v < minV ? v : minV;
                            maxV = v > maxV ? v : maxV;
                            temp.push(v);
                            j++;
                        }
                        // 下标0给了标题使用，数据值从1开始
                        arrs[i + 1] = temp;
                        i++;
                    }
                    for (var i = 0; i < decisionRowNum; i++) {
                        var html = "";
                        $.each(arrs[i], function (i, o) {
                            var bgStyle = Tc.getGradient(o, maxV, 18);
                            html += "<td class='" + bgStyle + "'>" + o + "</td>";
                        });
                        rows[i].append(html);
                    }
                }
                fourSAnalysis.reanderStyleB(zone, decisionColNum);
            });

        }
        //------------------------------------------------------------------------------- B
    }
    Tc.FourSAnalysis = jQuery.extend(true, {}, fourSAnalysis);
});
