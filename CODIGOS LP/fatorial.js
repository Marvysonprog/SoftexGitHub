function Fato(num) {
    
    if( num > 0 ){
    if (num === 1 ){
        return 1;
    } else {
        return Fato(num - 1) * num;
    }
} else{
    console.log("Numero Inválido!");
    return undefined
}
}
var num = parseInt(prompt("Informe um número inteiro positivo"));
console.log(`${num}² = ${Fato(num)}`);