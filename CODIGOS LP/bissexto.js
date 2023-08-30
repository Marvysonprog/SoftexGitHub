function bissexto(ano) {
    
    if( ano % 400 === 0 ){   
    return true;
}  else if (ano % 4 === 0 && ano % 100 != 0 ){
   return true;
} else{
    return false;
}
}
var ano = parseInt(prompt("Digite um ano: "))
if (bissexto(ano)){
console.log(`O ${ano} é BISSEXTO`);
} else {
    console.log(`O ${ano} não é BISSEXTO`);
}