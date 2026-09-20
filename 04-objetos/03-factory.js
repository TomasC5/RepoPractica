function crearUsuario(name, email) {
    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function() {
            console.log("recuperando clave...");
        },
    };
}

let user1 = crearUsuario("nicolas", "nico@gmail.com");
let user2 = crearUsuario("nicolas2", "nico2@gmail.com");

console.log(user1, user2);