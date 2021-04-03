// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// ITERATION 1 VARIABLES
var currentCover = document.querySelector('.random-cover-button');

//ITERATION 0 VARIABLES
var htmlImage = document.querySelector('.cover-image');
var htmlTitle = document.querySelector('.cover-title');
var htmlTagline1 = document.querySelector('.tagline-1');
var htmlTagline2 = document.querySelector('.tagline-2');

// ITERATION 2 VARIABLES
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');


// ITERATION 3 VARIABLES
var savedView = document.querySelector('.saved-view');
var savedCoverView = document.querySelector('.saved-covers-section');
var coverField = document.querySelector('.user-cover');
var titleField = document.querySelector('.user-title');
var tagline1Field = document.querySelector('.user-desc1');
var tagline2Field = document.querySelector('.user-desc2');
var makeBookButton = document.querySelector('.create-new-book-button');

// Add your event listeners here 👇

window.addEventListener("load", displayRandomHomePage);
currentCover.addEventListener("click", displayRandomImage);

// ITERATION 2 EVENT LISTENERS
makeCoverButton.addEventListener("click", makeNewCover);

// ITERATION 3 EVENT listeners
viewSavedButton.addEventListener("click", viewSaved);
homeButton.addEventListener("click", viewHome);
makeBookButton.addEventListener("click"), viewHome);
// Create your event handlers and other functions here 👇


//ITERATION 0 - RANDOM MAIN PAGE IMAGE, TITLE, TAGLINE & 2 DESCRIPTORS
// We've provided one function to get you started

function getRandomImage() {
  var cover = covers[Math.floor(Math.random() * covers.length)]
  return cover;
}
function displayRandomImage() {
  htmlImage.src = getRandomImage();
  // console.dir(htmlImage);
  // console.log(htmlImage);
}

function getRandomTitle() {
  var title = titles[Math.floor(Math.random() * titles.length)]
  return title;
}
function displayRandomTitle() {
  htmlTitle.innerText = getRandomTitle();
}

function getRandomTagline1() {
  var tagline1 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline1;
}
function displayRandomTagline1() {
  htmlTagline1.innerText = getRandomTagline1();
}

function getRandomTagline2() {
  var tagline2 = descriptors[Math.round(Math.random() * descriptors.length)]
  return tagline2;
}
function displayRandomTagline2() {
  htmlTagline2.innerText = getRandomTagline2();
}

function displayRandomHomePage() {
  displayRandomImage();
  displayRandomTitle();
  displayRandomTagline1();
  displayRandomTagline2();
}
//ITERATION 2 FORM PAGE & MENU UPDATE
function makeNewCover() {
  homeView.classList.add("hidden");
  formView.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

//ITERATION 3 VIEW SAVED
function viewSaved() {
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedView.classList.add("hidden");
}

function viewHome() {
  homeView.classList.remove("hidden");
  formView.classList.add("hidden");
  randomCoverButton.classList.remove("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
  savedView.classList.add("hidden");
}

function saveMyBook(event) {
  event.preventDefault();
  var coverField = formCover.value;
  var titleField = formTitle.value;
  var descriptor1Field = formDescriptor1.value;
  var descriptor2Field = formDescriptor2.value;
  covers.push(coverField);
  titles.push(titleField);
  descriptors.push(descriptor1Field);
  descriptors.push(descriptor2Field);
  coverImg.setAttribute("src", coverValue);
  currentCover = new Cover (coverField, titleField, descriptor1Field, descriptor2Field);
}
