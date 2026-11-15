// navigation/AppNavigator.js
// Bottom tabs (Home, Planets, Moons, Quiz, Facts).
// The Planets tab contains a stack: PlanetsList -> PlanetDetails.
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import PlanetDetailsScreen from '../screens/PlanetDetailsScreen';
import MoonsScreen from '../screens/MoonsScreen';
import QuizScreen from '../screens/QuizScreen';
import FactsScreen from '../screens/FactsScreen';
import { colors } from '../styles/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Make React Navigation use our dark space colors.
const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.surface,
    text: colors.textPrimary,
    border: colors.border,
  },
};

function PlanetsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="PlanetsList" component={PlanetsScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="PlanetDetails"
        component={PlanetDetailsScreen}
        options={({ route }) => ({ title: route.params.planet.name })}
      />
    </Stack.Navigator>
  );
}

const TAB_ICONS = {
  Home: ['planet', 'planet-outline'],
  Planets: ['earth', 'earth-outline'],
  Moons: ['moon', 'moon-outline'],
  Quiz: ['help-circle', 'help-circle-outline'],
  Facts: ['bulb', 'bulb-outline'],
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
          tabBarIcon: ({ focused, color, size }) => {
            const [active, inactive] = TAB_ICONS[route.name];
            return <Ionicons name={focused ? active : inactive} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Planets" component={PlanetsStack} />
        <Tab.Screen name="Moons" component={MoonsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
        <Tab.Screen name="Facts" component={FactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
