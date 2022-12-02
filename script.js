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

const populateUserIDTodos = () => {
  const submit = document.getElementById("submit").value;
  console.log(submit);

  // const filteredUserID = arrayOfTodos.filter(
  //   (arrayOfTodos) => arrayOfTodos.userId === userIDNum
  // );
  // console.log(filteredUserID);
};

const resetTodos = () => {};

const filterCompleteTodos = () => {};
