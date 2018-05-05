$(function() {
	$(".menu").height($(window).height());
	$(".innerwraper").width($(window).width());
	$(".innerwraper").height($(window).height());
    var boll = false;
    $(".btns").bind("touchstart click", function(e) {
    	if ($(this).hasClass("glyphicon-th-list")) {
			$(".menu").addClass("active");
			$(this).removeClass("glyphicon-th-list");
			$(this).addClass("glyphicon-chevron-left")
		} else {
			$(".menu").removeClass("active");
			$(this).removeClass("glyphicon-chevron-left");
			$(this).addClass("glyphicon-th-list")
		}
    });
    $('.btns').click(function() {
        if (!boll) {
            $('.menu').animate({
                left: '0px'
            },
            100);

            return boll = true;
        } else {
            $('.menu').animate({
                left: '-210px'
            },
            100);

            return boll = false;
        }

    });

    //	打开新闻详细
    $('.closed').click(function() {
        $('.news').hide();
        $('.new_contain').show();
    });
    for (var i = 0; i < $('.new_line').length; i++) {
        $('.new_line').eq(i).click(function() {
            $('.new_contain').hide().siblings('.news').css('display', 'block');
            var ul = $('#news_lists>ul');
            $.ajax({
                type: "get",
                url: "news.php?" + Math.random(),
                dataType: 'xml',
                success: function(xml) {
                    $(xml).find('title').each(function() {
                        ul.append('<li>$(this).text()</li>');
                    });
                }
            });
        })
    }

})