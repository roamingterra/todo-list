// Imports
import { taskCategoryLibrary } from "./logic";
import tallyMark3 from "./images/tally-mark-3.png";
import sunHollow from "./images/sun-hollow.svg";
import infoDark from "./images/info-dark.png";
import todayPNG from "./images/today.png";
import latePNG from "./images/late.png";
import plus from "./images/plus.png";
import trashCanDark from "./images/trash-can-dark.svg";
import closeDark from "./images/close-dark.svg";

// dashboard function (for loading the side and top bars)
function dashboard() {
  // NOTE: A grid system is to be created with this function. The side and top bars will be populated with elements,
  //       and the main section (column 2 and row 2) will be left as an html element that contains an image, which is
  //       to be replaced and filled by the other functions
  //       ie: today function, late function, and taskCategory function
  // NOTE: This function will be called again when a taskCategory is either added or removed, because this needs to be
  //       displayed in the side bar

  // declare elements
  const body = document.querySelector("body");
  const container = document.querySelector("#container");
  const topBar = document.createElement("div");
  const topBarLeft = document.createElement("div");
  const sideBarIcon = document.createElement("img");
  const darkLightMode = document.createElement("img");
  const topBarRight = document.createElement("div");
  const info = document.createElement("div");
  const infoIcon = document.createElement("img");
  const infoContainer = document.createElement("div");
  const infoContainerTxt1 = document.createTextNode(
    "This is a todo list application that allows you to record tasks, keep track of them, and complete them. Create a task category, fill it with tasks, and keep track of them through the task category tab, or through the today and late tabs."
  );
  const newLine1 = document.createElement("br");
  const newLine2 = document.createElement("br");
  const infoContainerTxt2 = document.createTextNode(
    "This website was created by Daniel Ballerini, with help from the Odin Project."
  );
  const sideBar = document.createElement("div");
  const todayLate = document.createElement("div");
  const today = document.createElement("div");
  const todayIcon = document.createElement("img");
  const todayTxtContainer = document.createElement("div");
  const todayTxt = document.createTextNode("Today");
  const late = document.createElement("div");
  const lateIcon = document.createElement("img");
  const lateTxtContainer = document.createElement("div");
  const lateTxt = document.createTextNode("Late");
  const taskCategories = document.createElement("div");
  const taskCategoriesHeader = document.createElement("div");
  const taskCategoriesHeaderTxtContainer = document.createElement("div");
  const taskCategoriesHeaderTxt = document.createTextNode("Task Categories");
  const addTaskCategory = document.createElement("button");
  const plusIcon = document.createElement("img");
  const newTaskCategories = document.createElement("div");
  const mainContent = document.createElement("div");

  // add attributes
  container.setAttribute("id", "container");
  topBar.setAttribute("id", "top-bar");
  topBar.setAttribute("class", "is-blurred");
  topBarLeft.setAttribute("class", "top-bar-left");
  sideBarIcon.setAttribute("class", "side-bar-icon grow");
  sideBarIcon.setAttribute("src", tallyMark3);
  sideBarIcon.setAttribute("alt", "side bar icon");
  darkLightMode.setAttribute("class", "dark-light-mode grow");
  darkLightMode.setAttribute("src", sunHollow);
  darkLightMode.setAttribute("alt", "light mode dark mode icon");
  topBarRight.setAttribute("class", "top-bar-right");
  info.setAttribute("class", "info");
  infoIcon.setAttribute("class", "info-icon");
  infoIcon.setAttribute("src", infoDark);
  infoIcon.setAttribute("alt", "info icon");
  infoContainer.setAttribute("class", "info-container");
  sideBar.setAttribute("id", "side-bar");
  sideBar.setAttribute("class", "is-blurred");
  todayLate.setAttribute("class", "today-late");
  today.setAttribute("class", "today grow-2");
  todayIcon.setAttribute("class", "today-icon");
  todayIcon.setAttribute("src", todayPNG);
  todayIcon.setAttribute("alt", "today option icon");
  late.setAttribute("class", "late grow-2");
  lateIcon.setAttribute("class", "late-icon");
  lateIcon.setAttribute("src", latePNG);
  lateIcon.setAttribute("alt", "late option icon");
  taskCategories.setAttribute("class", "task-categories");
  taskCategoriesHeader.setAttribute("class", "task-categories-header");
  addTaskCategory.setAttribute("class", "add-task-category");
  plusIcon.setAttribute("class", "plus-icon grow");
  plusIcon.setAttribute("src", plus);
  plusIcon.setAttribute("alt", "add task category icon");
  newTaskCategories.setAttribute("class", "new-task-categories");
  mainContent.setAttribute("id", "main-content");
  mainContent.setAttribute("class", "is-blurred");

  // append elements to dom
  body.appendChild(container);
  container.appendChild(topBar);
  topBar.appendChild(topBarLeft);
  topBarLeft.appendChild(sideBarIcon);
  topBarLeft.appendChild(darkLightMode);
  topBar.appendChild(topBarRight);
  topBarRight.appendChild(info);
  info.appendChild(infoIcon);
  info.appendChild(infoContainer);
  infoContainer.appendChild(infoContainerTxt1);
  infoContainer.appendChild(newLine1);
  infoContainer.appendChild(newLine2);
  infoContainer.appendChild(infoContainerTxt2);
  container.appendChild(sideBar);
  sideBar.appendChild(todayLate);
  todayLate.appendChild(today);
  today.appendChild(todayIcon);
  today.appendChild(todayTxtContainer);
  todayTxtContainer.appendChild(todayTxt);
  todayLate.appendChild(late);
  late.appendChild(lateIcon);
  late.appendChild(lateTxtContainer);
  lateTxtContainer.appendChild(lateTxt);
  sideBar.appendChild(taskCategories);
  taskCategories.appendChild(taskCategoriesHeader);
  taskCategoriesHeader.appendChild(taskCategoriesHeaderTxtContainer);
  taskCategoriesHeaderTxtContainer.appendChild(taskCategoriesHeaderTxt);
  taskCategoriesHeader.appendChild(addTaskCategory);
  addTaskCategory.appendChild(plusIcon);
  taskCategories.appendChild(newTaskCategories);
  container.appendChild(mainContent);

  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  ); // This variable exists to override the styling of the mainContent
}

// Window resize sidebar function that retracts and expands the side bar depending on window size
function windowResizeSideBar(windowResizeDirection) {
  const sideBar = document.querySelector("#side-bar");
  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  );
  const mainContent = document.querySelector("#main-content");
  const todayLate = document.querySelector(".today-late");
  const taskCategories = document.querySelector(".task-categories");

  if (
    document.body.offsetWidth < 800 &&
    windowResizeDirection < 0 &&
    sideBar.offsetWidth === 290
  ) {
    mainContent.style.gridColumn = "1 / 3";
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    todayLate.style.width = "0";
    taskCategories.style.width = "0";
  }
  if (document.body.offsetWidth > 800 && windowResizeDirection > 0) {
    mainContentPriority.style.gridColumn = "2 / 3";
    sideBar.style.width = "250px";
    sideBar.style.padding = "20px";
    todayLate.style.width = "250px";
    taskCategories.style.width = "250px";
  }
}

// Button sidebar function that retracts and expands the side bar when the button is pressed
function buttonSideBar(event) {
  const sideBar = document.querySelector("#side-bar");
  const mainContentPriority = document.querySelector(
    "#container > #main-content"
  );
  const mainContent = document.querySelector("#main-content");
  const todayLate = document.querySelector(".today-late");
  const taskCategories = document.querySelector(".task-categories");

  if (event.target.matches(".side-bar-icon")) {
    if (sideBar.offsetWidth === 0) {
      if (document.body.offsetWidth > 800) {
        mainContentPriority.style.gridColumn = "2 / 3";
      }
      sideBar.style.width = "250px";
      sideBar.style.padding = "20px";
      todayLate.style.width = "250px";
      taskCategories.style.width = "250px";
    }
    if (sideBar.offsetWidth === 290) {
      mainContent.style.gridColumn = "1 / 3";
      sideBar.style.width = "0";
      sideBar.style.padding = "0";
      todayLate.style.width = "0";
      taskCategories.style.width = "0";
    }
  }
}

// Display task categories in side bar function
function displayTaskCategories() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    // declare elements
    const newTaskCategories = document.querySelector(".new-task-categories");
    const taskCategory = document.createElement("div");
    const taskCategoryIconColor = document.createElement("input");
    const taskCategoryTxtContainer = document.createElement("div");
    const TaskCategoryTxt = document.createTextNode(
      taskCategoryLibrary[i].getTitle()
    );
    // const removeTaskCategory = document.createElement("div");
    const removeTaskCategoryImg = document.createElement("img");

    // add attributes
    taskCategory.classList.add("task-category", i, "grow-2");
    taskCategoryIconColor.classList.add("task-category-icon-color", i);
    taskCategoryIconColor.setAttribute("type", "color");
    taskCategoryIconColor.setAttribute(
      "value",
      taskCategoryLibrary[i].getColor()
    );
    taskCategoryTxtContainer.classList.add("task-category-name", i);
    taskCategoryTxtContainer.setAttribute(
      "onclick",
      "this.contentEditable=true"
    );
    taskCategoryTxtContainer.setAttribute(
      "onblur",
      "this.contentEditable=false"
    );
    removeTaskCategoryImg.classList.add("remove-task-category", i);
    removeTaskCategoryImg.setAttribute("src", trashCanDark);

    // append elements to dom
    newTaskCategories.appendChild(taskCategory);
    taskCategory.appendChild(taskCategoryIconColor);
    taskCategory.appendChild(taskCategoryTxtContainer);
    taskCategoryTxtContainer.appendChild(TaskCategoryTxt);
    taskCategory.appendChild(removeTaskCategoryImg);
  }
}

// Clear task categories function
function clearTaskCategories() {
  const newTaskCategories = document.querySelector(".new-task-categories");
  newTaskCategories.querySelectorAll("*").forEach((n) => n.remove());
}

// taskCategoryContent function (for loading the content of a taskCategory that has been selected)
function taskCategoryContent(taskCategoryIndex) {
  // declare elements
  const mainContent = document.querySelector("#main-content");
  const content = document.createElement("div");
  const addTaskButtonWrapper = document.createElement("div");
  const addTaskButton = document.createElement("button");
  const addTaskButtonTxt = document.createTextNode("+ Add Task");
  const taskCards = document.createElement("div");

  // add attributes
  content.classList.add("task-category-content", taskCategoryIndex);
  addTaskButtonWrapper.setAttribute("class", "add-task-button-wrapper");
  addTaskButton.setAttribute("class", `add-task-button ${taskCategoryIndex}`);
  taskCards.setAttribute("class", "task-cards");

  // append elements to dom
  mainContent.appendChild(content);
  content.appendChild(addTaskButtonWrapper);
  addTaskButtonWrapper.appendChild(addTaskButton);
  addTaskButton.appendChild(addTaskButtonTxt);
  content.appendChild(taskCards);
}

// Highlight selected task category function
function highlightSelectedTaskCategory(selectedElementClassIndex) {
  const selectedTaskCategory = document.getElementsByClassName(
    `task-category ${selectedElementClassIndex}`
  );
  selectedTaskCategory[0].style.backgroundColor = "#f0eef1";
}

// Remove highlight from task categories function
function removeHighlightTaskCategories() {
  const newTaskCategories = document.querySelector(".new-task-categories");
  for (let i = 0; i < newTaskCategories.children.length; i++) {
    if (newTaskCategories.children[i].style.backgroundColor !== "") {
      newTaskCategories.children[i].style.backgroundColor = "white";
    }
  }
}

// Clear task category content function
function clearTaskCategoryContent() {
  const mainContent = document.querySelector("#main-content");
  mainContent.querySelectorAll("*").forEach((n) => n.remove());
}

// Modal window function
function buildTaskForm() {
  // declare elements
  const body = document.querySelector("body");
  const overlay = document.createElement("div");
  const formContainer = document.createElement("div");
  const removeOptions = document.createElement("div");
  const deleteTask = document.createElement("div");
  const deleteTaskImg = document.createElement("img");
  const close = document.createElement("div");
  const closeImg = document.createElement("img");
  const form = document.createElement("form");
  const formColumn1 = document.createElement("div");
  const taskTitle = document.createElement("div");
  const taskTitleLabel = document.createElement("label");
  const taskTitleLabelTxt = document.createTextNode("TASK TITLE");
  const taskTitleInput = document.createElement("input");
  const description = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionLabelTxt = document.createTextNode("DESCRIPTION");
  const descriptionTextArea = document.createElement("textarea");
  const formColumn2 = document.createElement("div");
  const column2Option1 = document.createElement("div");
  const taskCategoriesSelectionLabel = document.createElement("label");
  const taskCategoriesSelectionLabelTxt =
    document.createTextNode("TASK CATEGORY:");
  const taskCategoriesSelectionSelect = document.createElement("select");
  const column2Option2 = document.createElement("div");
  const dueDateSelectionLabel = document.createElement("label");
  const dueDateSelectionLabelTxt = document.createTextNode("DUE DATE:");
  const dueDateSelectionInput = document.createElement("input");
  const column2Option3 = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityLabelTxt = document.createTextNode("PRIORITY:");
  const prioritySelect = document.createElement("select");
  const priority1Option = document.createElement("option");
  const priority1OptionTxt = document.createTextNode("Priority 1");
  const priority2Option = document.createElement("option");
  const priority2OptionTxt = document.createTextNode("Priority 2");
  const priority3Option = document.createElement("option");
  const priority3OptionTxt = document.createTextNode("Priority 3");
  const priority4Option = document.createElement("option");
  const priority4OptionTxt = document.createTextNode("Priority 4");
  const submitButton = document.createElement("button");
  const submitButtonTxt = document.createTextNode("SUBMIT");

  // add attributes
  overlay.setAttribute("id", "overlay");
  formContainer.setAttribute("id", "form-container");
  removeOptions.setAttribute("class", "remove-options");
  deleteTask.setAttribute("class", "delete-task");
  deleteTaskImg.setAttribute("id", "delete");
  deleteTaskImg.setAttribute("src", trashCanDark);
  deleteTaskImg.setAttribute("alt", "delete icon");
  close.setAttribute("class", "close");
  closeImg.setAttribute("id", "close");
  closeImg.setAttribute("src", closeDark);
  closeImg.setAttribute("alt", "close form window icon");
  form.setAttribute("action", "javascript:function();"); // TO BE SENT TO A LOGIC.JS FUNCTION
  form.setAttribute("method", "post");
  form.setAttribute("id", "form");
  formColumn1.setAttribute("class", "form-column-1");
  taskTitle.setAttribute("class", "task-title");
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "task-title");
  taskTitleInput.setAttribute("required", "");
  taskTitleInput.setAttribute("maxlength", "30");
  description.setAttribute("class", "description");
  descriptionLabel.setAttribute("for", "description");
  descriptionTextArea.setAttribute("name", "description");
  descriptionTextArea.setAttribute("id", "description");
  descriptionTextArea.setAttribute("cols", "28");
  descriptionTextArea.setAttribute("rows", "6");
  descriptionTextArea.setAttribute("form", "form");
  formColumn2.setAttribute("class", "form-column-2");
  column2Option1.setAttribute("class", "column-2-option");
  taskCategoriesSelectionLabel.setAttribute("for", "task-categories-selection");
  taskCategoriesSelectionSelect.setAttribute("id", "task-categories-selection");
  taskCategoriesSelectionSelect.setAttribute("name", "task-categories");
  column2Option2.setAttribute("class", "column-2-option");
  dueDateSelectionLabel.setAttribute("for", "due-date-selection");
  dueDateSelectionInput.setAttribute("type", "date");
  dueDateSelectionInput.setAttribute("id", "due-date-selection");
  dueDateSelectionInput.setAttribute("name", "due-date-selection");
  column2Option3.setAttribute("class", "column-2-option");
  priorityLabel.setAttribute("for", "priority");
  prioritySelect.setAttribute("id", "priority");
  prioritySelect.setAttribute("name", "priority");
  priority1Option.setAttribute("value", "priority-1");
  priority2Option.setAttribute("value", "priority-2");
  priority3Option.setAttribute("value", "priority-3");
  priority4Option.setAttribute("value", "priority-4");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit");
  submitButton.setAttribute("form", "form");

  // append elements to dom (sibling of container)
  body.appendChild(overlay);
  overlay.appendChild(formContainer);
  formContainer.appendChild(removeOptions);
  removeOptions.appendChild(deleteTask);
  deleteTask.appendChild(deleteTaskImg);
  removeOptions.appendChild(close);
  close.appendChild(closeImg);
  formContainer.appendChild(form);
  form.appendChild(formColumn1);
  formColumn1.appendChild(taskTitle);
  taskTitle.appendChild(taskTitleLabel);
  taskTitleLabel.appendChild(taskTitleLabelTxt);
  taskTitle.appendChild(taskTitleInput);
  formColumn1.appendChild(description);
  description.appendChild(descriptionLabel);
  descriptionLabel.appendChild(descriptionLabelTxt);
  description.appendChild(descriptionTextArea);
  form.appendChild(formColumn2);
  formColumn2.appendChild(column2Option1);
  column2Option1.appendChild(taskCategoriesSelectionLabel);
  taskCategoriesSelectionLabel.appendChild(taskCategoriesSelectionLabelTxt);
  column2Option1.appendChild(taskCategoriesSelectionSelect);
  formColumn2.appendChild(column2Option2);
  column2Option2.appendChild(dueDateSelectionLabel);
  dueDateSelectionLabel.appendChild(dueDateSelectionLabelTxt);
  column2Option2.appendChild(dueDateSelectionInput);
  formColumn2.appendChild(column2Option3);
  column2Option3.appendChild(priorityLabel);
  priorityLabel.appendChild(priorityLabelTxt);
  column2Option3.appendChild(prioritySelect);
  prioritySelect.appendChild(priority1Option);
  priority1Option.appendChild(priority1OptionTxt);
  prioritySelect.appendChild(priority2Option);
  priority2Option.appendChild(priority2OptionTxt);
  prioritySelect.appendChild(priority3Option);
  priority3Option.appendChild(priority3OptionTxt);
  prioritySelect.appendChild(priority4Option);
  priority4Option.appendChild(priority4OptionTxt);
  formContainer.appendChild(submitButton);
  submitButton.appendChild(submitButtonTxt);

  // Add blur styling
  const isBlurredElements = document.querySelectorAll(".is-blurred");
  isBlurredElements.forEach((isBlurredElement) => {
    isBlurredElement.style.filter = "blur(5px)";
  });
}

// Remove task form function
function removeTaskForm() {
  const body = document.querySelector("body");
  const overlay = document.querySelector("#overlay");
  while (overlay.firstChild) {
    overlay.removeChild(overlay.lastChild);
  }
  body.removeChild(overlay);

  // Remove blur styling
  const isBlurredElements = document.querySelectorAll(".is-blurred");
  isBlurredElements.forEach((isBlurredElement) => {
    isBlurredElement.style.filter = "none";
  });
}

// today function (for loading the today tab which contains all tasks that are due today)
// declare elements
// add attributes
// append elements to dom

// late function (for loading the late tab which contains all tasks that were due before the present date and have not been completed yet)
// declare elements
// add attributes
// append elements to dom

export {
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
};
