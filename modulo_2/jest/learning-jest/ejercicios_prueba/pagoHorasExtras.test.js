const { pagoHorasExtras } = require('./pagoHorasExtras');

describe('Pruebas calculos cafeteria', () => {
    test('Happy path: Calcular horas extras', () => {
        expect(pagoHorasExtras(10,8,10,2)).toBeCloseTo(40);
    });
    
    test('Sad path: parametros invalidos', () => {
        expect(() => pagoHorasExtras('a', 10, 10, 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, 'a', 10, 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, 10, 'a', 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, 10, 10, 'a')).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras('', 10, 10, 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, '', 10, 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, 10, '', 10)).toThrow('parametros invalidos');
        expect(() => pagoHorasExtras(10, 10, 10, '')).toThrow('parametros invalidos');
    });

})