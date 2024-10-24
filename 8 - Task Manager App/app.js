const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);
filterTodo.addEventListener("change", filterTodos);
todoList.addEventListener("click", deleteOrComplete);

function addTodo(event) {
  event.preventDefault();
  //   Create the todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo"); /* adding class value */

  //   Create the list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //   Create the complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeBtn);

  //   Create the delete button
  const trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteOrComplete(event) {
  const target = event.target;
  if (target.classList.contains("complete-btn")) {
    const todoDiv = target.parentElement;
    todoDiv.classList.toggle("completed");
  }
  if (target.classList.contains("trash-btn")) {
    const todoDiv = target.parentElement;
    todoDiv.classList.add("fall"); // .add - add class
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }
}

function filterTodos(event) {
  const todos = todoList.childNodes;
  const targetValue = event.target.value;
  todos.forEach(function (todo) {
    switch (targetValue) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
