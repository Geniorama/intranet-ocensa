import $, { each } from "jquery";

$('#wdg-proyectos .wdg-proyectos__btn-crear').click(function(e) {
    e.preventDefault()

    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#publicaciones-inc').slideDown()
})

$('#wdg-proyectos .oc-btn-proyectos__crear').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-form').slideDown()
    $('.oc-members-carousel').slick('refresh')
})

$('#wdg-proyectos .wdg-proyectos__form-close').click(function(e) {
    e.preventDefault()
    $('#wdg-proyectos .oc-widget-template__body').slideUp()
    $('#wdg-proyectos-intro').slideDown()
    $('.oc-members-carousel').slick('refresh')
})
