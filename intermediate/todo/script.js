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

const todos = [
  "Buy groceries",
  "Cook lunch",
  "Clean the house",
  "Work in the garden",
  "Water the flowers",
  "Go for a walk",
  "Do sports",
  "Read a book",
  "Write code"
];

function fillTodoSelect() {
  const select = document.getElementById('todoSelect');
  todos.forEach(todo => {
    let option = document.createElement('option');
    option.value = todo;
    option.innerText = todo;
    select.appendChild(option);
  });
}

function addTodo() {
  const select = document.getElementById('todoSelect');
  const selectedTodo = select.value;
  const date = new Date().toLocaleDateString('de-DE');
  const newTodo = { text: selectedTodo, date: date };

  const todoList = getTodoList();
  todoList.push(newTodo);
  saveTodoList(todoList);
  displayTodos();
}

function editTodo(index) {
  const todoList = getTodoList();
  const todo = todoList[index];

  const li = document.getElementById(`todoItem${index}`);
  li.innerHTML = `
    <select id="todoEditSelect${index}" class="todoSelect">
      ${todos.map(todoOption => `<option ${todo.text === todoOption ? 'selected' : ''}>${todoOption}</option>`).join('')}
    </select>
    <button onclick="saveEditedTodo(${index})" class="add-button">Save</button>
    <button onclick="cancelEdit(${index})">Cancel</button>
  `;
}

function saveEditedTodo(index) {
  const select = document.getElementById(`todoEditSelect${index}`);
  const selectedTodo = select.value;
  const todoList = getTodoList();
  todoList[index].text = selectedTodo;
  saveTodoList(todoList);
  displayTodos();
}

function cancelEdit(index) {
  displayTodos();
}

function deleteTodo(index) {
  let todoList = getTodoList();
  todoList.splice(index, 1);
  saveTodoList(todoList);
  displayTodos();
}

function displayTodos() {
  const todoList = getTodoList();
  const ul = document.getElementById('todoList');
  ul.innerHTML = '';  // Clear the current list

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.id = `todoItem${index}`;
    li.innerHTML = `
      <h2>${todo.text}, ${todo.date}</h2>
      <button onclick="editTodo(${index})" class="edit-button">Edit</button>
      <button onclick="deleteTodo(${index})" class="delete-button">Delete</button>
    `;
    ul.appendChild(li);
  });
}

function getTodoList() {
  const todoListString = localStorage.getItem('todoList');
  if (todoListString) {
    return JSON.parse(todoListString);
  }
  return [];
}

function saveTodoList(todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
  fillTodoSelect();
  // Initial display of todos
  displayTodos();
});
