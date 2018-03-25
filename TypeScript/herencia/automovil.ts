class Vehiculo{
    ruedas: number;
    combustible: string;
    private color: string;
    public marca: string;

    constructor(ruedas: number, combustible: string, color: string = "azul", marca: string){
        this.ruedas = ruedas;
        this.combustible = combustible;
        this.color = color;
        this.marca = marca;
    }
}

class Automovil extends Vehiculo{
    constructor(){
        super(4, "gasolina", "blanco", "Ford");
    }
}

var automovil = new Automovil();
console.log(automovil);