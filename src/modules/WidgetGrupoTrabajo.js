import $, { each } from "jquery";

$('#wdg-grupos-trabajo .wdg-grupos-trabajo__iniciar').click(function(e) {
    e.preventDefault()

    $('#wdg-grupos-trabajo .oc-widget-template__body').slideUp()
    $('#wdg-grupos-trabajo-intro').slideDown()

    $('#wdg-grupos-trabajo .wdg-grupos__car').slick('refresh')
    $('#wdg-grupos-trabajo .oc-members-carousel').slick('refresh')
})
