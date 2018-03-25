class Usuario{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    estatus: boolean;

    constructor(id: number, nombre:string, apellido:string, email:string, estatus:boolean){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estatus = estatus;
    }
}

var usuario = new Usuario(1, "Pedro", "Plasencia", "pjpv9011@gmail.com", true);
console.log(usuario);