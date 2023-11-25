const Sequelize = require('sequelize');

class SistemaDeseguranca {
    senha: string;
   
    constructor(senha:string) {
        this.senha  = senha;
        this.db = new Sequelize('techrepair', 'root', senha, {host: "localhost", dialect: "mysql"});
    }
    acessarBasesecreta(): void {
        this.db.authenticate().then(function () {
            console.log("ACESSO CONCEDIDO!!!");
        }).catch(function () {
            console.log("ACESSO NEGADO! AGENTE DESCONHECIDO!!!");
        })
    }
}

var contrasenha = '123456'

var base = new SistemaDeseguranca(contrasenha);
base.acessarBasesecreta();
