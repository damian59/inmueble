const { Propiedades, Category } = require("./models/index")

const casa1 = {
    nombre: "Barcala 1423",
    precio: 5000,
    descripcion: "Casa muy agradable, de buen tamaño y cuenta con espacios adecuados. ... Baño completo: estando a desnivel de la casa. Cocina: dentro de ella esta una puerta que te lleva al patio de servicio. Sala y Comedor: tienen dos ventanales, y entre ambos se encuentra una pequeña jardinera.",
    ubicacion: "Merlo",
    imagen: "https://i.ibb.co/vq3Wvtx/casa1.jpg",
    disponible: true,

}

const casa2 = {
    nombre: "Rivadavia 15322",
    precio: 10000,
    descripcion: "Muy linda casa, grande, hermosa por donde se la vea, 3 dormitorios, amplio living y comedor, cocina tipo mediana, excelente ubicacion",
    ubicacion: "Haedo",
    imagen: "https://i.ibb.co/dJKZR07/casa2.jpg",
    disponible: true,

}
const casa3 = {
    nombre: "Balbastro 2345",
    precio: 8000,
    descripcion: "Vendemos una casa. 3 habitaciones en el segundo. Tiene garaje. Hay un jardín en frente. La casa tiene varias ventanas, es cómoda, espaciosa y fresca. Los baños, el techo, las paredes y todas las partes de la casa están en buen estado.  La casa luce antigua pero está muy bien cuidada. Hay suficiente espacio para construir aún más. Es bonita y está ubicada en un lugar seguro.",
    ubicacion: "San Justo",
    imagen: "https://i.ibb.co/SxM7r9N/casa3.jpg",
    disponible: true,

}
const casa4 = {
    nombre: "Avellaneda 4323",
    precio: 6000,
    descripcion: "En esta vivienda podrás disfrutar de la tranquilidad de saber que tus hijos juegan sin peligro, mientras te relajas viendo una pelicula en tu cine de verano particular que podrás montarte en la terraza cubierta de la parte trasera de la vivienda. El exterior es perfecto para que tu tiempo lo vivas con los tuyos, y no para que te pases el tiempo manteniendo el jardín, puesto que tan solo unas pinceladas de verde decoran la amplia parcela. ",
    ubicacion: "Castelar",
    imagen: "https://i.ibb.co/5vLMmLF/casa4.jpg",
    disponible: true,

}

const quintasCasas1 = {
    nombre: "Don Bosco 1234",
    precio: 6000,
    descripcion: "Casa Quinta con hermosas vistas, correspondiente a un antiguo casco de Estancia, rodeados de naturaleza donde se preserva un parque de árboles añejos de Pinos, Eucaliptos, Palos Borrachos, Palmeras y Lapachos ",
    ubicacion: "General Rodriguez",
    imagen: "https://i.ibb.co/Hp6TLcW/quintas1.jpg",
    disponible: true,
}
const quintasCasas2 = {
    nombre: "Libertad 874",
    precio: 6000,
    descripcion: "Casa Quinta.Dos dormitorios amplios con placard empotrados, 2 baños(uno interno y otro externo en lavadero), cocina amplia, amoblada con una barra desayunadora, comedor, y living con altillo y hogar a leña. Lavadero ",
    ubicacion: "Marcos Paz",
    imagen: "https://i.ibb.co/S5znhxD/quintas2.jpg",
    disponible: true,
}
const quintasCasas3 = {
    nombre: "Constituyente 5432",
    precio: 6000,
    descripcion: "Casa estilo quinta sobre 2 fracciones de 19,50 x 52 m2, superficie 2028 m2, con antigua casco semi reciclado de 100 m2, de En PB: Livin comedor con escalera de hierro a PA; dormitorio, baño y cocina comedor, PA Amplio ambiente con con diseño colonial. Todo muy agradable, con detalles modernos y algunos detalleas aun a modernizar interiores y exteriores, Amplio parque con atractivo espacio y con variedades de arboles y frutales ",
    ubicacion: "Mariano Acosta",
    imagen: "https://i.ibb.co/0946zkQ/quinta-3.jpg",
    disponible: true,
}
const quintasCasas4 = {
    nombre: "Ruta 25 7432",
    precio: 6000,
    descripcion: "CASA QUINTA CON PILETA Y ESPACIOS VERDES ",
    ubicacion: "Moreno",
    imagen: "https://i.ibb.co/xfpsHdq/quinta4.jpg",
    disponible: true,
}
const departamento1 = {
    nombre: "Primera Junta 3454",
    precio: 6000,
    descripcion: " USO COMERCIAL EXCLUSIVAMENTE.Departamento monoambiente a estrenar.Ubicado al contrafrente en 1º piso con amplio patio.Apto profesional",
    ubicacion: "Caballito",
    imagen: "https://i.ibb.co/8XkQwXJ/depto1.jpg",
    disponible: true,
}
const departamento2 = {
    nombre: "Echeverria 2000",
    precio: 6000,
    descripcion: "EXCEPCIONAL PISO , 3°.Edificio Gran Categoría SUM con parrilla, 2 saunas, sala de microcine, gimnasio, piscina y jacuzzi. Vigilancia 24 hs. 2 cocheras fijas. ",
    ubicacion: "Belgrano",
    imagen: "https://i.ibb.co/34TJ6Rc/depto2.jpg",
    disponible: true,
}
const departamento3 = {
    nombre: "Lavalle 3900",
    precio: 6000,
    descripcion: " Amplio monambiente ubicado en el 6º piso con disposicion lateral muy luminoso.Tiene cocina integrada y 1 ( un ) baño con ducha. Cuenta con generoso espacio de guardado a traves de varios armarios empotrados. Ventanal con persiana. ",
    ubicacion: "Palermo",
    imagen: "https://i.ibb.co/t2gkN7C/depto3.jpg",
    disponible: true,
}
const departamento4 = {
    nombre: "Austria 1900 ",
    precio: 6000,
    descripcion: "Excelente departamento premium de 2 ambientes y amenities de alta categoría situado en una de las zonas más estimulantes de Barrio Norte. 1 ( un ) dormitorio en suite con vestidor y baño completo con jaccuzzi , toilette, balcón, y cochera fija en el segundo subsuelo del edificio ",
    ubicacion: "Barrio Norte",
    imagen: "https://i.ibb.co/TwJrs0t/depto4.jpg",
    disponible: true,
}

const cat1 = {
    nombre: 'casas'
}
const cat2 = {
    nombre: 'casas quintas'
}
const cat3 = {
    nombre: 'departamentos'
}

const propiedadArr = [casa1, casa2, casa3, casa4, quintasCasas1, quintasCasas2, quintasCasas3, quintasCasas4, departamento1, departamento2, departamento3, departamento4]

const categoryArr = [cat1, cat2, cat3]

const propPromise = function () {
    Propiedades.bulkCreate(propiedadArr)
        .then(res => {
            console.log("Propiedades creadas")
            return res
        })
}

const catePromise = function () {
    Category.bulkCreate(categoryArr)
        .then(res => {
            console.log("Categoria creadas")
            return res
        })
}

Promise.all([propPromise(), catePromise()]).then((x) => {

    console.log("base de datos seedeada OK")

    return x;
});