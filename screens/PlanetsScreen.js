// screens/PlanetsScreen.js
// Screen 2: list of planets with search + category filter (FlatList).
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

import planets from '../data/planets';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import PlanetCard from '../components/PlanetCard';
import { getFavourites } from '../utils/storage';
import { colors, spacing, fontSizes } from '../styles/theme';

const CATEGORIES = ['All', 'Terrestrial', 'Gas Giant', 'Favourites'];

export default function PlanetsScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [favourites, setFavourites] = useState([]);

  // Reload favourites whenever we come back to this screen (e.g. from the details screen).
  useFocusEffect(
    useCallback(() => {
      getFavourites().then(setFavourites);
    }, [])
  );

  const filteredPlanets = planets.filter((planet) => {
    const matchesSearch = planet.name.toLowerCase().includes(search.trim().toLowerCase());
    let matchesCategory = true;
    if (category === 'Favourites') {
      matchesCategory = favourites.includes(planet.id);
    } else if (category !== 'All') {
      matchesCategory = planet.category === category;
    }
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomHeader title="Explore Planets" subtitle="Tap a planet to learn more" icon="earth" />
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search planets..." />
      <CategoryFilter categories={CATEGORIES} selected={category} onSelect={setCategory} />
      <FlatList
        data={filteredPlanets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <PlanetCard
            planet={item}
            isFavourite={favourites.includes(item.id)}
            onPress={() => navigation.navigate('PlanetDetails', { planet: item })}
          />
        )}
        ListEmptyComponent={
  <View style={styles.emptyContainer}>
    <Text style={styles.empty}>
      {category === 'Favourites'
        ? 'No favourite planets yet.'
        : 'No planets found.'}
    </Text>

    <TouchableOpacity
      style={styles.resetButton}
      onPress={() => {
        setSearch('');
        setCategory('All');
      }}
      accessibilityRole="button"
      accessibilityLabel="Reset planet search and filters"
    >
      <Text style={styles.resetButtonText}>Reset Filters</Text>
    </TouchableOpacity>
  </View>
}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.lg },
  empty: { color: colors.textSecondary, fontSize: fontSizes.subtitle, textAlign: 'center', marginTop: spacing.xl },
emptyContainer: {
  alignItems: 'center',
  marginTop: spacing.xl,
},

resetButton: {
  backgroundColor: colors.primary,
  paddingHorizontal: spacing.lg,
  paddingVertical: spacing.sm,
  borderRadius: 12,
  marginTop: spacing.md,
},

resetButtonText: {
  color: colors.textPrimary,
  fontWeight: 'bold',
  fontSize: fontSizes.body,
},
});
