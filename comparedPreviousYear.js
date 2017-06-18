$(function () {
    var comparedPreviousYear = {
        chartOptionA: {
            color: ['#4F81BD', '#C0504D', '#92D050'],
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
            $(zone).find('.comparedPreviousYear').remove();
            var html = `
                <div class="comparedPreviousYear">
                    <div class="w800">
                        <div class="row">
                            <div class="col-md-8">
                                <ul class="list-inline">
                                    <li><span>■</span> <span>赞成百分比</span></li>
                                    <li><span>■</span> <span>中立百分比</span></li>
                                    <li><span>■</span> <span>不赞成百分比</span></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-inline">
                                    <li><span></span><span class="_diffOrganName"></span></li>
                                    <li><span></span><span class="_diffYear"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div>
                            <div id="comparedPreviousYearId1" class="chart float"></div>
                            <div class="float">
                                <ul class="list-group chaVal1"></ul>
                            </div>
                            <div class="float">
                                <ul class="list-group chaVal2"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="w800">
                        <div class="row">
                            <div class="col-md-8">
                                <ul class="list-inline">
                                    <li><span>■</span> <span>赞成百分比</span></li>
                                    <li><span>■</span> <span>中立百分比</span></li>
                                    <li><span>■</span> <span>不赞成百分比</span></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-inline">
                                    <li><span></span><span class="_diffOrganName"></span></li>
                                    <li><span></span><span class="_diffYear"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div>
                            <div id="comparedPreviousYearId2" class="chart float"></div>
                            <div class="float">
                                <ul class="list-group chaVal3"></ul>
                            </div>
                            <div class="float">
                                <ul class="list-group chaVal4"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params) {
            this.templateA(zone);
            
            var chart1 = echarts.init($(zone).find('#comparedPreviousYearId1').get(0));
            chart1.showLoading();
            chart1.setOption(this.chartOptionA);

            var chart2 = echarts.init($(zone).find('#comparedPreviousYearId2').get(0));
            chart2.showLoading();
            chart2.setOption(this.chartOptionA);

            this.getDataA(zone, chart1, chart2);
        },
        getDataA: function (zone, chart1, chart2) {
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "yAxis": ["公司能够激励我每天尽全力工作", "公司能够激励我付出额外的努力，以帮助公司取得成功", "Strive", "我很少考虑“跳槽”", "我不会轻易离开公司", "Stay", "我愿意向公司以外的人员宣传在这里工作的好处", "我愿意推荐朋友加入这家公司", "Say"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420], "list2": [180, 298, 199, 400, 300, 200, 300, 400, 80], "list3": [20, 10, 30, 10, 0, 0, 0, 0, 0],
                            "chaVal1": { 
                                "list1": ["-2.3", "-1", "7.3","-0.2", "1", "-0.5",  "-5.2", "-0.2", "13" ], 
                                "list2": ["-0.2", "1", "-0.5", "-2.3", "-1", "-5.5", "-6.3", "-1", "-0.2"] 
                            }
                        },
                        "chartData2": {
                            "yAxis": ["中干", "直接上级", "薪酬", "协作信任", "文化价值观", "上下沟通", "肯定", "客户导向", "晋升", "公司未来", "工作支持", "福利", "创新", "Job", "Great reward", "Great job", "Great company", "Great boss"],
                            "list1": [300, 192, 271, 90, 200, 300, 200, 100, 420, 180, 298, 199, 400, 300, 200, 300, 400, 80],
                            "list2": [180, 298, 199, 400, 300, 200, 300, 400, 80, 300, 192, 271, 90, 200, 300, 200, 100, 420],
                            "list3": [20, 10, 30, 10, 0, 0, 0, 0, 0, 20, 10, 30, 10, 0, 0, 0, 0, 0],
                            "chaVal2": {
                                "list1": ["-0.2", "-15", "-5.5", "-6.3", "-1", "-0.2", "-0.5", "7.3", "-5.2", "-0.2", "13", "-0.5", "-2.3", "6", "-0.2", "-0.5", "-2.3", "-1"],
                                "list2": ["-0.2", "1", "-0.5", "-2.3", "-1", "-0.2", "25", "-2.3", "-1", "-0.2", "1", "-0.5", "14", "-1", "-0.2", "-0.5", "-2.3", "1"]
                            }
                        },
                        "diffOrganName":"与xxBG差值",
                        "diffYear":"与2017年差值"
                    });
                }, 1000);
            }
            fetchData(function (rs) {
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
                    html1 += '<li class="list-group-item '+diff+'">' + item + '</li>';
                });
                $(zone).find('.chaVal1').append(html1);
                $.each(rs.chartData1.chaVal1.list2, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html2 += '<li class="list-group-item '+diff+'">' + item + '</li>';
                });
                $(zone).find('.chaVal2').append(html2);

                var html1 = '', html2 = '';
                $(zone).find('.chaVal3').empty();
                $(zone).find('.chaVal4').empty();
                chart2.hideLoading();
                chart2.setOption({
                    yAxis: { data: rs.chartData2.yAxis },
                    series: [
                        { data: rs.chartData2.list1 },
                        { data: rs.chartData2.list2 },
                        { data: rs.chartData2.list3 }
                    ]
                });
                $.each(rs.chartData2.chaVal2.list1, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html1 += '<li class="list-group-item '+diff+'">' + item + '</li>';
                });
                $(zone).find('.chaVal3').append(html1);
                $.each(rs.chartData2.chaVal2.list2, function (index, item) {
                    var diff = Tc.getDiffClass(item);
                    html2 += '<li class="list-group-item '+diff+'">' + item + '</li>';
                });
                $(zone).find('.chaVal4').append(html2);
            });
        }
    }

    Tc.ComparedPreviousYear = jQuery.extend(true, {}, comparedPreviousYear);
});
