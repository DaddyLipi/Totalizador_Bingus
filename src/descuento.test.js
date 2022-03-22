import descuento from "./descuento.js";
describe("Test descuento", () => {
    test('Tener 30000 deberia devolver 0.15', () => {
        expect(descuento(30000)).toBe(0.15);
    });
});