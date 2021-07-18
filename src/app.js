// Libs
import $, { each } from "jquery";
import 'bootstrap';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";
import Dragscroll from "dragscroll";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Cabin-Bold.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Black.ttf";
import "./fonts/Merriweather-BoldItalic.ttf";
import "./fonts/Merriweather-Italic.ttf";
import "./fonts/HelveticaNeueLTStd-BlkCn.ttf";
import "./fonts/helvetica_light.ttf";


// Modules
import "./styles/app.sass";
import "./modules/WidgetCalendario";
import "./modules/Estaciones";
import "./modules/EstacionesPorvenir";
import "./modules/WidgetGaleria";
import "./modules/WidgetNetwork";
import "./modules/PerfilOleoducto";
import "./modules/PerfilOleductoHeader";
import "./modules/SubMenu";
import "./modules/WidgetProyectos";
import "./modules/Perfil";
import "./modules/WidgetPublicacion";
import "./modules/WidgetGrupoTrabajo";

// Images
import "./img/logo-red.svg";
import "./img/barra-lateral-azul/oc-avatar.jpg";
import "./img/barra-lateral-azul/menu-perfil-0-inicio.svg";
import "./img/barra-lateral-azul/menu-perfil-1-correo.svg";
import "./img/barra-lateral-azul/menu-perfil-2-mensajes.svg";
import "./img/barra-lateral-azul/menu-perfil-3-reuniones.svg";
import "./img/barra-lateral-azul/menu-perfil-4-grupos.svg";
import "./img/header/logo_ocensa_logo.png";
import "./img/header/icon_logout.svg";
import "./img/header/arrow-widgets.svg";
import "./img/header/lupa_buscador.svg";
import "./img/caja-widgets/widget-1-correo.svg";
import "./img/caja-widgets/widget-2-agenda.svg";
import "./img/caja-widgets/widget-3-grupos.svg";
import "./img/caja-widgets/widget-4-enlaces_rapidos.svg";
import "./img/caja-widgets/widget-5-mis_apps.svg";
import "./img/caja-widgets/widget-6-indicadores.svg";
import "./img/caja-widgets/widget-7-noticias.svg";
import "./img/caja-widgets/widget-8-agenda_calendario.svg";
import "./img/menu-principal/logo_ocensa_logo2.png";
import "./img/menu-principal/icon-nosotros.svg";
import "./img/menu-principal/icon-direcciones.svg";
import "./img/menu-principal/icon-territorio.svg";
import "./img/menu-principal/icon-como-vamos.svg";
import "./img/menu-principal/icon-ayuda.svg";
import "./img/menu-principal/logo_ocensa_logosimbolo.png";

import "./img/foto-prueba-slide.jpg";
import "./img/icon-slide-calendario.svg";
import "./img/foto-prueba-perfil.jpg";
import "./img/logo_ocensa_logosimbolo.png";
import "./img/footer/facebook.svg";
import "./img/footer/youtube.svg";

import "./img/header/icon_menu_mobile.svg";
import "./img/header/icon-encuestas.svg";
import "./img/header/icon-galeria.svg";
import "./img/imag-noticias.jpg";
import "./img/imag3.jpg";
import "./img/imag4.jpg";
import "./img/imag2.jpg";
import "./img/imag1.jpg";

import "./img/like-icon.svg";
import "./img/comments-icon.svg";
import "./img/favorite-icon.svg";
import "./img/share-icon.svg";
import "./img/img-single-noticias.jpg";
import "./img/avatar-noticias.png";
import "./img/footer/instagram.svg";
import "./img/footer/twitter.svg";
import "./img/footer/icon-download.svg";
import "./img/search/img-profile-search.jpg";
import "./img/search/img-notice-search.jpg";
import "./img/search/img-docs-search.jpg";
import "./img/search/img-img-search.jpg";
import "./img/search/img-video-search.jpg";

import "./img/search/btn-panels.svg";
import "./img/search/panel-profile.svg";
import "./img/search/panel-noticias.svg";
import "./img/search/panel-documentos.svg";
import "./img/search/panel-imagenes.svg";
import "./img/search/panel-video.svg";
import "./img/nosotros/icon1-section2.svg";

import "./img/nosotros/timeline-01.jpg";
import "./img/nosotros/timeline-02.jpg";
import "./img/nosotros/timeline-03.jpg";
import "./img/nosotros/timeline-04.jpg";
import "./img/nosotros/timeline-05.jpg";
import "./img/nosotros/timeline-06.jpg";
import "./img/nosotros/timeline-07.jpg";
import "./img/nosotros/timeline-08.jpg";
import "./img/nosotros/timeline-09.jpg";
import "./img/nosotros/timeline-10.jpg";
import "./img/nosotros/timeline-11.jpg";
import "./img/nosotros/timeline-12.jpg";
import "./img/nosotros/timeline-13.svg";
import "./img/nosotros/timeline-14.svg";
import "./img/nosotros/timeline-15.jpg";

import "./img/nosotros/razon-01.svg";
import "./img/nosotros/razon-02.jpg";
import "./img/nosotros/razon-03.svg";
import "./img/nosotros/razon-04.jpg";
import "./img/nosotros/razon-05.svg";
import "./img/nosotros/razon-06.svg";
import "./img/nosotros/razon-07.svg";
import "./img/nosotros/razon-08.svg";

import "./img/nosotros/img-gris.jpg";
import "./img/nosotros/img-covenas.jpg";
import "./img/nosotros/icon-nosotros2.svg";
import "./img/nosotros/img-miraflores.jpg";
import "./img/nosotros/img-belleza.jpg";
import "./img/nosotros/icon1-section3.svg";
import "./img/nosotros/icon2-section3.svg";
import "./img/nosotros/list-icon1.svg";
import "./img/nosotros/list-icon2.svg";
import "./img/nosotros/list-icon3.svg";
import "./img/nosotros/list-icon4.svg";
import "./img/nosotros/list-icon5.svg";
import "./img/nosotros/list-icon6.svg";
import "./img/nosotros/img-gris-morado.jpg";
import "./img/nosotros/razon/imag-razondeser-1.jpg"

import "./img/header/ocensa-logo-nuevo.svg";
import "./img/header/ocensa-logo-nuevo-blanco.svg";
import "./img/footer/ocensa-logosimbolo.svg";
import "./img/nosotros/flecha-abajo.svg";

import "./img/nosotros/cultura/cultura-icon-6.png";
import "./img/nosotros/razon/razon-vision-est.svg";
import "./img/nosotros/cultura/icon-nosotros-cultura-2.svg";
import "./img/nosotros/cultura/icon-nosotros-cultura-3.svg";

import "./img/nosotros/cultura-01.jpg";
import "./img/nosotros/cultura-02.jpg";
import "./img/nosotros/cultura-03.jpg";
import "./img/nosotros/cultura-04.jpg";
import "./img/nosotros/cultura-05.jpg";
import "./img/nosotros/iconos/razon-de-ser-2.svg";
import "./img/nosotros/iconos/razon-de-ser-3.svg";
import "./img/nosotros/imagenes/razon-de-ser-torta.png";
import "./img/nosotros/iconos/historia-1.svg";
import "./img/nosotros/imagenes/historia-1998.jpg";
import "./img/nosotros/fotos/historia-2018-foto-descargadero-min.jpg";
import "./img/nosotros/imagenes/historia-2010-grafica-01.jpg";
import "./img/nosotros/iconos/cultura-2.svg";
import "./img/nosotros/iconos/historia_bombeo_barriles.svg";
import "./img/nosotros/iconos/historia_bombeo_tlu.svg";
import "./img/nosotros/fotos/historia-2010-nace-cenit-min.jpeg";
import "./img/nosotros/fotos/1-Nosotros Cultura-4.jpg";
import "./img/nosotros/fotos/1-Nosotros Cultura-inicio.jpg";
import "./img/nosotros/fotos/1-Nosotros Historia-inicio.jpg";
import "./img/nosotros/fotos/1-Nosotros Razón de ser-4.jpg";
import "./img/nosotros/fotos/1-Nosotros Razón de ser-inicio.jpg";

// Videos
import "./videos/1-Nosotros Cultura-4.mp4";
import "./videos/1-Nosotros Cultura-inicio.mp4";
import "./videos/1-Nosotros Historia-inicio.mp4";
import "./videos/1-Nosotros Razón de ser-4.mp4";
import "./videos/1-Nosotros Razón de ser-inicio.mp4";

// Mapa  Casanare
import "./img/casanare/mapa-casanare.png";
import "./img/casanare/icon-plus.svg";
import "./img/casanare/point-01.svg";
import "./img/casanare/icon-location.svg";
import "./img/casanare/icon-profile.svg";
import "./img/casanare/icon-water.svg";
import "./img/casanare/icon-yellow.svg";
import "./img/casanare/imag-mapa-linea-casanare.png";
import "./img/casanare/icon-segmentos.svg";
import "./img/casanare/icon-altura.svg";
import "./img/casanare/Capa 1.svg";
import "./img/casanare/dertamento-casanare-sabana.svg";
import "./img/casanare/Grupo 14507.svg";
import "./img/casanare/Capa_9.svg";
import "./img/casanare/Capa 2.svg";
import "./img/casanare/galeria-estaciones-1.jpg";
import "./img/casanare/G0040195.svg";
import "./img/casanare/Cupiagua 1.jpg";
import "./img/casanare/capa-3.svg";
import "./img/casanare/Grupo 14876.jpg";
import "./img/casanare/Grupo 13762.svg";
import "./img/casanare/Grupo 14876-2.jpg";
import "./img/casanare/Grupo 14876-3.jpg";
import "./img/casanare/cusiana-1.jpg";
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_municipio_2_monterrey.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/banco-habitat-01.jpg";
import "./img/estaciones/circle-image-ex.svg";


//Casanare - Depto Casanare
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/depto_casanare.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_capital.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_corregimientos.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_habitantes_cabecera.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_habitantes_zona_rural.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_habitantes.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_municipios.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/1-icon-departamento-casanare/icon_ventana_modal_departamento_casanare_superficie.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/departamento-casanare.jpg";

//Casanare - Estación El Porvenir
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_estacion_porvenir.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/estacion-el-porvenir.jpg";

// Casanare - Estación Cuasiana
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_estacion_cusiana.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/estacion-cusiana.jpg";
import "./img/estaciones/cusiana/foto-descargadero.jpg";

// Casanare - Estación Cupiagua
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_estacion_cupiagua.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/estacion_cupiagua.jpg";

// Casanare - Agua azul
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/municipio-1-aguazul.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/municipio-Aguazul.jpg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_altitud.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_area_rural.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_area_urbana.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_habitantes_cabecera.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_habitantes_zona_rural.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_habitantes.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_superficie.svg";
import "./img/casanare/iconos/iconos-descripcion-ventanas-modales-pendientes/2-icon-municipio-aguazul/icon_ventana_modal_municipio_aguazul_temperatura.svg";

// Casanare - Tauramena
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_municipio_3_tauramena.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/municipio-tauramena.jpg";

//Casanare - Monterrey
import "./img/casanare/monterrey.jpg";
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/municipio-2-monterrey.svg";

//Casanare - Fauna
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_fauna.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Fauna-01.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Fauna-02.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Fauna-03.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Fauna-04.jpg";

//Casanare - Banco de Hábitat
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_habitat_ecosistema.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/banco-habitat-01.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/banco-habitat-02.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/banco-habitat-03.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/banco-habitat-04.jpg";

//Casanare - Ecosistema
import "./img/casanare/imag-territorio-VENTANAS_MODALES/ecosistema-01.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/ecosistema-02.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/ecosistema-03.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/ecosistema-04.jpg";

//Casanare - Clima
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_clima.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Clima-01.jpg";

//Casanare - Hidrografia
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/hidrografia.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/Hidrografia-01a.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/hidrografia-02.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/hidrografia-03.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/hidrografia-04.png";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/hidrografia casanare-a.jpg";

//Casanare - Comunidades Mujer
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_comunidad.svg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/mujer-desarrollo-01.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/mujer-desarrollo-02.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/mujer-desarrollo-03.jpg";

//Casanare - Comunidades
import "./img/casanare/imag-territorio-VENTANAS_MODALES/buena-vecindad-Paez-01.jpg";
import "./img/casanare/imag-territorio-VENTANAS_MODALES/buena-vecindad-Paez-02.jpg";

//Casanare - Comités de Seguimiento
import "./img/casanare/iconos/iconos-TITULOS-ventanas-modales/modal_comites.svg";

// Img widgets
import "./img/widgets-ocensa/img-widget-calendario/icon-agenda-calendario.svg";
import "./img/widgets-ocensa/img-widget-calendario/boton-ver-mas.svg";
import "./img/widgets-ocensa/img-widget-calendario/icon-cerrar-dia.svg";
import "./img/widgets-ocensa/img-widget-calendario/flecha-ir.svg";
import "./img/widgets-ocensa/img-widget-calendario/avatar-prof.png";
import "./img/widgets-ocensa/img-widget-calendario/avatar-prof-2.png";
import "./img/widgets-ocensa/img-widget-calendario/icon-cerrar-dia.svg";
import "./img/widgets-ocensa/img-widget-calendario/icon-star.svg";
import "./img/widgets-ocensa/button-close.svg";
import "./img/widgets-ocensa/slick-arrow-left.svg";
import "./img/widgets-ocensa/slick-arrow-right.svg";

// Estaciones
import "./img/estaciones/cupiagua/fotos-cupiagua/slide-1.png";
import "./img/estaciones/cupiagua/fotos-cupiagua/ubicacion.jpg";
import "./img/estaciones/cupiagua/2-icon-la-estacion/icono_menu-la_estacion.svg";
import "./img/estaciones/cupiagua/2-icon-la-estacion/estacion_almacena.svg";
import "./img/estaciones/cupiagua/2-icon-la-estacion/crudo_bombeado.svg";
import "./img/estaciones/cupiagua/2-icon-la-estacion/usado_diluyente.svg";
import "./img/estaciones/cupiagua/3-icon-ubicacion/6_5_km.svg";
import "./img/estaciones/cupiagua/3-icon-ubicacion/1_km.svg";
import "./img/estaciones/cupiagua/4-icon-almacenamiento/icono_menu-almacenamiento.svg";
import "./img/estaciones/cupiagua/4-icon-almacenamiento/tanques_grandes.svg";
import "./img/estaciones/cupiagua/5-icon-distancia-de-linea/icono_menu-distancia_linea.svg";
import "./img/estaciones/cupiagua/5-icon-distancia-de-linea/estacion_cupiagua.svg";
import "./img/estaciones/cupiagua/5-icon-distancia-de-linea/estacion_cusiana.svg";
import "./img/estaciones/cupiagua/5-icon-distancia-de-linea/line-divider.svg";
import "./img/estaciones/button-arrow-right.svg";
import "./img/estaciones/wdg-arrow-down.svg";
import "./img/estaciones/cupiagua/3-icon-ubicacion/icono_menu-ubicacion.svg";
import "./img/estaciones/el-porvenir/3-icon-ubicacion/3-icon-menu-ubicacion.svg";
import "./img/estaciones/cupiagua/5-icon-distancia-de-linea/dato.svg";
import "./img/estaciones/cupiagua/6-icon-sistema-de-bombeo/icono_menu-sistema_bombeo.svg";
import "./img/estaciones/cupiagua/6-icon-sistema-de-bombeo/unidad_de_transferencia_line.svg";
import "./img/estaciones/cupiagua/6-icon-sistema-de-bombeo/unidad_booster_electrica_line.svg";
import "./img/estaciones/cupiagua/7-icon-personal/icono_menu-personal.svg";
import "./img/estaciones/cupiagua/7-icon-personal/icon-arrow-personal.svg";
import "./img/estaciones/cupiagua/8-icon-clima/icono_menu-clima.svg";
import "./img/estaciones/cupiagua/8-icon-clima/clima.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/icono_menu-como_llegar.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/distancia.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/tiempo_aproximado.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/via_aerea.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/via_terrestre.svg";
import "./img/estaciones/cupiagua/9-icon-como-llegar/icono-flecha-azul.svg";

// ESTACION EL PORVENIR
import "./img/estaciones/el-porvenir/fotos-elPorvenir/1-slide-1.png";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/1-slide-2-min.jpg";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/1-slide-3-min.jpg";
import "./img/estaciones/el-porvenir/2-icon-la-estacion/estacion_porvenir.svg";
import "./img/estaciones/el-porvenir/2-icon-la-estacion/rebombeo.svg";
import "./img/estaciones/el-porvenir/2-icon-la-estacion/barriles.svg";
import "./img/estaciones/el-porvenir/3-icon-ubicacion/altitud.svg";
import "./img/estaciones/el-porvenir/3-icon-ubicacion/temperatura.svg";
import "./img/estaciones/el-porvenir/3-icon-ubicacion/estacion_rio.svg";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/2.ubicacion.jpg";
import "./img/estaciones/el-porvenir/4-icon-almacenamiento/icon_territorio_el_porvenir_almacenamiento_tanques_crudo_pesado_mezcla.svg";
import "./img/estaciones/el-porvenir/4-icon-almacenamiento/icon_territorio_el_porvenir_almacenamiento_tanque_crudo_mezcla.svg";
import "./img/estaciones/el-porvenir/4-icon-almacenamiento/icon_territorio_el_porvenir_almacenamiento_tanque_almacenamiento_total.svg";
import "./img/estaciones/el-porvenir/4-icon-almacenamiento/icon-camara.svg";
import "./img/estaciones/el-porvenir/7-icon-personal/diego-guzman.png";
import "./img/estaciones/el-porvenir/7-icon-personal/elkin-orjuela.png";
import "./img/estaciones/el-porvenir/7-icon-personal/sin-foto-personal.png";
import "./img/estaciones/el-porvenir/7-icon-personal/hugo-garcia.png";
import "./img/estaciones/el-porvenir/8-icon-demografico/icon_territorio_el_porvenir_demografico_icono_menu.svg";
import "./img/estaciones/el-porvenir/8-icon-demografico/grafica-demografico-01.svg";
import "./img/estaciones/el-porvenir/8-icon-demografico/grafica-demografico-02.svg";
import "./img/estaciones/el-porvenir/8-icon-demografico/grafica-demografico-03.svg";
import "./img/estaciones/el-porvenir/9-icon-seguridad-ONDA/icon_territorio_el_porvenir_seguridad_icono_menu.svg";
import "./img/estaciones/el-porvenir/9-icon-seguridad-ONDA/icon_territorio_el_porvenir_seguridad_alerta_defensoria.svg"
import "./img/estaciones/el-porvenir/12-icon-contrastistas/icon_territorio_el_porvenir_contratistas_icono_menu.svg";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/logo_vise.jpg";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/logo_contratista_massy.png";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/logo_vanti.jpg";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/logo-cenit.png";
import "./img/estaciones/el-porvenir/fotos-elPorvenir/logo_stm.jpg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_aireacion_piscinas.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_icono_menu.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_licencia_ambiental.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_plan_manejo_ambiental.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_potencia_135.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_recoleccion_aguas-lluvia.svg";
import "./img/estaciones/el-porvenir/13-icon-gestion-ambiental/icon_territorio_el_porvenir_gestion_ambiental_separacion_aguas_lluvia.svg";
import "./img/estaciones/el-porvenir/11-icon-seguridad-hse/icon_territorio_el_porvenir_seguridad_hse_icono_menu.svg";
import "./img/estaciones/line-intercalada.svg";
import "./img/casanare/Cusiana-slide-1.jpg";
import "./img/casanare/Cusiana-slide-2.jpg";
import "./img/casanare/Cusiana-slide-3.jpg";
import "./img/estaciones/cusiana/2-icon-la-estacion/estacion_almacena-1.svg";
import "./img/estaciones/cusiana/2-icon-la-estacion/crudo_bombeado-1.svg";
import "./img/estaciones/cusiana/2-icon-la-estacion/recibe_crudo-1.svg";
import "./img/estaciones/cusiana/2-icon-la-estacion/barriles-1.svg";
import "./img/casanare/foto-aerea cusiana.jpg";
import "./img/estaciones/cusiana/3-icon-ubicacion/altitud.svg";
import "./img/estaciones/cusiana/3-icon-ubicacion/temperatura.svg";
import "./img/estaciones/cusiana/3-icon-ubicacion/estacion_rio.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/B-tanques_grandes.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/tanque_mediano.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/tanque_pequeno.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/E-barriles.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/C-barriles.svg";
import "./img/estaciones/cusiana/4-icon-almacenamiento/B-barril.svg";
import "./img/estaciones/cusiana/camara.svg";
import "./img/estaciones/cusiana/video.svg";
import "./img/estaciones/cusiana/5-icon-distancia-de-linea/diametro_tubo.svg";
import "./img/estaciones/cusiana/5-icon-distancia-de-linea/estacion_cusiana copia.svg";
import "./img/estaciones/cusiana/6-icon-sistema-de-bombeo/6-icon_menu-distancia_linea.svg";
import "./img/estaciones/cusiana/6-icon-sistema-de-bombeo/bombeo-1.svg";
import "./img/estaciones/cusiana/6-icon-sistema-de-bombeo/bombeo-2.svg";
import "./img/estaciones/el-porvenir/5-icon-distancia-linea/icon_territorio_el_porvenir_distancia de línea_estacion_paez.svg";
import "./img/estaciones/el-porvenir/6-icon-sistema-bombeo/icon-bombeo1.svg";
import "./img/estaciones/el-porvenir/6-icon-sistema-bombeo/icon-bombeo2y4.svg";
import "./img/estaciones/el-porvenir/6-icon-sistema-bombeo/icon-bombeo3.svg";
import "./img/estaciones/el-porvenir/14-icon-solicitudes-ingreso/icon_territorio_el_porvenir_solicitudes_ingreso_icono_menu.svg";
import "./img/estaciones/el-porvenir/14-icon-solicitudes-ingreso/icon-download-green.svg";
import "./img/estaciones/el-porvenir/14-icon-solicitudes-ingreso/flecha-right-verde.svg";
import "./img/estaciones/el-porvenir/14-icon-solicitudes-ingreso/profile-send1.jpg";
import "./img/estaciones/el-porvenir/14-icon-solicitudes-ingreso/icon-envelope1.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/7-icon-menu-descargadero.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/capacidad_descarga.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/line-and-point.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/tiempo_descarga.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/point.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/line-and-point-2.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/numero_bahias.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/line-and-point-3.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/line-and-point-4.svg";
import "./img/estaciones/cusiana/7-icon-descargadero/tipo_carro_tanques.svg";

/*
======== WIDGETS OCENSA =======
*/

// Widget Galeria
import "./img/widgets-ocensa/img-widget-galeria/boton/boton–adelante.svg"
import "./img/widgets-ocensa/img-widget-galeria/boton/boton–atras.svg"
import "./img/widgets-ocensa/img-widget-galeria/boton/boton–cerrar.svg"
import "./img/widgets-ocensa/img-widget-galeria/boton/boton–compartir.svg"
import "./img/widgets-ocensa/img-widget-galeria/boton/boton–publicar.svg"

import "./img/widgets-ocensa/img-widget-galeria/fotos/gallery-img.jpg"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10604.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10606.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10609.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10611.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10613.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10615.png"
import "./img/widgets-ocensa/img-widget-galeria/fotos/Group 10617.png"

import "./img/widgets-ocensa/img-widget-galeria/imagen/logo_ocensa_logosimbolo.png"
import "./img/widgets-ocensa/img-widget-galeria/icon/arrow-left-blue.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/arrow-right-blue.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-cerrar_mover.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon–comentario.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-comentario-2.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-compartir.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-compartir-2.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-galeria-images.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-galeria-video.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-like.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-like-2.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-photo.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon-play-video.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/icon–widget–galeria.svg"
import "./img/widgets-ocensa/img-widget-galeria/icon/Trazado 9367.svg"

import "./img/estaciones/el-porvenir/fotos-elPorvenir/4-sistema-bombeo-min.jpg"
import "./img/estaciones/el-porvenir/fotos-elPorvenir/3-almacenamiento.jpg"

import "./img/estaciones/el-porvenir/fotos-elPorvenir/3-almacenamiento.jpg"
import "./img/estaciones/el-porvenir/fotos-elPorvenir/3-almacenamiento.jpg"
import "./img/estaciones/cusiana/4-icon-almacenamiento/fotos-cusiana/3-almacenamiento-1-tanques-min.jpg"
import "./img/estaciones/cusiana/4-icon-almacenamiento/fotos-cusiana/3-almacenamiento-2-agua-min.jpg"
import "./img/estaciones/cusiana/4-icon-almacenamiento/fotos-cusiana/3-almacenamiento-3-diluyente-min.jpg"

import "./img/estaciones/cusiana/6-icon-sistema-de-bombeo/foto-sistema-bombeo.jpg"

import "./img/estaciones/cusiana/9-icon-demografico/demografico-3-generaciones.svg"
import "./img/estaciones/cusiana/9-icon-demografico/demografico-2-hombresymujeres.svg"
import "./img/estaciones/cusiana/13-icon-contratistas/logo_contratista_durangar.png"
import "./img/estaciones/cusiana/13-icon-contratistas/logo_contratista_omia.jpg"
import "./img/estaciones/cusiana/14-icon-gestion-ambiental/licencia_ambiental.svg"
import "./img/estaciones/cusiana/14-icon-gestion-ambiental/plan_manejo_ambiental.svg"
import "./img/estaciones/cusiana/14-icon-gestion-ambiental/sistema_aireacion_piscinas.svg"
import "./img/estaciones/cusiana/line-medium.svg";
import "./img/estaciones/cusiana/line-medium-2.svg";
import "./img/estaciones/cusiana/chulo-verde.svg";
import "./img/estaciones/cusiana/close-green.svg";
import "./img/estaciones/cusiana/13-icon-contratistas/logo-contratista-ismocol.png";

// PERFIL ESTACIONES CASANARE
import "./img/perfil-oleoducto-casanare/icon_perfil_ocensa_casanare.svg";
import "./img/perfil-oleoducto-casanare/recorrido-casanare.svg";
import "./img/perfil-oleoducto-casanare/icon_perfil_barco_recorrido.svg";
import "./img/perfil-oleoducto-casanare/icon-triangle.svg";
import "./img/perfil-oleoducto-casanare/cundinamarca-info.svg";

//Noticia Mujer Y Desarrollo
import "./img/casanare/noticias/img-notice-m-1.png";
import "./img/casanare/noticias/img-notice-m-2.png";
import "./img/casanare/noticias/img-notice-m-3.png";

import "./img/estaciones/sistema-arrow-down.svg";
// PERFIL OCENSA
import "./img/perfil-ocensa/img_perfil_usuario_ignacio.jpg";
import "./img/perfil-ocensa/icon-pencil-profile.svg";
import "./img/perfil-ocensa/icon_perfil_usuario_publicaciones.svg";
import "./img/perfil-ocensa/document-publicaciones.svg";
import "./img/perfil-ocensa/icon-downloader.svg";
import "./img/perfil-ocensa/icon_perfil_usuario_proyectos.svg";
import "./img/perfil-ocensa/member-elkin-orjuela.png";
import "./img/perfil-ocensa/member-ximena.png";
import "./img/perfil-ocensa/member-alexander.png";
import "./img/perfil-ocensa/icon-video-llamadas.svg";
import "./img/perfil-ocensa/icon-mensajes-perfil.svg";
import "./img/perfil-ocensa/icon-alarmas-profile.svg";
import "./img/perfil-ocensa/date-02-perfil-01.svg";
import "./img/perfil-ocensa/date-02-perfil-02.svg";
import "./img/perfil-ocensa/date-02-perfil-03.svg";
import "./img/perfil-ocensa/date-02-perfil-04.svg";
import "./img/perfil-ocensa/date-02-perfil-05.svg";
import "./img/perfil-ocensa/img-perfil-andres.jpg";
//Perfiles
import "./img/perfiles/icon-perfiles.svg";
import "./img/perfiles/doc-1.png";
import "./img/perfiles/icon-flecha-bg-verde.svg";
import "./img/perfiles/doc-2.png";
import "./img/perfiles/icon-perfiles-2.svg";
import "./img/perfiles/photo-pro1.svg";
import "./img/perfiles/photo-pro2.svg";
import "./img/perfiles/photo-pro3.svg";
import "./img/perfiles/photo-pro5.svg";
import "./img/perfiles/photo-pro-more.svg";
import "./img/perfiles/icon-organigrama.svg";
import "./img/perfiles/circle-gray.svg";
import "./img/perfiles/arrow-right-v2.svg";
import "./img/perfiles/arrow-left-v2.svg";

import "./img/widgets-ocensa/img-widget-network/icon-network.svg";
import "./img/casanare/cover-porvenir.png";
import "./img/perfiles/arrow-select-profile.svg";
import "./img/perfil-ocensa/icon-perfil-cumpleanos.svg";
import "./img/perfiles/organigrama/organigrama-diego-guzman.jpg";
import "./img/perfiles/organigrama/organigrama-hugo-garcia.jpg";
import "./img/perfiles/organigrama/organigrama-ignacio-gomez.jpg";
import "./img/casanare/img-perfil-porvenir-elkin.png"
import "./img/casanare/16-icon-menu-como-llegar.svg"
import "./img/casanare/3-icon-menu-ubicacion.svg"

// BOYACA MAPA
import "./img/boyaca/mapa/boyaca-mapa-3d.jpg";
import "./img/boyaca/mapa/icono-mapa-boyaca-01.svg";
import "./img/boyaca/mapa/imagen-mapa-linea.svg";
import "./img/boyaca/mapa/icon-grey-estacion.svg";

import "./img/boyaca/fotos/_Banner/_Banner-inicio-boyaca.jpg";
import "./img/boyaca/iconos/icon-slide-inicio/icon-mapa-boyaca.svg";
import "./img/boyaca/iconos/icon-slide-inicio/icons-group-slide-boyaca.svg";
import "./img/boyaca/fotos/ESTACIONES/estacion-miraflores.jpg";
import "./img/boyaca/fotos/ESTACIONES/estacion-paez.jpg";
import "./img/boyaca/fotos/ESTACIONES/estacion-vasconia.jpg";

import "./img/boyaca/fotos/EN-QUE-ESTAMOS/enqueestamos-miraflores.jpg";
import "./img/boyaca/fotos/EN-QUE-ESTAMOS/enqueestamos-paez.jpg";
import "./img/boyaca/fotos/EN-QUE-ESTAMOS/enqueestamos-vasconia.jpg";

// Ventanas modales Boyacá
import "./img/boyaca/iconos/vmodal-titulo_departamento_boyaca.svg";
import "./img/boyaca/fotos/VModal-Departamento/VModal-Departamento-boyaca.jpg";
import "./img/boyaca/iconos/int-ventanas-modales/1-icon-departamento-boyaca/icon_ventana_modal_departamento_boyaca_superficie.svg";
import "./img/boyaca/iconos/int-ventanas-modales/1-icon-departamento-boyaca/icon_ventana_modal_departamento_boyaca_municipios.svg";
import "./img/boyaca/iconos/int-ventanas-modales/1-icon-departamento-boyaca/icon_ventana_modal_departamento_boyaca_habitantes.svg";
import "./img/boyaca/iconos/int-ventanas-modales/1-icon-departamento-boyaca/icon_ventana_modal_departamento_boyaca_capital.svg";

// Modal Páez
import "./img/boyaca/iconos/vmodal-titulo_estacion_paez.svg";
import "./img/boyaca/fotos/VModal-Estacion-Paez/VModal-EstaciónPaez.jpg";

// Modal Miraflores
import "./img/boyaca/iconos/vmodal-titulo_estacion_miraflores.svg";
import "./img/boyaca/fotos/VModal-Estacion-miraflores/VModal-Estacion-miraflores.jpg";

// Modal Vasconia
import "./img/boyaca/iconos/vmodal-titulo_estacion_vasconia.svg";
import "./img/boyaca/fotos/VModal-Estacion-vasconia/foto-satelital-estacion-VASCONIA.jpg";

// Modal Base Soracá
import "./img/boyaca/iconos/vmodal-titulo_base_soraca.svg";
import "./img/boyaca/fotos/VModal-Base-soraca/soraca.jpg";

// Modal Mun Páez
import "./img/boyaca/iconos/vmodal-titulo_municipio.svg";
import "./img/boyaca/fotos/VModal-Municipio-paez/Municipio-paez.jpg";
import "./img/boyaca/iconos/int-ventanas-modales/2-icon-municipio-paez/icon_ventana_modal_municipio_paez_altitud.svg";
import "./img/boyaca/iconos/int-ventanas-modales/2-icon-municipio-paez/icon_ventana_modal_municipio_paez_temperatura.svg";

// Modal Mun Miraflores
import "./img/boyaca/fotos/VModal-Municipio-miraflores/municipio-miraflores.jpg";

// Modal Mun Puerto Boyacá
import "./img/boyaca/fotos/VModal-Municipio-puertoBoyaca/municipio-puerto-boyaca.jpg";

// Modal Mun Puerto Serviez
import "./img/boyaca/fotos/VModal-PuertoServiez/imag_ocensa_territorio_boyaca_1_municipio_puerto_serviez.jpg";

// Modal Ecosistema Boyacá
import "./img/boyaca/iconos/vmodal-titulo_ecosistema.svg";
import "./img/boyaca/fotos/VModal-Ecosistema/imag_ocensa_territorio_boyaca_1_ecosistema.jpg";
import "./img/boyaca/fotos/VModal-Ecosistema/imag_ocensa_territorio_boyaca_2_ecosistema.jpg";

// Modal Frailejón Boyacá
import "./img/boyaca/iconos/vmodal-titulo_frailejon.svg";
import "./img/boyaca/fotos/VModal-Frailejon/imag_ocensa_territorio_boyaca_1_frailejon.jpg";

// Modal Alto de las Flores
import "./img/boyaca/iconos/vmodal-titulo_el_punto_mas_alto.svg";
import "./img/boyaca/fotos/VModal-ElAltoDeLasFlores/imag_ocensa_territorio_boyaca_1_el_punto_mas_alto.jpg";

// Modal Fauna Boyacá
import "./img/boyaca/iconos/vmodal-titulo_fauna.svg";
import "./img/boyaca/fotos/VModal-Fauna/imag_ocensa_territorio_boyaca_1_fauna.jpg";
import "./img/boyaca/fotos/VModal-Fauna/imag_ocensa_territorio_boyaca_2_fauna.jpg";
import "./img/boyaca/fotos/VModal-Fauna/imag_ocensa_territorio_boyaca_3_fauna.jpg";
import "./img/boyaca/fotos/VModal-Fauna/imag_ocensa_territorio_boyaca_4_fauna.jpg";


// Modal Hidrografía Boyacá
import "./img/boyaca/iconos/vmodal-titulo_hidrografia.svg";
import "./img/boyaca/fotos/VModal-Hidrografía/imag_ocensa_territorio_boyaca_1_hidrografia.jpg";

// Modal Clima Boyacá
import "./img/boyaca/iconos/vmodal-titulo_clima.svg";
import "./img/boyaca/fotos/VModal-Clima/clima-boyaca-slide.jpg";

// Modal Parque Nacional Natural Páramo de Pisba
import "./img/boyaca/iconos/vmodal-titulo_parques_nacionales_naturales.svg";
import "./img/boyaca/fotos/VModal-Parque-Pisba/imag_ocensa_territorio_boyaca_1_pnn_pisba.jpg";
import "./img/boyaca/fotos/VModal-Parque-Pisba/imag_ocensa_territorio_boyaca_2_pnn_pisba.jpg";
import "./img/boyaca/fotos/VModal-Parque-Pisba/imag_ocensa_territorio_boyaca_3_pnn_pisba.jpg";
import "./img/boyaca/iconos/int-ventanas-modales/5-icon-pnn-paramo_pisba/icon_ventana_modal_pnn_paramo_pisba_extension.svg";
import "./img/boyaca/iconos/int-ventanas-modales/5-icon-pnn-paramo_pisba/icon_ventana_modal_pnn_paramo_pisba_clima.svg";

// Modal Santuario de Fauna y Flora Guanentá Alto Río Fonce
import "./img/boyaca/fotos/VModal-Santuario-Guaneta/imag_ocensa_territorio_boyaca_1_pnn_santuario_guanenta.jpg";
import "./img/boyaca/fotos/VModal-Santuario-Guaneta/imag_ocensa_territorio_boyaca_2_pnn_santuario_guanenta.jpg";
import "./img/boyaca/iconos/int-ventanas-modales/6-icon-sff-guanenta-alto/icon_ventana_modal_sff_guanenta_alto_temperatura_paramo.svg";
import "./img/boyaca/iconos/int-ventanas-modales/6-icon-sff-guanenta-alto/icon_ventana_modal_sff_guanenta_alto_temperatura_zona_andina.svg";

// Modal Parque Nacional Natural El Cocuy
import "./img/boyaca/fotos/VModal-Parque-Cocuy/imag_ocensa_territorio_boyaca_1_pnn_el_cocuy.jpg";
import "./img/boyaca/fotos/VModal-Parque-Cocuy/imag_ocensa_territorio_boyaca_2_pnn_el_cocuy.jpg";
import "./img/boyaca/fotos/VModal-Parque-Cocuy/imag_ocensa_territorio_boyaca_3_pnn_el_cocuy.jpg";

// Modal Santuario de Fauna y Flora Iguaque
import "./img/boyaca/fotos/VModal-Santuario-Iguaque/imag_ocensa_territorio_boyaca_1_pnn_santuario_iguaque.jpg";
import "./img/boyaca/fotos/VModal-Santuario-Iguaque/imag_ocensa_territorio_boyaca_2_pnn_santuario_iguaque.jpg";

// Modal Comunidades Boyacá
import "./img/boyaca/iconos/vmodal-titulo_comunidades.svg";

// Estación Base Soracá
import "./img/boyaca/estacion-soraca/iconos-svg/2-icon-la-base/icon_territorio_base_soraca_personal_emergencia.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/2-icon-la-base/icon_territorio_base_soraca_sub_bases.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/2-icon-la-base/icon_territorio_base_soraca_mantenimiento_de_linea.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/2-icon-la-base/icon_territorio_base_soraca_infraestructura.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/2-icon-la-base/icon_territorio_base_soraca_superintendencia_mantenimiento.svg";
import "./img/boyaca/estacion-soraca/fotos/imag_ocensa_1_base_soraca_ubicacion.jpg";
import "./img/boyaca/estacion-soraca/iconos-svg/4-icon-relacionamiento/icon_territorio_base_soraca_relacionamiento_componente_relacionamiento.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/4-icon-relacionamiento/icon_territorio_base_soraca_relacionamiento_icono_menu.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/4-icon-relacionamiento/icon_territorio_base_soraca_relacionamiento_personal_comunidades.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/5-icon-valvulas-de-linea/valvulas-divisor-1.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/5-icon-valvulas-de-linea/valvulas-img-divisor-2.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/5-icon-valvulas-de-linea/icon_territorio_base_soraca_valvulas_de_linea_icono_menu.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/5-icon-valvulas-de-linea/icon_territorio_base_soraca_valvulas_de_linea_valvulas.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/6-icon-contratistas/icon_territorio_base_soraca_contratistas_icono_menu.svg";
import "./img/boyaca/estacion-soraca/imagenes/imag_ocensa_3_base_soraca_contratistas.jpg";
import "./img/boyaca/estacion-soraca/imagenes/imag_ocensa_4_base_soraca_contratistas.jpg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_icono_menu.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_cupiagua.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_cusiana.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_el_porvenir.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_la_belleza.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_miraflores.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_estacion_vasconia.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/line-divider-distancias.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon-linea-tubo.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/10-icon-demografico/imag_ocensa_base_soraca_demografico_trabajadores_en_estacion.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/10-icon-demografico/imag_ocensa_base_soraca_demografico_mujeres_y_hombres.svg";
import "./img/boyaca/estacion-soraca/iconos-svg/10-icon-demografico/icon_territorio_base_soraca_demografico_icono_menu.svg";
// Estacion Miraflores
import "./img/boyaca/estacion-miraflores/miraflores-slide-1.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-slide-2.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-slide-3.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-slide-4.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-01.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-02.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-03.svg";
import "./img/boyaca/estacion-miraflores/miraflores-ubicacion.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-04.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-05.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-06.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-07.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-08.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-09.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-10.svg";
import "./img/boyaca/estacion-miraflores/miraflores-member-01.png";
import "./img/boyaca/estacion-miraflores/miraflores-member-02.png";
import "./img/boyaca/estacion-miraflores/miraflores-member-03.png";
import "./img/boyaca/estacion-miraflores/miraflores-member-04.png";
import "./img/boyaca/estacion-miraflores/miraflores-grafica-01.svg";
import "./img/boyaca/estacion-miraflores/miraflores-grafica-02.svg";
import "./img/boyaca/estacion-miraflores/miraflores-grafica-03.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-11.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-12.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-13.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-14.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-15.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-16.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-17.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-18.svg";
import "./img/boyaca/estacion-miraflores/miraflores-icon-19.svg";
import "./img/boyaca/estacion-miraflores/miraflores-modal-almacenamiento-01.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-bombeo-01.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-bombeo-02.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-bombeo-03.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-bombeo-04.jpg";
import "./img/boyaca/estacion-miraflores/miraflores-bombeo-05.jpg";

//Estacion Páez
import "./img/boyaca/estacion-paez/paez-abrir 1.jpg";
import "./img/boyaca/estacion-paez/paez-abrir 2.jpg";
import "./img/boyaca/estacion-paez/paez-abrir 3.jpg";
import "./img/boyaca/estacion-paez/2-icon-la-estacion/icon_territorio_paez_estacion_proyecto_p-135.svg";
import "./img/boyaca/estacion-paez/2-icon-la-estacion/icon_territorio_paez_estacion_rebombeo.svg";
import "./img/boyaca/estacion-paez/2-icon-la-estacion/linea-punteada.svg";
import "./img/boyaca/estacion-paez/2-icon-la-estacion/icon_territorio_paez_estacion_incremento_volumenes.svg";
import "./img/boyaca/estacion-paez/2-icon-la-estacion/icon_territorio_paez_estacion_equipos_electricos.svg";
import "./img/boyaca/estacion-paez/3-icon-ubicacion/foto-satelital-paez.jpg";
import "./img/boyaca/estacion-paez/4-icon-almacenamiento/icon_territorio_paez_almacenamiento_otros_productos.svg";
import "./img/boyaca/estacion-paez/4-icon-almacenamiento/icon_territorio_paez_almacenamiento_tanque sumidero.svg";
import "./img/boyaca/estacion-paez/5-icon-distancia-de-linea/icon_territorio_paez_distancia_de_linea_estacion_porvenir.svg";
import "./img/boyaca/estacion-paez/5-icon-distancia-de-linea/icon_territorio_paez_distancia_de_linea_estacion_paez.svg";
import "./img/boyaca/estacion-paez/5-icon-distancia-de-linea/icon_territorio_paez_distancia_de_linea_estacion_miraflores.svg";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/boy-bombeo-1.svg";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/boy-bombeo-2.svg";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/icon_territorio_paez_sistema_bombeo_unidades_electricas.svg";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/boy-bombeo-3.svg";
import "./img/boyaca/estacion-paez/7-icon-personal/user-1.jpg";
import "./img/boyaca/estacion-paez/7-icon-personal/user-2.jpg";
import "./img/boyaca/estacion-paez/7-icon-personal/user-3.jpg";
import "./img/boyaca/estacion-paez/8-icon-demografico/elipse-2-boy.svg";
import "./img/boyaca/estacion-paez/8-icon-demografico/elipse-3-boy.svg";
import "./img/boyaca/estacion-paez/13-icon-gestion-ambiental/icon_territorio_paez_gestion_ambiental_turbinas.svg";
import "./img/boyaca/estacion-paez/14-icon-solicitudes-ingreso/flecha-v2.svg";
import "./img/boyaca/estacion-paez/15-icon-como-llegar/helicoptero.svg";
import "./img/boyaca/estacion-paez/15-icon-como-llegar/dist-paez.svg";
import "./img/boyaca/estacion-paez/15-icon-como-llegar/time-paez.svg";
import "./img/boyaca/estacion-paez/4-icon-almacenamiento/paez-almacenamiento-modal.png";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/paez-slide-1.png";
import "./img/boyaca/estacion-paez/6-icon-sistema-de-bombeo/bombeo-responsive.svg";

import "./img/boyaca/estacion-soraca/iconos-svg/7-icon-distancias-de-linea-sector-sur/icon_territorio_base_soraca_distancias_de_linea_sector_sur_diametro_tubo.svg";


//Estacion Vasconia
import "./img/boyaca/estacion-vasconia/img/Slide/Vasconia abrir 1.jpg";
import "./img/boyaca/estacion-vasconia/img/Slide/Vasconia abrir 2.jpg";
import "./img/boyaca/estacion-vasconia/img/ubicacion_vasconia.jpg";
import "./img/boyaca/estacion-vasconia/svg editables/1-icon-la-estacion/la_estacion_nodo_energetico.svg";
import "./img/boyaca/estacion-vasconia/svg editables/1-icon-la-estacion/la_estacion_inicio_fin_segmentos.svg";
import "./img/boyaca/estacion-vasconia/svg editables/1-icon-la-estacion/la_estacion_entrega_diferencia_volumenes.svg";
import "./img/boyaca/estacion-vasconia/svg editables/1-icon-la-estacion/la_estacion_entrega_custodia.svg";
import "./img/boyaca/estacion-vasconia/svg editables/6-icon-gestion-ambiental/gestion_ambiental_turbina_energia.svg";
import "./img/boyaca/estacion-vasconia/svg editables/6-icon-gestion-ambiental/gestion_ambiental_parque_solar_energia.svg";
import "./img/boyaca/estacion-vasconia/img/Odilio Rivera-3.png";
import "./img/boyaca/estacion-vasconia/img/Organigrama-Hugo Garcia (563).png";
import "./img/boyaca/estacion-vasconia/img/imag_ocensa_boyaca_estacion_miraflores_personal_3_elkin_larrarte.png";
import "./img/boyaca/estacion-vasconia/svg editables/tortas_demografico_generaciones.svg";
import "./img/boyaca/estacion-vasconia/svg editables/tortas_demografico_mujeres_y_hombres.svg";
import "./img/boyaca/estacion-vasconia/svg editables/tortas_demografico_trabajadores_en_estacion.svg";



//Noticias Boyaca
import "./img/boyaca/noticias/notices-boy-1.jpg";
import "./img/boyaca/noticias/coments-user-1.png";
import "./img/boyaca/noticias/coments-user-2.png";


// Iconos nuevos Nosotros cultura
import "./img/nosotros/cultura/iconos-nuevos/apasionados_excelencia.svg";
import "./img/nosotros/cultura/iconos-nuevos/escuchar_hablar.svg";
import "./img/nosotros/cultura/iconos-nuevos/eticos_siempre.svg";
import "./img/nosotros/cultura/iconos-nuevos/hacemos_lo_imposible.svg";
import "./img/nosotros/cultura/iconos-nuevos/primero_la_vida.svg";
import "./img/nosotros/cultura/iconos-nuevos/somos_equipo.svg";

//Widgets Incremental
import "./img/perfiles/organigrama/equis-gris.svg"
import "./img/perfiles/publicaciones-inc.svg";
import "./img/perfiles/grupo.inc.svg";
import "./img/perfiles/close-proyecto.svg";


// Documentos
import "./docs/documentos-boyaca/2-Boyaca-MIRAFLORES/Formatos de ingreso/GDE-F-067-autorizacion-para-el-ingreso-en-horario-laboral.xlsx";
import "./docs/documentos-boyaca/2-Boyaca-MIRAFLORES/Formatos de ingreso/GDE-P-007-procedimiento-para-el-ingreso-y-salida-de-personas-en-instalaciones.pdf";
import "./docs/documentos-boyaca/2-Boyaca-MIRAFLORES/Formatos de ingreso/GDE-F-070 Permiso para el ingreso de vehIculos a instalaciones de Ecopetrol.xlsx";
import "./docs/documentos-boyaca/2-Boyaca-MIRAFLORES/HSE-10 reglas para la vida/Reglas-para-la-vida.pdf";


// Santander
import "./img/santander/iconos/iconos-slide-santander/icon-santander-mapa.svg";
import "./img/santander/iconos/iconos-slide-santander/icon-territorio-santander-3.svg";
import "./img/santander/fotos/slide-santander.jpg";
import "./img/santander/fotos/estacion-la-belleza.jpg";
import "./img/santander/fotos/enqueestamos1.jpg";
import "./img/santander/fotos/enqueestamos2.jpg";
import "./img/santander/fotos/enqueestamos3.jpg";
// Mapa Santander
import "./img/santander/links/mapa/mapa-santander.png";
import "./img/santander/links/mapa/mapa-linea-santander.png";

// Nuevas imagenes
import "./img/boyaca/estacion-paez/slide-01-paez.jpg";
import "./img/boyaca/estacion-paez/slide-02-paez.jpg";
import "./img/boyaca/estacion-paez/slide-03-paez.jpg";
import "./img/boyaca/estacion-miraflores/slide-01-miraflores.jpg";
import "./img/boyaca/estacion-miraflores/slide-02-miraflores.jpg";
import "./img/boyaca/estacion-miraflores/slide-03-miraflores.jpg";
import "./img/boyaca/estacion-miraflores/slide-04-miraflores.jpg";
import "./img/boyaca/estacion-miraflores/galeria_almacenamiento_1.jpg";
import "./img/boyaca/estacion-miraflores/galeria_almacenamiento_2.jpg";
import "./img/boyaca/estacion-miraflores/galeria_sistema_de_bombeo_1.jpg";
import "./img/boyaca/mapa/territorio_miraflores_municipio-modal.jpg";
import "./img/boyaca/mapa/territorio_puerto_serviez-modal.jpg";

// Ventanas Modal Santander
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/departamento-santander.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/depto-santander.jpg";

//Modal La Belleza
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/estacion-la_belleza.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/estacion-labelleza.jpg";

//Modal Municipio La Belleza
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/municipio-la-belleza.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/municipio-labelleza.jpg";

//Modal Municipio Florian
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/municipio-la-belleza.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/florian.jpg";

//Modal Municipio Puerto Serviez
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/entrada_salida_oleoducto-puertoserviez.svg";

//Modal Entrada y Salida Oleoducto en Santander
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/entradaysalida-oleoducto1.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/entradaysalida-oleoducto2.jpg";

//Modal Ecosistema Santander
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/ecosistema-1-santander.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/ecosistema-2-santander.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/ecosistema-3-santander.jpg";

//Modal Flora Santander
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/flora-santander.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/flora-1.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/flora-2.jpg";

//Modal Fauna Santander
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/fauna-santander.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/fauna-santander.jpg";

//Modal Clima Santander
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/clima-santander.jpg";

//Modal Páramo Santurbán
import "./img/santander/iconos/iconos-titulos-ventanas-modales-titulos/paramo-santurban.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/paramo_santurban.jpg";

//Modal Serranía Las Quinchas
import "./img/santander/iconos/iconos-mapa-ventana-modal/2-icon-serrania-las-quinchas/ecosistema-info.svg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/serrania-las-quinchas-1.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/serrania-las-quinchas-2.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/serrania-las-quinchas-3.jpg";

//Modal Serranía Las Quinchas
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/hidrografia-1-santander.jpg";
import "./img/santander/fotos/FOTOS-VENTANAS-MODALES/hidrografia-2-santander.jpg";
//Estacion La Belleza
import "./img/santander/estacion-la-belleza/La Belleza Estación 1.png";
import "./img/santander/estacion-la-belleza/La Belleza Estación 2.png";
import "./img/santander/estacion-la-belleza/La Belleza Estación 3.png";
import "./img/santander/estacion-la-belleza/La Belleza Estación 4.png";
import "./img/santander/estacion-la-belleza/Estacion La Belleza-155.png";
import "./img/santander/estacion-la-belleza/Foto satelital estación LA BELLEZA.png";
import "./img/santander/estacion-la-belleza/iconos svg/icon-capacidad.svg";
import "./img/santander/estacion-la-belleza/iconos svg/2-icon-la-estacion/icon_territorio_la_belleza_estacion_riesgos_transporte.svg";
import "./img/santander/estacion-la-belleza/iconos svg/2-icon-la-estacion/icon_territorio_la_belleza_estacion_reduce_presion.svg";
import "./img/santander/estacion-la-belleza/iconos svg/2-icon-la-estacion/lineas-estacion.svg";
import "./img/santander/estacion-la-belleza/iconos svg/5-icon-distancia-de-linea/icon_territorio_la_belleza_distancia de línea_estacion_la_belleza.svg";
import "./img/santander/estacion-la-belleza/iconos svg/6-icon-gestion-ambiental/icon_territorio_la_belleza_gestion_ambiental_paneles_solares.svg";
import "./img/santander/estacion-la-belleza/iconos svg/6-icon-gestion-ambiental/icon_territorio_la_belleza_gestion_ambiental_recoleccion.svg";
import "./img/santander/estacion-la-belleza/iconos svg/Juan Diego Colonia (757).png";
import "./img/santander/estacion-la-belleza/iconos svg/Juan Jose Morales 1173.png";
import "./img/santander/estacion-la-belleza/iconos svg/imag_ocensa_xxx_estacion_xxx_personal_x_mario_becerra.png";
import "./img/santander/estacion-la-belleza/iconos svg/8-icon-demografico/imag_demografico_trabajadores_en_estacion.svg";
import "./img/santander/estacion-la-belleza/iconos svg/8-icon-demografico/imag_degrafico_trabajadores-3.svg";
import "./img/santander/estacion-la-belleza/fotos/La Belleza Almacenamiento 1.png";

//Estacion Caucasia
import "./img/antioquia/estacion-caucasia/Caucasia_Ocensa_BI-2021-Foto-Dron-006.png";
import "./img/antioquia/estacion-caucasia/Caucasia Estación 1.png";
import "./img/antioquia/estacion-caucasia/Estción Caucasia-158.png";
import "./img/antioquia/estacion-caucasia/fotos/ubicacion/ubicacion-cau.jpg";
import "./img/antioquia/estacion-caucasia/fotos/la-estacion/Grupo 18820.svg";
import "./img/antioquia/estacion-caucasia/fotos/la-estacion/Grupo 19506.svg";
import "./img/antioquia/estacion-caucasia/fotos/la-estacion/Grupo 18849.svg";
import "./img/antioquia/estacion-caucasia/svg editables/4-icon-distancia-de-linea/distancia_de_linea_estacion_chiquillo.svg";
import "./img/antioquia/estacion-caucasia/svg editables/4-icon-distancia-de-linea/distancia_de_linea_estacion_caucasia.svg";
import "./img/antioquia/estacion-caucasia/svg editables/4-icon-distancia-de-linea/distancia_de_linea_estacion_granjita.svg";
import "./img/antioquia/estacion-caucasia/svg editables/6-icon-sistema-de-bombeo/Grupo 15261.svg";
import "./img/antioquia/estacion-caucasia/svg editables/6-icon-sistema-de-bombeo/Grupo 18646.svg";
import "./img/antioquia/estacion-caucasia/svg editables/6-icon-sistema-de-bombeo/Grupo 18862.svg";
import "./img/antioquia/estacion-caucasia/svg editables/6-icon-sistema-de-bombeo/Grupo 19526.svg";
import "./img/antioquia/estacion-caucasia/fotos/personal/imag_ocensa_rojo.png";
import "./img/antioquia/estacion-caucasia/fotos/personal/Ciro-Villamizar-(2).png";
import "./img/antioquia/estacion-caucasia/fotos/personal/Mauricio-Sandoval-(969).png";
import "./img/antioquia/estacion-caucasia/fotos/personal/Diego-Carvajal-(2).png";
import "./img/antioquia/estacion-caucasia/svg editables/8-icon-demografico/imag_demografico_trabajadores_en_estacion-cau.svg";
import "./img/antioquia/estacion-caucasia/svg editables/8-icon-demografico/imag_demografico_mujeres_y_hombres-cau.svg";
import "./img/antioquia/estacion-caucasia/svg editables/8-icon-demografico/imag_demografico_generaciones-cau.svg";
import "./img/antioquia/estacion-caucasia/svg editables/12-icon-gestion-ambiental/gestion_ambiental_condensacion_aire.svg";
import "./img/antioquia/estacion-caucasia/svg editables/12-icon-gestion-ambiental/gestion_ambiental_filtros_materas.svg";
import "./img/antioquia/estacion-caucasia/svg editables/12-icon-gestion-ambiental/gestion_ambiental_icono_menu.svg";
import "./img/antioquia/estacion-caucasia/svg editables/12-icon-gestion-ambiental/gestion_ambiental_reacondicionamiento_exostos.svg";
import "./img/antioquia/estacion-caucasia/svg editables/12-icon-gestion-ambiental/gestion_ambiental_siembra_arboles.svg";
import "./img/antioquia/estacion-caucasia/svg editables/14-icon-como-llegar/Grupo 17080.svg";
import "./img/antioquia/estacion-caucasia/fotos/almacenamiento/almacenamiento-1.jpg";
import "./img/antioquia/estacion-caucasia/fotos/almacenamiento/almacenamiento-2.jpg";
import "./img/antioquia/estacion-caucasia/fotos/bombeo/Caucasia bombeo 1.jpg";
import "./img/antioquia/estacion-caucasia/fotos/bombeo/Caucasia bombeo 2.jpg";
import "./img/antioquia/estacion-caucasia/fotos/bombeo/Caucasia bombeo 3.jpg";
import "./img/antioquia/estacion-caucasia/fotos/slide/slide_1.jpg";
import "./img/antioquia/estacion-caucasia/fotos/slide/slide_2.jpg";
import "./img/antioquia/estacion-caucasia/fotos/slide/slide_3.jpg";
import "./img/antioquia/estacion-caucasia/fotos/slide/slide_4.jpg";
import "./docs/documentos-antioquia/GDE-F-076 Autorización Ingreso y Salida Elementos_EQUIPOS_OCENSA (1).xlsx";

//Mapa Antioquia
import "./img/antioquia/links/mapa/mapa-antioquia.png";
import "./img/antioquia/links/mapa/mapa-antioquia-linea.png";

// Index Antioquia
import "./img/antioquia/fotos-home/1_inicio_antioquia.jpg";
import "./img/antioquia/ICONOS/svg_editables/icon-map-antioquia.svg";
import "./img/antioquia/ICONOS/svg_editables/icons-group-map-antioquia.svg";
import "./img/antioquia/fotos-home/estacion-caucasia.jpg";
import "./img/antioquia/fotos-home/estacion-chiquillo.jpg";
import "./img/antioquia/fotos-home/foto-1-antioquia.jpg";
import "./img/antioquia/fotos-home/foto-2-antioquia.jpg";
import "./img/antioquia/fotos-home/foto-3-antioquia.jpg";

//Base Puerto Berrio
import "./img/antioquia/base-puerto-berrio/fotos/slide-01-puerto.jpg";
import "./img/antioquia/base-puerto-berrio/fotos/slide-02-puerto.png";
import "./img/antioquia/base-puerto-berrio/fotos/slide-03-puerto.png";
import "./img/antioquia/base-puerto-berrio/fotos/slide-04-puerto.png";
import "./img/antioquia/base-puerto-berrio/fotos/ubicacion-puerto-berrio.jpg";
import "./img/antioquia/base-puerto-berrio/fotos/icono-valvulas.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/distancia_de_linea_sector_norte_estacion_caucasia.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/distancia_de_linea_sector_norte_estacion_el_coveñas.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/Grupo 17150.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/Grupo 17153.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/Trazado 11288.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/Trazado 11287.svg";
import "./img/antioquia/base-puerto-berrio/iconos/7-icon-distancia-de-linea-sector-norte/Trazado 11289.svg";
import "./img/antioquia/base-puerto-berrio/fotos/andres-ocampo.png";
import "./img/antioquia/base-puerto-berrio/iconos/dist-antio.svg";


// Modal Antioquia
import "./img/antioquia/ICONOS/svg_editables/1-icon-departamento-antioquia/departamento_antioquia.svg";

// Modal Chiquillo
import "./img/antioquia/ICONOS/svg_editables/2-icon-estacion-chiquillo/estacion_chiquillo.svg";
import "./img/antioquia/ICONOS/svg_editables/3-icon-estacion-caucasia/estacion_caucasia.svg";
import "./img/antioquia/fotos-ventanas-modales/3_estacion_caucasia.jpg";

// Modal Puerto Berrio
import "./img/antioquia/ICONOS/svg_editables/4-icon-base-puerto-berrio/base_puerto_berrio.svg";
import "./img/antioquia/fotos-ventanas-modales/4_base_puerto_berrio.jpg";

// Modal Municipio Remedios
import "./img/antioquia/ICONOS/svg_editables/icon-modals-mun-antioquia.svg";
import "./img/antioquia/fotos-ventanas-modales/5_municipio_remedios.jpg";

// Modal Municipio Caucasia
import "./img/antioquia/fotos-ventanas-modales/6_municipio_caucasia.jpg";

// Modal Municipio Puerto Berrio
import "./img/antioquia/fotos-ventanas-modales/7_municipio_puerto_berrio.jpg";

// Modal Parque Natural Las Orquídeas
import "./img/antioquia/fotos-ventanas-modales/12_pnn_las_orquideas_1.jpg";
import "./img/antioquia/fotos-ventanas-modales/12_pnn_las_orquideas_2.jpg";
import "./img/antioquia/fotos-ventanas-modales/12_pnn_las_orquideas_3.jpg";

// Modal Hidrografía Antioquia
import "./img/antioquia/fotos-ventanas-modales/10_hidrografia-antioquia.jpg";

// Modal Potencial Hidroeléctrico Antioquia
import "./img/antioquia/ICONOS/svg_editables/9-icon-potencial-hidroelectrico/potencial_hidroelectrico.svg";
import "./img/antioquia/fotos-ventanas-modales/9_potencial_hidroelectrico.jpg";

// Modal Parque Natural Paramillo
import "./img/antioquia/fotos-ventanas-modales/13_pnjaramillo_las_orquideas_1.jpg";
import "./img/antioquia/fotos-ventanas-modales/13_pnjaramillo_las_orquideas_2.jpg";
import "./img/antioquia/fotos-ventanas-modales/13_pnjaramillo_las_orquideas_3.jpg";

// Modal Clima Antioquia
import "./img/antioquia/fotos-ventanas-modales/11_clima-antioquia.jpg";

// Widget incremental publicaciones Doc no es público
import "./img/widgets-ocensa/img-widget-publicaciones/publicaciones-inc-2.svg";

// Widget incremental enlaces favoritos
import "./img/widgets-ocensa/img-widget-enlaces/enlaces_rapidos.svg";

// Estación Vasconia
import "./img/boyaca/estacion-vasconia/img/logo-contratista-working-services.jpg";

//Estacion Chiquillo
import "./img/antioquia/estacion-chiquillo/Grupo 20124.svg";
import "./img/antioquia/estacion-chiquillo/img/slide/slide-1-chi.jpg";
import "./img/antioquia/estacion-chiquillo/img/slide/slide-2-chi.jpg";
import "./img/antioquia/estacion-chiquillo/img/slide/slide-3-chi.jpg";
import "./img/antioquia/estacion-chiquillo/img/slide/slide-4-chi.jpg";
import "./img/antioquia/estacion-chiquillo/img/ubicacion-chi.jpg";
import "./img/antioquia/estacion-chiquillo/svg editables/icon-dato-chi.svg";
import "./img/antioquia/estacion-chiquillo/svg editables/moto-lin-small.svg";
import "./img/antioquia/estacion-chiquillo/svg editables/bom-lin-large.svg";
import "./img/antioquia/estacion-chiquillo/img/personal_1_odilio_rivera.png";
import "./img/antioquia/estacion-chiquillo/img/personal_2_breighner_cuesta.png";
import "./img/antioquia/estacion-chiquillo/img/per-gris.png";
import "./img/antioquia/estacion-chiquillo/svg editables/tor-chi.svg";
import "./img/antioquia/estacion-chiquillo/img/contratistas_2_l_c.png";
import "./img/antioquia/estacion-chiquillo/img/contratistas_3_duflo.jpeg";
import "./img/antioquia/estacion-chiquillo/img/istockphoto-691910451-2048x2048.png";
import "./img/antioquia/estacion-chiquillo/svg editables/11-icon-gestion-ambiental/gestion_ambiental_riego_jardines.svg";
import "./img/antioquia/estacion-chiquillo/svg editables/11-icon-gestion-ambiental/gestion-ambiental-recoleccion.svg";
import "./img/antioquia/estacion-chiquillo/img/chiquillo-bombeo-popup.jpg";
import "./img/antioquia/estacion-chiquillo/img/galeria_sistema_bombeo_1.jpg";
import "./img/antioquia/estacion-chiquillo/img/galeria_sistema_bombeo_2.jpg";
import "./img/antioquia/estacion-chiquillo/img/galeria_sistema_bombeo_3.jpg";


//Noticia Cordoba
import "./img/Cordoba/img/comunidades_loma_piedra_1.jpg";
import "./img/Cordoba/img/comunidades_loma_piedra_2.jpg";
import "./img/Cordoba/img/comunidades_loma_piedra_3.jpg";
import "./img/Cordoba/img/comunidades_loma_piedra_4.jpg";

// Estación La Granjita
import "./img/cordoba/estacion-la-granjita/LINKS/img/slide_1_granjita.jpg";
import "./img/cordoba/estacion-la-granjita/LINKS/img/slide_2_granjita.jpg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/1-icon-la-estacion/la_estacion_proyecto_135.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/1-icon-la-estacion/la_estacion_esquema_de_bombeo.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/img/ubicacion-la-granjita.jpg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/turbinas-2.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/line-turbinas-2.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/bombeo-grap-1.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/bombeo-grap-2.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/bombas-granjita.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/bombeo-grap-3.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/imag_demografico_trabajadores_en_estacion_granjita.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/imag_demografico_mujeres_y_hombres_granjita.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/mobile/bombeo-grap-1-icon-mobile.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/mobile/bombeo-grap-1.2-icon-mobile.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/mobile/bombeo-grap-2-mobile.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/svg editables/12-icon-bombeo/mobile/bombeo-grap-3-mobile.svg";
import "./img/cordoba/estacion-la-granjita/LINKS/img/galeria_almacenamiento.jpg";
import "./img/cordoba/estacion-la-granjita/LINKS/img/galeria_sistema_bombeo-granjita.jpg";
import "./img/cordoba/estacion-la-granjita/LINKS/img/galeria_sistema_bombeo_2-granjita.jpg";

//Estacion Coveñas
import "./img/sucre/img/slide_1-co.jpg";
import "./img/sucre/img/slide_2-co.jpg";
import "./img/sucre/svg editables/1-icon-la-terminal/la_terminal_tanqueros TLU.svg";
import "./img/sucre/svg editables/1-icon-la-terminal/la_terminal_presion_disminuye.svg";
import "./img/sucre/svg editables/1-icon-la-terminal/line-large-co.svg";
import "./img/sucre/svg editables/1-icon-la-terminal/la_terminal_trampas_limpieza.svg";
import "./img/sucre/img/ubicacion-coveñas.jpg";
import "./img/sucre/svg editables/2-icon-distancia-de-linea/distancia_la-granjita.svg";
import "./img/sucre/svg editables/2-icon-distancia-de-linea/distancia_de_linea_terminal_coveñas.svg";
import "./img/sucre/svg editables/2-icon-distancia-de-linea/distancia_de_linea_TLU2.svg";
import "./img/sucre/svg editables/icon-bom-cov.svg";
import "./img/sucre/svg editables/icon-bom-cov-2.svg";
import "./img/sucre/img/personal-mauricio.png";
import "./img/sucre/img/personal-ciro.png";
import "./img/sucre/svg editables/trabajadores-estacion-co.svg";
import "./img/sucre/svg editables/mujeres-hombres-co.svg";
import "./img/sucre/svg editables/generaciones-co.svg";
import "./img/sucre/svg editables/3-icon-contratistas/contratistas_sin_logo.svg";
import "./img/sucre/svg editables/4-icon-gestion-ambiental/gestion_ambiental_reutilizacion_plastico.svg";
import "./img/sucre/svg editables/encabezado-widget.png";
import "./img/sucre/svg editables/encabezado-widget-2.png";
import "./img/sucre/svg editables/encabezado-widget-3.png";
import "./img/sucre/img/galeria_almacenamiento_1-wf.jpg";
import "./img/sucre/img/galeria_sistema_bombeo_1-wf.jpg";
import "./img/sucre/img/galeria_sistema_bombeo_2-wf.jpg";

// Mapa Cordoba
import "./img/Cordoba/mapa/mapa-cordoba.jpg";
import "./img/Cordoba/mapa/mapa-cordoba-linea.png";

// Mapa Sucre
import "./img/sucre/mapa/mapa-sucre.jpg";
import "./img/sucre/mapa/mapa-sucre-lineas.png";

// Territorio Córdoba
import "./img/Cordoba/img/cordoba_slide.jpg";
import "./img/Cordoba/svg editables/mapa_slide.svg";
import "./img/Cordoba/svg editables/icons_group_map_cordoba.svg";
import "./img/Cordoba/img/territorio_cordoba_la_granjita.jpg";
import "./img/Cordoba/img/departamento_cordoba.jpg";
import "./img/Cordoba/img/comunidades_loma_piedra_3.jpg";
import "./img/Cordoba/svg editables/territorio_ventanas_departamento_cordoba.svg";
import "./img/Cordoba/img/municipio_pueblo_nuevo.jpg";
import "./img/Cordoba/img/ecosistema_1_cordoba.jpg";
import "./img/Cordoba/img/ecosistema_2_cordoba.jpg";
import "./img/Cordoba/svg editables/territorio_ventanas_fauna_2.svg";
import "./img/Cordoba/img/fauna_1_cordoba.jpg";
import "./img/Cordoba/img/fauna_2_cordoba.jpg";
import "./img/Cordoba/svg editables/territorio_especies_mamiferos.svg";
import "./img/Cordoba/svg editables/territorio_especies_aves.svg";
import "./img/Cordoba/img/hidrografia-cordoba.jpg";
import "./img/Cordoba/img/clima-cordoba.jpg";
import "./img/Cordoba/svg editables/territorio_modal_golfo.svg";
import "./img/Cordoba/img/modal-item-morrosquillo.jpg";
import "./img/Cordoba/svg editables/territorio_ventanas_cultura.svg";
import "./img/Cordoba/img/cultura-cordoba.jpg";
import "./img/Cordoba/img/comunidades_loma_piedra_1.jpg";


var scroll = new SmoothScroll('a[href*="#"]');

if (screen.width > 575.98) {
    const slider = $(".on-scroll-v");

    slider.on("wheel", function (e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickNext");
      } else {
        $(this).slick("slickPrev");
      }
    });
  }

$('.oc-slick-example').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    dots: true

})

$('.oc-slick-widget__gestion-paez').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
})

$('.oc-slick-widget__alm-covenas').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
})

$('.oc-slick-aerea-caucasia').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
})

$('.oc-slick-galeria-territorio').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    slidesToShow: 3,
    infinite: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]

})

$('.oc-slick-profiles').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    slidesToShow: 4,
    infinite: false,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 4
          }
        }
      ]

})

$('.oc-slick-img-org').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
    <svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
    <path id="Trazado_28027" data-name="Trazado 28027" d="M3.621,7.243.6,4.225l-.6-.6L1.853,1.769,3.621,0" transform="translate(1 1.414)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
    <svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
    <path id="Trazado_12534" data-name="Trazado 12534" d="M3.621,7.243.6,4.225l-.6-.6L1.853,1.769,3.621,0" transform="translate(5.035 8.657) rotate(180)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </svg>
  
    </button>`,
    slidesToShow: 4,
    infinite: false,
    dots: false,
    arrows: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 4
          }
        }
      ]

})

$('.oc-slick-grupo-general').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20.805" height="14.7"
            viewBox="0 0 20.805 14.7">
            <g id="Grupo_13763" data-name="Grupo 13763" transform="translate(0 0.707)">
                <path id="Trazado_11962" data-name="Trazado 11962" d="M0,0V18.779"
                    transform="translate(18.779 6.583) rotate(90)" fill="none" stroke="#fff"
                    stroke-width="2" />
                <path id="Trazado_11963" data-name="Trazado 11963"
                    d="M-8466.48,3107.907l6.643,6.643-6.643,6.643"
                    transform="translate(8479.229 -3107.907)" fill="none" stroke="#fff"
                    stroke-width="2" />
            </g>
        </svg>
    </button>`,
    slidesToShow: 3,
    infinite: false,
    dots: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            dots: true,
            slidesToShow: 3,
            vertical: false,
            verticalSwiping: false,
          }
        }
      ]

})

$('.oc-slick-estamos').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1
          }
        }
      ]

})


$('.item-has-child').hover(function() {
    const item = $(this)
    const submenu = $(this).find('.oc-submenu')

    submenu.slideToggle('low', function() {
    if (submenu.css('display') == 'none') {
        item.removeClass('open')
    }
    else {
        item.addClass('open')
    }
  });
})

$('.button-menu-toggle.open').click(function(e) {
    e.preventDefault()
    $('.oc-preload').fadeIn(function() {
        $('.oc-preload').css('display', 'flex')
        $('.oc-preload img').css('opacity', '1')
    })

    $('.oc-menu-principal').addClass('menu-open')
    setTimeout(function() {
        $('.oc-preload').fadeOut()
        setTimeout(function(){ 
            $('.oc-menu-principal__top__cerrar .button-menu-toggle').addClass('close')
            $('.oc-menu-principal .col-menu').css('opacity', '1')
            $('.oc-menu-principal .col-menu').css('bottom', '0')
        }, 1000);
    }, 1000)
    
})

$('.oc-btn-menu-superior').click(function(e) {
    e.preventDefault()
    $('.oc-menu-principal').addClass('menu-open')

    setTimeout(function(){ 
        $('.oc-menu-principal__top__cerrar .button-menu-toggle').addClass('close')
        $('.oc-menu-principal .col-menu').css('opacity', '1')
        $('.oc-menu-principal .col-menu').css('bottom', '0')
     }, 1000);
})

$('.oc-menu-principal__top__cerrar').click(function(e) {
    e.preventDefault()
    $('.oc-menu-principal').removeClass('menu-open')
    $('.oc-menu-principal__top__cerrar .button-menu-toggle').removeClass('close')

    $('.oc-menu-principal .col-menu').css('opacity', '0')
    $('.oc-menu-principal .col-menu').css('bottom', '50px')
})
$('.oc-slick-dashboard').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    dots: true,
    infinite: false
})

function progressBar(barClass) {
    let items = document.querySelectorAll(barClass)
    for(let item of items){
        let progress = item.dataset.progress
        item.style.width = `${progress}%`
        item.textContent = `${progress}%`
    }
}

progressBar('.oc-progress')

$('.oc-btn-menu-lateral').mouseenter(function(){
    $(this).find('#Line_68').attr('x2', '5.47')
    $(this).find('#Line_329').attr('x1', '10.47')
    $(this).find('#Line_330').attr('x1', '7.64')
    $(this).find('#Line_327').attr('x1', '6.37')
})

$('.oc-btn-menu-lateral').mouseleave(function(){
    $(this).find('#Line_68').attr('x2', '10.47')
    $(this).find('#Line_329').attr('x1', '13.47')
    $(this).find('#Line_330').attr('x1', '2.64')
    $(this).find('#Line_327').attr('x1', '10.47')
})

if(screen.width < 480){
   $('.item-has-child').addClass('open')
   $('.item-has-child .oc-submenu').show()
}

$('#open-wdg-mobile').click(function(e) {
    e.preventDefault()
    $('#box-widget-mobile').fadeIn() 
})

$('#close-wdg-mobile').click(function(e) {
    e.preventDefault()
    $('#box-widget-mobile').fadeOut() 
})

$('.oc-general-index .oc-header__widgets-info').click(function() {
    $('.oc-header__widgets-cont').fadeToggle('low', function(){
        if($('.oc-header__widgets-cont').css('display') == 'none'){
            $('.oc-header__widgets-info img').css('transform', 'rotate(0deg)')
            $('.oc-header__widgets-cont').css('opacity', '0')
        } else {
            $('.oc-header__widgets-info img').css('transform', 'rotate(-180deg)')
            $('.oc-header__widgets-cont').css('opacity', '1')
        }
    })
})

$('input[type=radio]').click(function(){
    if (this.previous) {
        this.checked = false;
    }
    this.previous = this.checked;
});

// Menu Lateral mobile
$('.oc-submenu-gen__button-menu-lateral').click(function(e) {
    e.preventDefault();

    $('.oc-submenu-gen .oc-menu-lateral').slideToggle();
})

if(screen.width < 576){
    let desplaceNumber = 0
    $('.oc-submenu-mobile .nav .nav-link').each(function() {
        desplaceNumber = desplaceNumber + 100;
        $(this).attr('data-desplace', desplaceNumber)
    })

    function desplaceMenu(num){
        let number = parseInt(num)

        if(number != 100){
            $('.oc-submenu-gen__cont-nav .nav').animate({
                scrollLeft: number / 2
            }, 500)
        }
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $('.oc-header').addClass('header-fixed');
        } else {
            $('.oc-header').removeClass('header-fixed');
        }
    });

    $('.oc-search-bar__btn').click(function(e) {
        e.preventDefault()
        $(this).addClass('expand-bar')
        $('.oc-box-search').addClass('expand-box')

        $('.oc-box-search__icon-close').click(function(e) {
            e.preventDefault();
            $('.oc-search-bar__btn').removeClass('expand-bar')
            $('.oc-box-search').removeClass('expand-box')
        })

    })

    $('.oc-submenu-gen__cont-nav .nav-link').click(function() {
        $('.oc-submenu-gen__cont-nav .nav-link').removeClass('active');
        $(this).addClass('active');

        desplaceMenu($(this).attr('data-desplace'));
    }) 
}

// Tags
$('.oc-seccion-noticias-etiquetas button').click(function(e) {
    if($(this).hasClass('tag-selected')){
        $(this).removeClass('tag-selected')
    } else {
        $(this).addClass('tag-selected')
    }
});


// Tabs search results
$('.oc-panels__item').hide();
$('.oc-panels__item:first').show();


// Items cultura panels
$('.oc-panels-cultura__slick-panel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.oc-slick-cultura'
})

$('.oc-slick-cultura').slick({
    slidesToShow: 6,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    asNavFor: '.oc-panels-cultura__slick-panel',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        },
      ]
})

$(".oc-slick-cultura").click(function(e) {
    e.preventDefault();
})





if(screen.width < 576){
    $('.oc-slick-cultura .oc-slick-cultura__item').addClass('active');
}


function addIconMenu(iconclass, svgicon){
    $(iconclass).before(svgicon);
}


if(screen.width > 991.98){
    // Sticky menu nosotros
    $(window).scroll(function() {
        if ($(window).scrollTop() > 580) {
          $(".oc-nosotros .oc-header__desktop .oc-submenu-gen").fadeIn();//.fadeOut();
          $(".oc-index-est .oc-header__desktop .oc-submenu-gen").fadeIn();
        } else {
            $(".oc-nosotros .oc-header__desktop .oc-submenu-gen").hide();//.fadeIn();
            $(".oc-index-est .oc-header__desktop .oc-submenu-gen").hide();
        }
    });

    // ICON PROFILE
    addIconMenu('.oc-submenu-gen__cont-nav .profile .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="14.706" height="20.574" viewBox="0 0 14.706 20.574">
    <g id="Grupo_6636" data-name="Grupo 6636" transform="translate(0.75 0.752)">
        <line id="Línea_1013" data-name="Línea 1013" y2="1.917" transform="translate(5.229 6.708)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1014" data-name="Línea 1014" y2="1.917" transform="translate(8.036 6.708)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_11414" data-name="Trazado 11414" d="M25.32,20.53l3.76,1.691a2.847,2.847,0,0,1,1.412,1.97v6.781" transform="translate(-17.286 -11.9)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_11415" data-name="Trazado 11415" d="M15.867,20.52l-3.815,1.7a2.847,2.847,0,0,0-1.412,1.97v2.145l.005,1.144v3.081a.406.406,0,0,0,.41.41h12.79" transform="translate(-10.64 -11.896)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1016" data-name="Línea 1016" x1="1.404" y1="1.591" transform="translate(5.229 8.625)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1017" data-name="Línea 1017" y1="1.591" x2="1.404" transform="translate(6.632 8.625)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_5701" data-name="Trazado 5701" d="M23.2,12.926a2.644,2.644,0,1,1-5.287,0" transform="translate(-13.93 -8.458)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_5702" data-name="Trazado 5702" d="M17.9,9.23V7.518a2.721,2.721,0,0,1,2.384-2.745,2.644,2.644,0,0,1,2.9,2.631V9.23" transform="translate(-13.929 -4.761)" fill="none" stroke="#95A6B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON NOTICE
    addIconMenu('.oc-submenu-gen__cont-nav .notice .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="15.625" height="18.942" viewBox="0 0 15.625 18.942">
    <g id="Grupo_13062" data-name="Grupo 13062" transform="translate(-1905.979 39.75)">
        <path id="Trazado_11413" data-name="Trazado 11413" d="M13.642,7H22.8V23.956H10.058V11.682" transform="translate(1898.055 -45.513)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <rect id="Rectángulo_4557" data-name="Rectángulo 4557" width="6.265" height="6.308" transform="translate(1911.445 -34.841)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1491" data-name="Línea 1491" x2="4.975" transform="translate(1911.445 -25.489)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <ellipse id="Elipse_2151" data-name="Elipse 2151" cx="1.504" cy="1.504" rx="1.504" ry="1.504" transform="translate(1906.729 -39)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON DOC
    addIconMenu('.oc-submenu-gen__cont-nav .doc .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="15.624" height="18.942" viewBox="0 0 15.624 18.942">
    <g id="Grupo_13061" data-name="Grupo 13061" transform="translate(-1912.614 48.205)">
        <path id="Trazado_11425" data-name="Trazado 11425" d="M13.642,7H22.8V23.956H10.058V11.682" transform="translate(1904.691 -53.969)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <g id="Grupo_13060" data-name="Grupo 13060">
        <line id="Línea_1489" data-name="Línea 1489" x2="6.326" transform="translate(1918.081 -35.856)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1492" data-name="Línea 1492" x2="6.326" transform="translate(1918.081 -39)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1493" data-name="Línea 1493" x2="6.326" transform="translate(1918.081 -42.144)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <line id="Línea_1491" data-name="Línea 1491" x2="4.975" transform="translate(1918.081 -32.945)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </g>
        <ellipse id="Elipse_2152" data-name="Elipse 2152" cx="1.504" cy="1.504" rx="1.504" ry="1.504" transform="translate(1913.364 -47.455)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);

    // ICON IMAGE
    addIconMenu('.oc-submenu-gen__cont-nav .image .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="16.114" height="13.872" viewBox="0 0 16.114 13.872">
    <g id="Grupo_12977" data-name="Grupo 12977" transform="translate(0.75 0.75)">
        <path id="Trazado_9055" data-name="Trazado 9055" d="M15.773,6h-2.14l-1-2.188H7.573L6.573,6H4.227A1.534,1.534,0,0,0,2.693,7.536v7.116a1.534,1.534,0,0,0,1.534,1.534H15.773a1.534,1.534,0,0,0,1.534-1.534V7.536A1.534,1.534,0,0,0,15.773,6Z" transform="translate(-2.693 -3.814)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <circle id="Elipse_1335" data-name="Elipse 1335" cx="2.22" cy="2.22" r="2.22" transform="translate(5.087 4.485)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
    </svg>`);


    // ICON VIDEO
    addIconMenu('.oc-submenu-gen__cont-nav .video .nav-link__text', `<svg xmlns="http://www.w3.org/2000/svg" width="18.673" height="13.323" viewBox="0 0 18.673 13.323">
    <g id="Grupo_13048" data-name="Grupo 13048" transform="translate(-396.25 -387.722)">
        <g id="Grupo_9821" data-name="Grupo 9821" transform="translate(397 388.472)">
        <rect id="Rectángulo_139" data-name="Rectángulo 139" width="11.823" height="11.823" transform="translate(0)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Trazado_236" data-name="Trazado 236" d="M1334.014,3009.173l-5.349-3.458v-4.906l5.349-3.458Z" transform="translate(-1316.841 -2997.35)" fill="none" stroke="#95a6b1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </g>
    </g>
    </svg>`);
}


// MODALS MAPS
$('.oc-est-modal__body__slider').slick({
    slidesToShow: 1,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_283" data-name="Trazado 283" d="M183.786,483.837l-4.075-4.075,4.075-4.075" transform="translate(-178.533 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.918" height="11.481" viewBox="0 0 6.918 11.481">
            <path id="Trazado_273" data-name="Trazado 273" d="M821.129,475.686l4.075,4.075-4.075,4.075" transform="translate(-819.464 -474.021)" fill="none" stroke="#19a500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
        </svg>
    </button>`,
    dots: true,
    infinite: false
})

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

// $('.oc-custom-modal-map').hide()

$('.oc-mapa__location-modals').click(function(e) {
    e.preventDefault(e)

    let target = $(this).attr('data-target')

    $(target).css('display', 'flex').hide().fadeIn();
    $('.oc-est-modal__body').scrollTop(0)
    disableScroll()
    $('.oc-est-modal__body__slider').slick('refresh')
    $('.oc-est-modal__head__right__close-button').click(function(e) {
        $('.oc-custom-modal-map').fadeOut()
        enableScroll()
    })
})



$('.oc-slick-clima-card').slick({
    arrows: false,
    dots: true
})

$('.wdg-publicaciones__car').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 560,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
})

var slider = $('.oc-vertical-slider');
slider.on('wheel', (function(e) {
    e.preventDefault();
  
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
}));

$('.wdg-proyectos__car').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 560,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
})

$('.wdg-grupos__car').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slidesToShow: 3,
    verticalSwiping: true,
    slidesToScroll: 3,
})

$('.oc-members-carousel-02').slick({
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
                <svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
                    <path id="Trazado_12569" data-name="Trazado 12569" d="M3.621,7.243.6,4.225l-.6-.6L3.621,0" transform="translate(1 1.414)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="6.035" height="10.071" viewBox="0 0 6.035 10.071">
            <path id="Trazado_12568" data-name="Trazado 12568" d="M3.621,7.243.6,4.225l-.6-.6L3.621,0" transform="translate(5.035 8.657) rotate(180)" fill="none" stroke="#c9cdd2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
    </button>`,
})

$('.open-solicitudes').hover(function(e) {
    e.preventDefault()
    $('.oc-pop-up').fadeIn()
})

$('.open-solicitudes').click(function(e) {
    e.preventDefault()
})

$('.close-solicitudes').click(function(e) {
    e.preventDefault()
    $('.oc-pop-up').fadeOut()
})

$('.oc-slick-almacenamiento').slick({
    slidesToShow: 5,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

$('.oc-slick-almacenamiento-2').slick({
    slidesToShow: 4,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

$('.oc-perfil-date-02__car').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slidesToShow: 1,
    verticalSwiping: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              verticalSwiping: false,
              vertical: false,
            }
        }
    ]
})

$('.wdg-documentos__car').slick({
    arrows: false,
    dots: true,
    vertical: true,
    slidesToShow: 4,
    verticalSwiping: true,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 480,
            settings: {
                verticalSwiping: false,
            }
        }
    ]
})

$('.oc-porvenir__car').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
        breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
            }
        }
    ]
})

$('.oc-slick-almacenamiento-miraflores').slick({
    slidesToShow: 4,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

$('.oc-slick-almacenamiento-caucasia').slick({
    slidesToShow: 2,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

$('.oc-slick-almacenamiento-vasconia').slick({
    slidesToShow: 3,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})


$('.oc-gestion-miraflores__car').slick({
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

$('.oc-vasc-almacenamoiento__car').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
})



// Slick Almacenamiento La Granjita
$('.oc-slick-almacenamiento-granjita').slick({
    slidesToShow: 2,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
              dots: true,
              slidesToShow: 1
            }
        }
    ]
})

// Slick Gestión Ambiental La Granjita
$('.oc-slick-widget__gestion-granjita').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    prevArrow: `<button class='oc-slick-arrow oc-slick-arrow__prev'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_85" data-name="Componente 85" transform="translate(0.392 0.392)">
            <g id="Grupo_13271" data-name="Grupo 13271">
                <circle id="Elipse_2235" data-name="Elipse 2235" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="#fff" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11719" data-name="Trazado 11719" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    nextArrow: `<button class='oc-slick-arrow oc-slick-arrow__next'>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.871" height="21.871" viewBox="0 0 21.871 21.871">
            <g id="Componente_84" data-name="Componente 84" transform="translate(21.479 21.479) rotate(180)">
            <g id="Grupo_13272" data-name="Grupo 13272">
                <circle id="Elipse_2236" data-name="Elipse 2236" cx="10.543" cy="10.543" r="10.543" transform="translate(0)" fill="none" stroke="#505d6c" stroke-miterlimit="10" stroke-width="0.785"/>
                <path id="Trazado_11720" data-name="Trazado 11720" d="M4.075,8.151,0,4.075,4.075,0" transform="translate(7.858 6.468)" fill="none" stroke="#505d6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.355"/>
            </g>
            </g>
        </svg>
    </button>`,
    responsive: [
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                dots: true
            }
        }
    ]
})
