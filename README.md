# 🌌 Orbitoarium

An offline educational astronomy app built with **React Native + Expo**. Explore the planets and moons of our solar system, read space facts, and test your knowledge with a quiz. Built for the university **Mobile Communication and Computing (MCC) – ICA 03**.

> Everything is bundled inside the app. **No internet, no APIs, no online database.**

## ✨ Features

- 🏠 **Home**: logo, welcome message, featured planet (changes daily), solar system overview, quick navigation, best quiz score and a featured fact
- 🪐 **Explore Planets**: all 8 planets in a `FlatList`, search by name, filter by *Terrestrial / Gas Giant / Favourites*
- 📄 **Planet Details**: data passed with React Navigation route params (diameter, distance, orbit, rotation, moons, temperature, facts) and a ❤️ favourite button
- 🌙 **Moons Explorer**: 15 moons, search, filter by parent planet, moon detail view
- ❓ **Space Quiz**: 16 questions, 4 options each, instant feedback, score, result screen, restart, saved best score
- 💡 **Space Facts**: 24 facts, search and category filter
- 💾 **AsyncStorage**: favourite planets and best quiz score are saved on the device

## 🛠 Technologies

React Native · Expo (JavaScript) · React Navigation (Bottom Tabs + Native Stack) · AsyncStorage · expo-linear-gradient · @expo/vector-icons · StyleSheet · React Hooks

## 🚀 Installation

Requirements: Node.js (LTS), Git, and the **Expo Go** app on your phone.

```bash
git clone https://github.com/<your-username>/Orbitoarium.git
cd Orbitoarium
npm install
npx expo start
```

Scan the QR code with Expo Go. If your phone cannot connect, use `npx expo start --tunnel`.

**Run in the browser (web):**
```bash
npx expo start --web
```
or press `w` in the terminal after `npx expo start`. It opens at http://localhost:8081. For a phone-like view, press F12 in Chrome and enable the device toolbar.

## 📸 Screenshots

Add your screenshots to `docs/screenshots/` and link them here:

| Home | Planets | Planet Details |
|---|---|---|
| ![Home](docs/screenshots/home.png) | ![Planets](docs/screenshots/planets.png) | ![Details](docs/screenshots/details.png) |

| Moons | Quiz | Facts |
|---|---|---|
| ![Moons](docs/screenshots/moons.png) | ![Quiz](docs/screenshots/quiz.png) | ![Facts](docs/screenshots/facts.png) |

## 📁 Project Structure

```
Orbitoarium/
├── App.js                      # entry point
├── navigation/AppNavigator.js  # tabs + stack
├── screens/                    # Home, Planets, PlanetDetails, Moons, Quiz, Facts
├── components/                 # PlanetCard, MoonCard, SearchBar, CategoryFilter,
│                               # CustomHeader, FactCard, QuizOption, StarField
├── data/                       # planets.js, moons.js, quizQuestions.js, spaceFacts.js
├── utils/storage.js            # AsyncStorage helpers
├── styles/theme.js             # colors, spacing, font sizes
├── assets/images/              # local planet illustrations
└── docs/                       # GitHub guide, demo checklist, viva Q&A
```

## 📴 Offline Functionality

- All data lives in local JavaScript files in `data/`
- All images are stored in `assets/images/`
- No `fetch`, no API keys, no online database
- User data (favourites, best score) is stored with AsyncStorage on the device
- Works in airplane mode after the app has loaded

## 👤 Author

**Shafrath**: IT undergraduate, University of Vavuniya
GitHub: [@shafahmd](https://github.com/shafahmd)
Module: Mobile Communication and Computing (MCC), ICA 03
