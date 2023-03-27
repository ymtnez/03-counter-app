//Importando librerias necesarias
import React from 'react';              //Importamos esto con imr y cuando vamos a utilizar JSX
import ReactDOM from 'react-dom';       //Usando el snippets imrd
import PrimeraApp from './PrimeraApp';

//Cargando el estilo
import './index.css'; 


//Tambien sirve esto: const divRoot = document.getElementById('root');
const divRoot = document.querySelector('#root');

// <PrimeraApp /> indica que es un componente pues la funcion devuelve un html
ReactDOM.render(<PrimeraApp saludo = 'Popo' otra = {123} />, divRoot);