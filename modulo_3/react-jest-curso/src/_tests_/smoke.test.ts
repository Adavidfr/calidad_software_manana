describe("smoke", () => {
    test("jest está configurado", () => {
      expect(true).toBe(true);
    });
    test("Área del trapecio", () => {
        const a:number=5;
        const b:number=7;
        const h:number=6;
        const area = ((a + b) * h) / 2;

   expect(area).toBe(36); 
    });          



  });



