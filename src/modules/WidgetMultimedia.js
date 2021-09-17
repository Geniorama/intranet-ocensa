navbar = document.querySelector(".oc-multimedia__list").querySelectorAll(".oc-multimedia__item");

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
})

$('.oc-multimedia__cont-item:first').show();

$('.oc-multimedia__item').click(function(event){
    index = $(this).index();
    $('.oc-multimedia__cont-item').hide();
    $('.oc-multimedia__cont-item').eq(index).show();
})