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
    toDo.appendChild(li);
  }
};

// const populateUserIDTodos = () => {
//   const userIDNum = document.getElementById("userIDNum").value;
//   const filteredUserID = arrayOfTodos.filter(
//     (toDo) => toDo.userId === userIDNum
//   );
// };

const resetTodos = () => {};
const filterCompleteTodos = () => {};
