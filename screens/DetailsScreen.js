// screens/DetailsScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// DetailsScreen:
// - route: HomeScreen'den gönderdiğimiz parametreleri içerir (route.params)
// - navigation: geri gitmek veya başka ekrana geçmek için kullanılır
export default function DetailsScreen({ route, navigation }) {
  // HomeScreen'den gönderdiğimiz parametreleri çözüyoruz.
  const { cityName, countryName } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>

      {/* Parametreleri göstereceğiz; gelmemişlerse default bir mesaj gösterelim */}
      <Text style={styles.infoText}>
        City: {cityName ?? 'Unknown City'}
      </Text>
      <Text style={styles.infoText}>
        Country: {countryName ?? 'Unknown Country'}
      </Text>

      {/* 
        navigation.goBack():
        - Stack içindeki bir önceki ekrana geri döner.
      */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },
});
