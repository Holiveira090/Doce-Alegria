import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, Platform } from 'react-native';
import { Container, Container2, Logo, LogoTxt, Campos, CamposLetras, Campostxt, NomeReceita, NomeReceita2, CreateButton, CreateButtonText } from './styles';
import logoImage from './../../../assets/logoDoce.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';

export default function Cadastro({ navigation }) {
  const [nomeReceita, setNomeReceita] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const requestPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status !== 'granted') {
          Alert.alert('Permissão Negada', 'Desculpe, precisamos da permissão de mídia para acessar arquivos!');
        }
      }
    } catch (error) {
      console.error('Erro ao solicitar permissões:', error);
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const onCreatePressed = async () => {
    if (!nomeReceita || !ingredientes || !modoPreparo) {
      Alert.alert('Campos Vazios', 'Por favor, preencha todos os campos!');
      return;
    }

    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const receita = {
      id, 
      nomeReceita,
      ingredientes,
      modoPreparo,
    };

    try {
      const existingRecipes = await AsyncStorage.getItem('@receitas');
      const newRecipes = existingRecipes ? JSON.parse(existingRecipes) : [];
      newRecipes.push(receita);
      await AsyncStorage.setItem('@receitas', JSON.stringify(newRecipes));
      Alert.alert('Sucesso!', 'Receita criada com sucesso!');
      navigation.navigate('Receitas', { updated: true });

      setNomeReceita('');
      setIngredientes('');
      setModoPreparo('');
    } catch (error) {
      console.error('Erro ao salvar a receita:', error);
      Alert.alert('Erro', 'Erro ao salvar a receita.');
    }
  };

  return (
    <Container>
      <ScrollView>
        <Container2>
          <Logo source={logoImage} />
          <LogoTxt>CADASTRAR RECEITAS</LogoTxt>
          <Campos>
            <CamposLetras>
              <Campostxt>DIGITE O NOME DA RECEITA:</Campostxt>
              <NomeReceita
                placeholder='Nome da receita:'
                placeholderTextColor="#888"
                value={nomeReceita}
                onChangeText={setNomeReceita}
              />
            </CamposLetras>
            <CamposLetras>
              <Campostxt>DIGITE OS INGREDIENTES DA RECEITA:</Campostxt>
              <NomeReceita2
                placeholder='Ingredientes da receita:'
                placeholderTextColor="#888"
                value={ingredientes}
                onChangeText={setIngredientes}
                multiline={true}
              />
            </CamposLetras>
            <CamposLetras>
              <Campostxt>DIGITE O MODO DE PREPARO DA RECEITA:</Campostxt>
              <NomeReceita2
                placeholder='Modo de preparo:'
                placeholderTextColor="#888"
                value={modoPreparo}
                onChangeText={setModoPreparo}
                multiline={true}
              />
            </CamposLetras>
          </Campos>
          <CreateButton onPress={onCreatePressed}>
            <CreateButtonText>CRIAR</CreateButtonText>
          </CreateButton>
        </Container2>
      </ScrollView>
    </Container>
  );
}
