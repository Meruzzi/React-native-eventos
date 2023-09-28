import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';

export default function Inicio() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/10383864-ouro-luxo-evento-hall-logo-vetor.jpg' }} style={{ width: '100%', height: 200 }} />
            <View style={styles.informacoesInicio}>
                <Text style={styles.title}>Event Hall!</Text>
                <Text style={styles.texto}>Aqui você encontra os melhores eventos do Brasil!</Text>
                <Text style={styles.texto}>Acesse seus eventos, obtenha informações, imagens, filtre entre elas e muito mais!</Text>
                <View style={{ paddingTop: 30 }}>
                    <Text style={styles.texto}>Site criado por: Gabriel Meruzzi</Text>
                    <Button title='GitHub' onPress={() => { Linking.openURL("https://github.com/Meruzzi") }} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    texto: {
        fontSize: 16,
        textAlign: 'center'
    },
    informacoesInicio: {
        paddingTop: 20,
        padding: 5,
    }
})