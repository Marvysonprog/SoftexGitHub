class Gato {
    public request(): string {
        return 'O gato faz o seguinte som por natureza: Miau miau miau!';
    }
}Gato

class AdaptadorGato {
    public specificRequest(): string {
        return 'Mi mi mi mi mi';
    }
}

class AdaptadorGatoDemo extends Gato {
    private adaptee: AdaptadorGato;

    constructor(
        adaptee: AdaptadorGato) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').join('');
        return `Mas o pato que estamos vendo está se comportando de maneira diferente, está se comportando 
como uma galinha, está fazendo o seguinte som: ${result}, mas é um pato!`;
    }
}


console.log('');

function somIni(alvo: Gato) {
    console.log(alvo.request());
}

const somQua = new Gato();
somIni(somQua);


console.log('');

const adaptador = new AdaptadorGato();
console.log(`A gatinha faz o seguinte som por natureza  ${adaptador.specificRequest()}`);

console.log('');


const adaptacao = new AdaptadorGatoDemo(adaptador);
somIni(adaptacao);

console.log('');