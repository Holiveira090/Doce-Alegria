import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import logoImage from './../../../assets/logoDoce.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Logo, TxtPrincipal, ContainerNossosProdutos, TxtProdutos, ContainerProdutos, ItemProduto, ItemContent, ItemTitulo, ItemDescricao } from './styles';

export default function Favoritos({ navigation }) {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const loadFavoritos = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favoritos');
        if (jsonValue !== null) {
          setFavoritos(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Erro ao carregar favoritos:', e);
      }
    };

    loadFavoritos();
  }, []);

  useEffect(() => {
    const updateFavoritos = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@favoritos');
        if (jsonValue !== null) {
          setFavoritos(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Erro ao atualizar favoritos:', e);
      }
    };
    const unsubscribe = navigation.addListener('focus', updateFavoritos);

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Logo source={logoImage} />
          <TxtPrincipal>FAVORITOS</TxtPrincipal>
        </View>
        <ContainerNossosProdutos>
          <ContainerProdutos>
            {favoritos.map((receita, index) => (
              <ItemProduto 
                key={index} 
                onPress={() => navigation.navigate('ReceitaDetalhes', { receita })}
              >
                <ItemContent>
                  <View>
                    <ItemTitulo>{receita.nomeReceita}</ItemTitulo>
                    <ItemDescricao>{receita.ingredientes}</ItemDescricao>
                  </View>
                </ItemContent>
              </ItemProduto>
            ))}
          </ContainerProdutos>
        </ContainerNossosProdutos>
      </ScrollView>
    </Container>
  );
}
