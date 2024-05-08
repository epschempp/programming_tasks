// Eine Funktion, die aufgerufen wird, wenn der Button in der HTML-Datei geklickt wird
function berechne() {
  // Zahlen aus den Eingabefeldern erhalten
  /*
  * Hier solltest du durch eine Javascript-Funktion die Werte der Eingabefelder erhalten und in eine Variable speichern.
  * Die Funktion document.getElementById() kann dir dabei helfen.
  * Die Funktion parseFloat() kann dir helfen, die Werte in Zahlen umzuwandeln.
  */

  // Die ausgewählte Operation aus dem Dropdown-Menü erhalten
  /*
  * Hier solltest du durch eine Javascript-Funktion den Wert des Dropdown-Menüs erhalten und in eine Variable speichern.
  * Die Funktion document.getElementById() kann dir auch hierbei helfen.
  */

  /* Versuche die Zahlen darauf zu prüfen das es auch Zahlen sind. Andernfalls zeige dem Nutzer eine Fehlermeldung an.
  * Die Funktion isNaN() kann dir dabei helfen zu prüfen ob wirklich Zahlen eingegeben wurden.
  * Überprüfe ob beide Zahlen gültige Zahlen sind
  */
  if ("hier die Vergleichsfunktion einfügen") {
    alert('Bitte gib g\u00fcltige Zahlen ein.');
    return;
  }

  /*
  * Hier solltest du die Operation auswerten und das Ergebnis in einer Variable speichern.
  * Die Funktion switch() kann dir dabei helfen je nachdem welche Operation (Addieren oder Subtrahieren bspw.) ausgewählt wurde, die richtige Rechnung durchzuführen.
  * Die Funktion break; kann dir dabei helfen, die switch-Abfrage zu beenden.
  */
  var ergebnis;
  switch (operation) {
    case 'Addieren':
      ergebnis = "hier eine Berechnung durchführen"
      break;
    default:
      alert('Ung\u00fcltige Operation ausgewählt.');
      return;
  }

  // Das Ergebnis in einer Alert-Box anzeigen
  alert('Ergebnis: ' + ergebnis);
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