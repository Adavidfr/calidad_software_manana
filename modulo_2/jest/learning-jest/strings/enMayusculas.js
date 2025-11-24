function enMayusculas(texto){
    if(!texto || !typeof texto=='string'){
        throw new TypeError ("texto invalido");
    }
    return texto.toUpperCase();
}
module.exports={enMayusculas}