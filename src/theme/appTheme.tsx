
import { StyleSheet } from 'react-native'





export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
        
        flexDirection:'column',
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,

        justifyContent:'flex-end'
    },
    resultadoContainer:{
        flex:2,
        justifyContent:'flex-end',
        marginBottom:30
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',  
    },
    resultadoPequeno: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    filaContainer:{
        flex: 4,
       
    },
    fila: {
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton:{
        height:80,
        width:80,
        backgroundColor: '#9b9b9b',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight: '300'
    }    
})


export const stylesNeo = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#222327',
        // backgroundColor: '#C7D6E1',
       
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 0,
        
        
    },
    resultadoContainer:{
        flex:2,
        // marginRight:0,
        paddingRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#FF4759',
       
        justifyContent:'flex-end'
    },
    resultado: {
        color: '#FF4759',
        fontSize: 60,
        textAlign: 'right',
        
    },
    resultadoPequeno: {
        color: '#515255',
        fontSize: 30,
        textAlign: 'right'
    },
    filaContainer:{
        flex:3,
        flexDirection:'column',
        justifyContent:'flex-end',
        
        
    },
    fila: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    boton:{
        marginVertical:10,
        height:50,
        marginHorizontal:5,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    botonTexto:{
        textAlign:'center',
        padding:5,
        fontSize:30,
        color:'white',
        fontWeight: '300'
    }    
})
