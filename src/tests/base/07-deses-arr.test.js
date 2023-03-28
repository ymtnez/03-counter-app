import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion', () => {

    test('Debe de retornar un string y un numero', () => {
        const arr = retornaArreglo(); //Pudiera hacer esto['ABC', 123];
        const [letras, numero] = retornaArreglo(); //Pudiera hacer esto['ABC', 123];
        const tipoDato = typeof(letras); //Para saber el tipo de dato de una variable

        //Podemos tener varios expect
        expect(letras).toBe('ABC');
        expect(numero).toBe(123);
        expect(arr[0]).toBe('ABC');
        expect(tipoDato).toBe('string');
        expect(typeof(numero)).toBe('number');
        /**
         * NO puede ser .toBe() pues en la comparacion de
         * objetos y arreglos se usa .toEqual para
         * que compare a hasta la referencia.
         */
        expect(arr).toEqual(['ABC', 123]);
    });

});