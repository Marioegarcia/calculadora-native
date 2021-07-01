import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { NeoCalcScreen } from './src/screens/NeoCalcScreen';
import { styles,stylesNeo } from './src/theme/appTheme';


const App = () => {
  return (
    <SafeAreaView style={stylesNeo.fondo} >
      <StatusBar 
      backgroundColor='black' 
      />
      {/* <CalculadoraScreen/>  */}
      <NeoCalcScreen />
    </SafeAreaView>
    
  )
}

export default App


