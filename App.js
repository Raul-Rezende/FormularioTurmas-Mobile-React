import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  const [mostrarDados, setMostrarDados] = useState(false);

  // Executa uma ação quando o aplicativo for carregado
  useEffect(() => {
    console.log("Aplicativo iniciado com sucesso!");
  }, []);

  // Função para o botão
  const enviarFormulario = () => {
    setMostrarDados(true);
  };

  return (
    // SafeAreaView container principal
    <SafeAreaView style={styles.container}>

      <View style={styles.formulario}>

        <Text style={styles.titulo}>Formulário de Turmas - CP1(2TDSPF)</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Curso"
          value={curso}
          onChangeText={setCurso}
        />
        <TextInput
          style={styles.input}
          placeholder="Disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
        />
        <TextInput
          style={styles.input}
          placeholder="Breve descrição ou apresentação pessoal"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Button title="Enviar" onPress={enviarFormulario} />

        {mostrarDados ? (
          <View style={styles.resultado}>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>Curso: {curso}</Text>
            <Text style={styles.texto}>Disciplina: {disciplina}</Text>
            <Text style={styles.texto}>Descrição: {descricao}</Text>
          </View>
        ) : null}

      </View>
    </SafeAreaView>
  );
}

// Estilização Básica
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