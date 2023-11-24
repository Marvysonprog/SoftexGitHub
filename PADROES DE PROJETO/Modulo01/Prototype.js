const prompt = require('prompt-sync')();

class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = "FIAT";
        this.modelo = "CHRONOS";
        this.ano = 2024;
    }
    cloneObjDuas() {
        return `\tMARCA: ${this.marca} |  MODELO: ${this.modelo} | ANO: ${this.ano} | TIP TRILHO: ${this.tipotrilhobanco}  \n`;
    }
    cloneObjQuatro() {
        return `\tMARCA: ${this.marca} |  MODELO: ${this.modelo} | ANO: ${this.ano} | MULTIMIDIA: ${this.multimidia} \n`;
    }
    represent() {
        if (this.multimidia === undefined) {
            var notacomp = "\tREGISTRO DE FABRICAÇÃO DE VEÍCULO\n";
            notacomp += "\t--------------------------------------------------------------------\n";
            notacomp += "\tMARCA\t\t\tMODELO\t\t\tANO\t\t\t\n";
            notacomp += "\t--------------------------------------------------------------------\n";
            notacomp += this.cloneObjDuas();
            notacomp += "\t--------------------------------------------------------------------\n";
            return notacomp;
        } else {
            var notacomp = "\tREGISTRO DE FABRICAÇÃO DE VEÍCULO\n";
            notacomp += "\t---------------------------------------------------------------------------\n";
            notacomp += "\tMARCA\t\t\tMODELO\t\t\tANO\t\t\t\n";
            notacomp += "\t---------------------------------------------------------------------------\n";
            notacomp += this.cloneObjQuatro();
            notacomp += "\t---------------------------------------------------------------------------\n";
            return notacomp;

        }
    }
}

class Duasportas extends Automovel {
    constructor(tipotrilhobanco) {
        super();
        this.tipotrilhobanco = tipotrilhobanco;
    }
}
class Quatroportas extends Automovel {
    constructor(multimidia) {
        super();
        this.multimidia = multimidia;

    }
}
class Aplicacao extends Automovel {
    constructor() {
        super();
        this.carrofabricado = [];
    }
    addVeiculo(item) {
        this.carrofabricado.push(item)
    }
}


var carroDuasportas = new Duasportas("fixo");
var itemdeproducao = new Aplicacao(carroDuasportas);
var addItemclonado = carroDuasportas.cloneObjDuas(itemdeproducao);

var carroDuasportasUm = new Duasportas("removivel");
var itemdeproducao = new Aplicacao(carroDuasportasUm);
var addItemclonado = carroDuasportasUm.cloneObjDuas(itemdeproducao);

var carroDuasportasDois = new Duasportas("hibrido");
var itemdeproducao = new Aplicacao(carroDuasportasDois);
var addItemclonado = carroDuasportasDois.cloneObjDuas(itemdeproducao);



var carroQuatroportas = new Quatroportas("Encosto do banco");
var itemdeproducao = new Aplicacao(carroQuatroportas);
var addItemclonado = carroQuatroportas.cloneObjQuatro(itemdeproducao);

var carroQuatroportasUm = new Quatroportas("Pain. e enc. do banco");
var itemdeproducao = new Aplicacao(carroQuatroportasUm);
var addItemclonado = carroQuatroportasUm.cloneObjQuatro(itemdeproducao);

var carroQuatroportasDois = new Quatroportas("Painel");
var itemdeproducao = new Aplicacao(carroQuatroportasDois);
var addItemclonado = carroQuatroportasDois.cloneObjQuatro(itemdeproducao);

itemdeproducao.addVeiculo(carroDuasportas);
itemdeproducao.addVeiculo(carroDuasportasUm);
itemdeproducao.addVeiculo(carroDuasportasDois);


console.log(carroDuasportas.represent());
console.log("\n");
console.log(carroDuasportasUm.represent());
console.log("\n");
console.log(carroDuasportasDois.represent());

