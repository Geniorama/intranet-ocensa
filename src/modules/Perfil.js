import $, { each } from "jquery";

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

$( ".oc-custom-select__options__opt" ).each(function( index ) {
    let format_value = quitarAcentos($( this ).find('.text-option').text());
    format_value = format_value.replace(' ', '_')
    $('#perfil-estado').append(new Option(quitarAcentos($( this ).find('.text-option').text()), format_value))
});

$('.oc-custom-select').click(function(e) {
    e.preventDefault()

    if($(".oc-custom-select__options").is(":visible")){
        $(".oc-custom-select__options").fadeOut();
    } else{
        $(".oc-custom-select__options").fadeIn();
    }

    $('.oc-custom-select__options__opt').click(function(e){
        e.preventDefault()

        let el_html = $(this).html();
        let text_el_html = $(this).find('.text-option').text();
        text_el_html = quitarAcentos(text_el_html.replace(' ', '_'));

        $('#perfil-estado option').attr('selected', false);

        $('#perfil-estado option[value='+text_el_html+']').attr('selected', true);

        $('.oc-custom-select__default').html(el_html);

        $(".oc-custom-select__options").fadeOut('fast');
    })
})