$(function () {
    var comparedPreviousYearEng = {
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
            $(zone).find('.comparedPreviousYearEng').remove();
             var html = `
                <div class="comparedPreviousYearEng">
                    <div class="w800">`+Tc.tipDiff+`
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
								<div id="comparedPreviousYearEngId1" class="chart float"></div>
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
                        <table border="0" cellspacing="1" cellpadding="0" class="table table-bordered _tb2" >
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
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params, btn) {
            this.templateA(zone);

            var chart1 = echarts.init($(zone).find('#comparedPreviousYearEngId1').get(0));
            chart1.showLoading();
            chart1.setOption(this.chartOptionA);

            this.getDataA(zone, params, chart1, btn);
        },
        reanderStyleA: function (zone, btn) {
            if (btn == "btn1") {
                $(zone).find(".comparedPreviousYearEng .w800").css({ "width": "auto", "overflow": "visible", "overflow-y": "visible" });
            }
        },
        getDataA: function (zone, params, chart1, btn) {
            var $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "yAxis": ["公司能够激励我每天尽全力工作", "公司能够激励我付出额外的努力，以帮助公司取得成功", "Strive", "我很少考虑“跳槽”", "我不会轻易离开公司", "Stay", "我愿意向公司以外的人员宣传在这里工作的好处", "我愿意推荐朋友加入这家公司", "Say"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420], "list2": [180, 298, 199, 400, 300, 200, 300, 400, 80], "list3": [20, 10, 30, 10, 0, 0, 0, 0, 0],
                            "chaVal1": {
                                "list1": ["-2.3", "-1", "7.3", "-0.2", "1", "-0.5", "-5.2", "-0.2", "13"],
                                "list2": ["-0.2", "1", "-0.5", "-2.3", "-1", "-5.5", "-6.3", "-1", "-0.2"]
                            }
                        },
                        "diffOrganName": "与xxBG差值",
                        "diffYear": "与2017年差值",
                        "chartData2": {
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
                    var diff = Tc.getDiffClassB(item);
                    html1 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal1').append(html1);
                $.each(rs.chartData1.chaVal1.list2, function (index, item) {
                    var diff = Tc.getDiffClassB(item);
                    html2 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal2').append(html2);

                // tb2
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
                            diff = Tc.getDiffClassB(v);
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
                $zone.find('.comparedPreviousYearEng ._tb2').append(html);
                comparedPreviousYearEng.reanderStyleA(zone, btn);
            });
        }
    }
    Tc.ComparedPreviousYearEng = jQuery.extend(true, {}, comparedPreviousYearEng);
});
