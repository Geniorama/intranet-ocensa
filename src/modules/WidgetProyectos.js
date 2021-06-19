import $, { each } from "jquery";
import "../../node_modules/slick-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


var $owlProjects = $('.owl-carousel-projects').owlCarousel({
    items: 5,
    nav: true,
    navText: [`<svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
    <path id="Trazado_12569" data-name="Trazado 12569" d="M3.621,7.243.6,4.225l-.6-.6L3.621,0" transform="translate(1 1.414)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`,
    
    `<svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
    <path id="Trazado_12568" data-name="Trazado 12568" d="M3.621,7.243.6,4.225l-.6-.6L3.621,0" transform="translate(5.035 8.657) rotate(180)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</svg>`]
})


$('#wdg-proyectos .wdg-proyectos__btn-crear').click(function(e) {
    e.preventDefault()

    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#publicaciones-inc').slideDown()
})

$('#wdg-proyectos .oc-btn-proyectos__crear').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-form').slideDown()
})

$('#wdg-proyectos .wdg-proyectos__form-close').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-intro').slideDown()
})

$('#wdg-grupos-trabajo .wdg-grupos-trabajo__iniciar').click(function(e) {
    e.preventDefault()

    $('#wdg-grupos-trabajo .oc-widget-template__body').slideUp()
    $('#wdg-grupos-trabajo-intro').slideDown()

    // $('#wdg-grupos-trabajo .wdg-grupos__car').slick('refresh')
    $('#wdg-grupos-trabajo .wdg-grupos__car').slick('resize')

    $('#wdg-grupos-trabajo .wdg-grupos__car').css('height', '338px');
    $('#wdg-grupos-trabajo .wdg-grupos__car').css('overflow', 'hidden');
    // height: 334px;
    // overflow: hidden;
})