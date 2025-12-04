// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Ekranlar
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Stack ve Tab navigator'ları oluşturuyoruz.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/*
  HomeStack:
  - Explore tab'i içinde kullanacağımız stack yapısı.
  - HomeScreen ve DetailsScreen burada tanımlı.
  - Böylece Explore sekmesindeyken Home → Details → Back yapabiliyoruz.
*/
function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Ana ekran: destinasyon listesi / butonlar vs. */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Explore Destinations' }}
      />

      {/* Detay ekranı: route paramları ile gelen bilgileri gösteriyor */}
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

// Uygulamanın root bileşeni
export default function App() {
  return (
    <NavigationContainer>
      {/*
        Tab.Navigator:
        - Ekranın altındaki sekmeleri yönetiyor.
        - headerShown: false diyerek Tab seviyesindeki başlığı gizliyoruz,
          böylece sadece Stack'in header'ı görünüyor (çifte header olmaz).
      */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* 
          Explore tab'i:
          - component olarak HomeStack veriyoruz.
          - Kullanıcı "Explore" sekmesine tıklayınca aslında HomeStack açılıyor.
        */}
        <Tab.Screen
          name="Explore"
          component={HomeStack}
          options={{ title: 'Explore' }}
        />

        {/* Settings tab'i: doğrudan SettingsScreen gösteriliyor */}
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
