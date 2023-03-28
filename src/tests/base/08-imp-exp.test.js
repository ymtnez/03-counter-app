import { getHeroeById } from '../../base/08-imp-exp';

describe('Pruebas en funciones de Heroes', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 2;
        const heroe = getHeroeById(id);

        //expect(espera).toBe(recibe);
    });
});