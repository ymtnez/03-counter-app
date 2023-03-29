import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( (objeto) => (objeto.id === id) );
        
        expect(heroe).toEqual(heroeData);
        
    });

    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id); const heroeData = heroes.find ( (elem) => (elem.id === id) );
        
        expect(heroe).toBeUndefined; //expect(heroe).toBe(undefined);
    })

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const dc = getHeroesByOwner (owner);
        const dcData = heroes.filter( (param) => (param.owner === owner) );

        expect( dc ).toEqual( dcData );
    })
    
    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const marvel = getHeroesByOwner(owner);
        const marvelData = heroes.filter( (objetos) => (objetos.owner === owner) );

        expect( marvel ).toEqual( marvelData );
        expect( marvel.length ).toBe( 2 );
    })
});