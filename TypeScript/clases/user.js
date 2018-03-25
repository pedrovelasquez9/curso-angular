var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, apellido, email, estatus) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estatus = estatus;
    }
    return Usuario;
}());
var usuario = new Usuario(1, "Pedro", "Plasencia", "pjpv9011@gmail.com", true);
console.log(usuario);
