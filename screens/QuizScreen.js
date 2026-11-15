// screens/QuizScreen.js
// Screen 5: multiple-choice space quiz with feedback, score, result and restart.
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import quizQuestions from '../data/quizQuestions';
import CustomHeader from '../components/CustomHeader';
import QuizOption from '../components/QuizOption';
import { getBestScore, saveBestScore } from '../utils/storage';
import { colors, spacing, radius, fontSizes } from '../styles/theme';

// Returns a shuffled copy of the array (Fisher-Yates), so every game has a different order.
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function QuizScreen() {
  const [questions, setQuestions] = useState(() => shuffle(quizQuestions));
  const [current, setCurrent] = useState(0);        // index of the current question
  const [selected, setSelected] = useState(null);   // index of the tapped option (null = not answered)
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);

  useEffect(() => {
    getBestScore().then(setBestScore);
  }, []);

  const question = questions[current];
  const answered = selected !== null;
  const isLast = current === questions.length - 1;

  const handleSelect = (index) => {
    if (answered) return; // ignore extra taps
    setSelected(index);
    if (index === question.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = async () => {
    if (!isLast) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      const newBest = await saveBestScore(score);
      setIsNewBest(newBest);
      setBestScore((best) => Math.max(best, score));
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffle(quizQuestions));
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setIsNewBest(false);
  };

  const getOptionState = (index) => {
    if (!answered) return 'default';
    if (index === question.correctIndex) return 'correct';
    if (index === selected) return 'wrong';
    return 'dimmed';
  };

  // ---------- Result section ----------
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = 'Keep exploring, Commander!';
    if (percentage >= 80) message = 'Stellar performance!';
    else if (percentage >= 50) message = 'Good job, space cadet!';

    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <CustomHeader title="Space Quiz" subtitle="Quiz complete" icon="help-circle" />
        <ScrollView contentContainerStyle={styles.resultContent}>
          <View style={styles.resultCircle}>
            <Ionicons name="trophy" size={44} color="#F5B041" />
            <Text style={styles.resultScore}>{score} / {questions.length}</Text>
            <Text style={styles.resultPercent}>{percentage}%</Text>
          </View>
          <Text style={styles.resultMessage}>{message}</Text>
          {isNewBest && <Text style={styles.newBest}>🎉 New best score!</Text>}
          <Text style={styles.bestText}>Best score: {bestScore} / {questions.length}</Text>
          <TouchableOpacity style={styles.primaryButton} onPress={handleRestart} activeOpacity={0.8}>
            <Ionicons name="refresh" size={20} color={colors.textPrimary} />
            <Text style={styles.primaryButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ---------- Question section ----------
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomHeader title="Space Quiz" subtitle={`Score: ${score}`} icon="help-circle" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.progressText}>Question {current + 1} of {questions.length}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${((current + 1) / questions.length) * 100}%` }]} />
        </View>

        <Text style={styles.question}>{question.question}</Text>

        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            index={index}
            text={option}
            state={getOptionState(index)}
            disabled={answered}
            onPress={() => handleSelect(index)}
          />
        ))}

        {answered && (
          <View style={styles.feedback}>
            <Text style={[styles.feedbackTitle, { color: selected === question.correctIndex ? colors.success : colors.error }]}>
              {selected === question.correctIndex ? '✅ Correct!' : '❌ Incorrect'}
            </Text>
            <Text style={styles.feedbackText}>{question.explanation}</Text>
          </View>
        )}

        {answered && (
          <TouchableOpacity style={styles.primaryButton} onPress={handleNext} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>{isLast ? 'See Results' : 'Next Question'}</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  progressText: { color: colors.textSecondary, fontSize: fontSizes.body, marginBottom: spacing.sm },
  progressTrack: { height: 8, backgroundColor: colors.surface, borderRadius: 4, overflow: 'hidden', marginBottom: spacing.lg },
  progressFill: { height: 8, backgroundColor: colors.primary, borderRadius: 4 },
  question: { color: colors.textPrimary, fontSize: fontSizes.title, fontWeight: 'bold', lineHeight: 28, marginBottom: spacing.lg },
  feedback: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, marginTop: spacing.sm, borderWidth: 1, borderColor: colors.border },
  feedbackTitle: { fontSize: fontSizes.subtitle + 2, fontWeight: 'bold', marginBottom: spacing.xs },
  feedbackText: { color: colors.textSecondary, fontSize: fontSizes.body, lineHeight: 21 },
  primaryButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary, borderRadius: radius.lg, paddingVertical: spacing.md, paddingHorizontal: spacing.lg, marginTop: spacing.lg },
  primaryButtonText: { color: colors.textPrimary, fontSize: fontSizes.subtitle, fontWeight: 'bold', marginHorizontal: spacing.sm },
  resultContent: { alignItems: 'center', padding: spacing.lg },
  resultCircle: { width: 220, height: 220, borderRadius: 110, backgroundColor: colors.surface, borderWidth: 4, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginVertical: spacing.lg },
  resultScore: { color: colors.textPrimary, fontSize: 40, fontWeight: 'bold', marginTop: spacing.sm },
  resultPercent: { color: colors.accent, fontSize: fontSizes.title, fontWeight: '600' },
  resultMessage: { color: colors.textPrimary, fontSize: fontSizes.title + 2, fontWeight: 'bold', textAlign: 'center' },
  newBest: { color: '#F5B041', fontSize: fontSizes.subtitle + 2, fontWeight: 'bold', marginTop: spacing.md },
  bestText: { color: colors.textSecondary, fontSize: fontSizes.subtitle, marginTop: spacing.sm },
});
