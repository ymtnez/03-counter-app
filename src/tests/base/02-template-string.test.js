//Importando librerias
import { getSaludo } from '../../base/02-template-string';

//Esto es para organizar mi pruebas con una descripcion
//Usando el snippets desc
describe('Pruebas en 02-template-string.test.js', () => {

    test('getSaludo debe de retornar Hola Fernando', () => {
        
        //1. Inicializando
        const nombre = 'Fernando';
        //2. Estimulo
        const saludo = getSaludo(nombre);

        //3. Observando el comportamiento
        expect( saludo ).toBe( `Hola ${nombre}` );

    });

    /**
     * Tarea: getSaludo debe de retornar Hola Carlos si no hay
     * argumento nombre
     */
    test('Debe retornar Hola Carlos si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe( `Hola Carlos` );
    })

});