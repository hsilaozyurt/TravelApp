// screens/SettingsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// SettingsScreen:
// Uygulamanın ayarlarını göstereceğimiz basit ekran.
// Şimdilik sadece statik bir yazı koyuyoruz.
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>App Version 1.0</Text>
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
