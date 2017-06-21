$(function () {
    var webRoot = 'http://localhost:8080/code/';
    var urls = {
        query1: webRoot + '/json/xxx.json'
    }
    var keyFactor = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
        },
        templateA: function () {
            var html = `
                <div class="keyFactor">
                    <div class="w800">
                        <div class="_content">
                            <div class="table-responsive">
                                <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb1">
                                    <thead>
                                        <tr>
                                            <th class="th1">关键驱动因素问题</th>
                                            <th class="th1">所属纬度</th>
                                            <th class="th1">关联系数</th>
                                            <th class="th1"></th>
                                            <th class="th1">与BG差值</th>
                                            <th class="th1"></th>
                                            <th class="th1">最低分项目</th>
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
            $(zone).find('.keyFactor').remove();
            var contentHtml = this.templateA();
            zone.append(contentHtml);
            this.getDataA(zone, params);
        },
        reanderStyleA: function (zone, colNum) {
            var $tb1 = zone.find('.keyFactor table');
            var x0y = 500; // 第一行第一列
            var xnyn = 75; // 其它列

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
            function fetchData(params, cb) {
                setTimeout(function () {
                    cb({
                        "chartData1": {
                            "name": "xxx部门",
                            "year": 2016,
                            "value": [
                                ["我在公司得到了良好的个人成长与职业发展机会", "晋升",0.74,59.9,-2.2,2.6, "是", "是"],
                                ["我的工作让我有成感", "job",0.72,53.6,-4.8,-1.6, "是", "是"],        
                                ["对于我的工作成绩，我能够获得除薪酬以外的肯定（如绩效反馈、认可、即时激励等）", 0.72,66.0,-1.1,14.0,-4.5, "", "是"],                
                                ["我所在的事业群、系统具有不断追求创新的动力和意愿", "创新", 0.7, 78.4, -2.1, -15.6, "", ""],
                                ["我们部门能够保留住优秀人才", "人才管理", 0.65, 52.7, -0.8, 5.3, "是", "是"]
                                ]
                        }
                    });
                }, 500);
            }
            fetchData({ params: params }, function (rs) {
                if (_.isEmpty(rs)) { return };
                var data = rs.chartData1.value;
                var html = '';
                var i = 0;
                var $tb = $(zone).find('.keyFactor ._content table');
                $tb.find("tr th:nth-child(4)").text(params.year);
                $tb.find("tr th:nth-child(6)").text('与' + rs.chartData1.year + "年差值");
                $tb.find("tr th:nth-child(8)").text('是否' + rs.chartData1.year + "KDA");
                while (i < data.length) {
                    var trtd = '<tr>';
                    $.each(data[i], function (index, o) {
                        if (typeof (o) == 'number' && (index == 4 || index == 5)) {
                            var diff = '';
                            var v = parseFloat(o);
                            diff = Tc.getDiffClass(v);
                            trtd += "<td class='" + diff + "'>" + v + "</td>";
                        } else {
                            trtd += '<td>' + o + '</td>';
                        }
                    });
                    trtd += '</tr>';
                    $tb.find("tbody").append(trtd);
                    i++;
                }
                keyFactor.reanderStyleA(zone, 8);
            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        //------------------------------------------------------------------------------- B
    }
    Tc.KeyFactor = jQuery.extend(true, {}, keyFactor);
});
