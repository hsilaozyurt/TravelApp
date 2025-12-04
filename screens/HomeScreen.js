// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// HomeScreen bileşeni:
// navigation parametresi Stack Navigator tarafından otomatik olarak geliyor.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Ekran başlığı */}
      <Text style={styles.title}>TravelApp</Text>

      {/* Kısa açıklama */}
      <Text style={styles.subtitle}>
        Welcome! This is the Home screen of our TravelApp.
      </Text>

      {/* 
        "Go to Details" butonu:
        - navigation.navigate('Details') ile DetailsScreen'e geçiyoruz.
        - İkinci parametre olarak bir obje gönderirsek, route.params ile diğer ekranda okuyabiliriz.
      */}
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            // Örnek parametreler – lab ilerledikçe bunları değiştirip geliştirebiliriz.
            cityName: 'Istanbul',
            countryName: 'Turkey',
          })
        }
      />
    </View>
  );
}

// Basit stiller:
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ekranın tamamını kapla
    justifyContent: 'center', // Dikeyde ortala
    alignItems: 'center', // Yatayda ortala
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});
