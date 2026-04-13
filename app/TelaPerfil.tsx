import {View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

export function TelaPerfil(){
   return(
    <View style={styles.container}>
        <Text>Tela Inicial</Text>
        <Link href="/user">Ir para a página do Usuário</Link>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  formulario: {
    margin: 20,
  },
  titulo: {
    color: 'red',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  }
});