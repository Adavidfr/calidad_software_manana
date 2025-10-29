function sumaHasta (numero){
    if (typeof numero !== 'number'
        ||Number.isNaN(numero)
        ||Number.isInteger(numero)
        ||nota < 1
        ) {
            throw new TypeError("numero invalido");
        }
    let total=0;
    for(let i;i<=numero;i++){
        total+=i;
    }     
    return total;
}
module.exports={sumaHasta}