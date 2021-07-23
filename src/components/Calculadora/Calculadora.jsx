import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import style from './styleCalculadora';

export default function Calculadora() {
    const [resultado, setResultado] = useState({
        valor: 0
    })

    const [input, setInput] = useState({
        valorA: 0,
        valorB: 0
    })

    const operacao = (operador) => {
        if (input.valorA != 0 || input.valorB != 0) {
            switch (operador) {
                case '+':
                    setResultado({
                        ...resultado, valor: input.valorA + input.valorB
                    });
                    break;

                case '-':
                    setResultado({
                        ...resultado, valor: input.valorA - input.valorB
                    });
                    break;

                case '*':
                    setResultado({
                        ...resultado, valor: input.valorA * input.valorB
                    });
                    break;

                case '/':
                    setResultado({
                        ...resultado, valor: input.valorA / input.valorB
                    });
                    break;

                case '%':
                    setResultado({
                        ...resultado, valor: input.valorA % input.valorB
                    });
                    break;

                case 'a2':
                    setResultado({
                        ...resultado, valor: Math.pow(input.valorA, 2)
                    });
                    break;

                case 'b2':
                    setResultado({
                        ...resultado, valor: Math.pow(input.valorB, 2)
                    });
                    break;

                case 'aB':
                    setResultado({
                        ...resultado, valor: Math.pow(input.valorA, input.valorB)
                    });
                    break;

                case 'clear':
                    setResultado({
                        ...resultado, valor: 0
                    });
                    break;

                default:
                    setResultado({
                        ...resultado, valor: 'Valores incorretos'
                    });
            }
        } else {
            setResultado({
                ...resultado, valor: 'Informe os valores A e B'
            })
        }
    }

    const clearResult = () => {
        setResultado({
            ...resultado, valor: 0,
        })
    }

    const handleInputChange = (parametro, value) => {
        setInput({
            ...input, [parametro]: value
        })
    }

    return (
        <View style={style.container}>

            <View style={style.viewResultado}>
                <Text style={style.textResultado}>{resultado.valor}</Text>
            </View>

            <View style={style.viewCalculadora}>

                <TouchableOpacity
                    style={[style.button, style.buttonAmarelo]}
                    onPress={
                        ()=> operacao('+')
                    }
                >
                    <Text style={style.text}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonAmarelo]}
                    onPress={
                        ()=> operacao('-')
                    }
                >
                    <Text style={style.text}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonAmarelo]}
                    onPress={
                        ()=> operacao('*')
                    }
                >
                    <Text style={style.text}>x</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonAmarelo]}
                    onPress={
                        ()=> operacao('/')
                    }
                >
                    <Text style={style.text}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonCinza]}
                    onPress={
                        ()=> operacao('%')
                    }
                >
                    <Text style={style.text}>%</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonCinza]}
                    onPress={
                        ()=> operacao('a2')
                    }
                >
                    <Text style={style.text}>a²</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonCinza]}
                    onPress={
                        ()=> operacao('b2')
                    }
                >
                    <Text style={style.text}>b²</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonCinza]}
                    onPress={
                        ()=> operacao('aB')
                    }
                >
                    <Text style={style.text}>aB</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[style.button, style.buttonCinza, style.buttonClear]}
                    onPress={
                        clearResult
                    }
                >
                    <Text style={style.text}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={style.viewInput}>
                <TextInput
                    placeholder='Valor A'
                    keyboardType='numeric'
                    style={style.inputText}
                    onChangeText={
                        (valor) => handleInputChange('valorA', Number(valor))
                    }
                />
                <TextInput
                    placeholder='Valor B'
                    keyboardType='numeric'
                    style={style.inputText}
                    onChangeText={
                        (valor) => handleInputChange('valorB', Number(valor))
                    }
                />
            </View>

        </View>
    );
}