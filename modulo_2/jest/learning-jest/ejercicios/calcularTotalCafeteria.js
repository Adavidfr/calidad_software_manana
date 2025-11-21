function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items) || items.length === 0) {
      throw new TypeError("items inválidos");
    }
  
    if (typeof ivaPorcentaje !== "number" || ivaPorcentaje < 0 || ivaPorcentaje > 100) {
      throw new TypeError("iva inválido");
    }
  
    let subtotal = 0;
  
    for (const item of items) {
      if (!item.nombre || typeof item.precioUnitario !== "number" || typeof item.cantidad !== "number") {
        throw new TypeError("items inválidos");
      }
  
      subtotal += item.precioUnitario * item.cantidad;
    }
  
    const iva = subtotal * (ivaPorcentaje / 100);
    const total = subtotal + iva;
  
    return {
      subtotal,
      iva,
      total
    };
  }
  
  module.exports = calcularTotalCafeteria;
  