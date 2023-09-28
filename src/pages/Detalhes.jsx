import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detalhes({ route }) {
  const { evento } = route.params;

  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.tituloEvento}>Evento: {evento.nome}</Text>
          <Text style={styles.infEventos}><Text style={{ fontWeight: 'bold' }}>Sobre:</Text> {evento.descricao}</Text>
          <Text style={styles.infEventos}><Text style={{ fontWeight: 'bold' }}>Local:</Text> {evento.local}</Text>
          <Text style={styles.infEventos}><Text style={{ fontWeight: 'bold' }}>Data:</Text> {evento.data}</Text>
          <Text style={styles.infEventos}><Text style={{ fontWeight: 'bold' }}>Valor:</Text> R${evento.preco}</Text>
        </View>
        <Image source={{ uri: `${evento.imagens[0]}` }} style={styles.img} />
        <Image source={{ uri: `${evento.imagens[1]}` }} style={styles.img} />
        <Image source={{ uri: `${evento.imagens[2]}` }} style={styles.img} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  img: {
    width: '100%',
    height: 300,
  },
  tituloEvento: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infEventos: {
    fontSize: 17
  }
});
