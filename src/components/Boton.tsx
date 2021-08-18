import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BotonProps {
  action: (textNumber: string) => void;
  text: string;
  color?: string;
  ancho?: boolean;
}

//prettier-ignore
const Boton = ({action, text = "N/A", color = '#2D2D2D', ancho = false}: BotonProps) => {
  return (
    <TouchableOpacity
      onPress={ () => action(text) }
    >

      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: (ancho)? 180 : 80,
          alignItems: (ancho)? 'flex-start' : 'center'
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
            right: (ancho)? -20 : 0
          }}>
          {text}
        </Text>
      </View>

    </TouchableOpacity>
  );
};

export default Boton;

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
