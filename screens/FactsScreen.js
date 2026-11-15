// screens/FactsScreen.js
// Screen 6: space facts with search + category filter.
import React, { useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import spaceFacts from '../data/spaceFacts';
import CustomHeader from '../components/CustomHeader';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import FactCard from '../components/FactCard';
import { colors, spacing, fontSizes } from '../styles/theme';

const CATEGORIES = ['All', ...new Set(spaceFacts.map((fact) => fact.category))];

export default function FactsScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredFacts = spaceFacts.filter((fact) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = fact.title.toLowerCase().includes(query) || fact.text.toLowerCase().includes(query);
    const matchesCategory = category === 'All' || fact.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomHeader title="Space Facts" subtitle={`${filteredFacts.length} amazing facts`} icon="bulb" />
      <SearchBar value={search} onChangeText={setSearch} placeholder="Search facts..." />
      <CategoryFilter categories={CATEGORIES} selected={category} onSelect={setCategory} />
      <FlatList
        data={filteredFacts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => <FactCard fact={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No facts found.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { paddingHorizontal: spacing.md, paddingBottom: spacing.lg },
  empty: { color: colors.textSecondary, fontSize: fontSizes.subtitle, textAlign: 'center', marginTop: spacing.xl },
});
