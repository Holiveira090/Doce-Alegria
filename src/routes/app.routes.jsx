import React from 'react';
import Cadastro from "../screens/Cadastro";
import Receitas from "../screens/Receitas";
import Favoritos from "../screens/Favoritos";
import ReceitaDetalhes from "../screens/ReceitaDetalhes"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const {
    Navigator,
    Screen
} = createBottomTabNavigator();

export function AppRoutes() {
    return ( 
        <Navigator
            screenOptions={{ headerShown: false }} // Esconde o cabeçalho em todas as telas
        >
            <Screen 
                name="Receitas" 
                component={Receitas} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons 
                            name="format-list-bulleted" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
            <Screen 
                name="Favoritos" 
                component={Favoritos} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome
                            name="star-o"
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
            <Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons 
                            name="edit" 
                            size={size} 
                            color={color} 
                        />
                    ),
                }} 
            />
            <Screen 
                name="ReceitaDetalhes"
                component={ReceitaDetalhes} 
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons 
                            name="description" 
                            size={size} 
                            color={color} 
                        />
                    ),
                    tabBarButton: () => null, 
                }} 
            />
        </Navigator>
    );
}
