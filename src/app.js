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
import "./img/header/icon_logout.svg";
import "./img/foto-prueba-slide.jpg";
import "./img/icon-slide-calendario.svg";
import "./img/foto-prueba-perfil.jpg";

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
    dots: true
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
