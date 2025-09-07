// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");
const clearCompleted = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

// Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    saveAndRender();
  }
});

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  let filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", () => toggleTask(index));

    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.style.background = "transparent";
    delBtn.style.border = "none";
    delBtn.style.color = "white";
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTask(index);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

// Save to localStorage
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Filter buttons
filterAll.addEventListener("click", () => {
  filter = "all";
  setActiveFilter(filterAll);
});
filterActive.addEventListener("click", () => {
  filter = "active";
  setActiveFilter(filterActive);
});
filterCompleted.addEventListener("click", () => {
  filter = "completed";
  setActiveFilter(filterCompleted);
});

// Clear completed tasks
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  saveAndRender();
});

// Highlight active filter
function setActiveFilter(button) {
  [filterAll, filterActive, filterCompleted].forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  renderTasks();
}

// Initial render
renderTasks();
