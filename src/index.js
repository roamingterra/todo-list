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
  removeTaskCategoryContent,
  removeTaskCategoryContentTaskCards,
  removeMainContent,
  highlightSelectedTaskCategory,
  removeHighlightTaskCategories,
  clearTaskCategoryContent,
  buildTaskForm,
  removeTaskForm,
  todayContent,
  lateContent,
  highlightTodayOrLateSelection,
  removeHighlightTodayLateSelection,
  completeTaskToday,
  completeTaskLate,
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
  updateTaskIndicesOfTaskCategory,
  todayLibrary,
  lateLibrary,
  sortTasksToday,
  sortTasksLate,
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
      removeHighlightTodayLateSelection();
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
      //   console.log(taskCategoryLibrary[taskCategoryIndex]);

      let taskIndex = 0;
      if (taskCategoryLibrary[taskCategoryIndex].getTasks().length !== 0) {
        taskIndex = taskCategoryLibrary[taskCategoryIndex].getTasks().length;
      }

      const newTask = taskFactory(
        title,
        description,
        taskCategoryIndex,
        dueDate,
        priority,
        taskIndex
      );

      taskCategoryLibrary[taskCategoryIndex].setTask(newTask);

      removeTaskForm();
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    });
  }
});

// Edit task, delete task, and submit form  event listeners
window.addEventListener("click", (event) => {
  if (
    event.target.closest(".task-card-container") &&
    !event.target.matches(".complete-icon")
  ) {
    const taskCategoryIndex = findTaskCategoryIndexIsSelected();
    const taskIndex = event.target.closest(".task-card-container").classList[1];
    // Pull up edit task window
    buildTaskForm(taskCategoryIndex, taskIndex);

    const deleteTask = document.querySelector("#delete");
    deleteTask.addEventListener("click", () => {
      taskCategoryLibrary[taskCategoryIndex].removeTask(taskIndex);
      removeTaskForm();
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    });

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
        +returnIndexTaskCategoryValue(newTaskCategory);

      if (taskCategoryIndex !== newTaskCategoryIndex) {
        const newTaskIndex = taskCategoryLibrary[newTaskCategoryIndex].length;

        // Update moving task's task category
        taskCategoryLibrary[taskCategoryIndex]
          .getTasks()
          [taskIndex].setCategory(newTaskCategoryIndex);

        moveTaskNewTaskCategory(
          taskCategoryIndex,
          taskIndex,
          newTaskCategoryIndex
        );

        updateTaskIndicesOfTaskCategory(taskCategoryIndex);
        updateTaskIndicesOfTaskCategory(newTaskCategoryIndex);
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

    updateTaskIndicesOfTaskCategory(findTaskCategoryIndexIsSelected());

    // Show with a check mark that the task has been completed
    completeTask(taskIndex);
    // Update main content only after task is shown to be complete for 500ms
    setTimeout(function () {
      removeTaskCategoryContentTaskCards();
      taskCategoryContentTaskCards(findTaskCategoryIndexIsSelected());
    }, 500);
  }
});

// Today selection event listener
const today = document.querySelector(".today");
const late = document.querySelector(".late");

today.addEventListener("click", () => {
  removeTaskCategorySelection();
  removeHighlightTaskCategories();
  removeHighlightTodayLateSelection();
  highlightTodayOrLateSelection(today);
  sortTasksToday();
  removeMainContent();
  todayContent();
});

// Late selection event listener
late.addEventListener("click", () => {
  removeTaskCategorySelection();
  removeHighlightTaskCategories();
  removeHighlightTodayLateSelection();
  highlightTodayOrLateSelection(late);
  sortTasksLate();
  removeMainContent();
  lateContent();
});

// Complete today task event listener
window.addEventListener("click", (event) => {
  if (
    event.target.matches(".today-complete-icon") &&
    event.target.closest(".today-task-container")
  ) {
    const taskIndexToday = event.target.closest(".today-task-container")
      .classList[1];

    // Find where task is located in which task category array and delete it /* */
    const taskCategoryIndex = todayLibrary[taskIndexToday].getCategory();
    const taskIndex = todayLibrary[taskIndexToday].getTaskIndex();

    taskCategoryLibrary[taskCategoryIndex].removeTask(taskIndex);

    updateTaskIndicesOfTaskCategory(taskCategoryIndex);

    // Show with a check mark that the task has been completed
    completeTaskToday(taskIndexToday);

    // Remove task from today array
    todayLibrary.splice(taskIndexToday, 1);

    // Remove task only after task is shown to be complete for 500ms
    setTimeout(function () {
      removeMainContent();
      todayContent();
    }, 500);
  }
});

// Complete late task event listener
window.addEventListener("click", (event) => {
  if (
    event.target.matches(".late-complete-icon") &&
    event.target.closest(".late-task-container")
  ) {
    const taskIndexLate = event.target.closest(".late-task-container")
      .classList[1];

    // Find where task is located in which task category array and delete it
    const taskCategoryIndex = lateLibrary[taskIndexLate].getCategory();
    const taskIndex = lateLibrary[taskIndexLate].getTaskIndex();

    taskCategoryLibrary[taskCategoryIndex].removeTask(taskIndex);

    updateTaskIndicesOfTaskCategory(taskCategoryIndex);

    // Show with a check mark that the task has been completed
    completeTaskLate(taskIndexLate);

    // Remove task from late array
    lateLibrary.splice(taskIndexLate, 1);

    // Remove task only after task is shown to be complete for 500ms
    setTimeout(function () {
      removeMainContent();
      lateContent();
    }, 500);
  }
});
