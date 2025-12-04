// screens/ExploreScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ExploreScreen:
// Kullanıcıya keşif ekranı gibi düşünebilirsin.
// Şimdilik sadece basit bir metin göstereceğiz.
export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.subtitle}>
        Here you can explore different travel destinations.
      </Text>
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
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
