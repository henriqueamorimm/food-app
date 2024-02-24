import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'Henrique@uork.org' && senha === 'henrique123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Login inválido', 'E-mail ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery App</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={text => setSenha(text)}
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  loginButton: {
    width: '80%',
    backgroundColor: 'rgb(220,20,40)',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupText: {
    marginTop: 20,
    color: '#888',
  },
});

export default Login;
