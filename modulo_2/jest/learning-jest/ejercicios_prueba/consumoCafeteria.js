function calcularTotalCafeteria(items, ivaPorcentaje){
    if(!Array.isArray(items) )
        throw new TypeError('items invalidos');
    
    items.forEach((item, i) =>{
        if(typeof item !== 'object' || item == null)
            throw new TypeError('Objeto no valido');

        if (typeof item.nombre !== 'string' || item.nombre.trim() === '')
            throw new TypeError(`Nombre invalido`);

        if (typeof item.precioUnitario !== 'number' || item.precioUnitario < 0)
            throw new TypeError('Precio Unitario invalido');

        if (typeof item.cantidad !== 'number' || item.cantidad < 0)
            throw new TypeError('cantidad invalida');
    });

    if (typeof ivaPorcentaje !== 'number' || ivaPorcentaje < 0 || ivaPorcentaje > 100)
            throw new TypeError('iva invalido');

    let subtotal = 0;
    for (let item of items) {
        subtotal += item.precioUnitario * item.cantidad;
    }
    const iva = (ivaPorcentaje/100) * subtotal

    const total = iva + subtotal
    return total;
 
}

module.exports = {calcularTotalCafeteria};