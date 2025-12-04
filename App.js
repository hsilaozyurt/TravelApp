// App.js

// React Native'ın temel bileşenlerini import ediyoruz.
import React from 'react';
import { Text, View } from 'react-native';

// React Navigation'ın ana container'ını import ediyoruz.
// Uygulamadaki tüm navigasyon işlemleri bu container içinde gerçekleşir.
import { NavigationContainer } from '@react-navigation/native';

// Bu, uygulamamızın başlangıç (root) bileşenidir.
export default function App() {
  return (
    // NavigationContainer:
    // - Tüm navigasyon yapısını saran "beyin" gibi düşünebiliriz.
    // - İçine Stack, Tab, Drawer vb. bütün navigator bileşenleri yerleşecek.
    <NavigationContainer>
      {/* 
        View:
        - Ekranın ortasında "Navigation Ready!" yazısını göstermek için
          basit bir container kullanıyoruz.
        - flex: 1 → Ekranın tamamını kapla
        - justifyContent: 'center' → dikeyde ortala
        - alignItems: 'center' → yatayda ortala
      */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Şimdilik sadece navigation'ın çalıştığını test etmek için text */}
        <Text>Navigation Ready!</Text>
      </View>
    </NavigationContainer>
  );
}
