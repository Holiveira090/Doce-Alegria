import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  position: relative;
  background-color: rgb(71, 167, 221);
`;

export const Container2 = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Logo = styled.Image`
  height: 120px;
  width: 120px;
  margin-top: 10px;
`;

export const LogoTxt = styled.Text`
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
`;

export const Campos = styled.View`
  margin-top: 12px;
  gap: 20px;
`;

export const CamposLetras = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Campostxt = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const NomeReceita = styled.TextInput`
  width: 360px;
  height: 39.54px;
  background-color: rgb(217, 217, 217);
  border-radius: 16.5px;
  font-size: 24px;
  padding-left: 12px;
`;

export const NomeReceita2 = styled.TextInput`
  width: 360px;
  height: 150px;
  background-color: rgb(217, 217, 217);
  border-radius: 16.5px;
  font-size: 24px;
  padding-left: 12px;
`;

export const CreateButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding-vertical: 15px;
  padding-horizontal: 50px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const CreateButtonText = styled.Text`
  font-size: 20px;
  color: rgb(0, 0, 0);
  font-weight: bold;
`;
