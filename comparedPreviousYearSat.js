$(function () {
    var comparedPreviousYearSat = {
        chartOptionA: {
            color: ['#6B94EC', '#DCDCDC', '#5EC8BE'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                right: '0%',
                bottom: '3%',
                top: '0',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min: 0,
                // max: 520,
                splitLine: false,
                axisLine: false
            },
            yAxis: {
                type: 'category',
                axisTick: false,
                axisLine: { lineStyle: { width: 0 } },
                data: []
            },
            series: [
                {
                    type: 'bar',
                    stack: '1',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    barWidth: 30,
                    data: []
                },
                {
                    type: 'bar',
                    stack: '1',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: []
                },
                {
                    type: 'bar',
                    stack: '1',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: []
                }
            ]
        },
        templateA: function (zone) {
            $(zone).find('.comparedPreviousYearSat').remove();
             var html = `
                <div class="comparedPreviousYearSat">
                    <div class="w800">
<div class="content">
                        <div class="row">
                            <div class="col-md-8">
                                <ul class="list-inline">
                                    <li><span>■</span> <span>赞成百分比</span></li>
                                    <li><span>■</span> <span>中立百分比</span></li>
                                    <li><span>■</span> <span>不赞成百分比</span></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-inline rUl">
                                    <li><span></span><span class="_diffOrganName"></span></li>
                                    <li><span></span><span class="_diffYear"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div>
                            <div id="comparedPreviousYearSatId1" class="chart float"></div>
                            <div class="float">
                                <ul class="list-group chaVal1"></ul>
                            </div>
                            <div class="float">
                                <ul class="list-group chaVal2"></ul>
                            </div>
                        </div>
</div>
                    </div>
                    <div style = "clear: both;"></div>
                        <div class="table-responsive">
                            <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb2" >
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
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params, btn) {
            this.templateA(zone);

            var chart1 = echarts.init($(zone).find('#comparedPreviousYearSatId1').get(0));
            chart1.showLoading();
            chart1.setOption(this.chartOptionA);

            this.getDataA(zone, params, chart1, btn);
        },
        reanderStyleA: function (zone, btn) {
            if (btn == "btn1") {
                $(zone).find(".comparedPreviousYearSat .w800").css({ "width": "auto", "overflow": "visible", "overflow-y": "visible" });
            }
        },
        getDataA: function (zone, params, chart1, btn) {
            var $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "yAxis": ["中干", "直接上级", "薪酬", "协作信任", "文化价值观", "上下沟通", "肯定", "客户导向", "晋升", "公司未来", "工作支持", "福利", "创新", "Job", "Great reward", "Great job", "Great company", "Great boss"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420, 180, 298, 199, 400, 300, 200, 300, 400, 80],
                            "list2": [180, 298, 199, 400, 300, 200, 300, 400, 80, 300, 192, 271, 90, 200, 300, 200, 100, 420],
                            "list3": [20, 10, 30, 10, 0, 0, 0, 0, 0, 20, 10, 30, 10, 0, 0, 0, 0, 0],
                            "chaVal1": {
                                "list1": ["-0.2", "-15", "-5.5", "-6.3", "-1", "-0.2", "-0.5", "7.3", "-5.2", "-0.2", "13", "-0.5", "-2.3", "6", "-0.2", "-0.5", "-2.3", "-1"],
                                "list2": ["-0.2", "1", "-0.5", "-2.3", "-1", "-0.2", "25", "-2.3", "-1", "-0.2", "1", "-0.5", "14", "-1", "-0.2", "-0.5", "-2.3", "1"]
                            }
                        },
                        "diffOrganName": "与xxBG差值",
                        "diffYear": "与2017年差值",
                        "chartData2": {
                            "tableData":
                            [
                                [{ "name": "XX部门", "value": 999 }, { "name": "", "value": 72.4 }, { "name": "", "value": 1.9 }, { "name": "", "value": 80.8 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "", "value": -6.8 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }],
                                [{ "name": "中心1", "value": 9999 }, { "name": "", "value": 80.8 }, { "name": "", "value": -6.4 }, { "name": "", "value": 80.8 }, { "name": "", "value": 78.0 }, { "name": "", "value": -10.6 }, { "name": "", "value": 61.9 }, { "name": "", "value": 36 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }],
                                [{ "name": "中心2", "value": 9999 }, { "name": "", "value": 50.8 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "", "value": 5.4 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }],
                                [{ "name": "中心3", "value": 9999 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.4 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 70.5 }, { "name": "", "value": 51 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }],
                                [{ "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }]
                            ]
                        }
                    });
                }, 1000);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                chart1.hideLoading();
                $(zone).find('._diffOrganName').text(rs.diffOrganName);
                $(zone).find('._diffYear').text(rs.diffYear);
                var html1 = '', html2 = '';
                $(zone).find('.chaVal1').empty();
                $(zone).find('.chaVal2').empty();
                chart1.setOption({
                    yAxis: { data: rs.chartData1.yAxis },
                    series: [
                        { data: rs.chartData1.list1 },
                        { data: rs.chartData1.list2 },
                        { data: rs.chartData1.list3 }
                    ]
                });
                $.each(rs.chartData1.chaVal1.list1, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html1 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal1').append(html1);
                $.each(rs.chartData1.chaVal1.list2, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html2 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal2').append(html2);

                // tb3
                var html = '';
                $.each(rs.chartData2.tableData, function (index, tr) {
                    var trcolor = 'single';
                    if (index % 2 == 1) {
                        trcolor = 'double';
                    }
                    html += "<tr class='" + trcolor + "'>";
                    $.each(tr, function (index2, td) {
                        // 其它列
                        if (td.value != 999 && td.value != 9999) {
                            var diff = '';
                            var v = parseFloat(td.value);
                            diff = Tc.getDiffClass(v);
                            html += "<td class='" + diff + "'>" + v + "</td>";
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
                $zone.find('.comparedPreviousYearSat ._tb2').append(html);
                comparedPreviousYearSat.reanderStyleA(zone, btn);
            });
        }
    }
    Tc.ComparedPreviousYearSat = jQuery.extend(true, {}, comparedPreviousYearSat);
});
