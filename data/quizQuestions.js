// data/quizQuestions.js
// Local dataset: 16 multiple-choice questions.
// correctIndex is the position (0-3) of the right answer in the options array.

const quizQuestions = [
  { id: 'q1', question: 'Which planet is closest to the Sun?', options: ['Venus', 'Mercury', 'Mars', 'Earth'], correctIndex: 1, explanation: 'Mercury orbits closest to the Sun, at about 57.9 million km.' },
  { id: 'q2', question: 'Which is the largest planet in our solar system?', options: ['Saturn', 'Neptune', 'Jupiter', 'Earth'], correctIndex: 2, explanation: 'Jupiter is more than twice as massive as all the other planets combined.' },
  { id: 'q3', question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Mercury', 'Jupiter', 'Venus'], correctIndex: 0, explanation: 'Iron oxide (rust) on the surface gives Mars its red color.' },
  { id: 'q4', question: 'Which planet has the most spectacular ring system?', options: ['Uranus', 'Jupiter', 'Neptune', 'Saturn'], correctIndex: 3, explanation: "Saturn's bright rings are made of billions of pieces of ice and rock." },
  { id: 'q5', question: 'Which planet rotates on its side, with an axial tilt of about 98 degrees?', options: ['Uranus', 'Earth', 'Mars', 'Venus'], correctIndex: 0, explanation: 'Uranus is tilted so much that it seems to roll around the Sun.' },
  { id: 'q6', question: 'Which is the hottest planet in the solar system?', options: ['Mercury', 'Venus', 'Mars', 'Jupiter'], correctIndex: 1, explanation: "Venus's thick carbon dioxide atmosphere traps heat, reaching about 465°C." },
  { id: 'q7', question: 'How many planets are in our solar system?', options: ['7', '9', '10', '8'], correctIndex: 3, explanation: 'There are eight planets. Pluto was reclassified as a dwarf planet in 2006.' },
  { id: 'q8', question: 'What is the largest moon in the solar system?', options: ['Titan', 'Ganymede', 'The Moon', 'Europa'], correctIndex: 1, explanation: 'Ganymede, a moon of Jupiter, is even bigger than the planet Mercury.' },
  { id: 'q9', question: "Which moon of Jupiter is thought to hide a deep ocean under its ice and is a top target in the search for life?", options: ['Io', 'Callisto', 'Europa', 'Phobos'], correctIndex: 2, explanation: "Europa's icy shell covers a salty global ocean." },
  { id: 'q10', question: "What is Jupiter's Great Red Spot?", options: ['A giant storm', 'A volcano', 'An ocean', 'A crater'], correctIndex: 0, explanation: 'It is a huge storm that has been observed for at least 150 years.' },
  { id: 'q11', question: 'Which planet takes about 165 Earth years to orbit the Sun?', options: ['Uranus', 'Saturn', 'Jupiter', 'Neptune'], correctIndex: 3, explanation: 'Neptune is so far from the Sun that one orbit takes about 165 Earth years.' },
  { id: 'q12', question: 'Which moon of Saturn has a thick atmosphere and lakes of liquid methane?', options: ['Enceladus', 'Titan', 'Mimas', 'Rhea'], correctIndex: 1, explanation: 'Titan is the only moon in the solar system with a dense atmosphere.' },
  { id: 'q13', question: 'Which moon is the most volcanically active body in the solar system?', options: ['Io', 'Triton', 'Europa', 'Miranda'], correctIndex: 0, explanation: "Tidal heating from Jupiter keeps Io's volcanoes erupting." },
  { id: 'q14', question: 'On which planet is a day longer than its year?', options: ['Mercury', 'Mars', 'Venus', 'Neptune'], correctIndex: 2, explanation: 'Venus takes 243 Earth days to rotate but only 225 Earth days to orbit the Sun.' },
  { id: 'q15', question: 'Which galaxy contains our solar system?', options: ['Andromeda', 'Triangulum', 'Whirlpool', 'Milky Way'], correctIndex: 3, explanation: 'Our solar system lies in one of the spiral arms of the Milky Way.' },
  { id: 'q16', question: 'What is the name of the larger moon of Mars?', options: ['Deimos', 'Phobos', 'Titan', 'Triton'], correctIndex: 1, explanation: 'Phobos is the larger and closer of the two small moons of Mars.' },
];

export default quizQuestions;
