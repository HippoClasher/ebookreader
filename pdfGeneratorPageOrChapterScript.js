window.addEventListener('load', function() {
  skipToPageOrChapter();
});

function skipToPageOrChapter() {
    var optionPages = document.getElementsByClassName('optionPages');
    var optionChapter2 = document.getElementsByClassName('optionChapter2');
    var pdfInputLabel = document.getElementsByClassName('pdfInputLabel');
    var pdfInputLabel2 = document.getElementsByClassName('pdfInputLabel2');
    var pagesParagraph = document.getElementsByClassName('pagesParagraph');
    var chapterParagraph2 = document.getElementsByClassName('chapterParagraph2');
    var optionActive2 = "page";
    var dropDownIcon2 = document.getElementsByClassName('dropDownIcon2');


    if (optionActive2 === 'page') {
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
                  var selectedElement = document.getElementsByClassName("site" + i)[0];
                  var clonedElement = selectedElement.cloneNode(true);
                  var pageTitle = document.createElement("h3");
                  pageTitle.textContent = i;
                  pageTitle.style.marginLeft = "500px";
                  clonedElement.insertBefore(pageTitle, clonedElement.firstChild);
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
    
   if (optionActive2 === 'chapter') {
    var startPageInput = document.getElementsByClassName('startPage')
    for (var i = 0; i < startPageInput.length; i++) {
      startPageInput[i].addEventListener('change', function(event) {
        
        var startPage = parseInt(document.getElementsByClassName("startPage")[0].value);
      
            // Container-Element für die ausgewählten Elemente erstellen
            tempDiv = document.createElement("div");
            tempDiv.id = "selectedPages";
      
            
                var selectedElement = document.getElementsByClassName("site" + startPage)[0];
                var clonedElement = selectedElement.cloneNode(true);
                var pageTitle = document.createElement("h3");
                pageTitle.textContent = i;
                pageTitle.style.marginLeft = "500px";
                clonedElement.insertBefore(pageTitle, clonedElement.firstChild);
                tempDiv.appendChild(clonedElement);
            
      
            // Temporäres div-Element in das DOM einfügen
            document.body.appendChild(tempDiv);
            
      var fileName = 'The hate u give Book Chapter ' + startPage; // Dateiname mit nur Startseitenzahl
      
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
 
    for (var i = 0; i < pdfInputLabel.length; i++) {
      pdfInputLabel[i].style.display = "block";
      }  
      for (var i = 0; i < pdfInputLabel2.length; i++) {
        pdfInputLabel2[i].style.display = "none";
      }  

      for (var i = 0; i < pagesParagraph.length; i++) {
        pagesParagraph[i].style.display = "inline";
        pagesParagraph[i].style.margin = "0 0 0 0";
      }
    
      for (var i = 0; i < dropDownIcon2.length; i++) {
        dropDownIcon2[i].style.transform = "scaleY(1)";
        }

    for (var i = 0; i < optionPages.length; i++) {
      optionPages[i].style.display = "inline";
      optionPages[i].style.margin = "0 0 0 0";
      optionPages[i].addEventListener('click', menuOpenOptionPage);
      return;
    }
  
      function menuOpenOptionPage() {
        for (var i = 0; i < optionChapter2.length; i++) {
          optionChapter2[i].style.display = "block";
          optionChapter2[i].style.margin = "0 0 0 50px";
        }

        for (var i = 0; i < inputElements.length; i++) {
          inputElements[i].style.margin = "10px 0 0 14px";
          }  

        for (var i = 0; i < dropDownIcon2.length; i++) {
          dropDownIcon2[i].style.transform = "scaleY(-1)";
          }

          for (var i = 0; i < optionChapter2.length; i++) {
            optionChapter2[i].style.display = "block";
            optionChapter2[i].style.margin = "0 0 0 50px";
          }

        for (var i = 0; i < optionChapter2.length; i++) {
            optionChapter2[i].addEventListener('click', () => {  
            selectedChapter();
            optionActive2 = 'chapter';
            return;
            });
          }

        for (var i = 0; i < optionPages.length; i++) {
            optionPages[i].addEventListener('click', () => {
                for (var i = 0; i < optionChapter2.length; i++) {
                    optionChapter2[i].style.display = "none";
                  }
                  for (var i = 0; i < inputElements.length; i++) {
                    inputElements[i].style.margin = '0px 0 0 35px';
                    }  
                  skipToPageOrChapter();
          return;
          });
      }
  }

  function selectedChapter() {

    for (var i = 0; i < pdfInputLabel.length; i++) {
      pdfInputLabel[i].style.display = "none";
      }  
      for (var i = 0; i < pdfInputLabel2.length; i++) {
        pdfInputLabel2[i].style.display = "block";
      }  

      for (var i = 0; i < optionPages.length; i++) {
        optionPages[i].style.display = "none";
      }

      for (var i = 0; i < chapterParagraph2.length; i++) {
        chapterParagraph2[i].style.display = "inline";
        chapterParagraph2[i].style.margin = "0 0 0 0";
    }

    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].style.margin = '0px 0 0 35px';
      }  

      for (var i = 0; i < dropDownIcon2.length; i++) {
        dropDownIcon2[i].style.transform = "scaleY(1)";
        }

      for (var i = 0; i < optionChapter2.length; i++) {
        optionChapter2[i].style.display = "inline";
        optionChapter2[i].style.margin = "0 0 0 0";
        optionChapter2[i].addEventListener('click', menuOpenOptionChapter);
    }

  function menuOpenOptionChapter() {

    for (var i = 0; i < optionPages.length; i++) {
      optionPages[i].style.display = "block";
      optionPages[i].style.margin = "0 0 0 30px";
    }

    for (var i = 0; i < pagesParagraph.length; i++) {
        pagesParagraph[i].style.margin = "0 0 0 30px";
      }

      for (var i = 0; i < dropDownIcon2.length; i++) {
        dropDownIcon2[i].style.transform = "scaleY(-1)";
        }

    for (var i = 0; i < optionChapter2.length; i++) {
        optionChapter2[i].addEventListener('click', () => {
            for (var i = 0; i < optionPages.length; i++) {
                optionPages[i].style.display = "none";
              }
      })
    }
      for (var i = 0; i < optionPages.length; i++) {
        optionPages[i].addEventListener('click', () => {
        optionActive2 = 'page';
        skipToPageOrChapter();
        return;
      })
}
  }
  }
}
  
