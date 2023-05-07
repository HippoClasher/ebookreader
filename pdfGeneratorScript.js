var tempDiv; // Variable außerhalb der Funktionen deklarieren

window.onload = function () {
    document.getElementById("endPage")
        .addEventListener('input', function(event) {
        const input = parseInt(event.target.value);
        if (input >= 1) {
            var startPage = parseInt(document.getElementById("startPage").value);
            var endPage = parseInt(document.getElementById("endPage").value);

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
            var startPage = parseInt(document.getElementById("startPage").value);
    var endPage = parseInt(document.getElementById("endPage").value);
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
        }});
}



