export function createSearchBar(onSubmit) {
  const searchBar = document.createElement("form");
  searchBar.innerHTML = `  
  <input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search for characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>
`;
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("data-js", "search-bar");
  searchBar.addEventListener("submit", onSubmit);
  return searchBar;
}
