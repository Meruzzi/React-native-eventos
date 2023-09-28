import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet } from "react-native";

export default function Voos({ route }) {
    const { evento } = route.params;
    const [voosDisp, setVoosDisp] = useState(true);

    useEffect(() => {
        if (evento.voos === undefined) {
            setVoosDisp(false);
        }
    }, [evento]);

    return (
        <View>
            <Text style={styles.nomeEvento}>Voos para o {evento.nome}</Text>
            {voosDisp ? (
                evento.voos?.map((voo, vooIndex) => (
                    <View key={vooIndex} style={styles.cardVoo}>
                        <Text><Text style={{ fontWeight: 'bold' }}>Origem:</Text> {voo.saida}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>Destino:</Text> {voo.chegada}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>Hora de Saída:</Text> {voo.hrSaida}</Text>
                        <Text><Text style={{ fontWeight: 'bold' }}>Hora de Chegada:</Text> {voo.hrChegada}</Text>
                        <Button title="Comprar" />
                    </View>
                ))
            ) : (
                <Text style={styles.vooIndisp}>Não há voos disponíveis para esse evento.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    nomeEvento: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        textAlign: 'center'
    },
    cardVoo: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 5
    },
    vooIndisp: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    }
});
