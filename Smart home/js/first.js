//下拉菜单出现
$(".tab_each").hover(function() {
	$(this).find("dd").css("display", "block");

}, function() {
	$(this).find("dd").css("display", "none")

})

function headerScroll() {
	$(window).scroll(function() {

		var scrollValue = $(window).scrollTop();
		console.log(scrollValue)

		if(scrollValue > 0) {
			$(".header").css("background-color", "rgba(0, 0, 0, 0.5)")
			$(".header").css("position", "fixed")

		} else {
			$(".header").css("background-color", "#303030")
			$(".header").css("position", "relative")
		}
		var a = 0;
		if(a == 0) {
			if(scrollValue >= 2600) {
				$('.counter').countUp();
			}
			a++
		}
	});

};
headerScroll();

//图片边框效果
function hover_border() {
	$(".show_case .show_case_box  ").find(".case").hover(function() {
		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0.5)")
		$(this).find(".show_hover").find(".line1").stop(true).animate({
			width: "130px"
		}, 500);
		$(this).find(".show_hover").find(".line2").stop(true).animate({
			width: "130px"
		}, 500);
		$(this).find(".show_hover").find(".line3").stop(true).animate({
			width: "130px"
		}, 500);
		$(this).find(".show_hover").find(".line4").stop(true).animate({
			width: "130px"
		}, 500);
		$(this).find(".show_hover").find(".line5").stop(true).animate({
			height: "92px"
		}, 500);
		$(this).find(".show_hover").find(".line6").stop(true).animate({
			height: "92px"

		}, 500);
		$(this).find(".show_hover").find(".line7").stop(true).animate({
			height: "92px"
		}, 500);
		$(this).find(".show_hover").find(".line8").stop(true).animate({
			height: "92px"
		}, 500);
		$(this).find(".hover_pic").find("img").stop(true).animate({
			top: "50%"
		}, 500)
	}, function() {
		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0)")
		$(this).find(".show_hover").find(".line1").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line2").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line3").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line4").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line5").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line6").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line7").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line8").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".hover_pic").find("img").stop(true).animate({
			top: "-50px"
		}, 500)
	})
	$(".case_box .show_case").find(".case").hover(function() {
		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0.5)")
		$(this).find(".show_hover").find(".line1").stop(true).animate({
			width: "178px"
		}, 500);
		$(this).find(".show_hover").find(".line2").stop(true).animate({
			width: "178px"
		}, 500);
		$(this).find(".show_hover").find(".line3").stop(true).animate({
			width: "178px"
		}, 500);
		$(this).find(".show_hover").find(".line4").stop(true).animate({
			width: "178px"
		}, 500);
		$(this).find(".show_hover").find(".line5").stop(true).animate({
			height: "123px"
		}, 500);
		$(this).find(".show_hover").find(".line6").stop(true).animate({
			height: "123px"
		}, 500);
		$(this).find(".show_hover").find(".line7").stop(true).animate({
			height: "123px"

		}, 500);
		$(this).find(".show_hover").find(".line8").stop(true).animate({
			height: "123px"

		}, 500);
		$(this).find(".hover_pic").find("img").stop(true).animate({
			top: "50%"
		}, 500)
	}, function() {
		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0)")
		$(this).find(".show_hover").find(".line1").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line2").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line3").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line4").stop(true).animate({
			width: "0"
		}, 500);
		$(this).find(".show_hover").find(".line5").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line6").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line7").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".show_hover").find(".line8").stop(true).animate({
			height: "0"
		}, 500);
		$(this).find(".hover_pic").find("img").stop(true).animate({
			top: "-50px"
		}, 500)
	})
//	$(".case_box .picScroll-left").find("li").hover(function() {
//		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0.5)")
//		$(this).find(".show_hover").find(".line1").stop(true).animate({
//			width: "176px"
//		}, 500);
//		$(this).find(".show_hover").find(".line2").stop(true).animate({
//			width: "176px"
//		}, 500);
//		$(this).find(".show_hover").find(".line3").stop(true).animate({
//			width: "176px"
//		}, 500);
//		$(this).find(".show_hover").find(".line4").stop(true).animate({
//			width: "176px"
//		}, 500);
//		$(this).find(".show_hover").find(".line5").stop(true).animate({
//			height: "120px"
//		}, 500);
//		$(this).find(".show_hover").find(".line6").stop(true).animate({
//			height: "120px"
//		}, 500);
//		$(this).find(".show_hover").find(".line7").stop(true).animate({
//			height: "120px"
//		}, 500);
//		$(this).find(".show_hover").find(".line8").stop(true).animate({
//			height: "120px"
//		}, 500);
//		$(this).find(".hover_pic").find("img").stop(true).animate({
//			top: "50%"
//		}, 500)
//	}, function() {
//		$(this).find(".show_hover").stop(true).css("background-color", "rgba(0, 0, 0, 0)")
//		$(this).find(".show_hover").find(".line1").stop(true).animate({
//			width: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line2").stop(true).animate({
//			width: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line3").stop(true).animate({
//			width: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line4").stop(true).animate({
//			width: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line5").stop(true).animate({
//			height: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line6").stop(true).animate({
//			height: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line7").stop(true).animate({
//			height: "0"
//		}, 500);
//		$(this).find(".show_hover").find(".line8").stop(true).animate({
//			height: "0"
//		}, 500);
//		$(this).find(".hover_pic").find("img").stop(true).animate({
//			top: "-50px"
//		}, 500)
//	})

}
hover_border();

//关于我们动画
$(".about_us").find(".more").hover(function() {
	$(".hover_more").animate({
		width: "150px"
	}, 300)
}, function() {
	$(".hover_more").animate({
		width: "0px"
	}, 300)
})
//案例展示动画

function apper_head() {

	$(window).scroll(function() {
		var scrollValue = $(window).scrollTop();
		if(scrollValue == 200) {
			$(".move_part").css("top", "-50px");
		} else {
			if(scrollValue == 300) {
				$(".move_part").css("top", "-100px");
			} else {
				$(".move_part").css("top", "0px");

			}

		}

		if(scrollValue > 200) {
			$(".show_bg").css("top", '-300px');
		} else {
			$(".show_bg").css("top", "0px");
		}
	});
}
apper_head();
//时间轴
function timer() {
	$(".date_bg").hover(function() {
		$(".left_slide").css("display", "inline-block")
		$(".right_slide").css("display", "inline-block")

	}, function() {
		$(".left_slide").css("display", "none")
		$(".right_slide").css("display", "none")

	});
	var side = 0;
	$(".date_bg").find(".left_slide").click(function() {
		var Left = $(".date_bg").find("ul").css("left");
		var num = Math.abs(parseInt(Left) / 230);
		if(num >= 0 && num < 4) {
			var a = parseInt(Left) - 230

			$(".date_bg").find("ul").animate({
				left: a + "px"
			}, 1000);

		}
		console.log(num)
		side = side - 230;
		num = num - 1;
	})
	var side2 = -230;
	$(".date_bg").find(".right_slide").click(function() {
		var Left = $(".date_bg").find("ul").css("left");
		var num = Math.abs(parseInt(Left) / 230);
		console.log(num)
		if(num > 0 && num <= 4) {
			var a = parseInt(Left) + 230
			$(".date_bg").find("ul").animate({
				left: a + "px"
			}, 1000);
		}
		side2 += 230;
		num = num - 1;
	})
}
timer()
//页面小块动画
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();

	function animate1(father_class, class_name, num) {
		var height = $(window).height();
		var now = $("." + father_class).find("." + class_name).offset().top - num;
		//		var scrollTop = $(this).scrollTop();
		if(scrollTop + height > now) {
			$("." + father_class).find("." + class_name).addClass("run")
		} else {
			$("." + father_class).find("." + class_name).removeClass("run")
		}

	}
	animate1("show_head", "words", 30)
	animate1("show_head", "tab", 30)
	animate1("about_bg", "words", 60)
	animate1("about_bg", "pic", 60)
	animate1("news_box", "news_left", 100)
	animate1("news_box", "news_right", 150)
	animate1("service_box", "business", 30)
	animate1("show_case", "show_case_box", 30)

	function animate2(father_class, num) {
		$("." + father_class).find("li").each(function() {
			var height = $(window).height();
			var now = $(this).offset().top - num;

			console.log(scrollTop)
			if(scrollTop + height > now) {
				$("." + father_class).find("li").addClass("run")
			} else {
				$("." + father_class).find("li").removeClass("run")
			}
		})

	}
	animate2("show_case", 30)
	animate2("date_bg", 30)
	animate2("service_box", 30)
	animate2("company_box", 30)
	animate2("news_right", 30)

})
//业务范围轮播
//联系方式
$(".body_side .close").click(function() {
	$(".contact").css("display", "none")
})
$(".body_side .open").click(function() {
	$(".contact").css("display", "block")
})
$(".forcus .icon").click(function() {
	$(".t_code").css("display", "block")
})
$(".t_code").click(function() {
	$(".t_code").css("display", "none")

})
