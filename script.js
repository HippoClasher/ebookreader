const selectedEnglish = document.querySelectorAll(".enSelector");
const selectedGerman = document.querySelectorAll(".deSelector");
const hidden = "display:none;";
const shown = "display:block;";
const allEnglishText = document.getElementsByClassName("en");
const allGermanText = document.getElementsByClassName("de");

//Show all english text
function showEnglishText() {
for (element of allEnglishText) {
element.style = shown;
}
for (element of allGermanText) {
element.style = hidden;
}
}

//Show all german text
function showGermanText() {
for (element of allEnglishText) {
element.style = hidden;
}
for (element of allGermanText) {
element.style = shown;
}
}

//English -> German switched off
selectedEnglish.forEach((element) => {
element.addEventListener("click", () => {
selectedEnglish.forEach((el) => el.classList.add("langSelected"));
selectedGerman.forEach((el) => el.classList.remove("langSelected"));
showEnglishText();
localStorage.setItem("languageActive", "english");
});
});

//German -> English switched off
selectedGerman.forEach((element) => {
element.addEventListener("click", () => {
selectedGerman.forEach((el) => el.classList.add("langSelected"));
selectedEnglish.forEach((el) => el.classList.remove("langSelected"));
showGermanText();
localStorage.setItem("languageActive", "german");
});
});

//Local Storage Addon
switch (localStorage.getItem("languageActive")) {

case "english":
selectedEnglish.forEach((el) => el.classList.add("langSelected"));
showEnglishText();
break;

case "german":
selectedGerman.forEach((el) => el.classList.add("langSelected"));
showGermanText();
break;

default:
//Default English -> German disabled
//Default -> no local storage exists
selectedEnglish.forEach((el) => el.classList.add("langSelected"));
showEnglishText();
}

const selectedDarkMode = document.getElementById('darkMode');
const selectedWhiteMode = document.getElementById('whiteMode');
const allDarkModeElements = document.getElementsByClassName('darkMode')
const allWhiteModeElements = document.getElementsByClassName('whiteMode')
const body = document.getElementById('body')
const p = document.getElementsByClassName('p')
const blackBackground = "background-color: #202123;";
const black = "color: #202123;";
const whiteBackground = "background-color: white;";
const white = "color: white;";
const searchBar = document.getElementById('search')

// Activate Dark Mode
function activateDarkMode() {
  for (element in allDarkModeElements) {
    allDarkModeElements[element].style = shown;
  }
  for (element in allWhiteModeElements) {
    allWhiteModeElements[element].style = hidden;
  }
    body.style = blackBackground;
  for (element in p) {
    p[element].style = white;
  } 
    searchBar.style = white;
    searchBar.style.border = "1px solid white";
    searchBar.style.backgroundImage = "url('img/Search Icon Dark Mode.png')";
}

//Activate White Mode
function activateWhiteMode() {
  for (element in allDarkModeElements) {
    allDarkModeElements[element].style = hidden;
  }
  for (element in allWhiteModeElements) {
    allWhiteModeElements[element].style = shown;
  }
    body.style = whiteBackground;
  for (element in p) {
    p[element].style = black;
  }
    searchBar.style = black;
    searchBar.style.border = "1px solid black";
    searchBar.style.backgroundImage = "url('img/Search Icon White Mode.png')";
}

//Dark Mode -> White Mode switched off
selectedDarkMode.addEventListener("click", () => {
  selectedDarkMode.classList.add("modeSelected");
  selectedWhiteMode.classList.remove("modeSelected");

  activateDarkMode();
  localStorage.setItem("modeActive", "dark");
});
 
//White Mode -> Dark Mode switched off
selectedWhiteMode.addEventListener("click", () => {
  selectedWhiteMode.classList.add("modeSelected");
  selectedDarkMode.classList.remove("modeSelected");
 
  activateWhiteMode();
  localStorage.setItem("modeActive", "white");
});

//Local Storage Addon
switch (localStorage.getItem("modeActive")) {
 
  case "dark":
    selectedDarkMode.classList.add("modeSelected");
    activateDarkMode();
    break;

  case "white":
    selectedWhiteMode.classList.add("modeSelected");
    activateWhiteMode();
    break;

  default:
    //default white elements shown, dark disabled
    //default -> no local storage exists
    selectedWhiteMode.classList.add("modeSelected");
    activateWhiteMode();
}