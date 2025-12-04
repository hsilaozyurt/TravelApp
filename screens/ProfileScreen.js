// screens/ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ProfileScreen:
// Kullanıcının profil bilgilerini gösterebileceğin ekran.
// Şimdilik statik bir metin dursun.
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>
        This is your profile screen. User info will be shown here.
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
