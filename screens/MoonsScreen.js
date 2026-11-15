// screens/MoonsScreen.js
// Screen 4: moons list with search, filter by parent planet, and a detail view (Modal).
import React, { useState } from 'react';
import { View, Text, FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import moons from '../data/moons';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import MoonCard from '../components/MoonCard';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

// Build the filter list from the dataset: ['All', 'Earth', 'Mars', ...]
const PARENT_PLANETS = ['All', ...new Set(moons.map((moon) => moon.planet))];

export default function MoonsScreen() {
  const [search, setSearch] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState('All');
  const [selectedMoon, setSelectedMoon] = useState(null); // moon shown in the detail view

  const filteredMoons = moons.filter((moon) => {
    const matchesSearch = moon.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesPlanet = selectedPlanet === 'All' || moon.planet === selectedPlanet;
    return matchesSearch && matchesPlanet;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomHeader title="Moons Explorer" subtitle={`${moons.length} moons in our dataset`} icon="moon" />
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search moons..." />
      <CategoryFilter categories={PARENT_PLANETS} selected={selectedPlanet} onSelect={setSelectedPlanet} />
      <FlatList
        data={filteredMoons}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => <MoonCard moon={item} onPress={() => setSelectedMoon(item)} />}
        ListEmptyComponent={<Text style={styles.empty}>No moons found.</Text>}
      />

      {/* Moon detail view */}
      <Modal
        visible={selectedMoon !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setSelectedMoon(null)}
      >
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => setSelectedMoon(null)}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
          {selectedMoon && (
            <View style={styles.sheet}>
              <View style={styles.sheetHeader}>
                <View style={styles.sheetIcon}>
                  <Ionicons name="moon" size={30} color={colors.textPrimary} />
                </View>
                <View style={styles.sheetTitles}>
                  <Text style={styles.sheetName}>{selectedMoon.name}</Text>
                  <Text style={styles.sheetPlanet}>Moon of {selectedMoon.planet}</Text>
                </View>
                <TouchableOpacity onPress={() => setSelectedMoon(null)} hitSlop={10}>
                  <Ionicons name="close" size={28} color={colors.textPrimary} />
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.sheetText}>{selectedMoon.description}</Text>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Diameter</Text>
                  <Text style={styles.dataValue}>{selectedMoon.diameter}</Text>
                </View>
                <View style={styles.dataRow}>
                  <Text style={styles.dataLabel}>Discovered</Text>
                  <Text style={styles.dataValue}>{selectedMoon.discovered}</Text>
                </View>
                <View style={styles.factBox}>
                  <Ionicons name="sparkles" size={18} color={colors.accent} />
                  <Text style={styles.factText}>{selectedMoon.fact}</Text>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.lg },
  empty: { color: colors.textSecondary, fontSize: fontSizes.subtitle, textAlign: 'center', marginTop: spacing.xl },
  overlay: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
  sheet: { backgroundColor: colors.surface, borderTopLeftRadius: radius.lg, borderTopRightRadius: radius.lg, padding: spacing.lg, maxHeight: '75%', borderTopWidth: 1, borderColor: colors.border },
  sheetHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md },
  sheetIcon: { width: 56, height: 56, borderRadius: 28, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: spacing.md },
  sheetTitles: { flex: 1 },
  sheetName: { color: colors.textPrimary, fontSize: fontSizes.heading - 2, fontWeight: 'bold' },
  sheetPlanet: { color: colors.accent, fontSize: fontSizes.subtitle, fontWeight: '600' },
  sheetText: { color: colors.textSecondary, fontSize: fontSizes.subtitle, lineHeight: 24, marginBottom: spacing.md },
  dataRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: spacing.sm + 2, borderBottomWidth: 1, borderBottomColor: colors.border },
  dataLabel: { color: colors.textSecondary, fontSize: fontSizes.body },
  dataValue: { color: colors.textPrimary, fontSize: fontSizes.body, fontWeight: '600', flexShrink: 1, textAlign: 'right', marginLeft: spacing.md },
  factBox: { flexDirection: 'row', backgroundColor: colors.surfaceLight, borderRadius: radius.md, padding: spacing.md, marginTop: spacing.md, marginBottom: spacing.md },
  factText: { flex: 1, color: colors.textPrimary, fontSize: fontSizes.body, lineHeight: 21, marginLeft: spacing.sm },
});
