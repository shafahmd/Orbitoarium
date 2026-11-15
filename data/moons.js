// data/moons.js
// Local dataset: a selection of moons from different planets.
// "planet" must match a planet name in planets.js (used for filtering).

const moons = [
  {
    id: 'm1', name: 'The Moon', planet: 'Earth', diameter: '3,474 km', discovered: 'Known since ancient times',
    shortDescription: "Earth's only natural satellite.",
    description: "The Moon is Earth's only natural satellite and the fifth largest moon in the solar system. Its gravity causes the ocean tides, and twelve astronauts have walked on its surface.",
    fact: 'The Moon moves about 3.8 cm farther from Earth every year.',
  },
  {
    id: 'm2', name: 'Phobos', planet: 'Mars', diameter: '22 km', discovered: 'Asaph Hall, 1877',
    shortDescription: 'The larger and closer moon of Mars.',
    description: 'Phobos is a small, irregular, cratered moon that orbits very close to Mars. It circles the planet about three times each Martian day.',
    fact: 'Phobos is slowly spiralling toward Mars and may break apart in tens of millions of years.',
  },
  {
    id: 'm3', name: 'Deimos', planet: 'Mars', diameter: '12 km', discovered: 'Asaph Hall, 1877',
    shortDescription: 'The smaller, outer moon of Mars.',
    description: 'Deimos is the smaller of the two Martian moons. It has a smooth surface because dust fills many of its craters.',
    fact: 'Deimos takes about 30 hours to orbit Mars.',
  },
  {
    id: 'm4', name: 'Io', planet: 'Jupiter', diameter: '3,643 km', discovered: 'Galileo Galilei, 1610',
    shortDescription: 'The most volcanic world in the solar system.',
    description: 'Io has hundreds of active volcanoes, some throwing lava fountains tens of kilometres high. Tidal forces from Jupiter and its other moons heat its interior.',
    fact: 'Io is the most volcanically active body known.',
  },
  {
    id: 'm5', name: 'Europa', planet: 'Jupiter', diameter: '3,122 km', discovered: 'Galileo Galilei, 1610',
    shortDescription: 'An icy moon hiding a deep ocean.',
    description: 'Europa has a smooth, cracked shell of ice covering a global salty ocean. It is one of the top places scientists want to explore in the search for life.',
    fact: 'Europa may contain more liquid water than all of Earth\'s oceans combined.',
  },
  {
    id: 'm6', name: 'Ganymede', planet: 'Jupiter', diameter: '5,268 km', discovered: 'Galileo Galilei, 1610',
    shortDescription: 'The largest moon in the solar system.',
    description: 'Ganymede is bigger than the planet Mercury. It is the only moon known to have its own magnetic field and likely has a hidden ocean.',
    fact: 'Ganymede is the largest moon in the solar system.',
  },
  {
    id: 'm7', name: 'Callisto', planet: 'Jupiter', diameter: '4,821 km', discovered: 'Galileo Galilei, 1610',
    shortDescription: 'One of the most heavily cratered objects known.',
    description: 'Callisto has an ancient surface covered with craters that have barely changed for billions of years. It orbits farther from Jupiter than the other large moons.',
    fact: 'Callisto has one of the oldest landscapes in the solar system.',
  },
  {
    id: 'm8', name: 'Titan', planet: 'Saturn', diameter: '5,150 km', discovered: 'Christiaan Huygens, 1655',
    shortDescription: 'A moon with a thick atmosphere and methane lakes.',
    description: 'Titan is the second-largest moon in the solar system and the only one with a dense atmosphere. Lakes and rivers of liquid methane and ethane flow on its surface.',
    fact: 'The Huygens probe landed on Titan in 2005.',
  },
  {
    id: 'm9', name: 'Enceladus', planet: 'Saturn', diameter: '504 km', discovered: 'William Herschel, 1789',
    shortDescription: 'A small icy moon that shoots water into space.',
    description: 'Enceladus shoots geysers of water vapor and ice from cracks near its south pole. They come from a salty ocean under its icy crust.',
    fact: "Enceladus's geysers feed one of Saturn's rings.",
  },
  {
    id: 'm10', name: 'Mimas', planet: 'Saturn', diameter: '396 km', discovered: 'William Herschel, 1789',
    shortDescription: 'The moon with a giant crater.',
    description: 'Mimas is dominated by Herschel Crater, a huge impact crater that makes the moon look a little like a famous sci-fi space station.',
    fact: 'Herschel Crater is about one third as wide as Mimas itself.',
  },
  {
    id: 'm11', name: 'Rhea', planet: 'Saturn', diameter: '1,527 km', discovered: 'Giovanni Cassini, 1672',
    shortDescription: "Saturn's second-largest moon.",
    description: 'Rhea is an icy, heavily cratered moon made mostly of water ice with some rock. It has a very thin atmosphere of oxygen and carbon dioxide.',
    fact: 'Rhea is the second-largest moon of Saturn.',
  },
  {
    id: 'm12', name: 'Titania', planet: 'Uranus', diameter: '1,578 km', discovered: 'William Herschel, 1787',
    shortDescription: 'The largest moon of Uranus.',
    description: 'Titania is an icy moon with huge canyons and fault valleys that show it was once geologically active. Many Uranian moons are named after Shakespeare characters.',
    fact: 'Titania is named after the queen of the fairies in A Midsummer Night\'s Dream.',
  },
  {
    id: 'm13', name: 'Miranda', planet: 'Uranus', diameter: '472 km', discovered: 'Gerard Kuiper, 1948',
    shortDescription: 'A small moon with extreme, patchwork terrain.',
    description: 'Miranda has one of the strangest landscapes in the solar system, with giant canyons, terraced layers and smooth plains in a patchwork.',
    fact: 'Verona Rupes on Miranda is one of the tallest known cliffs, about 20 km high.',
  },
  {
    id: 'm14', name: 'Triton', planet: 'Neptune', diameter: '2,707 km', discovered: 'William Lassell, 1846',
    shortDescription: "Neptune's large moon that orbits backwards.",
    description: 'Triton orbits Neptune in the opposite direction to the planet\'s spin, which suggests it was captured from the outer solar system. It has icy geysers of nitrogen.',
    fact: 'Triton is one of the coldest places known, about -235°C.',
  },
  {
    id: 'm15', name: 'Proteus', planet: 'Neptune', diameter: '420 km', discovered: 'Voyager 2, 1989',
    shortDescription: "One of Neptune's largest moons.",
    description: 'Proteus is a dark, irregular moon that is almost as large as an object can be without gravity pulling it into a round shape. It was discovered by the Voyager 2 spacecraft.',
    fact: 'Proteus was discovered in 1989 from images sent back by Voyager 2.',
  },
];

export default moons;
