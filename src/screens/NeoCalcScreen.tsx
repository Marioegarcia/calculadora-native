import React from 'react'
import { View, Text } from 'react-native'
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { stylesNeo } from '../theme/appTheme';

import LinearGradient from 'react-native-linear-gradient';



export const NeoCalcScreen = () => {
    const {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        del,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
        operador
    } = useCalculadora();

    // 
    
    const calcUi = [
        {
            texto:'C',
            color:'#222327',
            colorText:'#F72E6D',
            accion: limpiar
        },
        {
            texto:'+/-',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:positivoNegativo
        },
        {
            texto:'del',
            color:'#222327',
            colorText:'#F72E6D', 
            accion:del
        },
        {
            texto:'÷',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:btnDividir
        },
        {
            texto:'7',
            color:'#222327',
            colorText:'#F72E6D',
            accion: armarNumero
        },
        {
            texto:'8',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:armarNumero
        },
        {
            texto:'9',
            color:'#222327',
            colorText:'#F72E6D', 
            accion:armarNumero
        },
        {
            texto:'x',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:btnMultiplicar
        },
        {
            texto:'4',
            color:'#222327',
            colorText:'#F72E6D',
            accion: armarNumero
        },
        {
            texto:'5',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:armarNumero
        },
        {
            texto:'6',
            color:'#222327',
            colorText:'#F72E6D', 
            accion:armarNumero
        },
        {
            texto:'-',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:btnRestar
        },
        {
            texto:'1',
            color:'#222327',
            colorText:'#222327',
            accion: armarNumero
        },
        {
            texto:'2',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:armarNumero
        },
        {
            texto:'3',
            color:'#222327',
            colorText:'#F72E6D', 
            accion:armarNumero
        },
        {
            texto:'+',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:btnSumar
        },
        {
            texto:'0',
            color:'#222327', 
            colorText:'#F72E6D',
            ancho: true,
            accion:armarNumero
        },
        {
            texto:'.',
            color:'#222327',
            colorText:'#F72E6D', 
            accion:armarNumero
        },
        {
            texto:'=',
            color:'#222327', 
            colorText:'#F72E6D',
            accion:calcular
        },
   

       
    ]
    
    return (
        <View style={ stylesNeo.calculadoraContainer } >

            <View style={ stylesNeo.resultadoContainer }>
                <Text style={ stylesNeo.resultadoPequeno } > { numeroAnterior } </Text>
                
                <Text style={ stylesNeo.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit
                >
                    <Text >
                        { numeroAnterior }{" "}
                    </Text>
                    <Text style={{
                        fontSize:50,
                        color: '#F72E6D',
                        
                    }} >
                        {operador}{" "}
                    </Text>
                    <Text>
                        {numero} 
                    </Text>
                    
                </Text>

            </View>
            
            <View style={stylesNeo.filaContainer}>
                

                    
            
            <View style={stylesNeo.fila} >

                    { calcUi.map(((item, i) => {
                       
                       return( 
                       
                            <BotonCalc 
                                key={i+1}
                                texto={item.texto} 
                                ancho={item.ancho} 
                                color={item.color} 
                                accion={ item.accion } 
                                estilos={ stylesNeo }
                            />
                      
                       )
                    }))}

            </View>  

                    

            </View>


           
                        
            
        </View>
    )
}





  



