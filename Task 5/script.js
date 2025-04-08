let taskListBox = document.getElementById("taskList");
let taskInputBox = document.getElementById("taskInput");

function addNewTask() {
  let taskText = taskInputBox.value.trim();
  if (taskText === "") {
    alert("Please write something.");
    return;
  }

  let taskItem = document.createElement("li");
  taskItem.className = "taskBox";

  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  let buttonGroup = document.createElement("div");
  buttonGroup.className = "btns";

  let doneButton = document.createElement("button");
  doneButton.textContent = "Done";
  doneButton.className = "doneBtn";
  doneButton.onclick = function () {
    taskItem.classList.toggle("completed");
  };

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "editBtn";
  editButton.onclick = function () {
    let updatedText = prompt("Edit your task:", taskSpan.textContent);
    if (updatedText !== null && updatedText.trim() !== "") {
      taskSpan.textContent = updatedText.trim();
    }
  };

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delBtn";
  deleteButton.onclick = function () {
    taskListBox.removeChild(taskItem);
  };

  buttonGroup.appendChild(doneButton);
  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(buttonGroup);

  taskListBox.appendChild(taskItem);
  taskInputBox.value = "";
}