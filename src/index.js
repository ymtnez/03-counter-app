//Importando librerias
import React from 'react';             //Usando el snippets imr
import ReactDOM from 'react-dom';      //Usando el snippets imrd
//import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';

//Cargando el estilo
import './index.css';

const divRoot = document.querySelector('#root');
//Tambien puede ser:
//const divRoot = document.getElementById('root');

ReactDOM.render(<PrimeraApp saludo = 'Hola soy Yohandys' />, divRoot);
//ReactDOM.render(<CounterApp value = { 10 }/>, divRoot);
