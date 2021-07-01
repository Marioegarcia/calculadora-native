import React from 'react'
import {  Text, TouchableOpacity, View } from 'react-native'
import { styles, stylesNeo } from '../theme/appTheme';

interface Props {
    texto: string,
    color?: string,
    colorText?: string,
    ancho? : boolean,
    estilos?: any ,
    accion: (numeroTexto: string) => void;
}

const BotonCalc = ({texto,color='#2d2d2d',ancho=false,accion, estilos = styles, colorText='#F72E6D'}: Props) => {
    return (
        <TouchableOpacity
        onPress={()=> accion(texto) }
        >
            <View style={{
                ...estilos.boton,
                backgroundColor: color,
                width: (ancho) ? 170 : 80
            }} >
                <Text style={{
                    ...estilos.botonTexto,
                    color:colorText,
                    // color: (color === '#9b9b9b') ? 'black' : 'white'
                }} >{texto}</Text>


            </View>
        </TouchableOpacity>
    )
}

export default BotonCalc

