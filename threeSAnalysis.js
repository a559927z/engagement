$(function () {
    var webRoot = 'http://localhost:8080/code/';
    urls = {
        query1: webRoot + '/json/敬满指数高低矩阵图.json'
    }
    var threeSAnalysis = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
        },
        templateA: function (zone) {
            $(zone).find('.threeSAnalysis').remove();
            var html = `
                <div class="threeSAnalysis">
                    <div class="w800">
                        <div>
                            <div class="table-responsive">
                                <table class="table table-bordered _tb1" >
                                    <thead>
                                        <tr>
                                            <th class="th1">组织</th>
                                            <th class="th1">Say</th>
                                            <th class="th1">我愿意推荐朋友加入这家公司</th>
                                            <th class="th1">我愿意向公司以外的人员宣传在这里工作的好处</th>
                                            <th class="th1">Stay</th>
                                            <th class="th1">我不会轻易离开公司</th>
                                            <th class="th1">我很少考虑“跳槽”</th>
                                            <th class="th1">Strive</th>
                                            <th class="th1">公司能够激励我付出额外的努力，以帮助公司取得成功</th>
                                            <th class="th1">公司能够激励我每天尽力全力工作</th>
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
        getDataA: function (zone, params) {
            var $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "tableData":
                            [
                                [{ "name": "XX部门", "value": 999 }, { "name": "3", "value": 72.4 }, { "name": "2", "value": 1.9 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "2", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }],
                                [{ "name": "中心1", "value": 9999 }, { "name": "1", "value": 80.8 }, { "name": "3", "value": -6.4 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 78.0 }, { "name": "3", "value": -10.6 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }],
                                [{ "name": "中心2", "value": 9999 }, { "name": "3", "value": 72.7 }, { "name": "2", "value": 68.0 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.0 }, { "name": "1", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }],
                                [{ "name": "中心3", "value": 9999 }, { "name": "1", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 72.7 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }, { "name": "1", "value": 70.5 }],
                                [{ "name": "中心4", "value": 9999 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }, { "name": "2", "value": 6.5 }]
                            ]
                        }
                    });
                }, 500);
            }
            fetchData(function (rs) {
                var html = '';
                $.each(rs.chartData1.tableData, function (index, tr) {
                    html += "<tr>";
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
                $zone.find('.threeSAnalysis ._tb1').append(html);
            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        chartOptionB: {},
        templateB: function (zone) {
            $(zone).find('.threeSAnalysis').remove();
            var html = `
                <div class="threeSAnalysis">
                    <div class="w800">
                        <div>
                            <table class="table table-bordered _tb2" >
                                <tbody>
                                    <tr class="_row1">
                                        <td>敬业度指标</td>
                                        <td>项目</td>
                                    </tr>
                                    <tr class="_row2">
                                        <td rowspan="2">Say(乐于宣传)</td>
                                        <td>我愿意推荐朋友加入这家公司</td>
                                    </tr>
                                    <tr class="_row3">
                                        <td>我愿意向公司以外的人员宣传在这里工作的好处</td>
                                    </tr>
                                    <tr class="_row4">
                                        <td rowspan="2">Stay(乐于留任)</td>
                                        <td>我不会轻易离开公司</td>
                                    </tr>
                                    <tr class="_row5">
                                        <td>我很少考虚“跳槽”</td>
                                    </tr>
                                    <tr class="_row6">
                                        <td rowspan="2">Strive(乐于努力)</td>
                                        <td>公司能够激励我付出额外的努力，以帮助公司取得成功</td>
                                    </tr>
                                    <tr class="_row7">
                                        <td>公司能够激励我每天尽全力工作</td>
                                    </tr>
                                    <tr class="_row8">
                                        <td colspan="2">敬业度指数</td>
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
        getDataB: function (zone, params) {
            var $zone = zone;
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData3": {
                            "data": [
                                { "name": "xx部门", "value": [70.5, 78, 69.2, 10, 80.5, 78, 69.2] },
                                { "name": "中心1", "value": [52.8, 79, 68.2, 26, 41, 34, 33] },
                                { "name": "中心2", "value": [63.0, 76.5, 62.0, 39.2, 98, 88, 78] },
                                { "name": "中心3", "value": [86.0, 78.5, 67.0, 46.2, 55, 44, 32] }
                            ]
                        }
                    });
                }, 500);
            }
            fetchData(function (rs) {
                var row1 = $zone.find('.threeSAnalysis table ._row1');
                var row2 = $zone.find('.threeSAnalysis table ._row2');
                var row3 = $zone.find('.threeSAnalysis table ._row3');
                var row4 = $zone.find('.threeSAnalysis table ._row4');
                var row5 = $zone.find('.threeSAnalysis table ._row5');
                var row6 = $zone.find('.threeSAnalysis table ._row6');
                var row7 = $zone.find('.threeSAnalysis table ._row7');
                var row8 = $zone.find('.threeSAnalysis table ._row8');

                var decisionColNum = rs.chartData3.data.length;
                var _data = rs.chartData3.data;
                var decisionRowNum = 8; // _data[0].value.length;
                var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [];
                // var arrs;
                // 必须满足： 每个对像的数据列+标题列 == 固定行数
                if ((_data[0].value.length + 1) == decisionRowNum) {
                    // 标题
                    $.each( _data, function (i, o) {
                        var name = o.name;
                        arr1.push(name);
                    });
                    // arrs.push(arr1);
                    var i = 0;
                    while (i < decisionRowNum) {
                        var j = 0;
                        var temp = [];
                        while (j < decisionColNum) {
                            // 值
                            var v = _data[j].value[i];
                            temp.push(v);
                            console.log(v);
                            j++;
                        }
                        console.log(9999999999);
                        switch (i) {
                            case 0: arr2 = temp;
                            case 1: arr3 = temp;
                            case 2: arr4 = temp;
                            case 3: arr5 = temp;
                            case 4: arr6 = temp;
                            case 5: arr7 = temp;
                            case 6: arr8 = temp;
                        }
                        i++;
                    }
                    for (var i = 0; i < decisionRowNum; i++) {
                        if (i == 0) {
                            var html = '';
                            $.each(arr1, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row1.append(html);
                        }
                        if (i == 1) {
                            var html = '';
                            $.each(arr2, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row2.append(html);
                        }
                        if (i == 2) {
                            var html = '';
                            $.each(arr3, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row3.append(html);
                        }
                        if (i == 3) {
                            var html = '';
                            $.each(arr4, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row4.append(html);
                        }
                        if (i == 4) {
                            var html = '';
                            $.each(arr5, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row5.append(html);
                        }
                        if (i == 5) {
                            var html = '';
                            $.each(arr6, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row6.append(html);
                        }
                        if (i == 6) {
                            var html = '';
                            $.each(arr7, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row7.append(html);
                        }
                        if (i == 7) {
                            var html = '';
                            $.each(arr8, function (i, o) {
                                html += "<td>" + o + "</td>";
                            });
                            row8.append(html);
                        }
                    }
                }
            });
        }
        //------------------------------------------------------------------------------- B
    }
    Tc.ThreeSAnalysis = jQuery.extend(true, {}, threeSAnalysis);
});
