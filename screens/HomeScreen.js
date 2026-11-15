// screens/HomeScreen.js
// Screen 1: logo, welcome message, featured planet, solar system overview,
// quick navigation buttons and a featured space fact.
import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import StarField from '../components/StarField';
import planets from '../data/planets';
import spaceFacts from '../data/spaceFacts';
import quizQuestions from '../data/quizQuestions';
import { getBestScore } from '../utils/storage';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

const QUICK_LINKS = [
  { label: 'Planets', icon: 'earth', screen: 'Planets' },
  { label: 'Moons', icon: 'moon', screen: 'Moons' },
  { label: 'Quiz', icon: 'help-circle', screen: 'Quiz' },
  { label: 'Facts', icon: 'bulb', screen: 'Facts' },
];

export default function HomeScreen({ navigation }) {
  const [bestScore, setBestScore] = useState(0);

  // The featured planet and fact change every day of the month.
  const day = new Date().getDate();
  const featuredPlanet = useMemo(() => planets[day % planets.length], [day]);
  const featuredFact = useMemo(() => spaceFacts[day % spaceFacts.length], [day]);

  // Reload the saved best score every time the Home tab is shown.
  useFocusEffect(
    useCallback(() => {
      getBestScore().then(setBestScore);
    }, [])
  );

  // initial: false keeps the planet list underneath, so the Back button works.
  const openPlanet = (planet) => {
    navigation.navigate('Planets', {
      screen: 'PlanetDetails',
      params: { planet },
      initial: false,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StarField />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Logo + welcome */}
        <View style={styles.hero}>
          <LinearGradient colors={[colors.primary, colors.secondary]} style={styles.logo}>
            <Ionicons name="planet" size={40} color={colors.textPrimary} />
          </LinearGradient>
          <Text style={styles.appName}>ORBITOARIUM</Text>
          <Text style={styles.welcome}>Welcome, Explorer! 🚀</Text>
          <Text style={styles.tagline}>
            Discover the planets, moons and wonders of our solar system, even without internet.
          </Text>
        </View>

        {/* Featured planet */}
        <Text style={styles.sectionTitle}>Featured Planet</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={() => openPlanet(featuredPlanet)}>
          <LinearGradient
            colors={['#2B2370', '#161B3D']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.featured}
          >
            <Image source={featuredPlanet.image} style={styles.featuredImage} resizeMode="contain" />
            <View style={styles.featuredInfo}>
              <Text style={styles.featuredName}>{featuredPlanet.name}</Text>
              <Text style={styles.featuredText}>{featuredPlanet.shortDescription}</Text>
              <View style={styles.exploreButton}>
                <Text style={styles.exploreText}>Explore</Text>
                <Ionicons name="arrow-forward" size={16} color={colors.textPrimary} />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Solar system overview */}
        <Text style={styles.sectionTitle}>Solar System Overview</Text>
        <FlatList
          data={planets}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.overviewItem} onPress={() => openPlanet(item)}>
              <Image source={item.image} style={styles.overviewImage} resizeMode="contain" />
              <Text style={styles.overviewName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Quick navigation */}
        <Text style={styles.sectionTitle}>Quick Navigation</Text>
        <View style={styles.quickRow}>
          {QUICK_LINKS.map((link) => (
            <TouchableOpacity
              key={link.label}
              style={styles.quickButton}
              onPress={() => navigation.navigate(link.screen)}
              activeOpacity={0.8}
            >
              <Ionicons name={link.icon} size={26} color={colors.accent} />
              <Text style={styles.quickText}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quiz best score (saved with AsyncStorage) */}
        <View style={styles.scoreCard}>
          <Ionicons name="trophy" size={24} color="#F5B041" />
          <Text style={styles.scoreText}>
            Best quiz score: {bestScore} / {quizQuestions.length}
          </Text>
        </View>

        {/* Featured fact */}
        <Text style={styles.sectionTitle}>Did You Know?</Text>
        <View style={styles.factCard}>
          <Text style={styles.factTitle}>{featuredFact.title}</Text>
          <Text style={styles.factText}>{featuredFact.text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  hero: { alignItems: 'center', marginVertical: spacing.lg },
  logo: { width: 84, height: 84, borderRadius: 42, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  appName: { color: colors.textPrimary, fontSize: fontSizes.heading, fontWeight: 'bold', letterSpacing: 4 },
  welcome: { color: colors.accent, fontSize: fontSizes.title, fontWeight: '600', marginTop: spacing.sm },
  tagline: { color: colors.textSecondary, fontSize: fontSizes.body, textAlign: 'center', marginTop: spacing.sm, lineHeight: 20 },
  sectionTitle: { color: colors.textPrimary, fontSize: fontSizes.title, fontWeight: 'bold', marginTop: spacing.lg, marginBottom: spacing.md },
  featured: { flexDirection: 'row', alignItems: 'center', borderRadius: radius.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border },
  featuredImage: { width: 110, height: 110, marginRight: spacing.md },
  featuredInfo: { flex: 1 },
  featuredName: { color: colors.textPrimary, fontSize: fontSizes.heading - 4, fontWeight: 'bold' },
  featuredText: { color: colors.textSecondary, fontSize: fontSizes.body, marginVertical: spacing.sm },
  exploreButton: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', backgroundColor: colors.primary, borderRadius: radius.lg, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  exploreText: { color: colors.textPrimary, fontWeight: '600', marginRight: spacing.xs },
  overviewItem: { alignItems: 'center', marginRight: spacing.md, width: 76 },
  overviewImage: { width: 64, height: 64 },
  overviewName: { color: colors.textSecondary, fontSize: fontSizes.small, marginTop: spacing.xs },
  quickRow: { flexDirection: 'row', justifyContent: 'space-between' },
  quickButton: { flex: 1, alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.md, paddingVertical: spacing.md, marginHorizontal: spacing.xs, borderWidth: 1, borderColor: colors.border },
  quickText: { color: colors.textPrimary, fontSize: fontSizes.small + 1, fontWeight: '600', marginTop: spacing.xs },
  scoreCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, marginTop: spacing.md, borderWidth: 1, borderColor: colors.border },
  scoreText: { color: colors.textPrimary, fontSize: fontSizes.subtitle, marginLeft: spacing.md, fontWeight: '600' },
  factCard: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, borderLeftWidth: 4, borderLeftColor: colors.secondary },
  factTitle: { color: colors.textPrimary, fontSize: fontSizes.subtitle + 1, fontWeight: 'bold', marginBottom: spacing.xs },
  factText: { color: colors.textSecondary, fontSize: fontSizes.body, lineHeight: 21 },
});
