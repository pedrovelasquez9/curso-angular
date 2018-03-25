var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(ruedas, combustible, color, marca) {
        if (color === void 0) { color = "azul"; }
        this.ruedas = ruedas;
        this.combustible = combustible;
        this.color = color;
        this.marca = marca;
    }
    return Vehiculo;
}());
var Automovil = /** @class */ (function (_super) {
    __extends(Automovil, _super);
    function Automovil() {
        return _super.call(this, 4, "gasolina", "blanco", "Ford") || this;
    }
    return Automovil;
}(Vehiculo));
var automovil = new Automovil();
console.log(automovil);
