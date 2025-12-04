// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Az önce oluşturduğumuz ekran bileşenlerini import ediyoruz.
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Stack navigator'ı oluşturuyoruz.
// Stack, içindeki Screen'leri yönetip başlık, geri butonu gibi özellikleri sağlar.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 
        Stack.Navigator:
        - initialRouteName ile açılışta hangi ekranın gösterileceğini belirliyoruz.
      */}
      <Stack.Navigator initialRouteName="Home">
        {/* 
          Home ekranı:
          - name: Ekranın route adı (navigation.navigate('Home') vs.)
          - component: Gösterilecek React bileşeni
          - options: Header başlığı gibi ekstra ayarlar
        */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'TravelApp Home' }}
        />

        {/* 
          Details ekranı:
          - HomeScreen'den navigation.navigate('Details') ile buraya geliyoruz.
        */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
