/**
 * Fetching random persons data
 *
 * @returns data results name.first, name.second, picture
 */

async function getPersons() {
  let url = "https://randomuser.me/api/?results=50";
  try {
    let resp = await fetch(url);
    let jsonData = await resp.json();
    return jsonData.results;
  } catch (error) {
    console.log(error);
  }
}

let sortElement = [];
function renderElements(array) {
  let grid = "";
  array.forEach((person) => {
    let elements = `<div class="grid-item">
    <div class="name">
    <h2 class="person-name"> ${person.name.first} ${person.name.last}</h2>
    </div>
    <div class="image">
    <img loading="lazy" class="img-person" src="${person.picture.medium}" alt="person_2">
    </div>
    <div class="overlay-container">
    <h2 class="city">${person.location.city}</h2>
    <i class="far fa-envelope"></i>
    <i class="fas fa-phone-volume"></i>
    </div>
    </div>`;

    grid += elements;
  });
  let container = document.querySelector(".grid-container");
  container.innerHTML = grid;
}

async function renderPersons() {
  let persons = await getPersons();
  sortElement = persons.slice(0, 6);
  renderElements(persons.slice(0, 6));
}

renderPersons();

/** 
 * Sorting functions
 * sortAsc() sorts in ascending order 
 * sortDesc() sorts in descending order
 */

function sortAsc() {
  sortElement = sortElement.sort((personA, personB) =>
    personA.name.last.localeCompare(personB.name.last)
  );
  renderElements(sortElement);
  console.log(sortElement);
}

function sortDesc() {
  sortElement = sortElement.sort((personA, personB) =>
    personB.name.last.localeCompare(personA.name.last)
  );
  renderElements(sortElement);
  console.log(sortElement);
}
