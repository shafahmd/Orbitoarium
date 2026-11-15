// components/FactCard.js
// Card showing one space fact.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

export default function FactCard({ fact }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Ionicons name="sparkles" size={18} color={colors.accent} />
        <Text style={styles.category}>{fact.category}</Text>
      </View>
      <Text style={styles.title}>{fact.title}</Text>
      <Text style={styles.text}>{fact.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  topRow: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs },
  category: { color: colors.accent, fontSize: fontSizes.small, fontWeight: '700', marginLeft: spacing.xs, textTransform: 'uppercase' },
  title: { color: colors.textPrimary, fontSize: fontSizes.subtitle + 2, fontWeight: 'bold', marginBottom: spacing.xs },
  text: { color: colors.textSecondary, fontSize: fontSizes.body, lineHeight: 21 },
});
