import React, { useRef, useState } from 'react'
import {Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';




export default function CalculadoraScreen() {
    
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

    return (
        <View style={ styles.calculadoraContainer } >

            <View style={ styles.resultadoContainer }>
                <Text style={ styles.resultadoPequeno } > { numeroAnterior } </Text>
                
                <Text style={ styles.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit
                >
                    <Text >
                        { numeroAnterior }{" "}
                    </Text>
                    <Text style={{
                        fontSize:50,
                        color: 'white',
                        
                    }} >
                        {operador}{" "}
                    </Text>
                    <Text>
                        {numero} 
                    </Text>
                    
                </Text>

            </View>
            
            <View style={styles.filaContainer}>
                <View style={styles.fila} >

                    <BotonCalc texto='C' color='#9b9b9b' accion={limpiar} />
                    <BotonCalc texto='+/-' color='#9b9b9b' accion={positivoNegativo}/>
                    <BotonCalc texto='del' color='#9b9b9b' accion={del}/>
                    <BotonCalc texto='/' color='#FF9427' accion={btnDividir}/>

                    </View>
                    <View style={styles.fila} >

                    <BotonCalc texto='7' accion={armarNumero} />
                    <BotonCalc texto='8' accion={armarNumero} />
                    <BotonCalc texto='9' accion={armarNumero}/>
                    <BotonCalc texto='x'color='#FF9427' accion={btnMultiplicar} />

                    </View>
                    <View style={styles.fila} >

                    <BotonCalc texto='4' accion={armarNumero} />
                    <BotonCalc texto='5' accion={armarNumero} />
                    <BotonCalc texto='6' accion={armarNumero} />
                    <BotonCalc texto='-' color='#FF9427' accion={btnRestar}/>

                    </View>
                    <View style={styles.fila} >

                    <BotonCalc texto='1' accion={armarNumero} />
                    <BotonCalc texto='2' accion={armarNumero} />
                    <BotonCalc texto='3' accion={armarNumero} />
                    <BotonCalc texto='+'color='#FF9427'accion={btnSumar} />

                    </View>
                    <View style={styles.fila} >

                    <BotonCalc texto='0' ancho accion={armarNumero} />
                    <BotonCalc texto='.' accion={armarNumero} />
                    <BotonCalc texto='='color='#FF9427'accion={calcular} />


                    </View>

            </View>
            
            
        </View>
    )
}



