import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { Logo, TxtPrincipal, PesquisaPai, PesquisaContainer, Pesquisa, PesquisaLogo, ContainerNossosProdutos, TxtProdutos, ContainerProdutos, ItemProduto, ItemContent, ItemTitulo, ItemDescricao } from './styles';
import logoImage from './../../../assets/logoDoce.png';
import pesquisa from './../../../assets/pesquisa.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Receitas({ navigation, route }) {
  const [receitas, setReceitas] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredReceitas, setFilteredReceitas] = useState([]);

  useEffect(() => {
    const loadReceitas = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@receitas');
        if (jsonValue !== null) {
          setReceitas(JSON.parse(jsonValue));
          setFilteredReceitas(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error('Erro ao carregar receitas:', e);
      }
    };

    const focusListener = navigation.addListener('focus', () => {
      if (route.params?.updated) { 
        loadReceitas();
      }
    });

    loadReceitas();

    return () => {
      focusListener();
    };
  }, [navigation, route.params?.updated]);

  useEffect(() => {
    const filtered = receitas.filter(receita =>
      receita.nomeReceita.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredReceitas(filtered);
  }, [searchText, receitas]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgb(71, 167, 221)' }}>
      <Logo source={logoImage} />
      <TxtPrincipal>QUAL A RECEITA DE HOJE?</TxtPrincipal>
      <PesquisaPai>
        <PesquisaContainer>
          <Pesquisa
            placeholder='PESQUISAR RECEITAS'
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <PesquisaLogo source={pesquisa} />
        </PesquisaContainer>
      </PesquisaPai>
      <ContainerNossosProdutos>
        <TxtProdutos>NOSSAS RECEITAS:</TxtProdutos>
        <ContainerProdutos>
          {filteredReceitas.map((receita, index) => (
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
  );
}
