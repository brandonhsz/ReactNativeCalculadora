import React from 'react';
import {Text, View} from 'react-native';
import Boton from '../components/Boton';
import {styles, ColoresBotones} from '../theme/appTheme';
import useCalculadora from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    number,
    tinyNumber,
    clean,
    buildNumber,
    positiveNegative,
    btnDel,
    math,
  } = useCalculadora();

  const {divide, sum, equal, multiplication, subtraction} = math;

  //prettier-ignore
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{tinyNumber}</Text>
      <Text 
        style={styles.resultado}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >{number}</Text>

      {/* fila 1 */}
      <View style={styles.fila}>
        <Boton color={ColoresBotones.grisClaro} text="C" action={clean} />
        <Boton color={ColoresBotones.grisClaro} text="+/-" action={positiveNegative} />
        <Boton color={ColoresBotones.grisClaro} text="DEL" action={btnDel} />
        <Boton color={ColoresBotones.naranja} text="/" action={divide} />
      </View>

      {/* fila 2 */}
      <View style={styles.fila}>
        <Boton color={ColoresBotones.grisOscuro} text="7" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="8" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="9" action={buildNumber} />
        <Boton color={ColoresBotones.naranja} text="X" action={multiplication} />
      </View>

      {/* fila 3 */}
      <View style={styles.fila}>
        <Boton color={ColoresBotones.grisOscuro} text="4" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="5" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="6" action={buildNumber} />
        <Boton color={ColoresBotones.naranja} text="-" action={subtraction} />
      </View>

      {/* fila 4 */}
      <View style={styles.fila}>
        <Boton color={ColoresBotones.grisOscuro} text="1" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="2" action={buildNumber} />
        <Boton color={ColoresBotones.grisOscuro} text="3" action={buildNumber} />
        <Boton color={ColoresBotones.naranja} text="+" action={sum} />
      </View>

      {/* fila 5 */}
      <View style={styles.fila}>
        <Boton color={ColoresBotones.grisOscuro} text="0" action={buildNumber} ancho />
        <Boton color={ColoresBotones.grisOscuro} text="." action={buildNumber} />
        <Boton color={ColoresBotones.naranja} text="=" action={equal} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
