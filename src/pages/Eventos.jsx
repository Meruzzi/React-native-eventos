import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, TextInput, ActivityIndicator } from 'react-native';
import axios from '../../axios.js';
import { getDatabase, ref, get } from 'firebase/database'

export default function App({ navigation }) {
  const [eventos, setEventos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get("/eventos.json").then((res) => {
      const list = axios.converter(res.data);
      setEventos(list);
      setIsLoading(false)
    });
  }, []);

  useEffect(() => {
    const eventosFiltrados = eventos.filter((evento) =>
      evento.nome.toLowerCase().includes(filtro.toLowerCase())
    );
    setEventosFiltrados(eventosFiltrados);
  }, [filtro, eventos]);


  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um evento"
          onChangeText={(text) => setFiltro(text)}
        />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          eventosFiltrados.map((evento, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardEvento}
              onPress={() => navigation.navigate('Tab', { evento })}
            >
              <Image source={{ uri: `${evento.imagens[0]}` }} style={styles.img} />
              <View style={styles.cardInfEvento}>
                <Text style={styles.tituloEvento}>{evento.nome}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  img: {
    width: '100%',
    height: 200,
  },
  cardEvento: {
    width: '100%',
    position: 'relative',
  },
  cardInfEvento: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  tituloEvento: {
    color: 'white',
    fontSize: 22,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
});
