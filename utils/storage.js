// utils/storage.js
// Small helper functions for AsyncStorage (data saved on the device, no internet needed).
// We store: favourite planets and the best quiz score.

import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVOURITES_KEY = 'orbitoarium:favourites';
const BEST_SCORE_KEY = 'orbitoarium:bestScore';

// Returns an array of planet ids, e.g. ['3', '5']
export async function getFavourites() {
  try {
    const value = await AsyncStorage.getItem(FAVOURITES_KEY);
    return value ? JSON.parse(value) : [];
  } catch (error) {
    console.log('Could not read favourites', error);
    return [];
  }
}

// Adds the planet id if it is missing, removes it if it is already there.
// Returns the updated array.
export async function toggleFavourite(planetId) {
  try {
    const current = await getFavourites();
    const updated = current.includes(planetId)
      ? current.filter((id) => id !== planetId)
      : [...current, planetId];
    await AsyncStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.log('Could not save favourites', error);
    return [];
  }
}

// Returns the best quiz score as a number (0 if none saved yet).
export async function getBestScore() {
  try {
    const value = await AsyncStorage.getItem(BEST_SCORE_KEY);
    return value ? Number(value) : 0;
  } catch (error) {
    console.log('Could not read best score', error);
    return 0;
  }
}

// Saves the score only if it beats the old best. Returns true when it is a new best.
export async function saveBestScore(score) {
  try {
    const best = await getBestScore();
    if (score > best) {
      await AsyncStorage.setItem(BEST_SCORE_KEY, String(score));
      return true;
    }
    return false;
  } catch (error) {
    console.log('Could not save best score', error);
    return false;
  }
}
