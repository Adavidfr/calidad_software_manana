function contarPalabras(texto){
    if(!texto || !typeof texto== 'string'){
        throw new TypeError
    }
    const textoTrimmed = texto.trim();
    if (textoTrimmed ==='')
        throw new TypeError("frase invalida");
    return textoTrimmed.split(/\s+/).length;
}
module.exports={contarPalabras}