//legenda

const candidatos = {

    candidato01Nome = "Cleidiane Nunes";
    aneNumero = 889,
    candidato02Nome = "Jorge Braga";
    jorgeNumero = 874,
    candidato03Nome = "Renan Souza";
    RenanNumero = 5151,
    brancoNome = "Branco";
    brancoNumero = 0,
    nuloNome = "Nulo"

}

//Zereisma

var qtdVotos01 = 0;
var qtdVotosJorge = 0;
var qtdVotosRenan = 0;
var qtdVotosBranco = 0;
var qtdVotosNulo = 0;

//Inicio das eleicoes

do {
    do {
        let voto = alert(`Bem-vindo a votação|
    Candidatos: 
        ${candidatos.candidato01Nome} : ${candidatos.aneNumero}
        ${candidatos.brancoNome} : ${candidatos.brancoNumero}
        ${candidatos.candidato02Nome} : ${candidatos.jorgeNumero}
        ${candidatos.candidato03Nome} : ${candidatos.RenanNumero} 
    Vote: `)

    var testeletra = false

    for(let i = 0 ; i < voto.length(); i++){
        if(isNaN(Number (voto[i]))){
            testeletra = true;
            break;
        }
    }

    } while (testeletra);  


} while (false);