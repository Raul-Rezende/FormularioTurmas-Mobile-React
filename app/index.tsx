import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { MaskedTextInput } from 'react-native-mask-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  //Carregar os dados salvos ao iniciar o aplicativo
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosSalvos = await AsyncStorage.getItem('@dados_usuario');
        if (dadosSalvos) {
          const dados = JSON.parse(dadosSalvos);
          setNome(dados.nome || '');
          setTurma(dados.turma || '');
          setTelefone(dados.telefone || '');
          setCpf(dados.cpf || '');
        }
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    carregarDados();
  }, []);

  const salvarEContinuar = async () => {
    //Verificar se todos os campos estão preenchidos
    if (!nome || !turma || !telefone || !cpf) {
      Alert.alert('Erro de Validação', 'Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    try {
      //Salvar os dados no AsyncStorage
      const dados = { nome, turma, telefone, cpf };
      await AsyncStorage.setItem('@dados_usuario', JSON.stringify(dados));
      
      //Após salvar os dados, redirecionar para a tela de perfil
      router.push('/TelaPerfil');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados no momento.');
    }
  };

  //Exibir o formulário de cadastro
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário de Cadastro</Text>

      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Turma:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua turma"
        value={turma}
        onChangeText={setTurma}
      />

      <Text style={styles.label}>Telefone:</Text>
      <MaskedTextInput
        mask="(99) 99999-9999"
        style={styles.input}
        placeholder="(00) 00000-0000"
        value={telefone}
        onChangeText={(text, rawText) => setTelefone(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>CPF:</Text>
      <MaskedTextInput
        mask="999.999.999-99"
        style={styles.input}
        placeholder="000.000.000-00"
        value={cpf}
        onChangeText={(text, rawText) => setCpf(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={salvarEContinuar}>
        <Text style={styles.textoBotao}>Salvar / Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  label: { fontSize: 16, marginBottom: 5, color: '#555' },
  input: { borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', padding: 12, marginBottom: 15, borderRadius: 8, fontSize: 16 },
  botao: { backgroundColor: '#121212', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});