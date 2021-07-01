
import  { useRef,useState } from 'react';

enum Operadores {
    sumar,restar,multiplicar,dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('');
    const [operador, setOperador] = useState('');
    const ultimaOperacion = useRef<Operadores>()

    console.log('numero: '+numero);

    console.log('numeroAnterior: '+numeroAnterior);
    
    
    
    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('');
        setOperador('');
    }

    const armarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;
   
        if(numero.startsWith('0') || numero.startsWith('-0')){
            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //Eval si es otro cero y hay otro punto
            }else if(numeroTexto === '0' && numero.includes('.') ){
                setNumero(numero + numeroTexto);

              //Eval si es diferente de cero y no tiene punto  
            }else if(numeroTexto !== '0' && !numero.includes('.') ){
                setNumero(numeroTexto);
            }else if(numeroTexto === '0' && !numero.includes('.') ){
                setNumero(numero);
            }else{
                setNumero( numero+numeroTexto );
            }



        }else{
            setNumero( numero + numeroTexto );
        }
       
    }

    const positivoNegativo = ()=> {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-','') );
        } else {
            setNumero('-' + numero)
        }
    }


    
    const del = () => {
        let negativo = '';
        let numTemp = numero;
        if (numero.includes('-')) {
            negativo='-';
            numTemp = numero.substr(1);
        }

        if (numTemp.length > 1) {
            setNumero(negativo + numTemp.slice(0,-1));
        } else {
            setNumero('');
        }

        
    }
    
    const cambiarNumPorAnterior = () => {
        
        if(numero === '') { return numero }
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('');
    }

    const btnDividir = () => {
       
        cambiarNumPorAnterior();
        operadorChange('%');
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        operadorChange('*');
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnRestar = () => {

        cambiarNumPorAnterior();
        operadorChange('-');
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        operadorChange('+');
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = () => {
       
         
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        
        if( num1 === 0 && num2 === 0) {
            return setNumero('0');
        }

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2 }`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1 }`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2 }`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1 }`)
                break;
            
        }
        setNumeroAnterior('');
        operadorChange('');
    }

    const operadorChange= (op:string)=> {
        
        
        if (numeroAnterior !== '0' ) {
            setOperador(op);
        }else{
            setOperador('');
        }
        
    }

    return {
        limpiar,
        armarNumero,
        positivoNegativo,
        del,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        numero,
        numeroAnterior,
        operador
    };
}