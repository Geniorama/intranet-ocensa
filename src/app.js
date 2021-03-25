// Libs
import $ from "jquery";
import 'bootstrap';
import "./../node_modules/slick-carousel";


// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Cabin-Bold.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";


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
import "./img/caja-widgets/widget-3-grupos.svg";
import "./img/caja-widgets/widget-4-enlaces_rapidos.svg";
import "./img/caja-widgets/widget-5-mis_apps.svg";
import "./img/caja-widgets/widget-6-indicadores.svg";
import "./img/caja-widgets/widget-7-noticias.svg";
import "./img/caja-widgets/widget-8-agenda_calendario.svg";

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