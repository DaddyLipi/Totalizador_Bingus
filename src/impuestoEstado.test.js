import impuesto from "./impuestoEstado.js";
describe("Test Impuesto", () => {
    test('P UT deberia devolver 0.0665', () => {
        expect(impuesto("UT")).toBe(0.0665);
    });
});