const { maximo_con_math } = require("./maximo_con_math");

describe("maximo con funcion Math", () => {
  test("Happy path: [4,9,2,10]", () => {
    expect(maximo_con_math([4, 9, 2, 10])).toBe(10);
  });

  test("Happy path: [-5,-1]", () => {
    expect(maximo_con_math([-5, -1])).toBe(-1);
  });

  test("Sad path: arreglo invalido", () => {
    expect(() => maximo_con_math([])).toThrow("arreglo invalido");
    expect(() => maximo_con_math("edificio")).toThrow("arreglo invalido");
  });
});
