const quoteCon = document.querySelector("#quoteCon");
const newQuote = document.querySelector("#newQuote");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

const quotes = [
  // 1
  {
    quote:
      "If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",
    author: "Erwin Smith",
  },
  // 2
  {
    quote:
      "If you really want to be strong… Stop caring about what your surrounding thinks of you!",
    author: "Saitama",
  },
  // 3
  {
    quote:
      "Do you always want to live hiding behind the mask you put up for the sake of others? You’re you, and there’s nothing wrong with that.",
    author: "Ymir",
  },
  // 4
  {
    quote:
      "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could you of tomorrow beat you today? Instead of giving in, move forward.",
    author: "Saitama",
  },
  // 5
  {
    quote:
      "If you win, you live. If you lose, you die. If you don’t fight, you can’t win.",
    author: "Eren Yeager",
  },
  // 6
  {
    quote: "Push through the pain. Giving up hurts more.",
    author: "Vegeta (The Goat)",
  },
  // 7
  {
    quote:
      "The important thing is not how long you live. It’s what you accomplish with your life.",
    author: "Grovyle",
  },
  // 8
  {
    quote:
      "No matter how many weapons you have, no matter how great your technology might be, the world cannot live without love.",
    author: "Sheeta",
  },
];

function randomQuote() {
  const random = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[random].quote;
  author.textContent = quotes[random].author;
}

newQuote.addEventListener("click", randomQuote);

randomQuote();
