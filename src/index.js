// Imports
import {
  dashboard,
  windowResizeSideBar,
  buttonSideBar,
  displayTaskCategories,
  clearTaskCategories,
  taskCategoryContent,
  highlightSelectedTaskCategory,
  removeHighlightTaskCategories,
  clearTaskCategoryContent,
  buildTaskForm,
  removeTaskForm,
} from "./dom-manipulation.js";
import {
  taskCategoryLibrary,
  taskCategoryFactory,
  checkTaskCategoryLibraryFull,
  editTaskCategoryName,
  editTaskCategoryIconColor,
  removeTaskCategory,
  addNewTaskCategory,
  SelectTaskCategory,
  removeTaskCategorySelection,
  findTaskCategoryIndexIsSelected,
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
      clearTaskCategoryContent();
      removeTaskCategory(event);
      clearTaskCategories();
      displayTaskCategories();
      // If the task category that was removed was the one that was selected
      if (findTaskCategoryIndexIsSelected() !== undefined) {
        taskCategoryContent(findTaskCategoryIndexIsSelected());
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
    }
  });
});

// Click add task button event listener
window.addEventListener("click", (event) => {
  if (event.target.matches(".add-task-button")) {
    buildTaskForm();
  }
});

// Remove add task form event listener
window.addEventListener("click", (event) => {
  if (event.target.matches("#close") || event.target.matches("#overlay")) {
    removeTaskForm();
  }
});
