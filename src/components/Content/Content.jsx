import React from 'react';
import { View } from 'react-native';
import Calculadora from '../Calculadora/Calculadora';
import style from './styleContent';

export default function Content() {
    return(
        <View style={style.container}>
            <Calculadora/>
        </View>
    );
}