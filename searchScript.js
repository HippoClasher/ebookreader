const search = document.getElementById('search')
const searchContentsEn = document.querySelectorAll('div.en p')
const searchContentsDe = document.querySelectorAll('div.de p')
const skipTroughMatches = document.getElementById('skipTroughMatches')
let matches = null;
let nearestMatch = null;
let matchNumber = null;
let totalMatches = null;

function resizable (el, factor) {
    var int = Number(factor) || 9;
    function resize() {el.style.width = ((el.value.length+1) * int) + 'px'}
    var e = 'keyup,keypress,focus,blur,change'.split(',');
    for (var i in e) el.addEventListener(e[i],resize,false);
    resize(); 
  }
  resizable(search,9);

search.addEventListener('change', (event) => {
  const searchQuery = event.target.value

  if (searchQuery === '') {
    removeMatches();
    skipTroughMatches.style.display = 'none';
  } else if (!['b', 'br', 's', 'sp', 'spa', 'span', 'i'].includes(searchQuery)) {
    removeMatches();
    const regex = new RegExp(searchQuery, 'gi');
    let matchCount = 1;
    const languageActive = localStorage.getItem("languageActive");    
if (languageActive === 'english') {
  searchContentsEn.forEach(searchContentEn => {
    let text = searchContentEn.innerHTML;
    text = text.replace(/(<mark class='match\d*'>|<\/mark>)/gim, '');
    const newText = text.replace(regex, (match) => {
      return `<mark class='match${matchCount++}'>${match}</mark>`;
    });
    searchContentEn.innerHTML = newText;
  });
}  
if (languageActive === 'german') {
  searchContentsDe.forEach(searchContentDe => {
    let text = searchContentDe.innerHTML;
    text = text.replace(/(<mark class='match\d*'>|<\/mark>)/gim, '');
    const newText = text.replace(regex, (match) => {
      return `<mark class='match${matchCount++}'>${match}</mark>`;
    });
    searchContentDe.innerHTML = newText;
  });  
}
matches = document.querySelectorAll('mark');
totalMatches = matches.length;
window.addEventListener('scroll', findNearestMatch) 
findNearestMatch();
highlightNearestMatch();
scrollToNearestMatch();
skipTroughMatches.style.display = 'block';
  }
});

function removeMatches() {
  matches = document.querySelectorAll('mark');
  for (let i = 0; i < matches.length; i++) {
    const parent = matches[i].parentNode;
    while (matches[i].firstChild) {
      parent.insertBefore(matches[i].firstChild, matches[i]);
    }
    parent.removeChild(matches[i]);
  }
}

  function findNearestMatch() {
  const scrollPosition = window.scrollY;
  let minDistance = Infinity;
  matches = document.querySelectorAll('mark');
  for (let i = 0; i < matches.length; i++) {
    const element = matches[i];
    const elementBounds = element.getBoundingClientRect();
    const distance = Math.abs(elementBounds.top - scrollPosition);

    if (distance < minDistance) {
      minDistance = distance;
      if (nearestMatch !== element) {
        console.log()
        if (nearestMatch !== null) {
          dehighlightNearestMatch();
        }
          nearestMatch = element;
          highlightNearestMatch();
          updateMatchesNav();
        }
    }
  }
}

const downButtons = document.querySelectorAll('.down');

downButtons.forEach((button) => {
  button.addEventListener('click', skipToNextMatch);
});

const upButtons = document.querySelectorAll('.up');

upButtons.forEach((button) => {
  button.addEventListener('click', skipToLastMatch);
});

function skipToNextMatch() {
  matchNumber = parseInt(nearestMatch.classList[0].substr(5));
  const nextMatchNumber = matchNumber + 1;
  const nextMatch = document.querySelector('.match' + nextMatchNumber);
  dehighlightNearestMatch();
  if (nextMatch !== null) {
    nearestMatch = nextMatch
  }
  highlightNearestMatch();
  scrollToNearestMatch();
  updateMatchesNav();
}

function skipToLastMatch() {
  matchNumber = parseInt(nearestMatch.classList[0].substr(5));
  const lastMatchNumber = matchNumber - 1;
  const lastMatch = document.querySelector('.match' + lastMatchNumber);
  dehighlightNearestMatch();
  if (lastMatch !== null && matchNumber !== 1) {
  nearestMatch = lastMatch
  }
  highlightNearestMatch();
  scrollToNearestMatch();
  updateMatchesNav();
}

function highlightNearestMatch() {
nearestMatch.style.backgroundColor = 'yellow';
}

function dehighlightNearestMatch() {
  nearestMatch.style.backgroundColor = '#cde5ff';
  }

  let timerId;

  function scrollToNearestMatch() {
    window.removeEventListener('scroll', findNearestMatch);
    const elementY = nearestMatch.getBoundingClientRect().top + window.pageYOffset;
  
    const screenHeight = window.innerHeight || document.documentElement.clientHeight;
    const middleY = screenHeight / 2;
    
    window.scrollTo({
      top: elementY - middleY,
    });
  
    // Lösche den alten Timer und starte einen neuen
    clearTimeout(timerId);
    timerId = setTimeout(function() {
      window.addEventListener('scroll', findNearestMatch);
    }, 2000);
  }

 function updateMatchesNav() {
  const matchesNav = document.querySelectorAll('.matchesNav');
  matchesNav.forEach(element => {
    matchNumber = parseInt(nearestMatch.classList[0].substr(5));
    element.textContent = `${matchNumber} / ${totalMatches}`;
  }); 
}
