document.addEventListener('scroll', function() {
  const pages = Array.from(document.querySelectorAll('[class^="page"]'));

  let mostVisiblePage = pages[0];
  let mostVisibleArea = 0;

  pages.forEach(page => {
    if (page.getBoundingClientRect().top > window.innerHeight || page.getBoundingClientRect().bottom < 0) {
      return;
    }

    const visibleArea = Math.min(page.getBoundingClientRect().bottom, window.innerHeight) - Math.max(page.getBoundingClientRect().top, 0);

    if (visibleArea > mostVisibleArea) {
      mostVisiblePage = page;
      mostVisibleArea = visibleArea;
    }
  });

  const match = mostVisiblePage.className.match(/\bpage(\d+)\b/);
  const match2 = mostVisiblePage.className.match(/\bchapter(\d+)\b/);

const pageNumber = match ? parseInt(match[1], 10) : null;
const chapterNumber = match2 ? parseInt(match2[1], 10) : null;

const positionDeElements = document.querySelectorAll('.positionDe');
positionDeElements.forEach(element => {
  element.textContent = `Kapitel ${chapterNumber}, Seite ${pageNumber}`;
});
});