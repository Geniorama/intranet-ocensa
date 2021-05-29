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

$('.oc-est-casanare .oc-recorrido__mapa #Trazado_5048-2').attr('class', 'active')