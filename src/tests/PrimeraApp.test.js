import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe mostrar el mensaje "Hola soy Yohandys"', () => {
        const saludo = 'Hola soy Yohandys';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
    
    });
});