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
  resetTodos();
  for (let i = 0; i < arrayOfTodos.length; i++) {
    const toDo = document.getElementById("todo-list");
    const li = document.createElement("li");
    const text = document.createTextNode(arrayOfTodos[i].title);
    li.appendChild(text);
    toDo.append(li);
  }
};

const filteredArray = [];
// Populates To-Do List with Specific UserID Titles from JSON
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
// Resets all List Text from every Ordered List
const resetTodos = () => {
  const reset = document.getElementById("todo-list");
  reset.textContent = "";
  const resetTrue = document.getElementById("ToDoTrue");
  resetTrue.textContent = "";
  const resetFalse = document.getElementById("ToDoFalse");
  resetFalse.textContent = "";
};
// Filters ToDo List based on Completed & Uncompleted value
const filterTodos = () => {
  resetTodos();
  const userID = document.getElementById("userIDNum").value;
  const filteredUserIDTrue = arrayOfTodos.filter(
    (toDoID) => toDoID.userId == userID && toDoID.completed
  );
  for (let i = 0; i < filteredUserIDTrue.length; i++) {
    const toDoTrue = document.getElementById("ToDoTrue");
    const li = document.createElement("li");
    const text = document.createTextNode(filteredUserIDTrue[i].title);
    li.appendChild(text);
    toDoTrue.append(li);
  }
  const filteredUserIDFalse = arrayOfTodos.filter(
    (toDoID) => toDoID.userId == userID && !toDoID.completed
  );
  for (let i = 0; i < filteredUserIDFalse.length; i++) {
    const toDoFalse = document.getElementById("ToDoFalse");
    const li = document.createElement("li");
    const text = document.createTextNode(filteredUserIDFalse[i].title);
    li.appendChild(text);
    toDoFalse.append(li);
  }
  console.log(userID);
  console.log(filteredUserIDTrue);
  console.log(filteredUserIDFalse);
};
