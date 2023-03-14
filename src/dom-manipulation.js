// Imports
import {
  taskCategoryLibrary,
  formatDate,
  findTaskCategoryIndexIsSelected,
  todayLibrary,
  lateLibrary,
} from "./logic";
import tallyMark3 from "./images/tally-mark-3.png";
import sunHollow from "./images/sun-hollow.svg";
import infoDark from "./images/info-dark.png";
import todayPNG from "./images/today.png";
import latePNG from "./images/late.png";
import plus from "./images/plus.png";
import trashCanDark from "./images/trash-can-dark.svg";
import closeDark from "./images/close-dark.svg";
import circleDark from "./images/circle-outline.svg";
import checkMark from "./images/check-mark-icon.png";

// dashboard function (for loading the side and top bars)
function dashboard() {
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

// taskCategoryContentTaskCards function (for loading the tasks of a taskCategory that has been selected)
function taskCategoryContentTaskCards(taskCategoryIndex) {
  // Displaying tasks
  for (
    let i = 0;
    i < taskCategoryLibrary[taskCategoryIndex].getTasks().length;
    i++
  ) {
    // declare elements
    const taskCards = document.querySelector(".task-cards");
    const taskCardContainer = document.createElement("div");
    const completeIconContainer = document.createElement("div");
    const completeIcon = document.createElement("img");
    const checkMarkImg = document.createElement("img");
    const titleAndDateContainer = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskTitleTxt = document.createTextNode(
      taskCategoryLibrary[taskCategoryIndex].getTasks()[i].getTitle()
    );
    const taskDate = document.createElement("div");
    const taskDateTxt = document.createTextNode(
      formatDate(
        taskCategoryLibrary[taskCategoryIndex].getTasks()[i].getDueDate()
      )
    );

    // add attributes
    taskCardContainer.setAttribute("class", "task-card-container");
    taskCardContainer.classList.add("task-card-container", i);
    completeIconContainer.setAttribute("class", "complete-icon-container");
    completeIcon.setAttribute("class", "complete-icon");
    completeIcon.setAttribute("src", circleDark);
    completeIcon.setAttribute("alt", "complete icon");
    checkMarkImg.classList.add("check-mark", i);
    checkMarkImg.setAttribute("src", checkMark);
    checkMarkImg.setAttribute("alt", "check mark");
    titleAndDateContainer.setAttribute("class", "title-and-date-container");
    taskTitle.setAttribute("class", "task-title");
    taskDate.setAttribute("class", "task-date");

    // append elements to dom
    taskCards.appendChild(taskCardContainer);
    taskCardContainer.appendChild(completeIconContainer);
    completeIconContainer.appendChild(completeIcon);
    completeIconContainer.appendChild(checkMarkImg);
    taskCardContainer.appendChild(titleAndDateContainer);
    titleAndDateContainer.appendChild(taskTitle);
    taskTitle.appendChild(taskTitleTxt);
    titleAndDateContainer.appendChild(taskDate);
    taskDate.appendChild(taskDateTxt);
  }
}

// CompleteTask function
function completeTask(taskIndex) {
  const checkMark = document.getElementsByClassName(`check-mark ${taskIndex}`);
  checkMark[0].style.visibility = "visible";
  checkMark[0].style.opacity = "1";
}

// Remove task category content function
function removeTaskCategoryContent() {
  const taskCategoryContent = document.querySelector(".task-category-content");
  while (taskCategoryContent.firstChild) {
    taskCategoryContent.removeChild(taskCategoryContent.lastChild);
  }
}

// removeTaskCategoryContentTaskCards function
function removeTaskCategoryContentTaskCards() {
  const taskCards = document.querySelector(".task-cards");
  while (taskCards.firstChild) {
    taskCards.removeChild(taskCards.lastChild);
  }
}

// removeTodayLateContent function
function removeMainContent() {
  const mainContent = document.querySelector("#main-content");
  if (mainContent.firstChild) {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.lastChild);
    }
  }
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
function buildTaskForm(taskCategoryIndex, taskIndex) {
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
  const taskCategoriesSelectionSelect = document.createElement("select"); /* */
  const taskCategories1Option = document.createElement("option");
  const taskCategories2Option = document.createElement("option");
  const taskCategories3Option = document.createElement("option");
  const taskCategories4Option = document.createElement("option");
  const taskCategories5Option = document.createElement("option");
  const column2Option2 = document.createElement("div");
  const dueDateSelectionLabel = document.createElement("label");
  const dueDateSelectionLabelTxt = document.createTextNode("DUE DATE:");
  const dueDateSelectionInput = document.createElement("input");
  const column2Option3 = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityLabelTxt = document.createTextNode("PRIORITY:");
  const prioritySelect = document.createElement("select");
  const priorityDefaultOption = document.createElement("option");
  const priorityDefaultOptionTxt = document.createTextNode("");
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
  form.setAttribute("action", "javascript:function();");
  form.setAttribute("method", "post");
  form.setAttribute("id", "form");
  formColumn1.setAttribute("class", "form-column-1");
  taskTitle.setAttribute("class", "task-title-container");
  taskTitleLabel.setAttribute("for", "task-title");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "task-title");
  taskTitleInput.setAttribute("required", "");
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
  dueDateSelectionInput.setAttribute("type", "text");
  dueDateSelectionInput.setAttribute("onfocus", "(this.type='date')");
  dueDateSelectionInput.setAttribute("onblur", "(this.type='text')");
  dueDateSelectionInput.setAttribute("placeholder", "yyyy-mm-dd");
  dueDateSelectionInput.setAttribute("id", "due-date-selection");
  dueDateSelectionInput.setAttribute("name", "due-date-selection");
  column2Option3.setAttribute("class", "column-2-option");
  priorityLabel.setAttribute("for", "priority");
  prioritySelect.setAttribute("id", "priority");
  prioritySelect.setAttribute("name", "priority");
  priorityDefaultOption.setAttribute(
    "value",
    "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"
  );
  priorityDefaultOption.setAttribute("selected", "");
  priority1Option.setAttribute("value", "Priority 1");
  priority2Option.setAttribute("value", "Priority 2");
  priority3Option.setAttribute("value", "Priority 3");
  priority4Option.setAttribute("value", "Priority 4");
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
  prioritySelect.appendChild(priorityDefaultOption);
  priorityDefaultOption.appendChild(priorityDefaultOptionTxt);
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

  // Add task category options to form drop down menu
  if (taskCategoryLibrary[0]) {
    taskCategories1Option.textContent = taskCategoryLibrary[0].getTitle();
    taskCategories1Option.setAttribute(
      "value",
      `${taskCategoryLibrary[0].getTitle()}0`
    );
    taskCategoriesSelectionSelect.appendChild(taskCategories1Option);
  }
  if (taskCategoryLibrary[1]) {
    taskCategories2Option.textContent = taskCategoryLibrary[1].getTitle();
    taskCategories2Option.setAttribute(
      "value",
      `${taskCategoryLibrary[1].getTitle()}1`
    );
    taskCategoriesSelectionSelect.appendChild(taskCategories2Option);
  }
  if (taskCategoryLibrary[2]) {
    taskCategories3Option.textContent = taskCategoryLibrary[2].getTitle();
    taskCategories3Option.setAttribute(
      "value",
      `${taskCategoryLibrary[2].getTitle()}2`
    );
    taskCategoriesSelectionSelect.appendChild(taskCategories3Option);
  }
  if (taskCategoryLibrary[3]) {
    taskCategories4Option.textContent = taskCategoryLibrary[3].getTitle();
    taskCategories4Option.setAttribute(
      "value",
      `${taskCategoryLibrary[3].getTitle()}3`
    );
    taskCategoriesSelectionSelect.appendChild(taskCategories4Option);
  }
  if (taskCategoryLibrary[4]) {
    taskCategories5Option.textContent = taskCategoryLibrary[4].getTitle();
    taskCategories5Option.setAttribute(
      "value",
      `${taskCategoryLibrary[4].getTitle()}4`
    );
    taskCategoriesSelectionSelect.appendChild(taskCategories5Option);
  }

  // Default values for task category drop down menu
  for (let i = 0; i < taskCategoriesSelectionSelect.options.length; i++) {
    // Remove selected task category as the default value
    if (taskCategoriesSelectionSelect.options[i].hasAttribute("selected")) {
      console.log(taskCategoriesSelectionSelect.options[i]);
      taskCategoriesSelectionSelect.options[i].removeAttribute("selected");
    }
  }

  for (let i = 0; i < taskCategoriesSelectionSelect.options.length; i++) {
    // Make selected task category the default form value
    if (i === findTaskCategoryIndexIsSelected()) {
      taskCategoriesSelectionSelect.options[i].setAttribute("selected", "");
    }
  }

  // Rest of default form values for when editing task
  if (taskCategoryIndex !== undefined && taskIndex !== undefined) {
    // Task title value
    let taskTitleInputValue = taskCategoryLibrary[taskCategoryIndex]
      .getTasks()
      [taskIndex].getTitle();

    taskTitleInput.setAttribute("value", taskTitleInputValue);

    // Description title value
    let descriptionValue = taskCategoryLibrary[taskCategoryIndex]
      .getTasks()
      [taskIndex].getDescription();

    descriptionTextArea.textContent = descriptionValue;

    // Due date value
    let dueDateValue = taskCategoryLibrary[taskCategoryIndex]
      .getTasks()
      [taskIndex].getDueDate();

    dueDateSelectionInput.setAttribute("value", dueDateValue);
    dueDateSelectionInput.setAttribute("onfocus", "(this.type='date')");
    dueDateSelectionInput.setAttribute("onblur", "(this.type='text')");

    // Reassign default value for priority drop down menu
    let priorityValue = taskCategoryLibrary[taskCategoryIndex]
      .getTasks()
      [taskIndex].getPriority();

    for (let i = 0; i < prioritySelect.options.length; i++) {
      // Remove Selected attribute from selected priority option
      if (prioritySelect.options[i].hasAttribute("selected")) {
        prioritySelect.options[i].removeAttribute("selected");
      }
    }

    for (let i = 0; i < prioritySelect.options.length; i++) {
      // Add Selected attribute to selected priority option
      if (priorityValue === prioritySelect.options[i].value) {
        prioritySelect.options[i].setAttribute("selected", "");
      }
    }
  }
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
function todayContent() {
  for (let i = 0; i < todayLibrary.length; i++) {
    // declare elements
    const mainContent = document.querySelector("#main-content");
    const todayLateContent = document.createElement("div");
    const todayTaskContainer = document.createElement("div");
    const todayTaskContainerFirstHalf = document.createElement("div");
    const completeIconContainer = document.createElement("div");
    const completeIcon = document.createElement("img");
    const checkMarkImg = document.createElement("img");
    const todayTaskContainerSecondHalf = document.createElement("div");
    const taskNameContainer = document.createElement("div");
    const taskName = document.createElement("div");
    const taskNameTxt = document.createTextNode(todayLibrary[i].getTitle());
    const restOfInformation = document.createElement("div");
    const priorityContainer = document.createElement("div");
    const priority = document.createElement("div");
    const priorityTxt = document.createTextNode(todayLibrary[i].getPriority());
    const taskCategoryContainer = document.createElement("div");
    const taskCategoryColor = document.createElement("div");
    const taskCategory = document.createElement("div");
    const taskCategoryTxt = document.createTextNode(
      todayLibrary[i].getCategoryTitle()
    );

    // add attributes
    todayLateContent.setAttribute("class", "today-content");
    todayTaskContainer.classList.add("today-task-container", i);
    todayTaskContainerFirstHalf.setAttribute(
      "class",
      "today-task-container-first-half"
    );
    completeIconContainer.setAttribute(
      "class",
      "today-complete-icon-container"
    );
    completeIcon.setAttribute("class", "today-complete-icon");
    completeIcon.setAttribute("src", circleDark);
    completeIcon.setAttribute("alt", "Complete icon");
    checkMarkImg.classList.add("today-check-mark", i);
    checkMarkImg.setAttribute("src", checkMark);
    checkMarkImg.setAttribute("alt", "check mark");
    todayTaskContainerSecondHalf.setAttribute(
      "class",
      "today-task-container-second-half"
    );
    taskNameContainer.setAttribute("class", "today-task-name-container");
    taskName.setAttribute("class", "today-task-name");
    restOfInformation.setAttribute("class", "today-rest-of-information");
    priorityContainer.setAttribute("class", "today-priority-container");
    priority.setAttribute("class", "today-priority");
    taskCategoryContainer.setAttribute(
      "class",
      "today-task-category-container"
    );
    taskCategoryColor.setAttribute("class", "today-task-category-color");
    taskCategory.setAttribute("class", "today-task-category");

    // append elements to dom
    mainContent.appendChild(todayLateContent);
    todayLateContent.appendChild(todayTaskContainer);
    todayTaskContainer.appendChild(todayTaskContainerFirstHalf);
    todayTaskContainerFirstHalf.appendChild(completeIconContainer);
    completeIconContainer.appendChild(completeIcon);
    completeIconContainer.appendChild(checkMarkImg);
    todayTaskContainer.appendChild(todayTaskContainerSecondHalf);
    todayTaskContainerSecondHalf.appendChild(taskNameContainer);
    taskNameContainer.appendChild(taskName);
    taskName.appendChild(taskNameTxt);
    todayTaskContainerSecondHalf.appendChild(restOfInformation);
    restOfInformation.appendChild(priorityContainer);
    priorityContainer.appendChild(priority);
    priority.appendChild(priorityTxt);
    restOfInformation.appendChild(taskCategoryContainer);
    taskCategoryContainer.appendChild(taskCategoryColor);
    taskCategoryContainer.appendChild(taskCategory);
    taskCategory.appendChild(taskCategoryTxt);

    // Style elements
    taskCategoryColor.style.backgroundColor =
      taskCategoryLibrary[todayLibrary[i].getCategory()].getColor();
  }
}

// late function (for loading the late tab which contains all tasks that were due before the present date and have not been completed yet)
function lateContent() {
  for (let i = 0; i < lateLibrary.length; i++) {
    // declare elements
    const mainContent = document.querySelector("#main-content");
    const todayLateContent = document.createElement("div");
    const lateTaskContainer = document.createElement("div");
    const lateTaskContainerFirstHalf = document.createElement("div");
    const completeIconContainer = document.createElement("div");
    const completeIcon = document.createElement("img");
    const checkMarkImg = document.createElement("img");
    const lateTaskContainerSecondHalf = document.createElement("div");
    const taskNameContainer = document.createElement("div");
    const taskName = document.createElement("div");
    const taskNameTxt = document.createTextNode(lateLibrary[i].getTitle());
    const restOfInformation = document.createElement("div");
    const priorityContainer = document.createElement("div");
    const priority = document.createElement("div");
    const priorityTxt = document.createTextNode(lateLibrary[i].getPriority());
    const dateContainer = document.createElement("div");
    const date = document.createElement("div");
    const dateTxt = document.createTextNode(
      formatDate(lateLibrary[i].getDueDate())
    );
    const taskCategoryContainer = document.createElement("div");
    const taskCategoryColor = document.createElement("div");
    const taskCategory = document.createElement("div");
    const taskCategoryTxt = document.createTextNode(
      lateLibrary[i].getCategoryTitle()
    );

    // add attributes
    todayLateContent.setAttribute("class", "late-content");
    lateTaskContainer.classList.add("late-task-container", i);
    lateTaskContainerFirstHalf.setAttribute(
      "class",
      "late-task-container-first-half"
    );
    completeIconContainer.setAttribute("class", "late-complete-icon-container");
    completeIcon.setAttribute("class", "late-complete-icon");
    completeIcon.setAttribute("src", circleDark);
    completeIcon.setAttribute("alt", "Complete icon");
    checkMarkImg.classList.add("late-check-mark", i);
    checkMarkImg.setAttribute("src", checkMark);
    checkMarkImg.setAttribute("alt", "check mark");
    lateTaskContainerSecondHalf.setAttribute(
      "class",
      "late-task-container-second-half"
    );
    taskNameContainer.setAttribute("class", "late-task-name-container");
    taskName.setAttribute("class", "late-task-name");
    restOfInformation.setAttribute("class", "late-rest-of-information");
    priorityContainer.setAttribute("class", "late-priority-container");
    priority.setAttribute("class", "late-priority");
    dateContainer.setAttribute("class", "late-date-container");
    date.setAttribute("class", "late-date");
    taskCategoryContainer.setAttribute("class", "late-task-category-container");
    taskCategoryColor.setAttribute("class", "late-task-category-color");
    taskCategory.setAttribute("class", "late-task-category");

    // append elements to dom
    mainContent.appendChild(todayLateContent);
    todayLateContent.appendChild(lateTaskContainer);
    lateTaskContainer.appendChild(lateTaskContainerFirstHalf);
    lateTaskContainerFirstHalf.appendChild(completeIconContainer);
    completeIconContainer.appendChild(completeIcon);
    completeIconContainer.appendChild(checkMarkImg);
    lateTaskContainer.appendChild(lateTaskContainerSecondHalf);
    lateTaskContainerSecondHalf.appendChild(taskNameContainer);
    taskNameContainer.appendChild(taskName);
    taskName.appendChild(taskNameTxt);
    lateTaskContainerSecondHalf.appendChild(restOfInformation);
    restOfInformation.appendChild(priorityContainer);
    priorityContainer.appendChild(priority);
    priority.appendChild(priorityTxt);
    restOfInformation.appendChild(dateContainer);
    dateContainer.appendChild(date);
    date.appendChild(dateTxt);
    restOfInformation.appendChild(taskCategoryContainer);
    taskCategoryContainer.appendChild(taskCategoryColor);
    taskCategoryContainer.appendChild(taskCategory);
    taskCategory.appendChild(taskCategoryTxt);

    // Style elements
    taskCategoryColor.style.backgroundColor =
      taskCategoryLibrary[lateLibrary[i].getCategory()].getColor();
  }
}

// Highlight Today or Late selection function
function highlightTodayOrLateSelection(selection) {
  selection.style.backgroundColor = "#f0eef1";
}

// Remove highlight from Today or Tomorrow selection function
function removeHighlightTodayLateSelection() {
  const today = document.querySelector(".today");
  const late = document.querySelector(".late");
  today.style.backgroundColor = "white";
  late.style.backgroundColor = "white";
}

// CompleteTaskTodaySelection function
function completeTaskToday(taskIndex) {
  const checkMarkToday = document.getElementsByClassName(
    `today-check-mark ${taskIndex}`
  );
  checkMarkToday[0].style.visibility = "visible";
  checkMarkToday[0].style.opacity = "1";
}

// CompleteTaskTodayLateSelection function
function completeTaskLate(taskIndex) {
  const checkMarkLate = document.getElementsByClassName(
    `late-check-mark ${taskIndex}`
  );
  checkMarkLate[0].style.visibility = "visible";
  checkMarkLate[0].style.opacity = "1";
}

export {
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
};
