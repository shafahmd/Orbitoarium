// components/CustomHeader.js
// Title bar shown at the top of the tab screens.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, fontSizes } from '../styles/theme';

export default function CustomHeader({ title, subtitle, icon = 'planet' }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={24} color={colors.textPrimary} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  texts: { flex: 1 },
  title: { color: colors.textPrimary, fontSize: fontSizes.heading - 4, fontWeight: 'bold' },
  subtitle: { color: colors.textSecondary, fontSize: fontSizes.body, marginTop: 2 },
});
