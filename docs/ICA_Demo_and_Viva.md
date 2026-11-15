# ICA 03 Demonstration Checklist, Viva Q&A and Requirement Verification

## A. Demonstration checklist (5–7 minutes)

1. **Open the app (airplane mode ON)**: say "no internet is used".
2. **Home**: show the logo, featured planet, solar system overview, quick navigation, best score.
3. **Planets tab**: show all 8 planets → type `mar` in search → clear → filter *Terrestrial*, *Gas Giant*.
4. **Planet details**: tap Saturn → show data, facts → tap ❤️ → go back → filter *Favourites*.
5. **Moons tab**: search `ti` → filter by *Jupiter* → tap a moon to open the detail view.
6. **Quiz tab**: answer one correctly and one wrongly → show feedback → finish → show result → Restart.
7. **Home again**: show the saved best score (AsyncStorage).
8. **Facts tab**: search `venus` → filter by category.
9. **Show code**: `data/planets.js`, `navigation/AppNavigator.js`, `screens/PlanetsScreen.js`, `utils/storage.js`.
10. **Show GitHub**: repository, commit history, README.

## B. Final requirement verification

| # | Requirement | Where it is done |
|---|---|---|
| 1 | Individual React Native app | Whole project (Expo, JavaScript) |
| 2 | Unique title | **Orbitoarium** |
| 3 | At least 5 screens | 6 screens in `screens/` |
| 4 | Navigation | `navigation/AppNavigator.js` (tabs + stack) |
| 5 | Own dataset | `data/*.js` (written by the author) |
| 6 | Store data locally | Local JS datasets + AsyncStorage (`utils/storage.js`) |
| 7 | Retrieve and display dynamically | `FlatList` + `.map()` rendering from `data/` |
| 8 | Searching / filtering / details | Planets, Moons, Facts screens; Planet and Moon details |
| 9 | Works offline | No network code; images bundled in `assets/` |
| 10 | No public APIs / online DB | No `fetch`, no API packages |
| 11 | Individual GitHub repository | Follow `docs/GITHUB_GUIDE.md` |
| 12 | Regular commits | Follow the staged commit list |
| 13 | Submit before deadline | Submit the repo link early |

## C. Testing checklist

- [ ] All six screens open
- [ ] Bottom tabs and back navigation work
- [ ] 8 planets show; search `jup` shows only Jupiter
- [ ] Terrestrial filter shows 4, Gas Giant shows 4
- [ ] Planet details show the tapped planet
- [ ] Moon search and planet filter work, moon detail opens and closes
- [ ] Quiz: correct = green, wrong = red + correct highlighted
- [ ] Quiz score is right; Restart resets score and reshuffles
- [ ] Facts search and category filter work
- [ ] Favourites and best score still there after closing and reopening the app
- [ ] Airplane mode: everything still works

## D. Viva questions and answers

**1. What is React Native and why Expo?**
React Native builds mobile apps with JavaScript and React. Expo gives an easy toolchain: run on a phone with Expo Go, no Android Studio or Xcode needed for development.

**2. How does navigation work in your app?**
`NavigationContainer` wraps a bottom tab navigator (Home, Planets, Moons, Quiz, Facts). The Planets tab holds a native stack (PlanetsList → PlanetDetails) so the details screen has a back button.

**3. How do you pass data between screens?**
`navigation.navigate('PlanetDetails', { planet: item })` sends the planet; the details screen reads it with `route.params.planet`.

**4. Why does Home use `initial: false` when opening a planet?**
If the Planets stack has not been opened yet, `initial: false` keeps PlanetsList underneath, so the Back button goes to the list instead of nothing.

**5. How is data stored locally?**
Datasets are JavaScript arrays in `data/` bundled with the app. User data (favourites, best score) is stored with AsyncStorage (key-value storage on the device).

**6. Why FlatList instead of ScrollView + map?**
FlatList only renders items near the screen (virtualization), so it is more efficient for long lists, and it handles keys and empty states.

**7. How does search work?**
A `useState` variable holds the text. Each render, `planets.filter(...)` keeps items whose lowercase name includes the lowercase search text.

**8. How do you combine search and filter?**
The same `filter` checks both conditions with `matchesSearch && matchesCategory`.

**9. What is `useState`? What is `useEffect`?**
`useState` stores values that change and re-renders the screen when they change. `useEffect` runs code after rendering (for example, loading favourites when the details screen opens). `useFocusEffect` does it every time the screen is shown.

**10. How does the quiz calculate the score?**
When the user taps an option, `handleSelect` compares the tapped index with `question.correctIndex`. If equal, `score` increases by 1. Extra taps are ignored once answered.

**11. How does Restart work?**
It reshuffles the questions and resets `current`, `selected`, `score` and `finished`.

**12. How do you prove the app is offline?**
No `fetch` or API calls exist; images use `require()` from `assets/`; I demonstrated the app in airplane mode.

**13. Why a theme file and reusable components?**
One place for colors and spacing keeps the design consistent; components like `SearchBar` and `CategoryFilter` are reused on three screens, which avoids duplicated code.

**14. Why is the planet category "Gas Giant" for Uranus and Neptune?**
The assignment uses two categories. Uranus and Neptune are technically *ice giants*, so the `type` field shows "Ice Giant" while `category` stays "Gas Giant" for filtering.

**15. What would you improve?**
Dark/light theme setting, more moons and quiz questions, quiz difficulty levels, and saving a history of quiz results.
