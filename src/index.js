// Imports
import {
  dashboard,
  windowResizeSideBar,
  buttonSideBar,
  displayTaskCategories,
  clearTaskCategories,
  taskCategoryContent,
  taskCategoryContentTaskCards,
  completeTask,
  removeTaskCategoryContentTaskCards,
  highlightSelectedTaskCategory,
  removeHighlightTaskCategories,
  clearTaskCategoryContent,
  buildTaskForm,
  removeTaskForm,
} from "./dom-manipulation.js";
import {
  taskCategoryLibrary,
  taskCategoryFactory,
  taskFactory,
  checkTaskCategoryLibraryFull,
  editTaskCategoryName,
  editTaskCategoryIconColor,
  removeTaskCategory,
  addNewTaskCategory,
  SelectTaskCategory,
  removeTaskCategorySelection,
  findTaskCategoryIndexIsSelected,
  returnIndexTaskCategoryValue,
  moveTaskNewTaskCategory,
  getDirectionOfWindowResize,
} from "./logic.js";
import "./style.css";

dashboard();

// Create object for dummy task category then place in array
const dummyTaskCategory = taskCategoryFactory("General", "#000000");
taskCategoryLibrary.push(dummyTaskCategory);

// Display task categories
displayTaskCategories();

// Event listeners to control the flow of the retracting and expanding dashboard sidebar
const body = document.querySelector("body");
getDirectionOfWindowResize.setPositionWidthLast(document.body.offsetWidth);

window.addEventListener("resize", () => {
  getDirectionOfWindowResize.setNewPosition(document.body.offsetWidth);
  getDirectionOfWindowResize.setPositionWidthDifference();
  let windowResizeDirection =
    getDirectionOfWindowResize.getPositionWidthDifference();
  getDirectionOfWindowResize.setPositionWidthLast(document.body.offsetWidth);

  windowResizeSideBar(windowResizeDirection);
});

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  buttonSideBar(event);
});

// Add task category event listener
const plusIcon = document.querySelector(".plus-icon");
plusIcon.addEventListener("click", () => {
  if (!checkTaskCategoryLibraryFull()) {
    addNewTaskCategory();
    clearTaskCategories();
    displayTaskCategories();
    if (findTaskCategoryIndexIsSelected() !== undefined) {
      highlightSelectedTaskCategory(findTaskCategoryIndexIsSelected());
    }
  }
});

// Edit task category event listener
const allTaskCategories = document.querySelectorAll(".new-task-categories");
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("input", (event) => {
    if (event.target.classList[0] === "task-category-name") {
      editTaskCategoryName(event);
    } else if (event.target.classList[0] === "task-category-icon-color") {
      editTaskCategoryIconColor(event);
    }
  });
});

// Remove task category event listener
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("click", (event) => {
    if (event.target.classList[0] === "remove-task-category") {
      // Clear main content if the task category that was removed was the one that was being displayed
      if (+event.target.classList[1] === findTaskCategoryIndexIsSelected()) {
        clearTaskCategoryContent();
      }

      removeTaskCategory(event);
      clearTaskCategories();
      displayTaskCategories();

      // Keep selected task category highlighted if it was not deleted
      if (findTaskCategoryIndexIsSelected() !== undefined) {
        highlightSelectedTaskCategory(findTaskCategoryIndexIsSelected());
      }
    }
  });
});

// Select task category event listener
allTaskCategories.forEach((taskCategory) => {
  taskCategory.addEventListener("click", (event) => {
    if (
      event.target.classList[0] === "task-category" ||
      event.target.classList[0] === "task-category-name"
    ) {
      removeHighlightTaskCategories();
      removeTaskCategorySelection();
      SelectTaskCategory(event.target.classList[1]);
      highlightSelectedTaskCategory(findTaskCategoryIndexIsSelected());
      clearTaskCategoryContent();
      taskCategoryContent(findTaskCategoryIndexIsSelected());
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    }
  });
});

// Add task button & Submit form event listeners
window.addEventListener("click", (event) => {
  if (event.target.matches(".add-task-button")) {
    // Variable with the scope of linking form with the appropriate task category
    let taskCategoryIndex = event.target.classList[1];

    buildTaskForm();

    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Form input data
      const title = form.elements["task-title"].value;
      const description = form.elements["description"].value;
      const taskCategoryValue = form.elements["task-categories"].value;
      const dueDate = form.elements["due-date-selection"].value;
      const priority = form.elements["priority"].value;

      // Make new task object from user input using the constructor and push it to appropriate task category object
      taskCategoryIndex = returnIndexTaskCategoryValue(taskCategoryValue);

      const newTask = taskFactory(
        title,
        description,
        taskCategoryIndex,
        dueDate,
        priority
      );

      taskCategoryLibrary[taskCategoryIndex].setTask(newTask);

      removeTaskForm();
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    });
  }
});

// Edit task & Submit form event listeners
window.addEventListener("click", (event) => {
  if (
    event.target.closest(".task-card-container") &&
    !event.target.matches(".complete-icon")
  ) {
    const taskCategoryIndex = findTaskCategoryIndexIsSelected();
    const taskIndex = event.target.closest(".task-card-container").classList[1];
    // Pull up edit task window
    buildTaskForm(taskCategoryIndex, taskIndex);

    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Form input data
      const title = form.elements["task-title"].value;
      const description = form.elements["description"].value;
      const newTaskCategory = form.elements["task-categories"].value;
      const dueDate = form.elements["due-date-selection"].value;
      const priority = form.elements["priority"].value;

      // Edit existing task
      taskCategoryLibrary[taskCategoryIndex]
        .getTasks()
        [taskIndex].setTitle(title);

      taskCategoryLibrary[taskCategoryIndex]
        .getTasks()
        [taskIndex].setDescription(description);

      taskCategoryLibrary[taskCategoryIndex]
        .getTasks()
        [taskIndex].setDueDate(dueDate);

      taskCategoryLibrary[taskCategoryIndex]
        .getTasks()
        [taskIndex].setPriority(priority);

      const newTaskCategoryIndex =
        returnIndexTaskCategoryValue(newTaskCategory);

      if (taskCategoryIndex !== newTaskCategoryIndex) {
        moveTaskNewTaskCategory(
          taskCategoryIndex,
          taskIndex,
          newTaskCategoryIndex
        );
      }

      removeTaskForm();
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    });
  }
});

// Remove add task form event listener
window.addEventListener("click", (event) => {
  if (event.target.matches("#close") || event.target.matches("#overlay")) {
    removeTaskForm();
  }
});

// Complete task event listener
window.addEventListener("click", (event) => {
  if (
    event.target.matches(".complete-icon") &&
    event.target.closest(".task-card-container")
  ) {
    const taskIndex = event.target.closest(".task-card-container").classList[1];
    taskCategoryLibrary[findTaskCategoryIndexIsSelected()].removeTask(
      taskIndex
    );
    // Show with a check mark that the task has been completed
    completeTask(taskIndex);
    // Remove task only after task is shown to be complete for 500ms
    setTimeout(function () {
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    }, 500);
  }
});
