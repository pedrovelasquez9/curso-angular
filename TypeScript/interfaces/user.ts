interface IUsuario{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    estatus: boolean;
    telefono: string;
    getNombre(): string;
}

class Usuario implements IUsuario{
    telefono: string;
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    estatus: boolean;

    constructor(id: number, nombre:string, apellido:string, email:string, estatus:boolean, telefono: string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.estatus = estatus;
        this.telefono = telefono;
    }

    getNombre(): string {
        return this.nombre;
    }
}

var usuario = new Usuario(1, "Pedro", "Plasencia", "pjpv9011@gmail.com", true, "9998874521");
console.log(usuario);