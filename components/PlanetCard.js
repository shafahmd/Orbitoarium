// components/PlanetCard.js
// One row in the planet list.
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

export default function PlanetCard({ planet, isFavourite, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={planet.image} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.name}>{planet.name}</Text>
          {isFavourite && <Ionicons name="heart" size={16} color={colors.error} style={styles.heart} />}
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{planet.category}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {planet.shortDescription}
        </Text>
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
  image: { width: 72, height: 72, marginRight: spacing.md },
  info: { flex: 1 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  name: { color: colors.textPrimary, fontSize: fontSizes.title, fontWeight: 'bold' },
  heart: { marginLeft: spacing.sm },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    marginVertical: spacing.xs,
  },
  badgeText: { color: colors.accent, fontSize: fontSizes.small, fontWeight: '600' },
  description: { color: colors.textSecondary, fontSize: fontSizes.body },
});
