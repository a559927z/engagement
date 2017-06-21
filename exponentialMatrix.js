$(function () {
    var webRoot = 'http://localhost:8080/code/';
    urls = {
        query1: webRoot + '/json/敬满指数高低矩阵图.json',
        query2: webRoot + '/json/敬满指数高低矩阵图2.json'
    }
    var exponentialMatrix = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
            x1: 40,
            y1: 400,
            drawWithArrowheads: function (ctx, x2, y2) {
                ctx.strokeStyle = "#444";
                ctx.fillStyle = "#444";
                ctx.lineWidth = 1;

                ctx.beginPath();
                ctx.moveTo(this.x1, this.y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();

                var endRadians = Math.atan((y2 - this.y1) / (x2 - this.x1));
                endRadians += ((x2 > this.x1) ? 90 : -90) * Math.PI / 180;
                this.drawArrowhead(ctx, x2, y2, endRadians);
            },
            drawArrowhead: function (ctx, x, y, radians) {
                ctx.save();
                ctx.beginPath();
                ctx.translate(x, y);
                ctx.rotate(radians);
                ctx.moveTo(0, 0);
                ctx.lineTo(5, 20);
                ctx.lineTo(-5, 20);
                ctx.closePath();
                ctx.restore();
                ctx.fill();
            }
        },
        templateA: function (zone) {
            $(zone).find('.exponentialMatrix').remove();
            var html = `
                <div class="exponentialMatrix">
                    <div class="w800">
                        <div>
                            <canvas id="exponentialMatrixId1" width="720" height="450" style=""></canvas>
                            <div class="contentPos">
                                <div class="content">
                                        <div class="col-sm-6"><h4>高敬业度、低满意度</h4><ul class="list-unstyled"></ul></div>
                                        <div class="col-sm-6"><h4>高满意度、高敬业度</h4><ul class="list-unstyled"></ul></div>
                                        <div class="col-sm-6"><h4>低满意度、低敬业度</h4><ul class="list-unstyled"></ul></div>
                                        <div class="col-sm-6"><h4>高满意度、低敬业度</h4><ul class="list-unstyled"></ul></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        drawCoordinate: function (zone) {
            var canvas = $(zone).find("#exponentialMatrixId1").get(0);
            var ctx = canvas.getContext("2d");
            this.chartOptionA.drawWithArrowheads(ctx, 710, 400); //x轴
            this.chartOptionA.drawWithArrowheads(ctx, 41, 10);   //y轴
            ctx.font = "24px serif";
            ctx.fillText("高", 10, 50);
            ctx.fillText("低", 10, 400);
            ctx.fillText("低", 35, 430);
            ctx.fillText("高", 670, 430);
        },
        toChar: function (v) {
            var vs = [];
            for (var i = 0; i < v.length; i++) {
                vs.push(v.substring(i, i + 1));
            }
            return vs;
        },
        reanderPageA: function (zone) {
            this.templateA(zone);
            this.drawCoordinate(zone);
            this.getDataA();
        },
        getDataA: function () {
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        chartData1: {
                            list1: ["中心9（敬业69.6、满意62）", "中心7（敬业69.2、满意61.4）", "中心3（敬业61.9、满意60.8）"],
                            list2: ["中心1（敬业80.8、满意78）", "中心5（敬业79.7、满意80.2）", "中心6（敬业78.5、满意74.1）", "中心8（敬业73.1、满意70.9）", "中心2（敬业72.7、满意70.5）"],
                            list3: ["中心1（敬业80.8、满意78）", "中心5（敬业79.7、满意80.2）", "中心6（敬业78.5、满意74.1）", "中心8（敬业73.1、满意70.9）", "中心2（敬业72.7、满意70.5）"],
                            list4: ["中心9（敬业69.6、满意62）", "中心7（敬业69.2、满意61.4）", "中心3（敬业61.9、满意60.8）"]
                        },
                        v1: "72.4",
                        v2: "80.0"
                    });
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var data = rs.chartData1;
                if (data.list1.length > 0) {
                    var ul = $('.exponentialMatrix .content div:nth-child(1) ul');
                    ul.empty();
                    var html = '';
                    $.each(data.list1, function (i, o) {
                        html += '<li class="item"><p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;' + o + '</p></li>';
                    });
                    ul.append(html);
                }
                if (data.list2.length > 0) {
                    var ul = $('.exponentialMatrix .content div:nth-child(2) ul');
                    ul.empty();
                    var html = '';
                    $.each(data.list2, function (i, o) {
                        html += '<li class="item"><p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;' + o + '</p></li>';
                    });
                    ul.append(html);
                }
                if (data.list3.length > 0) {
                    var ul = $('.exponentialMatrix .content div:nth-child(3) ul');
                    ul.empty();
                    var html = '';
                    $.each(data.list3, function (i, o) {
                        html += '<li class="item"><p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;' + o + '</p></li>';
                    });
                    ul.append(html);
                }
                if (data.list4.length > 0) {
                    var ul = $('.exponentialMatrix .content div:nth-child(4) ul');
                    ul.empty();
                    var html = '';
                    $.each(data.list4, function (i, o) {
                        html += '<li class="item"><p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right"></span>&nbsp;&nbsp;&nbsp;&nbsp;' + o + '</p></li>';
                    });
                    ul.append(html);
                }
                var canvas = document.getElementById("exponentialMatrixId1");
                var ctx = canvas.getContext("2d");
                ctx.font = "18px serif";
                ctx.fillStyle = "red";
                ctx.fillText("满意度均" + rs.v2, 280, 420);

                // var vs = toChar(rs.v1);
                var vs = [rs.v1];
                var txt = ["敬", "业", "度", "均"];
                var txtvs = txt.concat(vs);
                var j = 150;
                for (var i = 0; i < txtvs.length; i++) {
                    ctx.fillText(txtvs[i], 20, j);
                    j = j + 20;
                }
            });

        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        chartOptionB: {
            color: ['#CC706E', '#9BBB51'],
            legend: {
                data: ['低敬业度，低满意度人群', '高敬业度，高满意度人群'],
                left: 'center'
            },
            xAxis: [
                {
                    type: 'value',
                    scale: true,
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: '低敬业度，低满意度人群',
                    type: 'scatter',
                    data: [],
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            }
                        },
                        data: [[{
                            name: '低敬业度，低满意度人群',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]]
                    }
                },
                {
                    name: '高敬业度，高满意度人群',
                    type: 'scatter',
                    data: [],
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    markArea: {
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 1,
                                borderType: 'dashed'
                            }
                        },
                        data: [[{
                            name: '高敬业度，高满意度人群',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]]
                    }

                }
            ]
        },
        templateB: function (zone) {
            $(zone).find('.exponentialMatrix').remove();
            var html = `
                <div class="exponentialMatrix">
                    <div class="w800">
                        <div>
                            <div id="exponentialMatrixId2" class="chart3"></div>
                        </div>
                    </div>
                </div>
            `;
            zone.append(html);
        },
        reanderPageB: function (zone) {
            this.templateB(zone);
            var chart3 = echarts.init(document.getElementById('exponentialMatrixId2'));
            chart3.showLoading();
            chart3.setOption(this.chartOptionB);
            this.getDataB(zone, chart3);
        },
        getDataB: function (zone, chart3) {
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        chartData3: {
                            list1: [
                                { name: '部门1', value: [161.2, 51.6] },
                                { name: '部门2', value: [170.0, 59.0] },
                                { name: '部门24', value: [172.5, 55.2] },
                                { name: '部门4', value: [147.2, 49.8] },
                                { name: '部门5', value: [160.0, 55.4] },
                                { name: '部门6', value: [167.6, 64.5] },
                                { name: '部门20', value: [175.3, 63.6] },
                                { name: '部门8', value: [174.0, 73.6] },
                                { name: '部门21', value: [156.2, 60.0] },
                                { name: '部门10', value: [169.5, 67.3] },
                            ],
                            list2: [
                                { name: '部门11', value: [174.0, 80.0] },
                                { name: '部门12', value: [176.5, 82.3] },
                                { name: '部门13', value: [180.3, 73.6] },
                                { name: '部门14', value: [167.6, 74.1] },
                                { name: '部门15', value: [188.0, 85.9] },
                                { name: '部门16', value: [180.3, 73.2] },
                                { name: '部门17', value: [170.2, 62.3] },
                                { name: '部门18', value: [177.8, 82.7] },
                                { name: '部门19', value: [179.1, 79.1] },
                                { name: '部门5', value: [190.5, 98.2] },
                                { name: '部门22', value: [177.8, 84.1] },
                                { name: '部门23', value: [180.3, 83.2] },
                                { name: '部门3', value: [180.3, 83.2] }
                            ],
                        },
                    });
                }, 1000);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                chart3.hideLoading();
                chart3.setOption({
                    series: [
                        { data: rs.chartData3.list1 },
                        { data: rs.chartData3.list2 }
                    ]
                });
            });
        },
              
        //------------------------------------------------------------------------------- B
    }

    Tc.ExponentialMatrix = jQuery.extend(true, {}, exponentialMatrix);
});
