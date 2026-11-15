// components/MoonCard.js
// One row in the moons list. Tapping opens the detail view.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

export default function MoonCard({ moon, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconCircle}>
        <Ionicons name="moon" size={24} color={colors.textPrimary} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{moon.name}</Text>
        <Text style={styles.planet}>Moon of {moon.planet}</Text>
        <Text style={styles.description} numberOfLines={2}>{moon.shortDescription}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color={colors.textSecondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  info: { flex: 1 },
  name: { color: colors.textPrimary, fontSize: fontSizes.title, fontWeight: 'bold' },
  planet: { color: colors.accent, fontSize: fontSizes.body, fontWeight: '600', marginVertical: 2 },
  description: { color: colors.textSecondary, fontSize: fontSizes.body },
});
