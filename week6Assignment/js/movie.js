//assigning the array to movies variable
const movies = [
  {
    title: "The Grand Horizon",
    year: 2014,
    genre: "Adventure",
    poster: "https://picsum.photos/seed/fav1/300/450",
  },
  {
    title: "Midnight Frequency",
    year: 2019,
    genre: "Thriller",
    poster: "https://picsum.photos/seed/fav2/300/450",
  },
  {
    title: "Paper Lanterns",
    year: 2011,
    genre: "Drama",
    poster: "https://picsum.photos/seed/fav3/300/450",
  },
  {
    title: "Solar Drift",
    year: 2022,
    genre: "Sci-Fi",
    poster: "https://picsum.photos/seed/fav4/300/450",
  },
  {
    title: "The Quiet Orchard",
    year: 2008,
    genre: "Drama",
    poster: "https://picsum.photos/seed/fav5/300/450",
  },
  {
    title: "Neon Alley",
    year: 2020,
    genre: "Action",
    poster: "https://picsum.photos/seed/fav6/300/450",
  },
  {
    title: "Copper Sky",
    year: 2016,
    genre: "Fantasy",
    poster: "https://picsum.photos/seed/fav7/300/450",
  },
  {
    title: "The Last Ferry",
    year: 2013,
    genre: "Drama",
    poster: "https://picsum.photos/seed/fav8/300/450",
  },
  {
    title: "Static Bloom",
    year: 2018,
    genre: "Mystery",
    poster: "https://picsum.photos/seed/fav9/300/450",
  },
  {
    title: "Harbor Lights",
    year: 2010,
    genre: "Romance",
    poster: "https://picsum.photos/seed/fav10/300/450",
  },
];

// declaring variables
const grid = document.getElementById("grid");
const clearBtn = document.getElementById("clear");

// storage for favorite movies so that they stay favorited after refreshing or leaving the webpage
const STORAGE_KEY = "favoriteMovies";

// retrieves data from the storage and displays what movies are favorited on the webpage. If there are no favorites, it returns null
let favorites = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// saves favorited movies into local storage
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

// updates webpage
function render() {
  // clears the grid to prepare for updated data
  grid.innerHTML = "";

  //   goes through movies and creates a card with info for each movie
  movies.forEach((movie) => {
    // checks to see if the movie is favorited or not
    const isFavorite = favorites.includes(movie.title);

    const card = document.createElement("article");
    //if the movie is favorited, add favorite class. If else, don't add it
    card.className = `card ${isFavorite ? "favorite" : ""}`;

    // all of this is just adding movie info to each card and a favorite or not favorite button if needed
    card.innerHTML = `
      <img
        class="poster"
        src="${movie.poster}"
        alt="${movie.title} poster"
      />

      <div class="info">
        <h2 class="title">${movie.title}</h2>

        <div class="details">
          ${movie.year} · ${movie.genre}
        </div>

        <button
          class="favoriteBtn"
          dataTitle="${movie.title}"
          label="${isFavorite ? "Remove from favorites" : "Add to favorites"}"
        >
          ${isFavorite ? "Favorited" : "Not Favorited"}
        </button>
      </div>
    `;

    //puts the cards into the grid on index.html
    grid.appendChild(card);
  });
}

// favorites or unfavorites movie depending on if it is favorited or not
function toggle(title) {
    // checks to see if it is favorited or not
  if (favorites.includes(title)) {
    // if it is favorited, unfavorite it by removing it from the favorites array
    favorites = favorites.filter((favorite) => favorite !== title);
  } else {
    // if it is not favorited, add to favorites
    favorites.push(title);
  }
// saves changes and updates webpage
  save();
  render();
}

// watches for all clicks inside the grid rather than adding a listener for every button
grid.addEventListener("click", (event) => {
    // helps determine if the user clicked the favorite button or not
  const button = event.target.closest(".favoriteBtn");

//   if the user didnt click on the favorite button, stop running function
  if (!button) {
    return;
  }

//   if movie is favorited, remove it from favorites. If movie is not favorited, add to favorites
  toggle(button.getAttribute("dataTitle"));
});

// clears all favorites when clear button is clicked
clearBtn.addEventListener("click", () => {
    // clear favorites
  favorites = [];
//   unsave all favorites from local storage
  localStorage.removeItem(STORAGE_KEY);
  render();
});

// updates
render();
