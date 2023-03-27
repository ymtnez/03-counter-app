/**
 * Podemos usar el snippets rafcp para generar
 * toda la function component
 */
//Importando librerias
import React, { useState } from 'react'; //Snippets imrs 
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10 }) => {

    /**
     * useState es un hook que no es mas que una funcion, es decir,
     * todos los hook son funciones. Y en este caso el hook useState
     * es una funcion que recibe un argumento y devuelve un array de
     * dos posiciones donde en la 1era posicion esta el valor del
     * argumento pasado al hook (useState) y en la 2da posicion del
     * array guarda una funcion. Esta funcion generalmente se le pone
     * setAlgo, o sea empieza con set y el resto un nombre asociado 
     * al primer valor del array (ej; [valor, setValor], [name, setName)
     * y su objetivo es establecer el valor al 1er argumento del array    
     * La funcion pudiera llamarse asi: console.log( state[1]() );
     * pero no es lo usual.
     * 
     * Lo mas usual y recomendado es desestructurar el retorno
     * del useState (que es un arreglo)
    */
    const [ counter, setCounter ] = useState( value );    

    //De esta manera paso setNomb como referencia no la estoy ejecutando
    //console.log( nomb, setNomb );    

    //Manejar (handle) el evento onClick
    const handleAdd = () => setCounter( counter + 1 );
    /**
     * Pudieramos pensar que seria lo mismo hacer esto:
     * let counter = counter + 1; pero no va a funcionar
     * pues no se puede cambiar el estado de una cont asi.
     * Para cambiar los estados debemos usar las funciones
     * como por ejemplo useState.
     * Esto seria lo mismo: 
     *      setCounter( (c) => c + 1 );
     * donde c repersenta el 1er arg del arreglo devuelto
     * por useState.
    */
   
    //Definiendo handleReset
    const handleReset = () => setCounter( value );

    //Definiendo la substraccion
    const handleSubtract = () => {
        if ( counter > 0 ) {
            setCounter( counter - 1 );
        }
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            {/**
             * El evento onClick recibe una accion (funcion generalmente de flecha) para cuando alguien de click
             * Esto pudiera ser asi:
             * onClick = { (e) => {console.log(e)} } donde e es el evento que recibe el argumento
             * de la funcion que se ejecuta al dar click. Pero incluso se puede (muchos lo hacen asi) definir
             * la funcion fuera y solo hacer la llamada a la misma por referencia, es decir, sin poner ().
             * ej: handleAdd 
             * ¿Y por que solo: onClick = { handleAdd }...? Por que si analizamos la funcion desde el inicio
             * onClick = { (e) => { handleAdd (e) } } tenemos una funcion de flecha donde el 1er argumento (e) es
             * el primer argumento de la funcion (handleAdd) que esta dentro de la funcion de flecha y cuando
             * tenemos estos casos podemos reducir el codigo a: onClick = { handleAdd }
             */}
            <button onClick = { handleAdd } >+1</button>
            <button onClick = { handleReset } >Reset</button>
            <button onClick = { handleSubtract } >-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp