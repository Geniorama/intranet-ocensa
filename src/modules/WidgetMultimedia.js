const navbar = document.querySelector(".oc-multimedia__list")


if(navbar){
    const itemsNavbar = navbar.querySelectorAll(".oc-multimedia__item");
    itemsNavbar.forEach(element => {
        element.addEventListener("click", function(){
            itemsNavbar.forEach(nav => nav.classList.remove("active"))
    
            this.classList.add("active");
        })
    })
    
    $('.oc-multimedia__cont-item:first').show();
    
    $('.oc-multimedia__item').on('click', function(event){
        event.preventDefault()
        index = $(this).index();
        $('.oc-multimedia__cont-item').hide();
        $('.oc-multimedia__cont-item').eq(index).show();
        $('.oc-slick-widget-multimedia').slick('refresh')
    })
}