
const nombre   = 'Fernando';
const apellido = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//Para poder usar los test
//console.log( nombreCompleto );

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}

//Para poder usar los test
//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );