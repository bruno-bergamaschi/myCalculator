import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 400,
        minHeight: '85%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewResultado: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#212529',
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textResultado: {
        fontSize: 30,
    },

    viewCalculadora: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        minWidth: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
    },

    buttonAmarelo: {
        backgroundColor: '#F19A38',
    },

    buttonCinza: {
        backgroundColor: '#A5A5A5',
    },

    buttonClear: {
        width: '100%',
        backgroundColor: '#212529'
    },

    text: {
        color: '#fff',
        fontSize: 25
    },

    viewInput: {
        width: '90%',
        height: 50,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    inputText: {
        width: '49%',
        height: 45,
        borderWidth: 1,
        borderColor: '#212529',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    

})

export default style;