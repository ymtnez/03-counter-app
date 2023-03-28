//Esto es para organizar mi pruebas con una descripcion
describe('Pruebas en el archivo demo.test.js', () => {
    //Se genera con el snippets: test
    //test('should first', () => { second })
    test('Deben ser iguales los strings ', () => {

        //1. Inicializando
        const mensaje = 'Hola Mundo';
        
        //2. Estimulo
        const mensaje2 = `Hola Mundo`;

        /**
         * 3. Observar el comportamiento
         * 
         * Pudieramos usar un if para hacer mi prueba (test)
         *      if ( mensaje === mensaje2 ){
         *          throw new Error('No esta activo');
         *      }
         * Pero esto no es necesario y ya Jest hara eso por nosotros
         */
        expect( mensaje ).toBe( mensaje2 ); //Es como un ===
        
    });
})

