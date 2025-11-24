function calcularPropina(cuenta,porcentajePropina){
    if(typeof cuenta !== 'number' || cuenta <= 0)
            throw new TypeError('cuenta invalida'); 
    if(typeof porcentajePropina !== 'number' || porcentajePropina <= 0 || porcentajePropina > 100)
        throw new TypeError('porcentaje invalido');

    const propina = cuenta * (porcentajePropina/100);
    totalPagar = cuenta + propina;

    return{
        cuenta: cuenta,
        propina:propina,
        totalPagar: totalPagar
    };
}

module.exports = { calcularPropina };