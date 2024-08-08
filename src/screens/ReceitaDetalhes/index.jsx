import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logoImage from './../../../assets/logoDoce.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Header, DeleteButton, StarButton, ContentContainer, Logo, Title, SectionTitle, ContainerIngredientes, ContainerMododePreparo, TextFonte } from './styles';

export default function ReceitaDetalhes({ route, navigation }) {
  const { receita } = route.params;
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const checkIfFavorited = async () => {
      try {
        const favoritos = await AsyncStorage.getItem('@favoritos');
        if (favoritos !== null) {
          const favoritesArray = JSON.parse(favoritos);
          const isFavorite = favoritesArray.some(item => item.id === receita.id);
          setIsFavorited(isFavorite);
        }
      } catch (error) {
        console.error('Erro ao verificar favoritos:', error);
      }
    };

    checkIfFavorited();
  }, [receita]);

  const handleDelete = async () => {
    try {
      Alert.alert(
        'Confirmação',
        'Tem certeza que deseja excluir esta receita?',
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Excluir',
            onPress: async () => {
              const receitas = await AsyncStorage.getItem('@receitas');
              let updatedRecipes = [];
              if (receitas !== null) {
                const recipesArray = JSON.parse(receitas);
                updatedRecipes = recipesArray.filter(item => item.id !== receita.id);
                await AsyncStorage.setItem('@receitas', JSON.stringify(updatedRecipes));
                Alert.alert('Sucesso!', 'Receita excluída com sucesso!');
                navigation.navigate('Receitas', { updated: true });
              }
            }
          }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Erro ao excluir a receita:', error);
      Alert.alert('Erro', 'Erro ao excluir a receita.');
    }
  };

  const handleStar = async () => {
    try {
      const favoritos = await AsyncStorage.getItem('@favoritos');
      let updatedFavorites = [];
      let isFavorite = false;
      if (favoritos !== null) {
        const favoritesArray = JSON.parse(favoritos);
        isFavorite = favoritesArray.some(item => item.id === receita.id);
        if (isFavorite) {
          updatedFavorites = favoritesArray.filter(item => item.id !== receita.id);
        } else {
          updatedFavorites = [...favoritesArray, receita];
        }
      } else {
        updatedFavorites = [receita];
      }
      await AsyncStorage.setItem('@favoritos', JSON.stringify(updatedFavorites));
      setIsFavorited(!isFavorited);
      const message = isFavorite ? 'Removido dos favoritos' : 'Adicionado aos favoritos';
      Alert.alert('Sucesso!', message);
      navigation.navigate('Favoritos', { updated: true });

    } catch (error) {
      console.error('Erro ao atualizar favoritos:', error);
      Alert.alert('Erro', 'Erro ao atualizar favoritos.');
    }
  };

  return (
    <Container>
      <Header>
        <DeleteButton onPress={handleDelete}>
          <Ionicons name="trash-outline" size={35} color="black" />
        </DeleteButton>
        <StarButton onPress={handleStar}>
          <Ionicons name={isFavorited ? 'star' : 'star-outline'} size={35} color={isFavorited ? 'yellow' : 'black'} />
        </StarButton>
      </Header>
      <ContentContainer>
        <Logo source={logoImage} />
        <Title>{receita.nomeReceita}</Title>
        <ContainerIngredientes>
          <SectionTitle>Ingredientes:</SectionTitle>
          <TextFonte>{receita.ingredientes}</TextFonte>
        </ContainerIngredientes>
        <ContainerMododePreparo>
          <SectionTitle>Modo de Preparo:</SectionTitle>
          <TextFonte>{receita.modoPreparo}</TextFonte>
        </ContainerMododePreparo>
      </ContentContainer>
    </Container>
  );
}
