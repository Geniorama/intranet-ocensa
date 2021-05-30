import $, { each } from "jquery";
import "../../node_modules/slick-carousel";

$('.oc-widget-network__content__slider').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  arrows: false,
  dots: true,
  responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }
  ]
})

$('.oc-widget-network__content__buttons .oc-btn').click(function(e) {
  e.preventDefault()
  const target = $(this).attr('data-target')
  $('.oc-widget-network__content__buttons .oc-btn').removeClass('oc-btn-active')
  $('.oc-widget-network__content__buttons .oc-btn').addClass('oc-btn-inactive')
  $(this).removeClass('oc-btn-inactive')
  $(this).addClass('oc-btn-active')
  $('.oc-widget-network__content__panel').slideUp()
  $(target).slideDown()
  $(target).find('.oc-widget-network__content__slider').slick('refresh');

  $('.oc-widget-network__content__buscador__close').click(function(e) {
    e.preventDefault()
    $('.oc-panel-agregar').slideUp()
    $('#wdg-mis-contactos').slideDown()
    $('.oc-widget-network__content__buttons .oc-btn').removeClass('oc-btn-active')
    $('.oc-widget-network__content__buttons .btn-contactos').removeClass('oc-btn-inactive')
    $('.oc-widget-network__content__buttons .btn-contactos').addClass('oc-btn-active')
  })
})

$('.oc-item__radio-button').click(function(e) {
  e.preventDefault()

  if($(this).hasClass('active')){
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
})