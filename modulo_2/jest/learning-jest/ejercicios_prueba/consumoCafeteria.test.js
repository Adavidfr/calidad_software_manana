const { calcularTotalCafeteria } = require('./consumoCafeteria');

describe('Pruebas calculos cafeteria', () => {
    test('Happy path: Calcular consumo', () => {
        let lista = [
            {nombre:'Edison',precioUnitario:10,cantidad:10},
            {nombre:'Wilfrido',precioUnitario:20,cantidad:20}
        ];
        expect(calcularTotalCafeteria(lista,10)).toBe(550)
    });

    test('Sad path: arreglo invalido', () => {
        expect( () => calcularTotalCafeteria('invalido',10)).toThrow('items invalidos');
    });

    test('Sad path: objeto invalido en la lista', () =>{
        let lista = ['Edison'];
        expect( () => calcularTotalCafeteria(lista,10)).toThrow('Objeto no valido');
    });
    
    test('Sad path: nombre invalido en el objeto', () => {
        let lista = [
            {nombre:5,precioUnitario:10,cantidad:10}
        ];
        expect( () => calcularTotalCafeteria(lista,10)).toThrow('Nombre invalido');
    });

    test('Sad path: Precio Unitario invalido en el objeto', () => {
        let lista1 = [
            {nombre:'Edison',precioUnitario:true,cantidad:10}
        ];
        let lista2 = [
            {nombre:'Wilfrido',precioUnitario:-1,cantidad:10}
        ];
        expect( () => calcularTotalCafeteria(lista1,10)).toThrow('Precio Unitario invalido');
        expect( () => calcularTotalCafeteria(lista2,10)).toThrow('Precio Unitario invalido');
    });

    test('Sad path: cantidad invalida en el objeto', () => {
        let lista = [
            {nombre:'Edison',precioUnitario:10,cantidad:-1}
        ];
        expect( () => calcularTotalCafeteria(lista,10)).toThrow('cantidad invalida');
    });

    test('Sad path: Porcentaje IVA invalido en el objeto', () => {
        let lista = [
            {nombre:'Edison',precioUnitario:10,cantidad:10}
        ];
        expect( () => calcularTotalCafeteria(lista,'q')).toThrow('iva invalido');
        expect( () => calcularTotalCafeteria(lista,-1)).toThrow('iva invalido');
        expect( () => calcularTotalCafeteria(lista,101)).toThrow('iva invalido');
    });
})