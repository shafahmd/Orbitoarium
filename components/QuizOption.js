// components/QuizOption.js
// One answer button. "state" controls the color:
// 'default' | 'correct' | 'wrong' | 'dimmed'
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizOption({ index, text, state = 'default', onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        state === 'correct' && styles.correct,
        state === 'wrong' && styles.wrong,
        state === 'dimmed' && styles.dimmed,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.letterCircle}>
        <Text style={styles.letter}>{LETTERS[index]}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
      {state === 'correct' && <Ionicons name="checkmark-circle" size={24} color={colors.success} />}
      {state === 'wrong' && <Ionicons name="close-circle" size={24} color={colors.error} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm + 2,
    borderWidth: 2,
    borderColor: colors.border,
  },
  correct: { borderColor: colors.success, backgroundColor: 'rgba(46, 204, 113, 0.15)' },
  wrong: { borderColor: colors.error, backgroundColor: 'rgba(231, 76, 60, 0.15)' },
  dimmed: { opacity: 0.5 },
  letterCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  letter: { color: colors.textPrimary, fontWeight: 'bold' },
  text: { flex: 1, color: colors.textPrimary, fontSize: fontSizes.subtitle },
});
