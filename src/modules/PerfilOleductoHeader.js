import $, { each } from "jquery";

$('.oc-img-header__button-sistema').click(function(e) {
    e.preventDefault()
    $('.oc-img-header__sistema').slideToggle('slow', function() {
        if ($('.oc-img-header__sistema').is(':visible')) {
            $('.oc-img-header__button-sistema .oc-img-header__button-sistema__text').text('Cerrar')
            $('.oc-img-header__button-sistema').addClass('is-open')
        }
        else {
            $('.oc-img-header__button-sistema .oc-img-header__button-sistema__text').text('Ver sistema Ocensa')
            $('.oc-img-header__button-sistema').removeClass('is-open')
            // some code when content is shown
        }
    })
})