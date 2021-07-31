let nameField = document.getElementById("nameField");
let todos = document.getElementById("todos");
let userInput = document.getElementById("userInput");
let listOf = document.getElementById("listOf");
let taskInput = document.getElementById("addTaskInput");
let tasks = document.getElementById("tasks");

function getName() {
  localStorage.setItem("user", userInput.value);
  listOf.textContent = `${localStorage.getItem("user")}'s List`;
  nameField.style.display = "none";
  todos.style.display = "block";
}

function changeName() {
  localStorage.setItem("user", null);
  nameField.style.display = "block";
  todos.style.display = "none";
}

function addTask() {
  if (taskInput.value === "") {
    return;
  }
  let P = document.createElement("P");
  P.textContent = taskInput.value;
  tasks.insertAdjacentHTML(
    "beforeend",
    `<li>
      <div class='task'>
        <p>${P.textContent}</p>
        <button class='completeTask' title='check' onclick='completeTask(this)' >
          <span class='emojis'>✅</span>
        </button>
        <button class='deleteTask' title='delete' onclick='deleteTask(this);' >
          <span class='emojis'>❌</span>
        </button>
      </div>
    </li>`
  );

  taskInput.value = "";
}

function deleteTask(thisButton) {
  let task = thisButton.parentElement.parentElement;
  task.remove();
}

function completeTask(thisButton) {
  let text = thisButton.parentElement.querySelector("p");
  text.style.textDecoration = "line-through";
}

if (localStorage.getItem("user") === null) {
  nameField.style.display = "block";
  todos.style.display = "none";
} else {
  nameField.style.display = "none";
  todos.style.display = "block";
  listOf.textContent = `${localStorage.getItem("user")}'s List`;
}
