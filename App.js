import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Estetik ikonlar için Ionicons kullanıyoruz

import LoginScreen from './screens/LoginScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fef2f2', // Tabbar arka plan rengi: bg-pink-50 (tailwind karşılığı)
            borderTopWidth: 0,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarActiveTintColor: '#ff69b4', // Aktif ikon için pembe
          tabBarInactiveTintColor: '#ffc0cb', // Pasif ikon için açık pembe
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Login') {
              iconName = 'person-circle-outline'; // Profil ikonu
            } else if (route.name === 'Products') {
              iconName = 'heart-sharp'; // Kalp ikonu
            } else if (route.name === 'Details') {
              iconName = 'bag-outline'; // Çanta ikonu
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Products" component={ProductListScreen} />
        <Tab.Screen name="Details" component={ProductDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
