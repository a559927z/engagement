$(function () {
    var comparedPreviousYearCentre = {
        // ---------------------------------------------------------------------A
        chartOptionA: {
        },
        templateA: function (zone) {
            $(zone).find('.comparedPreviousYearCentre').remove();
            var html = `
                <div class="comparedPreviousYearCentre">
                    <div class="w800">
                        <div class="table-responsive">
                            <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb1" >
                                <thead>
                                    <tr>
                                        <th class="th1" rowspan="2" >组织</th>
                                        <th colspan="2">敬业度指数</th>
                                        <th colspan="2">满意度指数</th>
                                    </tr>
                                    <tr>
                                        <th>年</th>
                                        <th>与 年差值</th>
                                        <th>年</th>
                                        <th>与年差值</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="table-responsive">
                            <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb2" >
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
                        <div class="table-responsive">
                            <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb3" >
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
                            "tableYear": "2017年",
                            "tableDiff": "与2016年差值",
                            "tableData":
                            [
                                [{ "name": "XX部门", "value": 999 }, { "name": "v1", "value": 72.4 }, { "name": "v2", "value": 1.9 }, { "name": "v3", "value": 68.0 }, { "name": "v4", "value": 1.0 }],
                                [{ "name": "中心1", "value": 9999 }, { "name": "v1", "value": 80.8 }, { "name": "v2", "value": -6.4 }, { "name": "v3", "value": 78.0 }, { "name": "v4", "value": -10.6 }],
                                [{ "name": "中心2", "value": 9999 }, { "name": "v1", "value": 72.7 }, { "name": "v2", "value": 5.4 }, { "name": "v3", "value": 70.5 }, { "name": "v4", "value": 2.1 }],
                                [{ "name": "中心3", "value": 9999 }, { "name": "v1", "value": 61.9 }, { "name": "v2", "value": 1.4 }, { "name": "v3", "value": 60.8 }, { "name": "v4", "value": -0.1 }],
                                [{ "name": "中心4", "value": 9999 }, { "name": "v1", "value": 70.8 }, { "name": "v2", "value": 12.5 }, { "name": "v3", "value": 69.4 }, { "name": "v4", "value": 6.5 }]
                            ]
                        },
                        "chartData2": {
                            "tableData":
                            [
                                [{ "name": "XX部门", "value": 999 }, { "name": "3", "value": 72.4 }, { "name": "2", "value": 1.9 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "2", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }],
                                [{ "name": "中心1", "value": 9999 }, { "name": "1", "value": 80.8 }, { "name": "3", "value": -6.4 }, { "name": "3", "value": 80.8 }, { "name": "3", "value": 78.0 }, { "name": "3", "value": -10.6 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }],
                                [{ "name": "中心2", "value": 9999 }, { "name": "3", "value": 72.7 }, { "name": "2", "value": 68.0 }, { "name": "3", "value": 61.9 }, { "name": "3", "value": 1.0 }, { "name": "1", "value": 72.7 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 5.4 }, { "name": "3", "value": 70.5 }, { "name": "3", "value": 2.1 }],
                                [{ "name": "中心3", "value": 9999 }, { "name": "1", "value": 61.9 }, { "name": "3", "value": 1.4 }, { "name": "3", "value": 72.7 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 68.0 }, { "name": "3", "value": 1.0 }, { "name": "3", "value": 60.8 }, { "name": "3", "value": -0.1 }, { "name": "1", "value": 70.5 }],
                                [{ "name": "中心4", "value": 9999 }, { "name": "3", "value": 70.8 }, { "name": "2", "value": 61.9 }, { "name": "3", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "3", "value": 60.8 }, { "name": "1", "value": -0.1 }, { "name": "2", "value": 12.5 }, { "name": "1", "value": 69.4 }, { "name": "2", "value": 6.5 }]
                            ]
                        },
                        "chartData3": {
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
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                // 清空
                $zone.find('.comparedPreviousYearCentre table tbody').empty();
                // table title
                $zone.find('.comparedPreviousYearCentre ._tb1 thead tr:nth-child(2) th:nth-child(1)').html(rs.chartData1.tableYear);
                $zone.find('.comparedPreviousYearCentre ._tb1 thead tr:nth-child(2) th:nth-child(2)').html(rs.chartData1.tableDiff);
                $zone.find('.comparedPreviousYearCentre ._tb1 thead tr:nth-child(2) th:nth-child(3)').html(rs.chartData1.tableYear);
                $zone.find('.comparedPreviousYearCentre ._tb1 thead tr:nth-child(2) th:nth-child(4)').html(rs.chartData1.tableDiff);
                // tb1
                var html = '';
                $.each(rs.chartData1.tableData, function (index, tr) {
                    var trcolor = 'single';
                    if (index % 2 == 1) {
                        trcolor = 'double';
                    };
                    html += "<tr class='" + trcolor + "'>";
                    $.each(tr, function (index2, td) {
                        // 其它列
                        if (td.value != 999 && td.value != 9999) {
                            var diff = '';
                            var v = parseFloat(td.value);
                            // 差值列
                            if (td.name == 'v2' || td.name == 'v4') {
                                diff = Tc.getDiffClass(v);
                                html += "<td class='" + diff + "'>" + v + "</td>";
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
                $zone.find('.comparedPreviousYearCentre ._tb1').append(html);
                // tb2
                var html = '';
                $.each(rs.chartData2.tableData, function (index, tr) {
                    var trcolor = 'single';
                    if (index % 2 == 1) {
                        trcolor = 'double';
                    };
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
                $zone.find('.comparedPreviousYearCentre ._tb2').append(html);
                // tb3
                var html = '';
                $.each(rs.chartData3.tableData, function (index, tr) {
                    var trcolor = 'single';
                    if (index % 2 == 1) {
                        trcolor = 'double';
                    };
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
                $zone.find('.comparedPreviousYearCentre ._tb3').append(html);
            });
        },
        // ---------------------------------------------------------------------A
        // ---------------------------------------------------------------------B
        chartOptionB: {
            color: ['#DCDCDC', '#6B94EC'],
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
                // left: '38%'
                bottom: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        show: true
                    },
                    axisLabel: {
                        rotate: 30
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [{ show: false, }],
            series: [
                {
                    name: '敬业度与2016年差值',
                    type: 'bar',
                    data: [],
                    label: { normal: { show: true, textStyle: { color: '#444' } } }
                },
                {
                    name: '满意度与2016年差值',
                    type: 'bar',
                    data: [],
                    label: { normal: { show: true, textStyle: { color: '#444' } } }
                }
            ]
        },
        templateB: function (zone) {
            $(zone).find('.comparedPreviousYearCentre').remove();
            var html = `
                <div class="comparedPreviousYearCentre">
                    <div class="">
						<div class="w800">
							<div class="content">
								<div id="comparedPreviousYearCentreId" class="chart3 pd-bottom20"></div>
							</div>
						</div>
						<div class="table-responsive ">
							<table border="1" cellspacing="0" cellpadding="0"  class="table table-bordered _tb4" >
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
						<div class="table-responsive">
							<table border="1" cellspacing="0" cellpadding="0"  class="table table-bordered _tb5" >
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
            `;
            zone.append(html);
        },
        reanderPageB: function (zone, params) {
            this.templateB(zone);
            var chart3 = echarts.init($(zone).find('#comparedPreviousYearCentreId').get(0));
            chart3.showLoading();
            chart3.setOption(this.chartOptionB);
            this.getDataB(zone, chart3, params);
        },
        getDataB: function (zone, chart3, params) {
            var _self = this;
            $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData3": {
                            "legend": ["敬业度与2016年差值", "满意度与2016年差值"],
                            "xAxis": ["部门1", "部门2", "部门3", "部门4", "部门5", "部门6", "部门7", "部门8", "部门9", "部门10", "部门11", "部门12"],
                            "list1": [32.0, 4.9, 7.0, 23.2, -125.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                            "list2": [57.0, 4.9, 7.0, 162.2, 32.6, 23.2, -125.6, 76.7, 20.0, 6.4, 135.6],
                        },
                        "chartData4": { "tableData": [[{ "name": "XX部门", "value": 999 }, { "name": "", "value": 72.4 }, { "name": "", "value": 1.9 }, { "name": "", "value": 80.8 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }], [{ "name": "中心1", "value": 9999 }, { "name": "", "value": 80.8 }, { "name": "", "value": -6.4 }, { "name": "", "value": 80.8 }, { "name": "", "value": 78.0 }, { "name": "", "value": -10.6 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }], [{ "name": "中心2", "value": 9999 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "", "value": 5.4 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }], [{ "name": "中心3", "value": 9999 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.4 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 70.5 }], [{ "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }]] },
                        "chartData5": { "tableData": [[{ "name": "XX部门", "value": 999 }, { "name": "", "value": 72.4 }, { "name": "", "value": 1.9 }, { "name": "", "value": 80.8 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }], [{ "name": "中心1", "value": 9999 }, { "name": "", "value": 80.8 }, { "name": "", "value": -6.4 }, { "name": "", "value": 80.8 }, { "name": "", "value": 78.0 }, { "name": "", "value": -10.6 }, { "name": "", "value": 61.9 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }], [{ "name": "中心2", "value": 9999 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.0 }, { "name": "", "value": 72.7 }, { "name": "", "value": 5.4 }, { "name": "", "value": 5.4 }, { "name": "", "value": 70.5 }, { "name": "", "value": 2.1 }], [{ "name": "中心3", "value": 9999 }, { "name": "", "value": 61.9 }, { "name": "", "value": 1.4 }, { "name": "", "value": 72.7 }, { "name": "", "value": 68.0 }, { "name": "", "value": 68.0 }, { "name": "", "value": 1.0 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 70.5 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }], [{ "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "中心4", "value": 9999 }, { "name": "", "value": 70.8 }, { "name": "", "value": 61.9 }, { "name": "", "value": 80.8 }, { "name": "v2", "value": 1.4 }, { "name": "", "value": 60.8 }, { "name": "", "value": -0.1 }, { "name": "", "value": 12.5 }, { "name": "", "value": 69.4 }, { "name": "", "value": 6.5 }, { "name": "", "value": 6.5 }]] },
                    });
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var _list1 = [];
                var _list2 = [];
                var list1 = rs.chartData3.list1;
                var list2 = rs.chartData3.list2;
                $.each(list1, function (index, item) {
                    if (item < 0) {
                        var o = { 'value': item, label: { normal: { position: 'bottom' } } };
                    } else {
                        var o = { 'value': item, label: { normal: { position: 'top' } } };
                    }
                    _list1.push(o);
                });
                $.each(list2, function (index, item) {
                    if (item < 0) {
                        var o = { 'value': item, label: { normal: { position: 'bottom' } } };
                    } else {
                        var o = { 'value': item, label: { normal: { position: 'top' } } };
                    }
                    _list2.push(o);
                });
                chart3.hideLoading();
                chart3.setOption({
                    legend: { data: rs.chartData3.legend },
                    xAxis: [{ data: rs.chartData3.xAxis }],
                    series: [
                        {
                            name: rs.chartData3.legend[0],
                            data: _list1
                        }, {
                            name: rs.chartData3.legend[1],
                            data: _list2
                        }
                    ]
                });
                // tb4
                var html = '';
                $.each(rs.chartData4.tableData, function (index, tr) {
                    html += "<tr>";
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
                $zone.find('.comparedPreviousYearCentre ._tb4').append(html);
                // tb5
                var html = '';
                $.each(rs.chartData5.tableData, function (index, tr) {
                    html += "<tr>";
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
                $zone.find('.comparedPreviousYearCentre ._tb5').append(html);
            });
        }
        // ---------------------------------------------------------------------B
    }
    Tc.ComparedPreviousYearCentre = jQuery.extend(true, {}, comparedPreviousYearCentre);
});
