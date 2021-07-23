import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './styleHeader';

export default function Header() {
    return(
        <View style={style.viewHeader}>
            <Image
                source={require('../../../assets/icone.png')}
                style={style.logo}
            />
            <Text style={style.text}>SimpleCalc</Text>
        </View>
    );
}