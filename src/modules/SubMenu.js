import $, { each } from "jquery";
import SmoothScroll from "smooth-scroll";

var scroll = new SmoothScroll('a[href*="#"]');


const est_page = document.querySelector('.oc-estaciones')
const hem_page = document.querySelector('.oc-hemeroteca')

function activeItemsEst(pageCl){
    let targetEst = $(pageCl)

    $('.oc-tabs__item').each(function( index ) {
        let idNav = $(this).attr('id')
        if(targetEst.hasClass(idNav)){
           $(this).addClass('active')
        }
    });
}

if(est_page){
    activeItemsEst('.oc-estaciones')
} else if(hem_page) {
    activeItemsEst('.oc-hemeroteca')
} else {
    $('.oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

    $('#oc-nosotros .oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

    $('.oc-index-casanare .oc-nosotros-submenu .oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

    $('.oc-header__mobile').next().find('.oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')
    $('.oc-nosotros .oc-tabs__item').click(function(e){
        e.preventDefault()
    
        var _href = $(this).attr("href");
    
        $('.oc-tabs__item').removeClass('active');
        $(this).addClass('active');
    
        $('.oc-submenu-gen .oc-tabs__item[href="'+ _href +'"]').addClass('active')
            
        $(".oc-panels__item").hide();
        $(_href).fadeIn();
    
        let anchor = document.querySelector('#top');
        scroll.animateScroll(anchor);
        
    
        $('.oc-panels-cultura__slick-panel').slick('refresh')
        $('.oc-slick-cultura').slick('refresh')
        
        
    
        // Funcion tabs
        $('.oc-slick-cultura .oc-slick-cultura__item').click(function(e) {
            e.preventDefault()
    
            $('.oc-slick-cultura .oc-slick-cultura__item').removeClass('active');
            $(this).addClass('active');
    
        })
    });
    
}





