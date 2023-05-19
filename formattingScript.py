with open("input.txt", encoding="utf-8") as f_in, open("lines.txt", "w", encoding="utf-8") as f_out:
    count = 1
    for line in f_in:
        line = line.strip()
        if line:
            count += 1
        else:
            if count > 1:
                # Erhöhe den Zähler um 1 und schreibe die Zahlenreihe mit <br> in die Ausgabedatei
                count += 1
                f_out.write("<br>".join(str(i) for i in range(1, count)) + "<br>\n")
                count = 1
    # Schreibe die letzte Zahlenreihe, falls die Datei mit nicht-leeren Zeilen endet
    if count > 1:
        count += 1
        f_out.write("<br>".join(str(i) for i in range(1, count)) + "<br>\n")



with open('input.txt', 'r', encoding='utf-8') as input_file, open('test2.txt', 'w', encoding='utf-8') as output_file:
    page_number = 6

    for line in input_file:
        line = line.strip()

        if '|' in line:
            line = line.replace('|', '')
            line = f"<span>{line}</span>" 

        if line:
            line += '<br>'

        if not line:
            page_class = f"page{page_number} chapter1"
            line = f"<br></p><p class='{page_class}'>"
            page_number += 1

        output_file.write(line + '\n')

