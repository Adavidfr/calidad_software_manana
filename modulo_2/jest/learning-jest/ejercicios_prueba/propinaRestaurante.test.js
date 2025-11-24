const { calcularPropina } = require('./propinaRestaurante');

describe('Pruebas calculos propina', () => {
    test('Happy path: verificar que es objeto', () =>{
        const expectedValue = {cuenta:10, propina:1.5, totalPagar: 11.5}
        const resultado = calcularPropina(10,15);
        expect(resultado).toEqual(expectedValue);
    });

    test('Sad path: Valores de ingreso errados', () =>{
        expect ( () => calcularPropina(0, 12)).toThrow('cuenta invalida');
        expect ( () => calcularPropina(133, -2)).toThrow('porcentaje invalido');
    });
})