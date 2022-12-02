// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];
// Fetches Data From JSON API
const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};
// Logs Fetched Data to console
const logTodos = () => {
  console.log(arrayOfTodos);
};
// Populates To-Do List with Titles from JSON
const populateTodos = () => {
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const toDo = document.getElementById("todo-list");
    const li = document.createElement("li");
    const text = document.createTextNode(arrayOfTodos[i].title);
    li.appendChild(text);
    toDo.append(li);
  }
};
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const filteredArray = [];

const populateUserIDTodos = () => {
  resetTodos();
  const userID = document.getElementById("userIDNum").value;
  const filteredUserID = arrayOfTodos.filter(
    (toDoID) => toDoID.userId == userID
  );
  console.log(userID);
  console.log(filteredUserID);
  for (let i = 0; i < filteredUserID.length; i++) {
    const toDo = document.getElementById("todo-list");
    const li = document.createElement("li");
    const text = document.createTextNode(filteredUserID[i].title);
    li.appendChild(text);
    toDo.append(li);
    filteredArray.push(filteredUserID);
  }
};

const resetTodos = () => {
  const reset = document.getElementById("todo-list");
  reset.textContent = "";
};

const filterCompleteTodos = () => {
  resetTodos();
  const filteredComplete = filteredArray.filter(
    (toDoID) => toDoID.userId == userID && !toDoID.completed
  );
  console.log(filteredComplete);
};
