const games = [
  {
    title: "LangWordle",
    description: "Wordle-style language guessing game.",
    url: "https://minthol12.github.io/LangWordle",
  },
  {
    title: "WordWander",
    description: "Explore words through logical paths.",
    url: "https://minthol12.github.io/WordWander",
  },
  {
    title: "TheRule",
    description: "Figure out the hidden rule.",
    url: "https://minthol12.github.io/TheRule",
  },
  {
    title: "CineMatch",
    description: "Guess the movie.",
    url: "https://minthol12.github.io/CineMatch",
  },
  {
    title: "LingoDrift",
    description: "Language shifts over time.",
    url: "https://minthol12.github.io/LingoDrift",
  },
  {
    title: "Texas Hold 'Em",
    description: "Simple Texas Hold'em implementation.",
    url: "https://minthol12.github.io/TexasHoldEm",
  },
  {
    title: "Reality Clicker",
    description: "Incremental clicker with twists.",
    url: "https://minthol12.github.io/RealityClicker",
  },
  {
    title: "Cut Too Soon",
    description: "Timing-based decision game.",
    url: "https://minthol12.github.io/CutTooSoon",
  },
  {
    title: "DayTrade",
    description: "Accurate simulation of Day Trading.",
    url: "https://minthol12.github.io/DayTrade",
  },
  {
    title: "Escalation",
    description: "Accurate simulation of Privilege Escalation",
    url: "https://minthol12.github.io/Escalation",
  },
  {
    title: "CyberSandbox",
    description: "Realistic Simulation of website hacking",
    url: "https://minthol12.github.io/CyberSandbox",
  },
  {
    title: "Spotify",
    description: "My Playlist",
    url: "https://minthol12.github.io/Spotify",
  },
];

const grid = document.getElementById("games");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${game.title}</h2>
    <p>${game.description}</p>
    <a href="${game.url}" target="_blank" rel="noopener">Play</a>
  `;

  grid.appendChild(card);
});
