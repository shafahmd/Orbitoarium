// components/StarField.js
// Decorative background: small dots placed at fixed positions (no randomness, so it never jumps).
import React from 'react';
import { View, StyleSheet } from 'react-native';

const STARS = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  top: `${(i * 37 + ((i * i) % 17)) % 100}%`,
  left: `${(i * 61 + ((i * 7) % 13)) % 100}%`,
  size: 1 + (i % 3),
  opacity: 0.25 + (i % 5) * 0.15,
}));

export default function StarField() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {STARS.map((star) => (
        <View
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: star.size,
            backgroundColor: '#FFFFFF',
            opacity: star.opacity,
          }}
        />
      ))}
    </View>
  );
}
