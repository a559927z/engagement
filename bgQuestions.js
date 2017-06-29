$(function () {
    var webRoot = 'http://localhost:8080/code/';
    var urls = {
        query1: webRoot + '/json/xxx.json'
    }
    var bgQuestions = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
        },
        templateA: function () {
            var html = `
                <div class="bgQuestions">
                    <div class="w800">
                        <div class="_content">
                            <div class="table-responsive">
                                <table border="0" cellspacing="1" cellpadding="0" class="table table-bordered _tb1">
                                    <thead>
                                        <tr>
                                            <th class="th1">自定义问题</th>
                                            <th class="th1">所属维度</th>
                                            <th class="th1"></th>
                                            <th class="th1"></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            return html;
        },
        reanderPageA: function (zone, params) {
            $(zone).find('.bgQuestions').remove();
            var contentHtml = this.templateA();
            zone.append(contentHtml);
            this.getDataA(zone, params);
        },
        reanderStyleA: function (zone, colNum) {
            var $tb1 = zone.find('.bgQuestions table');
            var x0y = 550; // 第一行第一列
            var xnyn = 80; // 其它列

            $tb1.find('tr td').css({ "width": xnyn + "px" });
            $tb1.find('tr td:nth-child(1)').css({ "width": x0y + "px" });
            $tb1.find('tbody > tr > td').css({ "vertical-align": "middle", "text-align": "center" });
            $tb1.find('thead > tr > th').css({ "vertical-align": "middle", "text-align": "center" });
            // 计算表宽(如果要内滚必须计算宽度)
            var tableWidth = (colNum * xnyn) + x0y;
            $tb1.width(tableWidth);
        },
        getDataA: function (zone, params) {
            var $zone = $(zone);
            function fetchData(cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "name": "xxx部门", "year": 2016, "value": [
                                ["我所在团队创建了良好的机制、流程或氛围以激发或支持员工不断创新", "创建-BG", "64.0", "0.9"],
                                ["我对所在团队的未来发展有信心", "公司未来-BG", "64.8", "-4.4"],
                                ["当进行业务、组织或核心人员调整时，我所在团队的管理者会与员工清晰地说明相应的背景及原因", "变革管理-BG", "67.4", "-2.3"],
                                ["当我所在团队发生了调整或变化时，我能得到有效的支持和帮助去适应这种改变", "变革管理-BG", "66.4", "-3.7"],
                                ["在过去的一年里，我所在的团队进行了有效的业务、组织或核心人员的调整，以提升整体战斗力及市场竞争力", "变革管理-BG", "64.7", "-2.9"],
                            ]
                        }
                    });
                }, 500);
            }
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var data = rs.chartData1.value;
                var html = '';
                var i = 0;
                var $tb = $(zone).find('.bgQuestions ._content table');
                $tb.find("tr th:nth-child(3)").text(rs.chartData1.name);
                $tb.find("tr th:nth-child(4)").text('与' + rs.chartData1.year + "年差值");
                while (i < data.length) {
                    var trcolor = 'single';
                    if (i % 2 == 1) {
                        trcolor = 'double';
                    }
                    var trtd = '<tr class="' + trcolor + '">';

                    $.each(data[i], function (index, o) { trtd += '<td>' + o + '</td>'; });
                    trtd += '</tr>';
                    $tb.find("tbody").append(trtd);
                    i++;
                }
                bgQuestions.reanderStyleA(zone, 4);

            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        //------------------------------------------------------------------------------- B
    }
    Tc.BgQuestions = jQuery.extend(true, {}, bgQuestions);
});
