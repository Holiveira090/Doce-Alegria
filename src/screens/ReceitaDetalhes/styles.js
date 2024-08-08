import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #47a7dd;
`;

export const Header = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 10px;
`;

export const StarButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 10px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Logo = styled.Image`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-vertical: 10px;
`;

export const ContainerIngredientes = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  width: 105%;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const ContainerMododePreparo = styled.View`
  background-color: rgba(165, 247, 227, 0.75);
  width: 105%;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const TextFonte = styled.Text`
  font-size: 20px;
`;
