// screens/PlanetDetailsScreen.js
// Screen 3: details of the planet passed through route.params.
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { getFavourites, toggleFavourite } from '../utils/storage';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

export default function PlanetDetailsScreen({ route }) {
  // The selected planet arrives as a navigation parameter.
  const { planet } = route.params;
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    getFavourites().then((list) => setIsFavourite(list.includes(planet.id)));
  }, [planet.id]);

  const handleToggleFavourite = async () => {
    const updated = await toggleFavourite(planet.id);
    setIsFavourite(updated.includes(planet.id));
  };

  const infoItems = [
    { icon: 'resize-outline', label: 'Diameter', value: planet.diameter },
    { icon: 'sunny-outline', label: 'Distance from Sun', value: planet.distanceFromSun },
    { icon: 'sync-outline', label: 'Orbital Period', value: planet.orbitalPeriod },
    { icon: 'refresh-outline', label: 'Rotation Period', value: planet.rotationPeriod },
    { icon: 'moon-outline', label: 'Known Moons', value: planet.moons },
    { icon: 'thermometer-outline', label: 'Temperature', value: planet.temperature },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <LinearGradient colors={['#2B2370', colors.background]} style={styles.hero}>
        <Image source={planet.image} style={styles.image} resizeMode="contain" />
      </LinearGradient>

      <View style={styles.titleRow}>
        <View style={styles.titleTexts}>
          <Text style={styles.name}>{planet.name}</Text>
          <View style={styles.badgeRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>{planet.category}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>{planet.type}</Text></View>
          </View>
        </View>
        <TouchableOpacity style={styles.favButton} onPress={handleToggleFavourite} activeOpacity={0.8}>
          <Ionicons
            name={isFavourite ? 'heart' : 'heart-outline'}
            size={26}
            color={isFavourite ? colors.error : colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.description}>{planet.description}</Text>

      <Text style={styles.sectionTitle}>Key Data</Text>
      <View style={styles.infoCard}>
        {infoItems.map((item, index) => (
          <View key={item.label} style={[styles.infoRow, index < infoItems.length - 1 && styles.infoRowBorder]}>
            <Ionicons name={item.icon} size={22} color={colors.accent} />
            <View style={styles.infoTexts}>
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Interesting Facts</Text>
      {planet.facts.map((fact, index) => (
        <View key={index} style={styles.factRow}>
          <Ionicons name="sparkles" size={18} color={colors.secondary} style={styles.factIcon} />
          <Text style={styles.factText}>{fact}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: spacing.xl },
  hero: { alignItems: 'center', paddingVertical: spacing.lg },
  image: { width: 240, height: 240 },
  titleRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.md },
  titleTexts: { flex: 1 },
  name: { color: colors.textPrimary, fontSize: fontSizes.heading + 4, fontWeight: 'bold' },
  badgeRow: { flexDirection: 'row', marginTop: spacing.sm },
  badge: { backgroundColor: colors.surfaceLight, borderRadius: radius.sm, paddingHorizontal: spacing.sm, paddingVertical: 3, marginRight: spacing.sm },
  badgeText: { color: colors.accent, fontSize: fontSizes.small, fontWeight: '600' },
  favButton: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border },
  sectionTitle: { color: colors.textPrimary, fontSize: fontSizes.title, fontWeight: 'bold', marginTop: spacing.lg, marginBottom: spacing.sm, paddingHorizontal: spacing.md },
  description: { color: colors.textSecondary, fontSize: fontSizes.subtitle, lineHeight: 24, paddingHorizontal: spacing.md },
  infoCard: { backgroundColor: colors.surface, borderRadius: radius.md, marginHorizontal: spacing.md, borderWidth: 1, borderColor: colors.border },
  infoRow: { flexDirection: 'row', alignItems: 'center', padding: spacing.md },
  infoRowBorder: { borderBottomWidth: 1, borderBottomColor: colors.border },
  infoTexts: { marginLeft: spacing.md, flex: 1 },
  infoLabel: { color: colors.textSecondary, fontSize: fontSizes.small + 1 },
  infoValue: { color: colors.textPrimary, fontSize: fontSizes.subtitle, fontWeight: '600', marginTop: 2 },
  factRow: { flexDirection: 'row', paddingHorizontal: spacing.md, marginBottom: spacing.sm },
  factIcon: { marginTop: 3, marginRight: spacing.sm },
  factText: { flex: 1, color: colors.textSecondary, fontSize: fontSizes.subtitle - 1, lineHeight: 22 },
});
