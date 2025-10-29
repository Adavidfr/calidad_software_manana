const {maximo} = require('./maximo');


describe ('maximo con funcion Math', ()=>{
    test('Happy path: [4,9,2,10] mayor 10',() => {
        expect(maximo([4,9,2,10])).toBe(10);
    });
    test('Happy path: [-5,-1] mayor -1',() => {
        expect(maximo([-5,-1])).toBe(0);
    });
    test('sad path: arreglo invalido',() => {
        expect(()=>maximo([])).toThrow('arreglo invalido');
        expect(()=>maximo('edificio')).toThrow('arreglo invalido');
    });
});