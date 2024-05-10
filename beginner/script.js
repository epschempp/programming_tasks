function berechne() {
  // Zahlen aus den Eingabefeldern erhalten
  /*
  * Hier solltest du durch eine Javascript-Funktion die Werte der Eingabefelder erhalten und in eine Variable speichern.
  * Die Funktion document.getElementById() kann dir dabei helfen.
  * Die Funktion parseFloat() kann dir helfen, die Werte in Zahlen umzuwandeln.
  */
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);

  // Die ausgewählte Operation aus dem Dropdown-Menü erhalten
  /*
  * Hier solltest du durch eine Javascript-Funktion den Wert des Dropdown-Menüs erhalten und in eine Variable speichern.
  * Die Funktion document.getElementById() kann dir auch hierbei helfen.
  */
  let operation = document.getElementById("operation").value;

  /* Versuche die Zahlen darauf zu prüfen das es auch Zahlen sind. Andernfalls zeige dem Nutzer eine Fehlermeldung an.
  * Die Funktion isNaN() kann dir dabei helfen zu prüfen ob wirklich Zahlen eingegeben wurden.
  * Überprüfe ob beide Zahlen gültige Zahlen sind
  */
  if (isNaN(number1) || isNaN(number2)) {
    alert('Bitte gib g\u00fcltige Zahlen ein.');
    return;
  }

  /*
  * Hier solltest du die Operation auswerten und das Ergebnis in einer Variable speichern.
  * Die Funktion switch() kann dir dabei helfen je nachdem welche Operation (Addieren oder Subtrahieren bspw.) ausgewählt wurde, die richtige Rechnung durchzuführen.
  * Die Funktion break; kann dir dabei helfen, die switch-Abfrage zu beenden.
  */
  let ergebnis;
  switch (operation) {
    case '+':
      ergebnis = number1 + number2;
      break;
    case '-':
      ergebnis = number1 - number2;
      break;
    case 'x':
      ergebnis = number1 * number2;
      break;
    case ':':
      if (number2 === 0) {
        alert('Division durch Null ist nicht erlaubt.');
        return;
      } else {
        ergebnis = number1 / number2;
      }
      break;
    default:
      alert('Ung\u00fcltige Operation ausgew\u00e4hlt.');
      return;
  }

  // Das Ergebnis in einer Alert-Box anzeigen
  alert('Ergebnis: ' + ergebnis);

  // Erweiterung für Fortgeschrittene
  saveCalculation(number1,number2, operation, ergebnis)

}

/*
  Erweiterung für Fortgeschrittene:
  Speichere die Ergebnisse und Berechnungen in einem Array und zeige diese in der HTML-Seite an an.
  Die Funktion document.createElement() kann dir dabei helfen, neue HTML-Elemente zu erstellen.
  Die Funktion element.appendChild() kann dir dabei helfen, ein HTML-Element in ein anderes einzufügen.
  Die Funktion array.push() kann dir dabei helfen, ein Element in ein Array einzufügen.
  Schaue dir an wie Objekte in Javascript erstellt werden und speichere diese Objekte in dem Array um die Inhalten im HTML anzuzeigen

  Falls du Lust hast und dir das liegt, style gerne die Seite entsprechend deiner Vorstellungen mit CSS um.
*/

let calculations = [];

function saveCalculation(number1, number2, operation, ergebnis) {

  let calculation = {
    number1: number1,
    number2: number2,
    operation: operation,
    ergebnis: ergebnis
  };

  calculations.push(calculation);

  updateDisplay();

}

function updateDisplay() {
  let display = document.getElementById("calculationDisplay");
  display.innerHTML = "<h2>Berechnungen</h2>";

  calculations.forEach(calculation => {
    let calculationItem = document.createElement("h3");
    calculationItem.classList.add("calculation");
    calculationItem.textContent = calculation.number1 + " " + calculation.operation + " " + calculation.number2 + " = " + calculation.ergebnis;
    display.appendChild(calculationItem);
  });
}
