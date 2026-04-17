import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Perfil() {
  const [nomeSalvo, setNomeSalvo] = useState('');

  // Busca o nome do usuário apenas para dar boas-vindas personalizadas
  useEffect(() => {
    const buscarDados = async () => {
      const dados = await AsyncStorage.getItem('@dados_usuario');
      if (dados) {
        setNomeSalvo(JSON.parse(dados).nome);
      }
    };
    buscarDados();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.saudacao}>Bem-vindo(a), {nomeSalvo}!</Text>
      
      {/* 1. Tela de Perfil: Seu Nome, Foto e RM */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} // Substitua por um link de uma foto sua ou um require('./caminho/foto.png')
          style={styles.foto}
        />
        <Text style={styles.infoTexto}>Nome: Seu Nome Completo Aqui</Text>
        <Text style={styles.infoTexto}>RM: 123456</Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center', padding: 20 },
  saudacao: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 10, alignItems: 'center', width: '100%', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  foto: { width: 120, height: 120, borderRadius: 60, marginBottom: 20, borderWidth: 2, borderColor: '#121212' },
  infoTexto: { fontSize: 18, fontWeight: '500', marginBottom: 10, color: '#444' },
  botaoVoltar: { marginTop: 30, padding: 15, borderRadius: 8, backgroundColor: '#ccc', width: '100%', alignItems: 'center' },
  textoBotao: { fontSize: 16, fontWeight: 'bold', color: '#333' }
});