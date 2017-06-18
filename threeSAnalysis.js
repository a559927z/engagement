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
                                        <td>111</td>
                                    </tr>
                                    <tr class="_row2">
                                        <td rowspan="2">Say(乐于宣传)</td>
                                        <td>我愿意推荐朋友加入这家公司</td>
                                        <td>222</td>
                                    </tr>
                                    <tr class="_row3">
                                        <td>我愿意向公司以外的人员宣传在这里工作的好处</td>
                                        <td>333</td>
                                    </tr>
                                    <tr class="_row4">
                                        <td rowspan="2">Stay(乐于留任)</td>
                                        <td>我不会轻易离开公司</td>
                                        <td>4444</td>
                                    </tr>
                                    <tr class="_row5">
                                        <td>我很少考虚“跳槽”</td>
                                        <td>555</td>
                                    </tr>
                                    <tr class="_row6">
                                        <td rowspan="2">Strive(乐于努力)</td>
                                        <td>公司能够激励我付出额外的努力，以帮助公司取得成功</td>
                                        <td>666</td>
                                    </tr>
                                    <tr class="_row7">
                                        <td>公司能够激励我每天尽全力工作</td>
                                        <td>777</td>
                                    </tr>
                                    <tr class="_row8">
                                        <td colspan="2">敬业度指数</td>
                                        <td>888</td>
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
                                { "name": "xx部门", "value": [70.5, 78, 69.2, 80] },
                                { "name": "中心1", "value": [52.8, 79, 68.2, 76] },
                                { "name": "中心2", "value": [63.0, 76.5, 82.0, 69.2] },
                                { "name": "中心3", "value": [86.0, 78.5, 77.0, 76.2] }
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

                // $.each(rs, function (index, item) {
                //     $.each(item, function (name, o) {
                //         row1.append("<td>" + name + "</td>");
                //         $.each(o, function (index2, v) {
                //             row2.appen2d("<td>" +v+"</td>");
                //         });
                //         row2.append();

                //     });
                // });

                var decisionColNum = rs.chartData3.data.length;
                var _data = rs.chartData3.data;
                var decisionRowNum = _data[0].value.length;
                var arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [];
 
                var i = 0;
                while (i < decisionRowNum) {
                    var j = 0;
                    var temp = [];
                    while (j < decisionColNum) {
                        var value = _data[j].value[i];
                        temp.push(value);
                        console.log(value);
                        j++;
                    }
                    console.log(9999999999);
                    switch (i) {
                        case 0: arr1 = temp;
                        case 1: arr2 = temp;
                        case 2: arr3 = temp;
                        case 3: arr4 = temp;
                        case 4: arr5 = temp;
                        case 5: arr6 = temp;
                        case 6: arr7 = temp;
                        case 7: arr8 = temp;
                    }
                    i++;
                }
                console.log(arr1);
            });



        }
        //------------------------------------------------------------------------------- B
    }
    Tc.ThreeSAnalysis = jQuery.extend(true, {}, threeSAnalysis);
});
