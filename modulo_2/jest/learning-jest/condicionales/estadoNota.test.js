const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: 20 puede conducir', () => {
        const respuesta = puedeConducir(20);
        expect(respuesta).toBe('Si');
    });

    test('Happy path: 16 NO puede conducir', () => {
        const respuesta = puedeConducir(16);
        expect(respuesta).toBe('No');
    });

    test('Bad path: edad invalida', () => {
        expect(()=> puedeConducir(-1)).toThrow('edad invalida');
        expect(()=> puedeConducir('19')).toThrow('edad invalida');
    });
});