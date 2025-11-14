const {
    esTruthy,
    retornarDefault,
    requiereTextoNoVacio
} = require('./trutthyFalsy');

describe('Truthy / Falsy', () => {

    test('Happy: valores truthy y falsy', () => {
        // Pruebas para valores Truthy
        expect(esTruthy('hola')).toBeTruthy();
        expect(esTruthy(1)).toBeTruthy();
        expect(esTruthy([])).toBeTruthy();
        expect(esTruthy({})).toBeTruthy();

        // Pruebas para valores Falsy
        expect(esTruthy(0)).toBeFalsy();
        expect(esTruthy('')).toBeFalsy();
        expect(esTruthy(null)).toBeFalsy();
        expect(esTruthy(undefined)).toBeFalsy();
    });

    // ---

    test('Happy: retornarDefault usa falsy para asignar defecto', () => {
        // Valor Truthy: retorna el valor
        expect(retornarDefault('OK', 'DEF')).toBe('OK');
        
        // Valor Falsy (0): retorna el defecto
        expect(retornarDefault(0, 'DEF')).toBe('DEF');
        
        // Valor Falsy (''): retorna el defecto
        expect(retornarDefault('', 'DEF')).toBe('DEF');
        
        // Valor Falsy (null): retorna el defecto
        expect(retornarDefault(null)).toBe('N/A'); // Usa el defecto por omisión
    });

    // ---

    test('Sad: requiereTextoNoVacio lanza en falsy o no string', () => {
        // Falsy (string vacío)
        expect(() => requiereTextoNoVacio(''))
            .toThrow('texto requerido');
        
        // Falsy (solo espacios)
        expect(() => requiereTextoNoVacio('   '))
            .toThrow('texto requerido');

        // Falsy (null)
        expect(() => requiereTextoNoVacio(null))
            .toThrow('texto requerido');

        // Caso de éxito con trim
        expect(requiereTextoNoVacio(' test ')).toBe('test');
    });
});