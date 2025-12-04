// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
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
    <Stack.Navigator
      initialRouteName="Home"
      /*
        screenOptions:
        - Tüm HomeStack ekranlarına uygulanacak ortak header stilleri
        - headerStyle: arka plan rengi
        - headerTintColor: başlık ve geri ok rengi (yazı rengi)
        - headerTitleStyle: başlık font özellikleri
      */
      screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato', // İstersen 'blue', '#1E40AF' vs. yapabilirsin
        },
        headerTintColor: '#fff', // Başlık ve back arrow rengi
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Explore Destinations' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        /*
          screenOptions'u fonksiyon olarak kullanıyoruz:
          - route: Hangi tab'de olduğumuzu söyler ("Explore" / "Settings")
          - Burada:
            * headerShown: false -> Tab seviyesindeki header'ı gizle
            * tabBarIcon: her tab için farklı ikon dön
            * tabBarActiveTintColor / tabBarInactiveTintColor: renkler
        */
        screenOptions={({ route }) => ({
          headerShown: false,

          // Tab bar ikonunu belirleyen fonksiyon:
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              // Explore tab'i için ikon:
              // focused true iken 'map', değilken 'map-outline'
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Settings') {
              // Settings tab'i için ikon:
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Ionicons bileşenini geri döndürüyoruz
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          // Aktif ve pasif tab renkleri:
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Explore"
          component={HomeStack}
          options={{ title: 'Explore' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
