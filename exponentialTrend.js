$(function () {
    var webRoot = 'http://localhost:8080/code/';
    urls = {
        query1: webRoot + '/json/敬满指数高低矩阵图.json'
    }
    var exponentialTrend = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
            color: ['#DCDCDC', '#4879DF', '#5ACC8E', '#FFD65A'],
            legend: {
                data: ['敬业度', '满意度', '上级组织敬业度', '上级组织满意度'],
                left:'100'
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
                    axisTick: false
                }
            ],
            yAxis: [
                { show: true },
                { show: false }
            ],
            series: [
                {
                    name: '敬业度',
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
                    name: '满意度',
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
                    name: '上级组织敬业度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: []
                },
                {
                    name: '上级组织满意度',
                    type: 'line',
                    yAxisIndex: 1,
                    data: []
                }
            ]
        },
        templateA: function (zone) {
            $(zone).find('.exponentialTrend').remove();
            var html = `
                <div class="exponentialTrend">
                    <div class="w800">
                        <div>
                            <div id="exponentialTrendId" class="chart1"></div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageA: function (zone, params) {
            this.templateA(zone);
            var chart1 = echarts.init($(zone).find('#exponentialTrendId').get(0));
            chart1.showLoading();
            chart1.setOption(this.chartOptionA);
            this.getDataA(chart1);
        },
        getDataA: function (chart1) {
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        chartData1: {
                            "xAxis": [
                                "2014",
                                "2015",
                                "2016",
                                "2017"
                            ],
                            "list1": [
                                70.5,
                                78,
                                69.2,
                                80
                            ],
                            "list2": [
                                72.8,
                                79,
                                68.2,
                                76
                            ],
                            "list3": [
                                73.0,
                                76.5,
                                82.0,
                                69.2
                            ],
                            "list4": [
                                76.0,
                                78.5,
                                77.0,
                                76.2
                            ]
                        }
                    });
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                chart1.hideLoading();
                chart1.setOption({
                    xAxis: [{ data: rs.chartData1.xAxis }],
                    series: [
                        { data: rs.chartData1.list1 },
                        { data: rs.chartData1.list2 },
                        { data: rs.chartData1.list3 },
                        { data: rs.chartData1.list4 }
                    ]
                });
            });
        },
        //------------------------------------------------------------------------------- A
    }
    Tc.ExponentialTrend = jQuery.extend(true, {}, exponentialTrend);
});
