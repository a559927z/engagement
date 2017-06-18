$(function () {
    var webRoot = 'http://localhost:8080/code/';
    urls = {
        query1: webRoot + '/json/敬满指数排名总览.json',
        query2: webRoot + '/json/敬满指数排名总览2.json'
    }
    var indexRankingOverview = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
            color: ['#4F81BD'],
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
                left:'38%'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        rotate: 30
                    },
                    axisTick: false
                }
            ],
            yAxis: [{ show: false, }],
            series: [
                {
                    name: '',
                    type: 'bar',
                    data: [],
                    label: { normal: { show: true, position: 'insideTop' } },
                    markLine: {
                        symbolSize: [0, 0],
                        itemStyle: {
                            normal: {
                                color: 'red',
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
        },
        templateA: function (zone) {
            $(zone).find('.indexRankingOverview').remove();
            var html = `
                <div class="indexRankingOverview">
                    <div class="w800">
                        <div>
                            <div id="indexRankingOverviewId1" class="chart1"></div>
                            <div id="indexRankingOverviewLine1" class="linePos1"></div>

                            <div id="indexRankingOverviewId2" class="chart2"></div>
                            <div id="indexRankingOverviewLine2" class="linePos2"></div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageA: function (zone) {
            this.templateA(zone);
            var chart1 = echarts.init($(zone).find('#indexRankingOverviewId1').get(0));
            chart1.showLoading();
            var copyOption1 = jQuery.extend(true, {}, this.chartOptionA);
            chart1.setOption(copyOption1);

            var chart2 = echarts.init($(zone).find('#indexRankingOverviewId2').get(0));
            var copyOption2 = jQuery.extend(true, {}, this.chartOptionA);
            chart2.setOption(copyOption2);


            this.getDataA(zone, chart1, chart2);
        },
        reanderLineA: function (zone, t) {

            $(zone).find("#indexRankingOverviewLine1").empty();
            $(zone).find("#indexRankingOverviewLine2").empty();
            $(zone).find("#indexRankingOverviewLine1").append("<div class='line'></div><div class='title'>" + t + "</div>");
            $(zone).find("#indexRankingOverviewLine2").html("<div class='line'></div><div class='title'>" + t + "</div>");
        },
        getDataA: function (zone, chart1, chart2) {
            var _self = this;
            /*
            $.get(urls.query1, function (rs) {
                _self.reanderLineA(zone, rs.organName);
                chart1.hideLoading();
                chart1.setOption({
                    legend: { data: [rs.chartData1.legend] },
                    xAxis: [{ data: rs.chartData1.xAxis }],
                    series: [
                        {
                            name: rs.chartData1.legend,
                            data: rs.chartData1.list1,
                            markLine: { data: [{ yAxis: rs.chartData1.markLine }] }
                        }
                    ]
                });
                chart2.hideLoading();
                chart2.setOption({
                    legend: { data: [rs.chartData2.legend] },
                    xAxis: [{ data: rs.chartData2.xAxis }],
                    series: [
                        {
                            name: rs.chartData2.legend,
                            data: rs.chartData2.list1,
                            markLine: { data: [{ yAxis: rs.chartData2.markLine }] }
                        }
                    ]
                });
            });
            */
            function fetchData(cb) {
                // 通过 setTimeout 模拟异步加载
                setTimeout(function () {
                    cb({
                        chartData1: {
                            legend: '2017敬业度',
                            xAxis: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7', '部门8', '部门9', '部门10', '部门11', '部门12'],
                            list1: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                            markLine: 74
                        },
                        chartData2: {
                            legend: '2017满意度',
                            xAxis: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7', '部门8', '部门9', '部门10', '部门11', '部门12'],
                            list1: [1.0, 4.9, 7.0, 23.2, 180.6, 76.5, 35.6, 162.2, 32.6, 20.0, 6.4, 1.3],
                            markLine: 70.6
                        },
                        "organName": "XXBG"
                    });
                }, 1000);
            }
            fetchData(function (rs) {
                _self.reanderLineA(zone, rs.organName);
                chart1.hideLoading();
                chart1.setOption({
                    legend: { data: [rs.chartData1.legend] },
                    xAxis: [{ data: rs.chartData1.xAxis }],
                    series: [
                        {
                            name: rs.chartData1.legend,
                            data: rs.chartData1.list1,
                            markLine: { data: [{ yAxis: rs.chartData1.markLine }] }
                        }
                    ]
                });
                chart2.hideLoading();
                chart2.setOption({
                    legend: { data: [rs.chartData2.legend] },
                    xAxis: [{ data: rs.chartData2.xAxis }],
                    series: [
                        {
                            name: rs.chartData2.legend,
                            data: rs.chartData2.list1,
                            markLine: { data: [{ yAxis: rs.chartData2.markLine }] }
                        }
                    ]
                });
            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        chartOptionB: {
            color: ['#4F81BD', '#FF2626'],
            legend: {
                data: ['敬业度指数', '满意度指数'],
                bottom: 'left',
                left: '10%'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        rotate: 30
                    },
                    axisTick: false
                }
            ],
            yAxis: [
                { show: false },
                { show: false }
            ],
            series: [
                {
                    name: '敬业度指数',
                    type: 'bar',
                    data: [],
                    label: { normal: { show: true, position: 'insideTop' } },
                    markLine: {
                        symbolSize: [0, 0],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    type: 'solid'
                                }
                            }
                        },
                        data: []
                    }
                },
                {
                    name: '满意度指数',
                    type: 'line',
                    yAxisIndex: 1,
                    data: []
                }
            ]
        },
        templateB: function (zone) {
            $(zone).find('.indexRankingOverview').remove();
            var html = `
                <div class="indexRankingOverview">
                    <div class="w800">
                        <div>
                            <div id="indexRankingOverviewId3" class="chart3"></div>
                            <div id="indexRankingOverviewLine3" class="linePosB"></div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageB: function (zone) {
            this.templateB(zone);
            var chart3 = echarts.init($(zone).find('#indexRankingOverviewId3').get(0));
            chart3.showLoading();
            chart3.setOption(this.chartOptionB);
            this.getDataB(zone, chart3);
        },
        reanderLineB: function (zone, t) {
            $(zone).find("#indexRankingOverviewLine3")
                .html(
                "<ul class='list-inline lineB'>                 "+
                "    <li><div></div><div>" + t +"敬业度</div></li>"+
	            "    <li><div></div><div>" + t +"满意度</div></li>"+
	            "    <li><div></div><div>公司敬业度</div></li>   "+
	            "    <li><div></div><div>公司满意度</div></li>   "+
                "</ul>"
                );
        },
        getDataB: function (zone, chart3) {
            var _self = this;
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        chartData3: {
                            xAxis: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7', '部门8', '部门9', '部门10', '部门11', '部门12'],
                            list1: [135.6, 162.2, 136.7, 132.6, 123.2, 125.6, 120.0, 106.4, 102.0, 94.9, 92.0, 90.3],
                            list2: [122.0, 152.2, 113.3, 114.5, 111.3, 110.2, 90.3, 83.4, 73.0, 76.5, 82.0, 69.2],
                            "markLine1": 100,
                            "markLine2": 90,
                            "markLine3": 70,
                            "markLine4": 110,
                            organName: 'XXBG'
                        },
                    });
                }, 1000);
            }
            fetchData(function (rs) {
                _self.reanderLineB(zone, rs.chartData3.organName);
                chart3.hideLoading();
                chart3.setOption({
                    xAxis: [{ data: rs.chartData3.xAxis }],
                    series: [
                        {
                            data: rs.chartData3.list1,
                             markLine : {
                                data: [
                                    {
                                        yAxis: rs.chartData3.markLine1,
                                        itemStyle: { normal: { color:'#9BBB59'}}
                                    },
                                    {
                                        yAxis: rs.chartData3.markLine2,
                                        itemStyle: { normal: { color: '#A894BF' } }
                                    },
                                    {
                                        yAxis: rs.chartData3.markLine3,
                                        itemStyle: { normal: { color: '#83C6D8' } }
                                    },
                                    {
                                        yAxis: rs.chartData3.markLine4,
                                        itemStyle: { normal: { color: '#F79646' } }
                                    },
                                ]
                            }
                        },
                        { data: rs.chartData3.list2 },
                    ]
                });
            });
        },
        //------------------------------------------------------------------------------- B
    }

    Tc.IndexRankingOverview = jQuery.extend(true, {}, indexRankingOverview);
});
