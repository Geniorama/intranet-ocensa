import $, { each } from "jquery";

let id_estacion = $('.oc-estaciones .oc-content').attr('id')

if(id_estacion){
    let perfil_recorrido = document.querySelectorAll('.oc-recorrido__grafica .oc-recorrido__item')
    for (const item of perfil_recorrido) {
        let data_id = item.dataset.id

        if(data_id == id_estacion){
            item.classList.add('active')
        }
    }
}

// Casanare selector perfil oleoducto
$('.oc-est-casanare .oc-recorrido__mapa #Trazado_5048-2').attr('class', 'active')
$('.oc-index-casanare .oc-recorrido__mapa #Trazado_5048-2').attr('class', 'active')

// Boyacá selector perfil oleoducto
$('.oc-est-boyaca .oc-recorrido__mapa #Componente_128_4').attr('class', 'active')
$('.oc-index-boyaca .oc-recorrido__mapa #Componente_128_4').attr('class', 'active')

// Santander selector perfil oleoducto
$('.oc-est-santander .oc-recorrido__mapa #Componente_130_33').attr('class', 'active')
$('.oc-index-santander .oc-recorrido__mapa #Componente_130_33').attr('class', 'active')

// Antioquia selector perfil oleoducto
$('.oc-est-antioquia .oc-recorrido__mapa #Componente_131_4').attr('class', 'active')
$('.oc-index-antioquia .oc-recorrido__mapa #Componente_131_4').attr('class', 'active')

// Cordoba Perfil Oleoducto
$('.oc-est-cordoba .oc-recorrido__mapa #Componente_132_4').attr('class', 'active')
$('.oc-index-cordoba .oc-recorrido__mapa #Componente_132_4').attr('class', 'active')

// Sucre Perfil Oleoducto
$('.oc-est-sucre .oc-recorrido__mapa #Componente_133_4').attr('class', 'active')
$('.oc-index-sucre .oc-recorrido__mapa #Componente_133_4').attr('class', 'active')