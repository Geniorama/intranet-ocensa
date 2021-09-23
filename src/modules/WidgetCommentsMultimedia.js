
const $button = $(".oc-dates-noticias__view-comments")

$($button).on("click", function(){
	if($(this).hasClass("active")) {
		$(this).removeClass("active")
	} else {
		$(this).addClass("active")
	}
});

$($button).on("click", function(){
	if($(".oc-mult-comments").hasClass("closed")) {
		$(".oc-mult-comments").removeClass("closed")
	} else {
		$(".oc-mult-comments").addClass("closed")
	}
})