var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, apellido, email, estatus, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estatus = estatus;
        this.telefono = telefono;
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    return Usuario;
}());
var usuario = new Usuario(1, "Pedro", "Plasencia", "pjpv9011@gmail.com", true, "9998874521");
console.log(usuario);
