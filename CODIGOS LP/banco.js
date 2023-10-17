class Banco{
    constructor(nome, conta,saldo,tipoconta,agencia){
        this.nome = nome;
        this.conta = conta;
        this.saldo = saldo;
        this.tipoconta = tipoconta;
        this.agencia=agencia;
    }
    buscarsaldo(){
       return this.saldo;
    }
    deposito(entrada){
        this.saldo += entrada;
    }
    saqueConta(saida){
        this.saldo -= saida;
    }
    numEtipoconta(){
        return "Número da conta:" + this.conta + "-" + this.tipoconta;
    }
}

//Cadastro da conta no banco. Poderia ter sido feito diretamento no objeto/classe mas preferi aqui.

var contaBanc = new Banco("Marvyson Cardoso ", '00014736', 200.00,'Conta corrente', '0051 - Cais do Apolo');

console.log(`A conta: ${contaBanc.tipoconta} do cliente:  ${contaBanc.nome} na agência:
            ${contaBanc.agencia} foi aberta com sucesso, seu saldo inicial é ${contaBanc.saldo}`);


//Consultar/buscar de Saldo do cliente

console.log(`O saldo da conta do cliente: ${contaBanc.tipoconta} é ${contaBanc.buscarsaldo()}`);


//cliente realiza depósito

var salAnt = contaBanc.saldo;
console.log(salAnt);

dePagora = 234.23;

contaBanc.deposito(dePagora);

var salDepois = contaBanc.deposito;

console.log(`O cliente: ${contaBanc.nome} fez um depósito no valor de:${dePagora}. Saldo anterior: ${salAnt}, Saldo atual ${contaBanc.saldo}! `);

//cliente realiza saque

var salAnt = contaBanc.saldo;
console.log(salAnt);

saqAgora = 124.36;

contaBanc.saqueConta(saqAgora);

var salsaqDepois = contaBanc.saqueConta;

console.log(`O cliente: ${contaBanc.nome} fez um saque no valor de:${saqAgora}. Saldo anterior: ${salAnt}, Saldo atual ${contaBanc.saldo}! `)

//Consultar número e tipo de conta do cliente

console.log(`O cliente: ${contaBanc.nome} tem os seguintes dados bancários: ${contaBanc.numEtipoconta()}`);
