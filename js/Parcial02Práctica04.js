let cienAñosDeSoledad = {
    titulo: "Cien Años De Soledad",
    autor: "Gabriel García Márquez",
    añoDePublicación: 1967,
    Generos: ["Realismo mágico","Novela","Saga familiar"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let solaris = {
    titulo: "Solaris",
    autor: "Stanislaw Lem",
    añoDePublicación: 1961,
    Generos: ["Ciencia ficción","Novela","Novela psicológica"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let elCuentoDeLaCriada = {
    titulo: "El cuento de la criada",
    autor: "Margaret Atwood",
    añoDePublicación: 1985,
    Generos: ["Ciencia ficción","Novela","Ficción distópica"],

    escribirFichaBibliografica: function(){
        console.log(`${this.titulo} escrito por ${this.autor} en el año ${this.añoDePublicación}, de género ${this.Generos[0]}.`);
    }
}

let datosPersonales = {
   nombre : "Oscar",
   edad: 20,
   soyEstudiante:true,
   pasatiempos:["Jugar Videojuegos","Ver peliculas","Leer"],

   contacto: {
        email: "osja1601@gmail.com",
        movil: "55 86760560"
   },

   librosFavoritos:[cienAñosDeSoledad,solaris,elCuentoDeLaCriada],
};

console.log(datosPersonales);
cienAñosDeSoledad.escribirFichaBibliografica();
solaris.escribirFichaBibliografica();
elCuentoDeLaCriada.escribirFichaBibliografica();