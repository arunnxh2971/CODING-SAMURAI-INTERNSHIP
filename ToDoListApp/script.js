// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const filterAll = document.getElementById("filterAll");
const filterActive = document.getElementById("filterActive");
const filterCompleted = document.getElementById("filterCompleted");
const clearCompleted = document.getElementById("clearCompleted");

let tasks = [];
let filter = "all";

// Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false, important: false, editing: false });
    taskInput.value = "";
    renderTasks();
  }
});

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = "";
  let filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task, idx) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    if (task.important) li.classList.add("important");

    li.innerHTML = `
      <span class="task-text" contenteditable="${task.editing ? 'true' : 'false'}">${task.text}</span>
      <button class="edit-btn">${task.editing ? 'Save' : 'Edit'}</button>
      <button class="delete-btn">Delete</button>
      <button class="important-btn" title="Mark as important">${task.important ? '★' : '☆'}</button>
      <input type="checkbox" class="complete-checkbox" ${task.completed ? 'checked' : ''} />
    `;

    // Complete checkbox
    li.querySelector(".complete-checkbox").addEventListener("change", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Edit button
    li.querySelector(".edit-btn").addEventListener("click", () => {
      if (task.editing) {
        task.text = li.querySelector(".task-text").innerText;
        task.editing = false;
      } else {
        task.editing = true;
      }
      renderTasks();
    });

    // Delete button
    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(idx, 1);
      renderTasks();
    });

    // Important button
    li.querySelector(".important-btn").addEventListener("click", () => {
      task.important = !task.important;
      renderTasks();
    });

    taskList.appendChild(li);
  });

  // Show active task count
  const activeCount = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `Active tasks: ${activeCount}`;
}

// Filter buttons
filterAll.addEventListener("click", () => {
  filter = "all";
  setActiveFilter(filterAll);
  renderTasks();
});
filterActive.addEventListener("click", () => {
  filter = "active";
  setActiveFilter(filterActive);
  renderTasks();
});
filterCompleted.addEventListener("click", () => {
  filter = "completed";
  setActiveFilter(filterCompleted);
  renderTasks();
});
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.completed);
  renderTasks();
});

// Highlight active filter
function setActiveFilter(button) {
  [filterAll, filterActive, filterCompleted].forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

// Initial render
renderTasks();
