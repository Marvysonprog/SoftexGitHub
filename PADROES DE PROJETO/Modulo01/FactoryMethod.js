const prompt = require('prompt-sync')();

class Computador {
    constructor(ram, hdd, cpu, type, precocomputador) {
        this.ram = ram + " " + "GB";
        this.hdd = "SSD" + " " + hdd + " " + "GB";
        this.cpu = cpu + " " + "GHZ";
        this.type = type;
        this.precocomputador = "R$" + " " + precocomputador;
    }
    dadosComputador() {
        return `\tMemória: ${this.ram} | HARD DISK: ${this.hdd}  | CPU: ${this.cpu} | PREÇO: ${this.precocomputador} \n`;
    }
    imprimirNotacomputador() {
        var notacomp = "\t\t\tNOTA DE VENDA DO COMPUTADOR\n";
        notacomp += "\t-----------------------------------------------------------------------------------------\n";
        notacomp += "\tTipo do Computador:" + "   " + this.type.toString() + "\n";
        notacomp += "\t-----------------------------------------------------------------------------------------\n";
        notacomp += "\tMEMÓRIA\t\tHDD\t\t\tCPU\t\t\tPREÇO\n";
        notacomp += "\t-----------------------------------------------------------------------------------------\n";
        notacomp += this.dadosComputador();
        notacomp += "\t-----------------------------------------------------------------------------------------\n";
        return notacomp;
    }
}
class PC extends Computador {
    constructor(ram, hdd, cpu, type, precocomputador) {
        super(ram, hdd, cpu, type, precocomputador);
    }
}
class Server extends Computador {
    constructor(ram, hdd, cpu, type, precocomputador) {
        super(ram, hdd, cpu, type, precocomputador);
    }
}
var tipoComputador = parseInt(prompt("Escolha qual o tipo de computador a ser vendido: 1 - Para PC, 2 - Para servdor:"));
if (tipoComputador === 1) {
    var comPracomputador = new PC(16, 320, "Core I5 6.7", "PC", 3000);
    console.log(comPracomputador.imprimirNotacomputador());
} else {
    var comPracomputador = new Server(32, 640, "Core I9 12.9", "Servidor", 15000);
    console.log(comPracomputador.imprimirNotacomputador());
}