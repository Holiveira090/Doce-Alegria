import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: rgb(71, 167, 221);
`;

export const Logo = styled.Image`
  margin-top: 50px;
`;

export const TxtPrincipal = styled.Text`
  color: #FFF;
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
`;

export const ContainerNossosProdutos = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TxtProdutos = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 30px;
  margin-top: 40px;
  font-weight: bold;
`;

export const ContainerProdutos = styled.View`
  background-color: rgb(143, 214, 253);
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  width: 385px;
  border-radius: 15px;
  padding: 10px;
`;

export const ItemProduto = styled.TouchableOpacity`
  background-color: white;
  padding: 10px;
  margin-vertical: 5px;
  border-radius: 10px;
  width: 100%;
  height: 75px;
  overflow: hidden;
`;

export const ItemContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemTitulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDescricao = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;