const persona = {
    nombre: 'Gloria Amalia',
    edad: 12,
};

const edadNinno = 12;
/**
  Pudiera ser asi (me gusta mas)  
    const {nombre, edad} = persona;
    
    describe('Mis pruebas con obj.test.js', () => {
        test(`${nombre} es una niña`, () => {
            expect(edad).toBeLessThanOrEqual(edadNinno);
        })
    });
 * 
 */

describe('Mis pruebas con obj.test.js', () => {
    test(`${persona.nombre} es una niña`, () => {
        expect(persona.edad).toBeLessThanOrEqual(edadNinno);
    });
});