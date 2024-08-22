const cron = require("node-cron");

const quotes = [
  "Be yourself; everyone else is already taken.",
  "People change and forget to tell each other.",
  "Nothing will work unless you do.",
  "Never to suffer would never to have been blessed.",
  "What matters most in life is often invisible.",
  "We can only learn to love by loving.",
  "Genius is the recovery of childhood at will.",
  "Wisdom begins in wonder.",
  "And still I rise.",
  "Be curious, not judgmental.",
  "Everything you can imagine is real.",
  "You cannot shake hands with a clenched fist.",
  "You can disagree without being disagreeable.",
  "Think big thoughts, but relish the small pleasures.",
  "Have no fear of perfection; you’ll never reach it."
]

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  console.log(quote);
}

cron.schedule("*/10 * * * * *", () => {
  getRandomQuote();
})