// <!-- <span class="navigation__pagination" data-js="pagination">1 / 1</span> -->

export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.innerText = `${page} / ${maxPage}`;
  pagination.classList.add("navigation__pagination");
  return pagination;
}
