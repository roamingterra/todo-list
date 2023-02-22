// Imports
import {
  dashboard,
  windowResizeSideBar,
  buttonSideBar,
  displayTaskCategories,
  clearTaskCategories,
} from "./dom-manipulation.js";
import {
  taskCategoryLibrary,
  taskCategoryFactory,
  checkTaskCategoryLibraryFull,
  editTaskCategoryName,
  editTaskCategoryIconColor,
  removeTaskCategory,
  addNewTaskCategory,
  getDirectionOfWindowResize,
} from "./logic.js";
import "./style.css";

// Array that holds all task category objects
// const taskCategoryLibrary = [];

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
      removeTaskCategory(event);
      clearTaskCategories();
      displayTaskCategories();
    }
  });
});
