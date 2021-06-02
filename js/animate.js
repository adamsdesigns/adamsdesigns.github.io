//Animation Effects

$(window).scroll(function() {
	
	var windowWidth = $(window).width();
	var windowScroll = $(window).scrollTop();
	
	if (windowWidth > 768 && windowWidth <= 900) {
		if (windowScroll > 100) {
			portfolioItems();
		} if (windowScroll > 300) {
			projectInfo();
		}
	}
	
	else if (windowWidth > 900 && windowWidth <= 1100) {
		if (windowScroll > 65) {
			portfolioItems();
		} if (windowScroll > 420) {
			projectInfo();
		}
	}
	
	else if (windowWidth > 1100 && windowWidth <= 1250) {
		if (windowScroll > 100) {
			portfolioItems();
		} if (windowScroll > 480) {
			projectInfo();
		}
	}
	
	else {
		if (windowScroll > 60) {
			portfolioItems();
		} if (windowScroll > 580) {
			projectInfo();
		}
	}	
});

var $portfolioItem = $(".item li");
$portfolioItem.addClass("js");	

var $projectInfo = $(".project-info").find("p");
$projectInfo.addClass("js");

function portfolioItems() {	
		$portfolioItem.each(function(i) {
			$(this).delay(i*200).animate({
			opacity: 1	
			})
		});
}

function projectInfo() {
		$projectInfo.animate({
		left: "0", 
		opacity: 1
		}, 1200)
}

//Smooth Scrolling

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});