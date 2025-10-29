const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: 20 puede conducir', () => {
        expect(puedeConducir(20)).toBe('Si');
    });

    test('Happy path: 16 NO ppuede conducir', () => {
        expect(puedeConducir(16)).toBe('No');
    });

    test('Sad path: edad inv{alida', () => {
        expect(()=>puedeConducir(-1)).toThrow('edad invalida');
        expect(()=>puedeConducir('19')).toThrow('edad invalida');
    });
});