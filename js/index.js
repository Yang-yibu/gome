$(function($){
// 顶部下拉框ban
	var iw = $(".icon-ban ul li").innerWidth();
	$(".icon-ban ul").css("width", iw * $(".icon-ban ul li").length )
	$(".user-icon-next").click(function(){ $(".icon-ban ul").animate({"left": -iw * 3}); });
	$(".user-icon-previous").click(function(){ $(".icon-ban ul").animate({"left": 0}); });

//点击close 关闭顶部广告
	$(".close-top-advertisement").on("click", function(){
		$("#top-advertisement").html("")
	});
// 搜索框 聚焦失焦事件

// hide 侧边导航
	$("#navbox").delegate("#lisnav li", {"mouseover": function(){
		$(this).addClass("sel");
		$("#subnav li").eq( $(this).index() ).css("display", "block");
		$("#subnav").css("display", "block");
	} });
	$("#navbox").mouseout(function(){
		$("#lisnav li").removeClass("sel");
		$("#subnav li").css("display", "none");
		$("#subnav").css("display", "none");
	});

//楼层mt-tab
	mtTab(".f1");
	mtTab(".f2");
	mtTab(".f3");
	mtTab(".f4");
	mtTab(".f5");
	function mtTab(parent){
		$(parent).find(".mt-tab-item").on("mouseover",function(){
			$(parent).find(".mt-tab-item").removeClass("selected");
			$(this).addClass("selected");
			$(parent).find(".mc-right").css("display", "none").eq($(this).index()).css("display", "block");
		});
		var now = 0;
		var next = 0;
		$(parent).find(".mc-tab-page span").click(function(){
			next = now+1;
			if( next >= $(parent).find(".mt-tab-item").length){
				next = 0;
			}
			$(parent).find(".mt-tab-item").eq(now).removeClass("selected").end().eq(next).addClass("selected");
			$(parent).find(".mc-right").css("display", "none").eq(next).css("display", "block");
			now = next;
		});
	};

//楼层 小banner图
	smallban(".f1")
	smallban(".f2")
	smallban(".f3")
	smallban(".f4")
	smallban(".f5")
	function smallban(parent){
		var imgs = $(parent).find(".mc-right-imgs")
		var lis = $(parent).find(".mc-right-ban-item div");
		var ft = setInterval(fmove,2000);
		var flag = true;
		var now = 0;
		var next = 0;
		function fmove(){
			next = now + 1;
			if (next>= imgs.length) {
				next= 0;
			};
			imgs.stop(true).eq(now).animate({"opacity": 0},600).end().eq(next).animate({"opacity": 1},600)
			lis.eq(now).removeClass("selected").end().eq(next).addClass("selected");
			now = next;
		};
		function fmoveL(){
			next = now - 1;
			if (next < 0 ) {
				next= imgs.length-1;
			};
			imgs.stop(true).eq(now).animate({"opacity": 0},600).end().eq(next).animate({"opacity": 1},600)
			lis.eq(now).removeClass("selected").end().eq(next).addClass("selected");
			now = next;
		};
		
		$(parent).find(".mc-right-banner").on({mouseover: function(){clearInterval(ft);}, mouseout: function(){ft = setInterval(fmove, 2000)}});

		$(parent).find(".mc-previous").click(function(){
			fmoveL();
		});
		$(parent).find(".mc-next").click(function(){
			fmove();
		});

		lis.on("click mouseover", function(){
			imgs.stop(true).eq(now).animate({"opacity": 0},600).end().eq( $(this).index() ).animate({"opacity": 1},600)
			lis.eq(now).removeClass("selected").end().eq( $(this).index() ).addClass("selected");
			now = $(this).index();
		});
	};
	

// 楼层跳转 
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		var arr = [];
		for (var i = 0;i<$(".floor").length;i++) {
			arr.push($(".floor").eq(i).position().top)
		};
		
		$(".flo").on("click", function(){
			console.log($(this).index())
			if( $(this).index() == $(".flo").length-1 ){
				// $(window).animate( {$(window).scrollTop: 0}, 200)
				$(window).scrollTop(0)
			}
			// $(window).animate( {$(window).scrollTop: arr[ $(this).index() ]-50}, 200)
			$(window).scrollTop(arr[ $(this).index() ]-50)
		});


	})


});