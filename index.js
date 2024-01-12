import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
// const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

let maxPage = 1;
let page = 1;
let searchQuery = "";

const searchBar = createSearchBar((e) => {
  e.preventDefault();
  page = 1;
  searchQuery = e.target.query.value;
  console.log("searchQuery: ", searchQuery);
  fetchCharacters();
});

const prevButton = createButton("< Previous page", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

const nextButton = createButton("Next page >", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

const pagination = createPagination(page, maxPage);

export async function fetchCharacters() {
  try {
    cardContainer.innerHTML = "";

    let url = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`;
    console.log("url: ", url);
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    const characters = data.results;
    console.log("characters: ", characters);

    characters.forEach((character) => {
      const createCard = createCharacterCard(
        character.name,
        character.image,
        character.status,
        character.type,
        character.episode.length
      );
      searchBarContainer.append(searchBar);
      cardContainer.append(createCard);
      maxPage = data.info.pages;
      console.log("maxPage: ", maxPage);
      pagination.innerText = `${page} / ${maxPage}`;

      navigation.append(prevButton);
      navigation.append(pagination);
      navigation.append(nextButton);
    });
  } catch (error) {
    console.error("An error occurred");
    const addErrorElement = document.createElement("div");
    addErrorElement.classList.add("error");
    addErrorElement.innerText = `Ooooops, something went wrong :(
      Please reload the page or try again later.`;
    searchBarContainer.append(addErrorElement);
  }
}

fetchCharacters();
