// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Ekran bileşenlerimiz
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ExploreScreen from './screens/ExploreScreen';
import ProfileScreen from './screens/ProfileScreen';

// Stack ve Tab navigator'larını oluşturuyoruz.
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/*
  HomeStack:
  - Sadece Home sekmesi için geçerli olan stack yapısı.
  - HomeScreen ve DetailsScreen bu stack içinde.
  - Böylece tab bar altta kalırken Home → Details arasında ileri/geri gidebiliyoruz.
*/
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'TravelApp Home' }} // header başlığı
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

// Uygulamanın ana bileşeni:
export default function App() {
  return (
    <NavigationContainer>
      {/*
        Tab.Navigator:
        - Ekranın alt kısmındaki sekmeleri yönetir.
        - Her Tab.Screen bir sekme (Home, Explore, Profile).
      */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Tab içindeki stack kendi header'ını yönetecek
        }}
      >
        {/* 
          Home sekmesi:
          - component olarak HomeStack veriyoruz (içinde HomeMain + Details var).
          - Tab başlığını "Home" olarak gösteriyoruz.
        */}
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ title: 'Home' }}
        />

        {/* Explore sekmesi: doğrudan ExploreScreen */}
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ title: 'Explore' }}
        />

        {/* Profile sekmesi: doğrudan ProfileScreen */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
