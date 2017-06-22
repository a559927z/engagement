$(function () {
    var webRoot = 'http://localhost:8080/code/';
    var urls = {
        query1: webRoot + '/json/xxx.json'
    }
    var underlingTeamAnalysis = {
        //------------------------------------------------------------------------------- A
        chartOptionA: {
        },
        templateA: function () {
            var html = `
                <div class="underlingTeamAnalysis">
                    <div class="w800">
                        <div class="_content">
                        </div>
                    </div>
                </div>
            `;
            return html;
        },
        templateTableA: function (flag) {
            var html =
                `
            <div class="table-responsive `+ flag + `">
                <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb1">
                    <thead>
                        <tr>
                            <th rowspan="2" class="th1"></th>
                            <th colspan="2" class="th1">Say（乐于宣传）</th>
                            <th colspan="2" class="th1">Stay（乐于留任）</th>
                            <th colspan="2" class="th1">Strive（乐于努力）</th>
                        </tr>
                        <tr>
                            <th class="th1">我愿意推荐朋友加入这家公司</th>
                            <th class="th1">我愿意向公司以外的人员宣传在这里工作的好处</th>
                            <th class="th1">我不会轻易离开公司</th>
                            <th class="th1">我很少考虑“跳槽”</th>
                            <th class="th1">公司能够激励我付出额外的努力，以帮助公司取得成功</th>
                            <th class="th1">公司能够激励我每天尽全力工作</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <div class="detail _d1"></div>
            </div>
            <div class="table-responsive `+ flag + `">
                <table border="1" cellspacing="0" cellpadding="0" class="table table-bordered _tb2" >
                    <thead>
                        <tr>
                            <th rowspan="2" class="th1"></th>
                            <th colspan="3" class="th1">Great Great Boss</th>
                            <th class="th1">Great job</th>
                            <th colspan="4" class="th1">Great Reward</th>
                            <th colspan="8" class="th1">Great Company</th>
                        </tr>
                        <tr>
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
                <div class="detail _d2"></div>
            </div>
            `;
            return html;
        },
        reanderPageA: function (zone, params) {
            $(zone).find('.underlingTeamAnalysis').remove();
            var contentHtml = this.templateA();
            zone.append(contentHtml);

            this.getDataA(zone, params);
        },
        reanderStyleA: function (zone, colNum) {
            var $tb1 = zone.find('.underlingTeamAnalysis table');
            var x0y = 150; // 第一行第一列
            var xnyn = 90; // 其它列

            $tb1.find('tr td').css({ "width": xnyn + "px" });
            $tb1.find('tr td:nth-child(1)').css({ "width": x0y + "px" });
            $tb1.find('tbody > tr > td').css({ "vertical-align": "middle", "text-align": "center" });
            $tb1.find('.dept').css({ "text-align": "left" });
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
                        "jyData": {
                            "parent": { "name": "xxx部门", "value": [12, 33, 42, 32, 34, 34] },
                            "childs":
                            [
                                { "name": "中心1", "value": [43, 3, 11, 45, 4, 2] },
                                { "name": "中心2", "value": [53, 3, 3, 3, 4, 2] },
                                { "name": "中心3", "value": [43, 3, 3, 4, 1, 2] },
                                { "name": "中心4", "value": [3, 3, 3, 4, 1, 2] },
                                { "name": "中心5", "value": [43, 3, 3, 3, 1, 2] },
                                { "name": "中心6", "value": [43, 3, 3, 3, 4, 2] },
                                { "name": "中心7", "value": [43, 3, 33, 4, 1, 2] },
                                { "name": "中心8", "value": [43, 3, 3, 4, 1, 2] }
                            ]
                        },
                        "myData": {
                            "parent": { "name": "xxx部门", "value": [3, 1, 2, 34, 2, 34, 43, 3, 3, 3, 4, 1, 2, 34, 2, 34] },
                            "childs":
                            [
                                { "name": "中心1", "value": [43, 3, 3, 4, 1, 2, 34, 2, 34, 43, 3, 3, 3, 4, 1, 2] },
                                { "name": "中心2", "value": [43, 3, 3, 4, 1, 2, 34, 2, 34, 43, 3, 3, 2, 34, 2, 34] },
                                { "name": "中心3", "value": [43, 3, 3, 3, 1, 2, 34, 2, 34, 43, 4, 1, 2, 34, 2, 34] },
                                { "name": "中心4", "value": [43, 3, 3, 3, 1, 2, 34, 2, 34, 3, 4, 1, 2, 34, 2, 34] },
                                { "name": "中心5", "value": [43, 3, 3, 3, 4, 2, 34, 2, 34, 43, 3, 3, 2, 34, 2, 34] },
                                { "name": "中心6", "value": [43, 3, 3, 3, 1, 2, 34, 2, 34, 43, 3, 3, 3, 4, 1, 2] },
                                { "name": "中心7", "value": [43, 3, 3, 2, 34, 2, 34, 43, 3, 3, 4, 1, 2, 34, 2, 34] },
                                { "name": "中心8", "value": [43, 3, 3, 3, 4, 1, 2, 43, 3, 3, 4, 1, 2, 34, 2, 34] }
                            ]
                        }
                    });
                }, 500);
            }
            function createTrtd(parent, childs, _tb, i) {
            };
            fetchData(function (rs) {
                if (_.isEmpty(rs)) { return };
                var jyDataPa = rs.jyData.parent;
                var jyDataCh = rs.jyData.childs;
                var myDataPa = rs.myData.parent;
                var myDataCh = rs.myData.childs;
                var html = '';
                var i = 0;
                var $zone = $(zone).find('.underlingTeamAnalysis ._content');
                while (i < jyDataCh.length) {
                    var tableHtml = underlingTeamAnalysis.templateTableA("flag_" + i);
                    $zone.append(tableHtml);
                    $zone.find(".flag_" + i + " ._tb1 tr th:nth-child(1)").text(params.year + '敬业度');
                    $zone.find(".flag_" + i + " ._tb2 tr th:nth-child(1)").text(params.year + '满意度');

                    $zone.find(".flag_" + i + " ._d1").text('从敬业度问题看，' + jyDataCh[i].name + ":");
                    $zone.find(".flag_" + i + " ._d2").text('从满意度4G问题看，' + myDataCh[i].name + ":");

                    var $tb1 = $zone.find(".flag_" + i).find("._tb1 tbody");
                    var trcolor = 'single';
                    var trtd = '<tr class="' + trcolor + '">';
                    if (i % 2 == 1) {
                        trcolor = 'double';
                    }

                    $.each(jyDataPa.value, function (index, o) { if (index == 0) trtd += '<td>' + jyDataPa.name + '</td>'; trtd += '<td>' + o + '</td>'; });
                    trtd += '</tr><tr>';
                    $.each(jyDataCh[i].value, function (index, o) { if (index == 0) trtd += '<td>' + jyDataCh[i].name + '</td>'; trtd += '<td>' + o + '</td>'; });
                    trtd += '</tr><tr class="' + trcolor + '">';
                    $.each(jyDataPa.value, function (index, o) {
                        if (index == 0) trtd += '<td>VS部门差值</td>';
                        var dVlaue = o - jyDataCh[i].value[index];
                        var color = '';
                        if (dVlaue < -5) { color = "diff-10"; }
                        if (dVlaue > 5) { color = "diff10"; }
                        trtd += '<td class="' + color + '">' + dVlaue + '</td>';
                    });
                    trtd += '</tr>';
                    $tb1.append(trtd);
                    trtd = '';

                    var $tb1 = $zone.find(".flag_" + i).find("._tb2 tbody");
                    var trcolor = 'single2';
                    var trtd = '<tr class="' + trcolor + '">';
                    if (i % 2 == 1) {
                        trcolor = 'double2';
                    }
                    $.each(myDataPa.value, function (index, o) { if (index == 0) trtd += '<td>' + myDataPa.name + '</td>'; trtd += '<td>' + o + '</td>'; });
                    trtd += '</tr><tr>';
                    $.each(myDataCh[i].value, function (index, o) { if (index == 0) trtd += '<td>' + myDataCh[i].name + '</td>'; trtd += '<td>' + o + '</td>'; });
                    trtd += '</tr><tr class="' + trcolor + '">';
                    $.each(myDataPa.value, function (index, o) {
                        if (index == 0) trtd += '<td>VS部门差值</td>';
                        var dVlaue = o - myDataCh[i].value[index];
                        var color = '';
                        if (dVlaue < -5) { color = "diff-10"; }
                        if (dVlaue > 5) { color = "diff10"; }
                        trtd += '<td class="' + color + '">' + dVlaue + '</td>';
                    });
                    trtd += '</tr>';
                    $tb1.append(trtd);

                    // createTrtd(jyDataPa.value, jyDataCh, "_tb1", i);
                    i++;
                }
                underlingTeamAnalysis.reanderStyleA(zone, 8);

            });
        },
        //------------------------------------------------------------------------------- A
        //------------------------------------------------------------------------------- B
        //------------------------------------------------------------------------------- B
    }
    Tc.UnderlingTeamAnalysis = jQuery.extend(true, {}, underlingTeamAnalysis);
});
