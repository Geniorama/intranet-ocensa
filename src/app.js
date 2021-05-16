// Libs
import $, { each } from "jquery";
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

import "./img/nosotros/razon-01.svg";
import "./img/nosotros/razon-02.jpg";
import "./img/nosotros/razon-03.svg";
import "./img/nosotros/razon-04.jpg";
import "./img/nosotros/razon-05.svg";
import "./img/nosotros/razon-06.svg";
import "./img/nosotros/razon-07.svg";
import "./img/nosotros/razon-08.svg";

import "./img/nosotros/img-gris.jpg";
import "./img/nosotros/img-covenas.jpg";
import "./img/nosotros/icon-nosotros2.svg";
import "./img/nosotros/img-miraflores.jpg";
import "./img/nosotros/img-belleza.jpg";
import "./img/nosotros/icon1-section3.svg";
import "./img/nosotros/icon2-section3.svg";
import "./img/nosotros/list-icon1.svg";
import "./img/nosotros/list-icon2.svg";
import "./img/nosotros/list-icon3.svg";
import "./img/nosotros/list-icon4.svg";
import "./img/nosotros/list-icon5.svg";
import "./img/nosotros/list-icon6.svg";
import "./img/nosotros/img-gris-morado.jpg";
import "./img/nosotros/razon/imag-razondeser-1.jpg"

import "./img/header/ocensa-logo-nuevo.svg";
import "./img/header/ocensa-logo-nuevo-blanco.svg";
import "./img/footer/ocensa-logosimbolo.svg";
import "./img/nosotros/flecha-abajo.svg";

import "./img/nosotros/cultura/cultura-icon-6.png";
import "./img/nosotros/razon/razon-vision-est.svg";
import "./img/nosotros/cultura/icon-nosotros-cultura-2.svg";
import "./img/nosotros/cultura/icon-nosotros-cultura-3.svg";

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

$('.oc-slick-cultura').slick({
    slidesToShow: 6,
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

$('.oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

$('#oc-nosotros .oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

$('.oc-header__mobile').next().find('.oc-submenu-gen__cont-nav .nav .nav-link').first().addClass('active')

if(screen.width < 576){
    let desplaceNumber = 0
    $('.oc-submenu-mobile .nav .nav-link').each(function() {
        desplaceNumber = desplaceNumber + 100;
        $(this).attr('data-desplace', desplaceNumber)
    })

    function desplaceMenu(num){
        let number = parseInt(num)

        if(number != 100){
            $('.oc-submenu-gen__cont-nav .nav').animate({
                scrollLeft: number / 2
            }, 500)
        }
    }

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
        $('.oc-submenu-gen__cont-nav .nav-link').removeClass('active');
        $(this).addClass('active');

        desplaceMenu($(this).attr('data-desplace'));
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

    $('.oc-tabs__item').removeClass('active');
        $(this).addClass('active');

        $('.oc-submenu-gen .oc-tabs__item[href="'+ _href +'"]').addClass('active')
        
        $(".oc-panels__item").hide();
        $(_href).fadeIn();

        let anchor = document.querySelector('#top');
        scroll.animateScroll(anchor);

        $('.oc-slick-cultura').slick('refresh')

        // Funcion tabs
        $('.oc-slick-cultura .oc-slick-cultura__item').click(function() {
            alert('funciona')
        })
});


function addIconMenu(iconclass, svgicon){
    $(iconclass).before(svgicon);
}


if(screen.width > 991.98){
    // ICON PROFILE
    addIconMenu('.oc-submenu-gen__cont-nav .profile .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="14.706" height="20.574" viewBox="0 0 14.706 20.574">
    <g id="Grupo_6636" data-name="Grupo 6636" transform="translate(0.75 0.752)">
        <line id="Línea_1013" data-name="Línea 1013" y2="1.917" transform="translate(5.229 6.708)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1014" data-name="Línea 1014" y2="1.917" transform="translate(8.036 6.708)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_11414" data-name="Trazado 11414" d="M25.32,20.53l3.76,1.691a2.847,2.847,0,0,1,1.412,1.97v6.781" transform="translate(-17.286 -11.9)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_11415" data-name="Trazado 11415" d="M15.867,20.52l-3.815,1.7a2.847,2.847,0,0,0-1.412,1.97v2.145l.005,1.144v3.081a.406.406,0,0,0,.41.41h12.79" transform="translate(-10.64 -11.896)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1016" data-name="Línea 1016" x1="1.404" y1="1.591" transform="translate(5.229 8.625)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1017" data-name="Línea 1017" y1="1.591" x2="1.404" transform="translate(6.632 8.625)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_5701" data-name="Trazado 5701" d="M23.2,12.926a2.644,2.644,0,1,1-5.287,0" transform="translate(-13.93 -8.458)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_5702" data-name="Trazado 5702" d="M17.9,9.23V7.518a2.721,2.721,0,0,1,2.384-2.745,2.644,2.644,0,0,1,2.9,2.631V9.23" transform="translate(-13.929 -4.761)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON NOTICE
    addIconMenu('.oc-submenu-gen__cont-nav .notice .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="15.625" height="18.942" viewBox="0 0 15.625 18.942">
    <g id="Grupo_13062" data-name="Grupo 13062" transform="translate(-1905.979 39.75)">
        <path id="Trazado_11413" data-name="Trazado 11413" d="M13.642,7H22.8V23.956H10.058V11.682" transform="translate(1898.055 -45.513)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <rect id="Rectángulo_4557" data-name="Rectángulo 4557" width="6.265" height="6.308" transform="translate(1911.445 -34.841)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1491" data-name="Línea 1491" x2="4.975" transform="translate(1911.445 -25.489)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <ellipse id="Elipse_2151" data-name="Elipse 2151" cx="1.504" cy="1.504" rx="1.504" ry="1.504" transform="translate(1906.729 -39)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON DOC
    addIconMenu('.oc-submenu-gen__cont-nav .doc .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="15.624" height="18.942" viewBox="0 0 15.624 18.942">
    <g id="Grupo_13061" data-name="Grupo 13061" transform="translate(-1912.614 48.205)">
        <path id="Trazado_11425" data-name="Trazado 11425" d="M13.642,7H22.8V23.956H10.058V11.682" transform="translate(1904.691 -53.969)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <g id="Grupo_13060" data-name="Grupo 13060">
        <line id="Línea_1489" data-name="Línea 1489" x2="6.326" transform="translate(1918.081 -35.856)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1492" data-name="Línea 1492" x2="6.326" transform="translate(1918.081 -39)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1493" data-name="Línea 1493" x2="6.326" transform="translate(1918.081 -42.144)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1491" data-name="Línea 1491" x2="4.975" transform="translate(1918.081 -32.945)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </g>
        <ellipse id="Elipse_2152" data-name="Elipse 2152" cx="1.504" cy="1.504" rx="1.504" ry="1.504" transform="translate(1913.364 -47.455)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON IMAGE
    addIconMenu('.oc-submenu-gen__cont-nav .image .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="16.114" height="13.872" viewBox="0 0 16.114 13.872">
    <g id="Grupo_12977" data-name="Grupo 12977" transform="translate(0.75 0.75)">
        <path id="Trazado_9055" data-name="Trazado 9055" d="M15.773,6h-2.14l-1-2.188H7.573L6.573,6H4.227A1.534,1.534,0,0,0,2.693,7.536v7.116a1.534,1.534,0,0,0,1.534,1.534H15.773a1.534,1.534,0,0,0,1.534-1.534V7.536A1.534,1.534,0,0,0,15.773,6Z" transform="translate(-2.693 -3.814)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <circle id="Elipse_1335" data-name="Elipse 1335" cx="2.22" cy="2.22" r="2.22" transform="translate(5.087 4.485)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);


    // ICON VIDEO
    addIconMenu('.oc-submenu-gen__cont-nav .video .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="18.673" height="13.323" viewBox="0 0 18.673 13.323">
    <g id="Grupo_13048" data-name="Grupo 13048" transform="translate(-396.25 -387.722)">
        <g id="Grupo_9821" data-name="Grupo 9821" transform="translate(397 388.472)">
        <rect id="Rectángulo_139" data-name="Rectángulo 139" width="11.823" height="11.823" transform="translate(0)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_236" data-name="Trazado 236" d="M1334.014,3009.173l-5.349-3.458v-4.906l5.349-3.458Z" transform="translate(-1316.841 -2997.35)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </g>
    </g>
    </svg>`);
}
