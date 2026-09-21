//constructores siempre llevan UpperCamelCase

function Usuario() {
    this.id = 1;
    this.recuperarClave = function() { //metodos = funcion asignada a la propiedad de un objeto
        console.log("recuperando clave...");
    }
}

let usuario = new Usuario();

console.log(usuario);