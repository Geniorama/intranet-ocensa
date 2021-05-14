// Libs
import $ from "jquery";
import 'bootstrap';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";


// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Cabin-Bold.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Black.ttf";
import "./fonts/Merriweather-BoldItalic.ttf";
import "./fonts/Merriweather-Italic.ttf";
import "./fonts/HelveticaNeueLTStd-BlkCn.ttf";
import "./fonts/helvetica_light.ttf";


// Modules
import "./styles/app.sass";


// Images
import "./img/barra-lateral-azul/oc-avatar.jpg";
import "./img/barra-lateral-azul/menu-perfil-0-inicio.svg";
import "./img/barra-lateral-azul/menu-perfil-1-correo.svg";
import "./img/barra-lateral-azul/menu-perfil-2-mensajes.svg";
import "./img/barra-lateral-azul/menu-perfil-3-reuniones.svg";
import "./img/barra-lateral-azul/menu-perfil-4-grupos.svg";
import "./img/header/logo_ocensa_logo.png";
import "./img/header/icon_logout.svg";
import "./img/header/arrow-widgets.svg";
import "./img/header/lupa_buscador.svg";
import "./img/caja-widgets/widget-1-correo.svg";
import "./img/caja-widgets/widget-2-agenda.svg";
import "./img/caja-widgets/widget-3-grupos.svg";
import "./img/caja-widgets/widget-4-enlaces_rapidos.svg";
import "./img/caja-widgets/widget-5-mis_apps.svg";
import "./img/caja-widgets/widget-6-indicadores.svg";
import "./img/caja-widgets/widget-7-noticias.svg";
import "./img/caja-widgets/widget-8-agenda_calendario.svg";
import "./img/menu-principal/logo_ocensa_logo2.png";
import "./img/menu-principal/icon-nosotros.svg";
import "./img/menu-principal/icon-direcciones.svg";
import "./img/menu-principal/icon-territorio.svg";
import "./img/menu-principal/icon-como-vamos.svg";
import "./img/menu-principal/icon-ayuda.svg";
import "./img/menu-principal/logo_ocensa_logosimbolo.png";

import "./img/foto-prueba-slide.jpg";
import "./img/icon-slide-calendario.svg";
import "./img/foto-prueba-perfil.jpg";
import "./img/logo_ocensa_logosimbolo.png";
import "./img/footer/facebook.svg";
import "./img/footer/youtube.svg";

import "./img/header/icon_menu_mobile.svg";
import "./img/header/icon-encuestas.svg";
import "./img/header/icon-galeria.svg";
import "./img/imag-noticias.jpg";
import "./img/imag3.jpg";
import "./img/imag4.jpg";
import "./img/imag2.jpg";
import "./img/imag1.jpg";

import "./img/like-icon.svg";
import "./img/comments-icon.svg";
import "./img/favorite-icon.svg";
import "./img/share-icon.svg";
import "./img/img-single-noticias.jpg";
import "./img/avatar-noticias.png";
import "./img/footer/instagram.svg";
import "./img/footer/twitter.svg";
import "./img/footer/icon-download.svg";
import "./img/search/img-profile-search.jpg";
import "./img/search/img-notice-search.jpg";
import "./img/search/img-docs-search.jpg";
import "./img/search/img-img-search.jpg";
import "./img/search/img-video-search.jpg";

import "./img/search/btn-panels.svg";
import "./img/search/panel-profile.svg";
import "./img/search/panel-noticias.svg";
import "./img/search/panel-documentos.svg";
import "./img/search/panel-imagenes.svg";
import "./img/search/panel-video.svg";
import "./img/nosotros/icon1-section2.svg";

import "./img/nosotros/timeline-01.jpg";
import "./img/nosotros/timeline-02.jpg";
import "./img/nosotros/timeline-03.jpg";
import "./img/nosotros/timeline-04.jpg";
import "./img/nosotros/timeline-05.jpg";
import "./img/nosotros/timeline-06.jpg";
import "./img/nosotros/timeline-07.jpg";
import "./img/nosotros/timeline-08.jpg";
import "./img/nosotros/timeline-09.jpg";
import "./img/nosotros/timeline-10.jpg";
import "./img/nosotros/timeline-11.jpg";
import "./img/nosotros/timeline-12.jpg";
import "./img/nosotros/timeline-13.svg";
import "./img/nosotros/timeline-14.svg";
import "./img/nosotros/timeline-15.jpg";


var scroll = new SmoothScroll('a[href*="#"]');

$('.oc-slick-example').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    dots: true
})

$('.item-has-child').hover(function() {
    const item = $(this)
    const submenu = $(this).find('.oc-submenu')

    submenu.slideToggle('low', function() {
    if (submenu.css('display') == 'none') {
        item.removeClass('open')
    }
    else {
        item.addClass('open')
    }
  });
})

$('.button-menu-toggle.open').click(function(e) {
    e.preventDefault()
    $('.oc-preload').fadeIn(function() {
        $('.oc-preload').css('display', 'flex')
        $('.oc-preload img').css('opacity', '1')
    })

    $('.oc-menu-principal').addClass('menu-open')
    setTimeout(function() {
        $('.oc-preload').fadeOut()
        setTimeout(function(){ 
            $('.oc-menu-principal__top__cerrar .button-menu-toggle').addClass('close')
            $('.oc-menu-principal .col-menu').css('opacity', '1')
            $('.oc-menu-principal .col-menu').css('bottom', '0')
        }, 1000);
    }, 1000)
    
})

$('.oc-btn-menu-superior').click(function(e) {
    e.preventDefault()
    $('.oc-menu-principal').addClass('menu-open')

    setTimeout(function(){ 
        $('.oc-menu-principal__top__cerrar .button-menu-toggle').addClass('close')
        $('.oc-menu-principal .col-menu').css('opacity', '1')
        $('.oc-menu-principal .col-menu').css('bottom', '0')
     }, 1000);
})

$('.oc-menu-principal__top__cerrar').click(function(e) {
    e.preventDefault()
    $('.oc-menu-principal').removeClass('menu-open')
    $('.oc-menu-principal__top__cerrar .button-menu-toggle').removeClass('close')

    $('.oc-menu-principal .col-menu').css('opacity', '0')
    $('.oc-menu-principal .col-menu').css('bottom', '50px')
})
$('.oc-slick-dashboard').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    dots: true,
    infinite: false
})



function progressBar(barClass) {
    let items = document.querySelectorAll(barClass)
    for(let item of items){
        let progress = item.dataset.progress
        item.style.width = `${progress}%`
        item.textContent = `${progress}%`
    }
}

progressBar('.oc-progress')

$('.oc-btn-menu-lateral').mouseenter(function(){
    $(this).find('#Line_68').attr('x2', '5.47')
    $(this).find('#Line_329').attr('x1', '10.47')
    $(this).find('#Line_330').attr('x1', '7.64')
    $(this).find('#Line_327').attr('x1', '6.37')
})

$('.oc-btn-menu-lateral').mouseleave(function(){
    $(this).find('#Line_68').attr('x2', '10.47')
    $(this).find('#Line_329').attr('x1', '13.47')
    $(this).find('#Line_330').attr('x1', '2.64')
    $(this).find('#Line_327').attr('x1', '10.47')
})

if(screen.width < 480){
   $('.item-has-child').addClass('open')
   $('.item-has-child .oc-submenu').show()
}

$('#open-wdg-mobile').click(function(e) {
    e.preventDefault()
    $('#box-widget-mobile').fadeIn() 
})

$('#close-wdg-mobile').click(function(e) {
    e.preventDefault()
    $('#box-widget-mobile').fadeOut() 
})

$('.oc-header__widgets-info').click(function() {
    $('.oc-header__widgets-cont').fadeToggle('low', function(){
        if($('.oc-header__widgets-cont').css('display') == 'none'){
            $('.oc-header__widgets-info img').css('transform', 'rotate(0deg)')
            $('.oc-header__widgets-cont').css('opacity', '0')
        } else {
            $('.oc-header__widgets-info img').css('transform', 'rotate(-180deg)')
            $('.oc-header__widgets-cont').css('opacity', '1')
        }
    })
})

$('input[type=radio]').click(function(){
    if (this.previous) {
        this.checked = false;
    }
    this.previous = this.checked;
});

// Menu Lateral mobile
$('.oc-submenu-gen__button-menu-lateral').click(function(e) {
    e.preventDefault();

    $('.oc-submenu-gen .oc-menu-lateral').slideToggle();
})

if(screen.width < 576){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $('.oc-header').addClass('header-fixed');
        } else {
            $('.oc-header').removeClass('header-fixed');
        }
    });

    $('.oc-search-bar__btn').click(function(e) {
        e.preventDefault()
        $(this).addClass('expand-bar')
        $('.oc-box-search').addClass('expand-box')

        $('.oc-box-search__icon-close').click(function(e) {
            e.preventDefault();
            $('.oc-search-bar__btn').removeClass('expand-bar')
            $('.oc-box-search').removeClass('expand-box')
        })

    })

    $('.oc-submenu-gen__cont-nav .nav-link').click(function() {
        $('.oc-submenu-gen__cont-nav .nav-link').removeClass('active')
        $(this).addClass('active')
    })
 }

// Tags
$('.oc-seccion-noticias-etiquetas button').click(function(e) {
    if($(this).hasClass('tag-selected')){
        $(this).removeClass('tag-selected')
    } else {
        $(this).addClass('tag-selected')
    }
});


// Tabs search results
$('.oc-panels__item').hide();
$('.oc-panels__item:first').show();

$('.oc-tabs__item').click(function(e){
    e.preventDefault()

    var _href = $(this).attr("href");

    if($(this).hasClass('oc-panels__btn-02')){
        let href_2 = $('.oc-menu-search .oc-tabs__item').attr('href')

        $('.oc-menu-search .oc-tabs__item').removeClass('active')

        $('.oc-menu-search .oc-tabs__item[href="'+ _href +'"]').addClass('active')

        $(".oc-panels__item").hide();
        $(_href).fadeIn();

        let anchor = document.querySelector('#top');
        scroll.animateScroll(anchor);
        
    } else {
        $('.oc-tabs__item').removeClass('active');
        $(this).addClass('active');
        
        $(".oc-panels__item").hide();
        $(_href).fadeIn();

        let anchor = document.querySelector('#top');
        scroll.animateScroll(anchor);

    }
});

$('#oc-panels__btn-all').click(function(){
    $('#oc-tabs__item-all').addClass('active');
});