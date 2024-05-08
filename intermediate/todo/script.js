/*
Als Nutzer möchte ich auf einer Webseite aus einem vorgefertigten
DropDown an möglichen Todos meine persönliche Todo Liste pflegen. Hierzu soll das 
ausgewählte Todo der Liste mit Datum hinzugefügt werden.

Ich möchte die hinzugefügten Todos über ein Edit Button editieren können
(erneute Auswahl der vorgefertigten Todos)
und über einen Löschen Button aus der aktuellen Liste entfernen können.

Zusätzlich soll die aktuelle Liste immer automatisch in den Local Storage
geschrieben werden, damit beim erneuten Laden meine zuvor gepflegten Todos 
erhalten bleiben.

Die folgenden Funktionen und das HTML sollen bei der Implementierung helfen
und habe ich mit der Hilfe von ChatGPT erstellt. Ich benötige jetzt aber leider
doch einen richtigen Softwareentwickler der mir hilft.
*/

/*
Beispiel Todos (Gerne austauschen ;))
*/
const todos = [
  "Buy groceries",
  "Clean the house",
  "Go for a walk",
  "Read a book",
  "Write code"
];

// 1. Fülle das Select-Field "todoSelect" mit den Todo Optionen, 
// damit diese auf der Webseite auswählbar sind.

function addTodo() {
  /*
  Implementiere hier die Funktion addTodo() welche ein ausgewähltes Todo
  mit Datum und Editier und Löschen Button in die todoList im HTML überträgt.
  */
}

function editTodo(index) {
  /*
  Implementiere die Funktion editTodo & saveEditedTodo weiter unten, 
  welche den aktuell gewählten Todo Eintrag
  auswählt und durch ein Dropdown mit den oben bekannten möglichen Todos
  ersetzt, damit man ein anderes Todo wählen kann. Mache es möglich, das dieses
  geänderte Todo gespeichert werden kann bzw. der Editiervorgang ohne Änderung
  abgebrochen werden kann.
  */
}

function saveEditedTodo() {
  /*
  Diese Funktion kann dir helfen die oben gemachten Änderungen zu speichern.
  */
}

function cancelEdit() {
  /*
  Diese Funktion kann dir helfen den Editiermodus wieder zu verlasen.
  */
}

function deleteTodo(index) {
  /*
  Implementiere diese Funktion um bereits hinzugefügte Todos
  aus der aktuellen Liste wieder löschen zu können.
  */
}

function displayTodos() {
  /*
  Diese Funktion kann dir helfen, immer die aktuellen Todos wieder
  in der entsprechenden Liste todoList neu zu rendern, wenn andere
  Operationen wie add, edit oder delete ausgeführt wurden.
  */
}

function getTodoList() {
  /*
  Diese Funktion kann genutzt werden, um beispielsweise bei der displayTodos-
  Funktion die aktuellen Todos aus dem Localstorage zu laden.
  */
}

function saveTodoList(todoList) {
  /*
  Diese Funktion kann dazu genutzt werden, um die aktuelle Todo-Liste im
  Local Storage des Browsers zu speichern.
  */
}

// Initial display of todos
displayTodos();