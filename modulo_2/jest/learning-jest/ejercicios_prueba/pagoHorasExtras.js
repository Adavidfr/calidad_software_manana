function pagoHorasExtras(horasTrabajadas, horasBase, tarifaHora, factorExtra){
    if(typeof horasTrabajadas !== 'number' || horasTrabajadas == ' null')
        throw new TypeError('parametros invalidos');
    if(typeof horasBase !== 'number' || horasBase == 'null')
        throw new TypeError('parametros invalidos');

    if(typeof tarifaHora !== 'number' || tarifaHora == 'null')
        throw new TypeError('parametros invalidos');
    if(typeof factorExtra !== 'number' || tarifaHora == 'null')
        throw new TypeError('parametros invalidos');
    let pagoExtra = 0;
    if(horasTrabajadas <= horasBase){
        pagoExtra = 0;
    } else {
        horasExtras = horasTrabajadas - horasBase;
        pagoExtra = tarifaHora * factorExtra;
        total = horasExtras * pagoExtra;
    }
    return total;

}
module.exports = { pagoHorasExtras };