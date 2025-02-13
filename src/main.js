// Create variables targetting the relevant DOM elements here 👇
var htmlImage = document.querySelector('.cover-image');
var htmlTitle = document.querySelector('.cover-title');
var htmlTagline1 = document.querySelector('.tagline-1');
var htmlTagline2 = document.querySelector('.tagline-2');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoversView = document.querySelector('.saved-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

// BUTTONS
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var makeBookButton = document.querySelector('.create-new-book-button');

// INPUT VARIABLES
var coverField = document.getElementById('cover');
var titleField = document.getElementById('title');
var taglineField1 = document.getElementById('descriptor1');
var taglineField2 = document.getElementById('descriptor2');

// GLOBAL VARIABLES
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

//EVENT LISTENERS
window.addEventListener("load", displayRandomBook);
randomCoverButton.addEventListener("click", displayRandomBook);
makeCoverButton.addEventListener("click", makeNewCover);
viewSavedButton.addEventListener("click", viewSaved);
homeButton.addEventListener("click", viewHome);
makeBookButton.addEventListener("click", createBook);
saveCoverButton.addEventListener("click", saveCover);

// FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomBook() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  displayCurrentCover();
}

function displayCurrentCover() {
  htmlImage.src = currentCover.cover;
  htmlTitle.innerText = currentCover.title;
  htmlTagline1.innerText = currentCover.tagline1;
  htmlTagline2.innerText = currentCover.tagline2;
}

function clearNewCoverInputs() {
  coverField.value = "";
  titleField.value = "";
  taglineField1.value = "";
  taglineField2.value = "";
}

function makeNewCoverPage() {
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversView.classList.add('hidden');
}

function makeNewCover() {
  makeNewCoverPage();
  clearNewCoverInputs();
}

function viewSavedPage() {
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
}

function viewSaved() {
  viewSavedPage();
  savedCoversSection.innerHTML = "";
  for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.innerHTML +=
      `<section class="mini-cover" id="${savedCovers[i].id}">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`;
  }
}

function viewHome() {
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
}

function createBook() {
  event.preventDefault();
  currentCover = new Cover(coverField.value, titleField.value, taglineField1.value, taglineField2.value);
  displayCurrentCover();
  viewHome();
}

function saveCover() {
  var saveCover = htmlImage.src;
  var saveTitle = htmlTitle.innerText;
  var saveTagline1 = htmlTagline1.innerText;
  var saveTagline2 = htmlTagline2.innerText;
  if (!savedCovers.includes(currentCover)) {
    return savedCovers.push(currentCover);
  }
}
