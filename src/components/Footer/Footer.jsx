import React from 'react';
import { Text, View } from 'react-native';
import styleFooter from './styleFooter';

export default function Footer() {
    return(
        <View style={styleFooter.viewFooter}>
            <Text style={styleFooter.text}>
                Desenvolvido por Bruno Bergamaschi 
            </Text>
        </View>
    );
}