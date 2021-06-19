import $, { each } from "jquery";

$('#wdg-publicaciones .wdg-publicaciones__agregar').click(function(e) {
    e.preventDefault()

    $('#wdg-publicaciones .oc-widget-template__body').slideUp()
    $('#pub-incr').slideDown()
})

$('#wdg-publicaciones .wdg-proyectos__form-close').click(function(e) {
    e.preventDefault()

    $('#wdg-publicaciones .oc-widget-template__body').slideUp()
    $('#widget-publicaciones-intro').slideDown()

    $('#widget-publicaciones-intro .wdg-publicaciones__car').slick('refresh')
})
