/**
 * data
 */
		var configData = [ {
			name : '总结',
			children : [ {
				id : '11',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				name : '敬满指数排名总览 类型一',
				note :'管理助手为您提供：敬业度横向排名、组织维度的敬业度3S详情',
				check : false,
				btns : [ {
					code : '1',
					name : '类型一',
					img : ''
				}, {
					code : '2',
					name : '类型二',
					img : ''
				} ]
			}, {
				id : 'xxx2',
				name : '敬满指数高低矩阵图',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				note :'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
				check : false,
				btns : [ {
					code : '1',
					name : '类型一',
					img : ''
				}, {
					code : '2',
					name : '类型二',
					img : ''
				} ]
			} ]
		}, {
			name : '敬业度分析',
			children : [ {
				id : 'xxx3',
				check : true,
				name : '组织敬业度',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				btns : [ {
					code : '1',
					name : '类型一',
					img : ''
				}, {
					code : '2',
					name : '类型二',
					img : ''
				} ]
			}, {
				code : 'xxx4',
				name : '与上一年历史对比',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				check : true,
				btns : [ {
					code : '1',
					name : '类型一',
					img : ''
				} ]
			} ]
		}, {
			name : '历史分析',
			children : [ {
				id : 'xxx5',
				check : false,
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				name : '敬满指数历史趋势',
				btns : [ {
					code : '1',
					name : '标准',
					img : ''
				} ]
			}, {
				id : 'xxx6',
				name : '与上一年历史对比（部门）',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				check : false,
				btns : [ {
					code : '1',
					name : '标准',
					img : ''
				} ]
			}, {
				id : 'xxx7',
				name : '与上一年历史对比（中心）',
				years:{now:2017,list:[2017,2016,2015,2014,2013]},
				check : false,
				btns : [ {
					code : '1',
					name : '类型一',
					img : '',
					check : true,
				}, {
					code : '2',
					name : '类型二',
					img : '',
					check : false,
				} ]
			} ]
		} ];

		
		
// 		$(".reportBtnGroup").children().on("report.btn",function(e){
// 			var btn=e.target;
// 			console.log($(btn).html())
// 		});
		
		$("#config-modal").on("show.bs.modal",function() {
			$("#config-panel-1").html("");
			$("#config-panel-2").html("");
			$.each(configData,function(i, o) {
				var configGroup = $('<div class="config-group"></div>');
				configGroup.append('<lable class="config-group-lable"> '+ o.name+ ' </lable>');
				$.each(o.children,function(j,item) {
					var configItem = $('<div class="config-item"></div>');
					configItem.append('<div class="col-sm-7"> <input type="checkbox" value="'+item.id+'" /> <span>'+ item.name+ '</span></div>');
					configItem.find("input").attr("checked",item.check);
					var btnGroup = $('<div class="col-sm-5"> </div>');
					$.each(item.btns,function(m,btn) {
						var sign = item.code
								+ "-"
								+ btn.code;
						var btnEl = $('<a class="config-item-btn" sign="'+sign+'">'
								+ btn.name
								+ '</a>');
						if (btn.check) {
							btnEl.addClass('active');
						}
						btnEl.click(function() {
							$(this).parent().children().removeClass('active');
							$(this).addClass('active');
						});
						btnEl.mousemove(function() {
							var sign = $(this).attr("sign");
							$('.config-preview').remove();
							if ($("#"+ sign).length > 0)
								return;
							var top = $(this).offset().top;
							var left = $(this).offset().left;
							var previewDiv = $('<div class="config-preview"></div>');
							previewDiv.attr("id",sign);
							previewDiv.append('<img src="https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch2/png/gaokaozi.png"/>');

							previewDiv.css('left',left+ "px");
							$('body').append(previewDiv);
							previewDiv.css('top',(top - previewDiv.find("img").height())+ "px");
						});
						btnEl.mouseout(function() {
							console.log("likai")
							$('.config-preview').remove();
						});
						btnGroup.append(btnEl);
					});
					configItem.append(btnGroup);
					configGroup.append(configItem);
					var index = i % 2 == 0 ? 1: 2;
					$("#config-panel-"+ index).append(configGroup);
				});
			})
		});
			
		/**
		 * 报表分析界面
		 */
		var analysisReportObj={
				/**
				  加载分析报表按钮组
				*/
				 loadReportBtns:function(){
						$(".reportBtnGroup").html("");
						for(var i=0;i<20;i++){
							var width=$(".reportBtnGroup").width();
							var div=$('<div class="report-btn">是多大的</div>');
							$(".reportBtnGroup").append(div);
							var divWidth=parseInt($(div).css("width"))+22;
							console.log(divWidth);
							$(".reportBtnGroup").css("width",(divWidth+width)+"px");
						}
						$(".reportBtnGroup").children().click(function(){
							$(this).parent().children().removeClass('active');
							$(this).addClass('active');
							callReportBtn(this);
						})
						$(".reportBtnGroup").children(":first-child").click();
					},
					init:function(){
						this.loadReportBtns();
					}
		}
		
		
		/**
		详细信息面板对象
		*/
			var detailPanelObj={
				    selectYear:null,
				    selectType:null,
					zTreeObj:null,
					defaultNote:'',
					setting : {
							   view:{showLine :false,
										   showIcon :false,
										   fontCss: function(treeId, node) {
												return node.font ? node.font : {};
											}
					  		 	},callback:{
					  		 		onClick:function(event, treeId, treeNode, clickFlag){
					  		 			if(treeNode.level==0)return;
					  		 			$(".detail-panel-title span").html(treeNode.name);
					  		 			$(".detail-panel-note").html("");
					  		 			if(treeNode.note!=undefined && treeNode.note.length>0){
						  		 			$(".detail-panel-note").html("*  "+treeNode.note);
					  		 			}
					  		 			$("#detail-panel-type-btns").html("");
					  		 			$("#detail-panel-year-btns").html("");
					  		 			
					  		 			$.each(treeNode.btns,function(m,btn) {
											var btnEl = $('<div class="detail-panel-btn" id="'+btn.code+'">'
													+ btn.name
													+ '</div>');
											if (btn.check) {
												detailPanelObj.selectType=btn.code;
												btnEl.addClass('active');
											}
											btnEl.click(function() {
												$(this).parent().children().removeClass('active');
												$(this).addClass('active');
												detailPanelObj.selectType=$(this).attr("id");
												detailPanelObj._refreshReport(treeNode,detailPanelObj.selectYear,detailPanelObj.selectType);
											});
											$("#detail-panel-type-btns").append(btnEl);
										});
					  		 			var now=treeNode.years.now;
					  		 			
					  		 			$.each(treeNode.years.list,function(m,year) {
					  		 			
											var btnEl = $('<div class="detail-panel-btn" data="'+year+'">'
													+ year
													+ '</div>');
											if(m==0){
					  		 					detailPanelObj.selectYear=year;
					  		 					$(btnEl).addClass('active');
					  		 				}
											btnEl.click(function() {
												var val=$(this).attr("data");
												if(now==val){
													$("#detail-panel-report-btn").children().show();
												}else{
													$("#detail-panel-report-btn").children().hide();
												}
												detailPanelObj.selectYear=val;
												$(this).parent().children().removeClass('active');
												$(this).addClass('active');
												detailPanelObj._refreshReport(treeNode,detailPanelObj.selectYear,detailPanelObj.selectType);
											});
											$("#detail-panel-year-btns").append(btnEl);
										});
					  		 			detailPanelObj._refreshReport(treeNode,detailPanelObj.selectYear,detailPanelObj.selectType);
					  		 		}
					  		 	}
					   },init:function(){
						   $.each(configData,function(i,obj){
							   obj.open=true;
							   obj.font={'font-weight':'bold'};
						   })
					      var zTree = $.fn.zTree.init($("#treeDemo"), this.setting, configData);
						   var node = zTree.getNodeByParam('id', 11);//获取id为1的点  
						   zTree.setting.callback.onClick(null, zTree.setting.treeId, node);//调用事件
					   },
					   /**
						  内部调用方法
						*/
						 _refreshReport:function(treeNode,year,type){
							$("#detail-custom-note .update-note").hide();
							//查询出 根据treeNode.id   year type 查询
							this.defaultNote='查询出 根据treeNode.id   year type 查询';
							$("#detail-custom-note textarea").val(this.defaultNote);
							refreshReport(treeNode,year,type);
						}
					   
			};
		 
			
		
		   $(document).ready(function(){
			   /**
		     	 * 页面初始化
		     	 */
				$(function() {
					$("[data-toggle='tooltip']").tooltip();
					
					$(".report-config").click(function() {
						$("#config-modal").modal('show');
					});
					$(".explain").click(function(){
						$("#explain-modal").modal('show');
						
					});
					$(".feedback").click(function(){
						$("#feedback-modal").modal('show');
					});
					
					$(".feedbackAndExplain .item-block").mousemove(function() {
						$(this).next().show();
					});
					$(".feedbackAndExplain .item-block").mouseout(function() {
						$(this).next().hide();
					});
					
					$("#detail-custom-note textarea").on('keydown keyup change propertychange focus blur',function(){
						var val=$.trim($(this).val());
						if(val!=detailPanelObj.defaultNote){
							$("#detail-custom-note .update-note").show();
						}else{
							$("#detail-custom-note .update-note").hide();
						}
					});
					// 上换插件初始化
					$("#demo").zyUpload({
						width            :   "650px",                 // 宽度
						height           :   "200px",                 // 宽度
						itemWidth        :   "120px",                 // 文件项的宽度
						itemHeight       :   "100px",                 // 文件项的高度
						url              :   "/ylf/admin/ueditor/jsp/controller.jsp?action=uploadimage",  // 上传文件的路径
						multiple         :   true,                    // 是否可以多个文件上传
						dragDrop         :   false,                    // 是否可以拖动上传文件
						del              :   true,                    // 是否可以删除文件
						finishDel        :   false,  				  // 是否在上传文件完成后删除预览
						/* 外部获得的回调接口 */
						onSelect: function(files, allFiles){                    // 选择文件的回调方法
							console.info("当前选择了以下文件：");
							console.info(files);
							console.info("之前没上传的文件：");
							console.info(allFiles);
						},
						onDelete: function(file, surplusFiles){                     // 删除一个文件的回调方法
							console.log("当前删除了此文件：");
							console.info(file);
							console.log("当前剩余的文件：");
							console.info(surplusFiles);
						},
						onSuccess: function(file){                    // 文件上传成功的回调方法
							console.log("此文件上传成功：");
							console.info(file);
						},
						onFailure: function(file){                    // 文件上传失败的回调方法
							console.log("此文件上传失败：");
							console.info(file);
						},
						onComplete: function(responseInfo){           // 上传完成的回调方法
							console.log("文件上传完成");
							console.info(responseInfo);
						}
					});
					
					
					/**
					 * 说明滚动
					 */
					 $('#pbSlider').pbTouchSlider({
						  slider_Wrap: '#pbSliderWrap',
						  slider_Threshold: 10,
						  slider_Speed:600,
						  slider_Ease:'ease-out',
						  slider_Drag : true,
						  slider_Arrows: {
						    enabled : true
						  },
						  slider_Dots: {
						    class :'.o-slider-pagination',
						    enabled : true
						  },
						  slider_Breakpoints: {
						      default: {
						    	  width:800,
						          height: 500
						      },
						      tablet: {
						          height: 1500,
						          media: 1024
						      },
						      smartphone: {
						          height: 400,
						          media: 768
						      }
						  }
						});
					analysisReportObj.init();
					detailPanelObj.init();
				});
		   });
		   
		  
		  
			/**
			  点击按钮回调响应
			*/
			function callReportBtn(btn){
				console.log(btn)
			}
			/**
			  刷新详情内容
			*/
			function refreshReport(treeNode,year,type){
				console.log(treeNode)
				console.log(year)
				console.log(type)
			}
			