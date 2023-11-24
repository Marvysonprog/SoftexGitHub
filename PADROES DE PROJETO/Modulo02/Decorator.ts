class FrangoAssado {
    precoSanduichedeFrango: number;
    valordoAdicional: number;
    itemadicional: string;
    constructor() {
        this.precoSanduichedeFrango = 4.50;
        this.valordoAdicional = 0;
        this.itemadicional = [];
    }
    addItemSand(item, valorAdd) {
        this.itemadicional.push(item);
        this.valordoAdicional += valorAdd;
        this.valordoSanduicheDoFrangoAssadocomAdicional = this.valordoAdicional + this.precoSanduichedeFrango;
    }
};
class Pepperoni {
    AdicionalPepperoni: number;
    constructor() {
        this.AdicionalPepperoni = 0.99;
    }
};
class QueijoMussarelaRalado {
    AdicionalQueijoRalado: number;
    constructor() {
        this.AdicionalQueijoRalado = 2.00;
    }
};
var valorSanduiche = new FrangoAssado();
var valorAddPepperoni = new Pepperoni();
var valorQueijoMussarelaRalado = new QueijoMussarelaRalado();
valorSanduiche.addItemSand(valorAddPepperoni, 0.99);
valorSanduiche.addItemSand(valorQueijoMussarelaRalado, 2.00);
console.log(valorSanduiche);