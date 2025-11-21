const calcularTotalCafeteria = require('./calcularTotalCafeteria');

describe('Calcular total en cafetería', () => {

  test('Happy path: calcula subtotal, IVA y total correctamente', () => {
    const items = [
      { nombre: "Café", precioUnitario: 2, cantidad: 2 },
      { nombre: "Sandwich", precioUnitario: 3.5, cantidad: 1 }
    ];

    const response = calcularTotalCafeteria(items, 12);

    expect(response.subtotal).toBeCloseTo(7.5);
    expect(response.iva).toBeCloseTo(0.9);
    expect(response.total).toBeCloseTo(8.4);
  });

  test('Sad path: items no es un arreglo válido → lanza TypeError', () => {
    expect(() => calcularTotalCafeteria("abc", 12))
      .toThrow('items inválidos');

    expect(() => calcularTotalCafeteria([], 12))
      .toThrow('items inválidos');
  });

  test('Sad path: un item tiene valores inválidos → lanza TypeError', () => {
    const items = [
      { nombre: "Café", precioUnitario: "2", cantidad: 1 }
    ];

    expect(() => calcularTotalCafeteria(items, 12))
      .toThrow('items inválidos');
  });

  test('Sad path: IVA fuera de rango (no entre 0 y 100) → lanza TypeError', () => {
    const items = [
      { nombre: "Café", precioUnitario: 2, cantidad: 1 }
    ];

    expect(() => calcularTotalCafeteria(items, 120))
      .toThrow('iva inválido');

    expect(() => calcularTotalCafeteria(items, -5))
      .toThrow('iva inválido');
  });

});
