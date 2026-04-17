# FormularioTurmas-Mobile-React - Checkpoint 02

Este projeto consiste em um aplicativo móvel desenvolvido com **React Native** e **Expo** para o curso de Tecnologia em Desenvolvimento de Sistemas da **FIAP**. O objetivo principal é o gerenciamento de dados de usuários e turmas, integrando navegação, persistência local e máscaras de entrada.

## Funcionalidades

De acordo com os requisitos estabelecidos para o projeto, as seguintes funcionalidades foram implementadas:

* **Estrutura de Navegação:** Separação entre a entrada de dados e a visualização utilizando **Expo Router**. O aplicativo conta com uma **Tela de Cadastro** (inicial) e uma **Tela de Perfil** (destino).
* **Máscaras de Entrada:** Utilização da biblioteca `react-native-mask-text` para padronizar os campos de **Telefone** e **CPF**, garantindo a integridade dos dados inseridos pelo usuário.
* **Validação de Formulário:** Verificação obrigatória de todos os campos ao clicar em "Salvar/Enviar". Caso existam informações faltando, o sistema exibe um `Alert.alert()` e impede a navegação para a tela de perfil.
* **Persistência e Autopreenchimento (Async Storage):** * **Salvar:** Os dados validados são salvos no armazenamento local (`setItem`) antes da transição de tela.
    * **Recuperar:** O app utiliza o hook `useEffect` na tela de cadastro para buscar dados salvos (`getItem`) via `JSON.parse()`. Se houver dados prévios, o formulário é preenchido automaticamente ao iniciar.
* **Interface de Perfil:** Exibição detalhada das informações salvas, contendo obrigatoriamente o nome do aluno, foto e RM.

## Tecnologias Utilizadas

* **React Native** e **Expo SDK**
* **Expo Router** (Navegação)
* **Async Storage** (Persistência Local)
* **React Native Mask Text** (Máscaras de Input)
* **TypeScript** (Tipagem)
* **StyleSheet** (Organização Visual)

## Como Executar o Projeto

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/raul-rezende/formularioturmas-mobile-react.git](https://github.com/raul-rezende/formularioturmas-mobile-react.git)
    ```

2.  **Instalar dependências:**
    *(Recomendado utilizar a flag para evitar conflitos de versão do peer dependency)*
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Iniciar o servidor Expo:**
    ```bash
    npx expo start
    ```

## Entrega e Avaliação

* **Repositório:** Código hospedado no GitHub.
* **Vídeo:** Demonstração do funcionamento (máximo 5 minutos), incluindo teste de persistência (fechar e abrir o app).

## Autor

* **Nome:** [Raul Rezende Iemini Aguiar]
* **RM:** [564002]
* **Curso:** Tecnologia em Desenvolvimento de Sistemas - 2TDS
* **Instituição:** FIAP
