import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'            
        };

        const user = getUser ();
        /**
         * NO puede ser .toBe() pues en la comparacion de
         * objetos y arreglos se usa .toEqual para
         * que compare a hasta la referencia.
         */
        expect( user ).toEqual( userTest );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Juan';

        const usuarioActivo = getUsuarioActivo( nombre );

        expect( usuarioActivo ).toEqual({
            uid: 'ABC567',
            username: nombre,
        });
    });
});