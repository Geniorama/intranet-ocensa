import $, { each } from "jquery";
import "../../node_modules/slick-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



$('#wdg-proyectos .wdg-proyectos__btn-crear').click(function(e) {
    e.preventDefault()

    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#publicaciones-inc').slideDown()
})

$('#wdg-proyectos .oc-btn-proyectos__crear').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-form').slideDown()

    // $('#wdg-proyectos .oc-members-carousel').slick('refresh')
})

$('#wdg-proyectos .wdg-proyectos__form-close').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-intro').slideDown()

    $('#wdg-proyectos .wdg-proyectos__car').slick('refresh')
    $('#wdg-proyectos .oc-members-carousel').trigger('refresh.owl.carousel');
    
})
