//Creando mi primer componente

/**
 * En react existen 2 tipos de componentes;
 * - Los que estan basados en clases (class)
 * - Los que estan basados en funciones (son los mas utilizados).
 * Estas funciones son llamdas Funtional Component (FC)
 */

//Esto se genero con el snippets: imr
import React from 'react';
//Esto se genero con el snippets: impt
import PropTypes from 'prop-types'

/**
 * import React, { Fragment } from 'react';
 * Aqui React es lo que importamos por defecto de la
 * libreria de react y Fragment es una importacion 
 * independiente de la misma libreria. Todas las
 * importaciones independientes van entre {}  
 */

/**
 * Podemos usar el snippets rafcp para generar toda la function component y genera esto:
        import React from 'react'
        import PropTypes from 'prop-types'

        const CounterApp = props => {
            return (
                <div>CounterApp</div>
            )
        }

        CounterApp.propTypes = {}

        export default CounterApp
 
 * Quedaria solo cambiar algunas cosilla
 */

//Functional Component
/**
 * Con esto ({saludos}) estamos desestructurando el objeto que
 * viene como property para obtener el valor del atributo: saludo
 * Pero puede pasar que desde mi componente padre (PrimerApp) que
 * esta en index.js en el render, no me envien props (properties)
 * ejemplo saludo que es una propiedad. En este caso no se imprime
 * nada dentro de <h1>{ saludo }</h1>, pero una variante puede ser
 * pasar un valor por defecto a saludo asi:
 *  const PrimeraApp = ( {saludo = 'Hola Mundo'} ) => {
 *      .....
 *  }
 * Pero lo mas usado y recomendado en estos casos es usar
 * PropTypes que son los tipos de properties que recibe el
 * componente. En general todos los componentes reciben properties.
 * O de lo contrario podemos pasar props por default sin tener que
 * poner: const PrimeraApp = ( {saludo = 'Hola Mundo'} ) => {
 * En este caso se imprime Hola Mundo pero al componente no llega
 * la propiedad.
 * Lo mas usado para estos casos es usar defaultProps
 */
const PrimeraApp = ( {saludo, subtitulo, otra} ) => {
    /**
     * Una variante para cuando no me mandan las props desde el
     * componente padre seria usando esto:
     *  if (!saludo){
     *      throw new Error('No me enviaste la props');
     *  }
     * Pero esto no es eficiente y lo mejor seria usar PropTypes
     * para eso debemos importar la libreria de prop-types
     */

    /**
     * JavaScript solo puede retornar un elemento (objeto,
     * arreglo, un primitivo (string, numeros), etc) para
     * poder enviar varias cosas podemos utilizar () que
     * indica que vamos a retornar lo que esta dentro.
     * Aqui creamos un solo elemento que es el div y de 
     * esta manera todo lo que esta dentro de el puede
     * ser enviado, pero creariamos un elemento mas para
     * que el navegador recargue (el div). 
            return (
                <div>
                    <h1>Hola Mundo</h1>
                    <p>Mi primera aplicación</p>
                </div>
            );
        Si utilizamos esta via entonces se debe importar
        el componente Fragment (en la parte de import que
        esta comentada). Pero es una importacion innecesaria   
            return (
                <Fragment >
                    <h1>Hola Mundo</h1>
                    <p>Mi primera aplicación</p>
                </Fragment>
            );
    */
   
    /**
     * Podemos imprimir en saludo: numeros, letras, arreglos (luce
     * una concatenacion de sus elementos en el cuerpo del html) y
     * objetos. Pero en el caso de los objetos tenemos que usar:
     * <pre>{ JSON.stringify(saludo, 'lolo', 3) }</pre> 
     */
       
    //El <> indica un fragment pero reducidamente
    return (
        <> 
            <h1>{ saludo }{otra}</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

/**
 * PropTypes no es mas que los tipos de las properties que recibe
 * el componente. En este ejemplo estamos definiendo el tipo string.
 * Pero pueden pasar dos cosas:
 * 1-) Que el valor de la propiedad saludo que me envian desde el
 * componente padre (PrimeraApp en index.js en el metodo render)
 * sea un numero, es decir, el tipo de la props sea un number
 *  ej: ReactDOM.render(<PrimeraApp saludo = {123} />, divRoot);
 * aqui tendremos un error pues mi propTypes saludos la he definido
 * como un string.
 * 2-) Que no me envien ninguna props (properti) desde mi componente
 * padrem, es decir, que no provean ninguna valor a la propiedad:
 *  ej: ReactDOM.render(<PrimeraApp />, divRoot);
 * Para solucionar estos posibles problemas y obligar a que los
 * desarrolladores del equipo envien las properties y sus valores
 * adecuados a los tipos definidos para las mismasm entonces lo
 * haces asi:
 */
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number,
};

/**
 * Si necesitamos utilizar props por defecto lo hacemos asi, aunque
 * si en el componente padre mandas un valor para subtitulo, entonces
 * ese valor sera el utilizado.
 */
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;