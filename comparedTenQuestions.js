$(function () {
    var comparedTenQuestions = {
        chartOptionA: {
            color: ['#6B92ED'],
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
            $(zone).find('.comparedTenQuestions').remove();
            var html = `
                <div class="comparedTenQuestions">
                    <div class="w800">
                        <div class="row _up">
                            <div class="col-md-3">
                                <div class="table-responsive">
                                    <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb1" >
                                        <tr>
                                            <td>上升最快的维度</td>
                                            <td>与上年差值</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <ul class="list-inline">
                                    <li><span class="_tit1"></span></li>
                                </ul>
                                <div id="comparedTenQuestionsId1" class="chart float"></div>
                            </div>
                            <div class="col-md-2">
                                <ul class="list-inline">
                                    <li><span class="_tit2"></span></li>
                                </ul>
                                <ul class="list-group chaVal1"></ul>
                            </div>
                        </div>
                        <div style="clear:both"></div>
                        <div class="row _down">
                            <div class="col-md-3">
                                <div class="table-responsive">
                                    <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb2" >
                                        <tr>
                                            <td>下降最快的维度</td>
                                            <td>与上年差值</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <ul class="list-inline">
                                    <li><span class="_tit1"></span></li>
                                </ul>
                                <div id="comparedTenQuestionsId2" class="chart2 float"></div>
                            </div>
                            <div class="col-md-2">
                                <ul class="list-inline">
                                    <li><span class="_tit2"></span></li>
                                </ul>
                                <ul class="list-group chaVal2"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params) {
            this.templateA(zone);

            var chart1 = echarts.init($(zone).find('#comparedTenQuestionsId1').get(0));
            chart1.showLoading();
            chart1.setOption(this.chartOptionA);

            var chart2 = echarts.init($(zone).find('#comparedTenQuestionsId2').get(0));
            chart2.showLoading();
            chart2.setOption(this.chartOptionA);

            this.getDataA(zone, params, chart1, chart2);
        },
        reanderStyleA: function (zone) {

        },
        getDataA: function (zone, params, chart1, chart2) {
            function fetchData(params, cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "yAxis": ["公司能够激励我每天尽全力工作", "公司能够激励我付出额外的努力，以帮助公司取得成功", "Strive", "我很少考虑“跳槽”", "我不会轻易离开公司", "Stay", "我愿意向公司以外的人员宣传在这里工作的好处", "我愿意推荐朋友加入这家公司", "Say"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420],
                            "chaVal1": {
                                "list1": ["-2.3", "-1", "7.3", "-0.2", "1", "-0.5", "-5.2", "-0.2", "13"]
                            },
                            "table1": [{ "name": "肯定", "value": 14.0 }, { "name": "薪酬", "value": 7.0 }, { "name": "创新", "value": 6.5 }, { "name": "晋升", "value": 4.7 }]
                        },
                        "chartData2": {
                            "yAxis": ["公司能够激励我每天尽全力工作", "公司能够激励我付出额外的努力，以帮助公司取得成功", "Strive", "我很少考虑“跳槽”", "我不会轻易离开公司", "Stay", "我愿意向公司以外的人员宣传在这里工作的好处", "我愿意推荐朋友加入这家公司", "Say"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420],
                            "chaVal2": {
                                "list1": ["-2.3", "-1", "7.3", "-0.2", "1", "-0.5", "-5.2", "-0.2", "13"]
                            },
                            "table2": [{ "name": "客户导向", "value": -13.7 }, { "name": "中干", "value": -9.3 }, { "name": "工作支持", "value": -3.5 }, { "name": "文化价值观", "value": -2.2 }]
                        },
                        "diffYear": 2016
                    });
                }, 1000);
            }
            fetchData({ params: params }, function (rs) {
                if (_.isEmpty(rs)) { return };
                chart1.hideLoading();
                chart2.hideLoading();
                // chartA
                $(zone).find('.comparedTenQuestions ._up ._tit1').text("与" + rs.diffYear + "年相比上升最快的10道题");
                $(zone).find('.comparedTenQuestions ._up ._tit2').text("与" + rs.diffYear + "年差值");
                var html1 = '', html2 = '';
                $(zone).find('.chaVal1').empty();
                chart1.setOption({
                    yAxis: { data: rs.chartData1.yAxis },
                    series: [
                        { data: rs.chartData1.list1 }
                    ]
                });
                $.each(rs.chartData1.chaVal1.list1, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html1 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal1').append(html1);
                var trHtml = '';
                $.each(rs.chartData1.table1, function (i, o) {
                    var diff = Tc.getDiffClass(o.value);
                    trHtml += '<tr><td>' + o.name + '</td><td class="'+diff+'">' + o.value + '</td></tr>';
                });
                $(zone).find(".comparedTenQuestions ._tb1").append(trHtml);

                // chartB
                $(zone).find('.comparedTenQuestions .down ._tit1').text("与" + rs.diffYear + "年相比下降最快的10道题");
                $(zone).find('.comparedTenQuestions .down ._tit2').text("与" + rs.diffYear + "年差值");
                $(zone).find('.chaVal2').empty();
                chart2.setOption({
                    yAxis: { data: rs.chartData2.yAxis },
                    series: [
                        { data: rs.chartData2.list1 }
                    ]
                });
                $.each(rs.chartData2.chaVal2.list1, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html2 += '<li class="list-group-item ' + diff + '">' + item + '</li>';
                });
                $(zone).find('.chaVal2').append(html2);
                var trHtml = '';
                $.each(rs.chartData2.table2, function (i, o) {
                    var diff = Tc.getDiffClass(o.value);
                    trHtml += '<tr><td>' + o.name + '</td><td class="'+diff+'">' + o.value + '</td></tr>';
                });
                $(zone).find(".comparedTenQuestions ._tb2").append(trHtml);
            });
            comparedTenQuestions.reanderStyleA(zone);
        }
    }
    Tc.ComparedTenQuestions = jQuery.extend(true, {}, comparedTenQuestions);
});
