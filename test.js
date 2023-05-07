

const selectElement = document.querySelector('.pagesOrChapters');

let optionActive = selectElement.value;

selectElement.addEventListener('change', function() {
  optionActive = selectElement.value;
  console.log(optionActive)
  if (optionActive === 'pages') {
optionPages();
  }
  if (optionActive === 'chapters') {
    optionChapters();
      }
});

function optionPages() {
    console.log('Run');
    var endPageInput = document.getElementsByClassName('endPage');
    for (var i = 0; i < endPageInput.length; i++) {
      endPageInput[i].addEventListener('change', function(event) {
       
            var startPage = parseInt(document.getElementsByClassName("startPage")[0].value);
            var endPage = parseInt(event.target.value);
      
            // Container-Element für die ausgewählten Elemente erstellen
            tempDiv = document.createElement("div");
            tempDiv.id = "selectedPages";
      
            // Schleife, um die gewünschten Elemente auszuwählen und zu kopieren
            for (var i = startPage; i <= endPage; i++) {
                var selectedElement = document.getElementsByClassName("page" + i)[0];
                var selectedElement2 = document.getElementsByClassName("line" + i)[0];
                var clonedElement = selectedElement.cloneNode(true);
                var clonedElement2 = selectedElement2.cloneNode(true);
                clonedElement.style.color = 'black';
                clonedElement2.style.color = 'black';
                clonedElement2.style.float = 'left';
                clonedElement2.style.margin = '0 15px 0 15px';
                clonedElement2.style.opacity = '33%';
                var pageTitle = document.createElement("h3");
                pageTitle.textContent = i;
                pageTitle.style.marginLeft = "50px";
                pageTitle.style.float = "right";
                clonedElement.insertBefore(pageTitle, clonedElement.firstChild);
                tempDiv.appendChild(clonedElement2);
                tempDiv.appendChild(clonedElement);
            }
      
            // Temporäres div-Element in das DOM einfügen
            document.body.appendChild(tempDiv);
            
      var fileName;
      
      if (startPage === endPage) {
        fileName = 'The hate u give Book Page ' + startPage; // Dateiname mit nur Startseitenzahl
      } else {
        fileName = 'The hate u give Book Pages ' + startPage + ' - ' + endPage; // Dateiname mit Start- und Endseitenzahl
      }
      
      var opt = {
        margin: 1,
        filename: fileName,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(tempDiv).set(opt).save();
      tempDiv.remove();
        });
      }
  }

  
    function optionChapters() {
    var endPageInput = document.getElementsByClassName('endPage');
    for (var i = 0; i < endPageInput.length; i++) {
      endPageInput[i].addEventListener('change', function(event) {
       
            var startPage = parseInt(document.getElementsByClassName("startPage")[0].value);
            var endPage = parseInt(event.target.value);
      
            // Container-Element für die ausgewählten Elemente erstellen
            tempDiv = document.createElement("div");
            tempDiv.id = "selectedPages";
      
            // Schleife, um die gewünschten Elemente auszuwählen und zu kopieren
            var chapterElements = document.getElementsByClassName("chapter");
var linesElements = document.getElementsByClassName("");

for (var i = startPage; i <= endPage; i++) {
    for (var j = 0; j < chapterElements.length; j++) {
        if (chapterElements[j].classList.contains("chapter" + i)) {
            var clonedChapter = chapterElements[j].cloneNode(true);
            clonedChapter.style.color = 'black';
            var pageTitle = document.createElement("h3");
            pageTitle.textContent = i;
            pageTitle.style.marginLeft = "50px";
            pageTitle.style.float = "right";
            clonedChapter.insertBefore(pageTitle, clonedChapter.firstChild);
            tempDiv.appendChild(clonedChapter);
            break;
        }
    }
    
    for (var k = 0; k < linesElements.length; k++) {
        if (linesElements[k].classList.contains("" + i)) {
            var clonedLines = linesElements[k].cloneNode(true);
            clonedLines.style.color = 'black';
            clonedLines.style.float = 'left';
            clonedLines.style.margin = '0 15px 0 15px';
            clonedLines.style.opacity = '33%';
            tempDiv.appendChild(clonedLines);
            break;
        }
    }
}

      
            // Temporäres div-Element in das DOM einfügen
            document.body.appendChild(tempDiv);
          
            var fileName;
      
            if (startPage === endPage) {
              fileName = 'The hate u give Book Chapter ' + startPage; // Dateiname mit nur Startseitenzahl
            } else {
              fileName = 'The hate u give Book Chapters ' + startPage + ' - ' + endPage; // Dateiname mit Start- und Endseitenzahl
            }
    
    var opt = {
      margin: 1,
      filename: fileName,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(tempDiv).set(opt).save();
    tempDiv.remove();
      });
    }
}
