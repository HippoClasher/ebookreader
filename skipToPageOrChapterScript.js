const positionEls = document.querySelectorAll('.positionEn, .positionDe');

positionEls.forEach((positionEl) => {
  let lastContent = positionEl.textContent;

  positionEl.addEventListener('blur', function() {
    const newContent = positionEl.textContent;
    let newChapter, newPage, chapterEl, pageEl;

    if (positionEl.classList.contains('positionEn')) {
      newChapter = newContent.match(/Chapter (\d+)/)[1];
      newPage = newContent.match(/Page (\d+)/)[1];
      chapterEl = document.querySelector('div.en .chapter' + newChapter);
      pageEl = document.querySelector('div.en .page' + newPage);
    } else if (positionEl.classList.contains('positionDe')) {
      newChapter = newContent.match(/Kapitel (\d+)/)[1];
      newPage = newContent.match(/Seite (\d+)/)[1];
      chapterEl = document.querySelector('div.de .chapter' + newChapter);
      pageEl = document.querySelector('div.de .page' + newPage);
    }

    if (newPage !== lastContent.match(/(Page|Seite) (\d+)/)[2]) {
      pageEl.scrollIntoView();
    } else if (newChapter !== lastContent.match(/(Chapter|Kapitel) (\d+)/)[2]) {
      chapterEl.scrollIntoView();
    }

    lastContent = newContent;
  });
});
