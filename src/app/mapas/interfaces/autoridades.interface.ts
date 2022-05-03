export interface Autoridades {
    id:                 string;
    autoridad:          string;
    nombre:             string;
    cargo:              string;
    cargo_Municipio :    number;
    cargo_Gobernador:   number;
    cargo_Senador:      number;
    cargo_Presidente:   number;
    cargo_Diputado_Local: number;
    cargo_Diputado_Federal: number;
    img:                Imagen;
    partido_politico:   Partido_politico;
    ayuntamiento:       Ayuntamiento;    
    periodo_cargo:      string;
    Telefono:           string;
    correo_electronico: string;
    direccion:          string;
    comision_1:         string;
    comision_2:         string;
    comision_3:         string;
    comision_4:         string;
    comision_5:         string;
    comision_6:         string;
    comision_7:         string;
    comision_8:         string;
    datos_generales:    Datos_Generales;
    redes_sociales:     Redes_Sociales;
}
export interface Ayuntamientos {
    id:                    number;
    id_municipio:          number;
    municipio_nombre:      string;
    id_distrito_local:     number;
    distrito_local_nombre: string;
    id_distrito_federal:   number;
    distrito_federal:      string;
}

export interface Imagen{
    foto_img:           string;
    archivo_img:        string;
}
export interface Datos_Generales{
    pregunta_1 :        string;
    sub_pregunta_1:        string;
    respuesta_1:        string;
    pregunta_2 :        string;
    respuesta_2:        string;
    pregunta_3 :        string;
    respuesta_3:        string;
    pregunta_4 :        string;
    respuesta_4:        string;
    pregunta_5 :        string;
    respuesta_5:        string;
}
export interface Redes_Sociales{
    facebook:           string;
    instagram:          string;
    twitter:            string;
    youtube:            string;
    // portal_personal:    string;
}

export interface Partido_politico{
    nombre_partido:     string;
    nombre_completo:    string;
    imagen_partido:     string;
    archivo_img:        string;
}
export interface Ayuntamiento{
    nombre_ayuntamiento:     string;
    imagen_ayuntamiento:     string;
    archivo_img:        string;
}