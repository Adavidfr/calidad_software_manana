const { deepMerge } = require('./deepMerge');

describe('Buscar Palabras', () => {
    test('Happy path: Buscar palabra', () => {
        const response = buscarPalabra(
            'Hola mundo Jest', 'Jest'
        );
        expect(response).toBe(true);

        const response2 = buscarPalabra(
            'Hola mundo Jest', 'Jesty'
        );
        expect(response2).toBe(false);
    });

    test('Sad path: ERROR', () => {
        expect(() => buscarPalabra(null, 'jest'))
            .toThrow('frase inválida');
        expect(() => buscarPalabra('', 344))
            .toThrow('frase inválida');
    });
});