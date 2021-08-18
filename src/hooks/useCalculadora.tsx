import {useState} from 'react';

const useCalculadora = () => {
  const [tinyNumber, setTinyNumber] = useState('');
  const [number, setNumber] = useState('0');
  const [state, setState] = useState('');

  if (number === '15') setNumber('Te Adoro');

  const clean = () => {
    if (number !== '0') {
      setNumber('0');
    } else {
      setTinyNumber('');
    }
  };

  const buildNumber = (textNumber: string) => {
    //DETERMINAR LONGITUD DE NUMERO NO MAYOR A 16 DIGITOS
    if (number.length >= 16) return;

    //IGNORAR MAS DE UN PUNTO
    if (number.includes('.') && textNumber === '.') return;

    //IGNORAR MAS DE UN 0 AL INICIO
    if (number === '0' && textNumber === '0') return;

    //ELIMINAR PRIMER 0
    if (number.startsWith('0') || number.startsWith('-0')) {
      //PUNTO DECIMAL
      if (textNumber === '.') {
        setNumber(number + textNumber);
      }
      //EVALUAR SI ES OTRO CERO Y HAY UN PUNTO
      else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      }

      //EVALUAR SI ES DIFERENTE DE 0 Y NO TIENE UN PUNTO
      else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      }

      //EVITAR EL 0000.0
      else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const math = {
    divide: () => {
      setState('/');
      setTinyNumber(number);
      setNumber('0');
      console.log('divide');
    },

    multiplication: () => {
      setState('*');
      setTinyNumber(number);
      setNumber('0');
      console.log('multiplica');
    },

    subtraction: () => {
      setState('-');
      setTinyNumber(number);
      setNumber('0');
      console.log('resta');
    },

    sum: () => {
      setState('+');
      setTinyNumber(number);
      setNumber('0');
      console.log('suma');
    },

    equal: () => {
      if (tinyNumber === '') return;
      if (state === '/') {
        setNumber((parseInt(tinyNumber) / parseInt(number)).toString());
        setTinyNumber('');
      } else if (state === '*') {
        setNumber((parseInt(tinyNumber) * parseInt(number)).toString());
        setTinyNumber('');
      } else if (state === '-') {
        setNumber((parseInt(tinyNumber) - parseInt(number)).toString());
        setTinyNumber('');
      } else if (state === '+') {
        setNumber((parseInt(tinyNumber) + parseInt(number)).toString());
        setTinyNumber('');
      }
    },
  };

  const btnDel = () => {
    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    } else if (number.length > 1) {
      setNumber(number.replace(number[number.length - 1], ''));
    } else {
      setNumber('0');
    }
  };

  return {
    number,
    tinyNumber,
    clean,
    buildNumber,
    positiveNegative,
    btnDel,
    math,
  };
};

export default useCalculadora;
