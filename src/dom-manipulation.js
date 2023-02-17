// Imports
import tallyMark3 from "./images/tally-mark-3.png";
import sunHollow from "./images/sun-hollow.svg";
import infoDark from "./images/info-dark.png";
import todayPNG from "./images/today.png";
import latePNG from "./images/late.png";
import plus from "./images/plus.png";
import circleDark from "./images/circle-dark.png";

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

  const taskCategory = document.createElement("div"); // Built in task category for testing purposes
  const taskCategoryIcon = document.createElement("img");
  const taskCategoryTxtContainer = document.createElement("div");
  const TaskCategoryTxt = document.createTextNode("General");

  const mainContent = document.createElement("div");

  // add attributes
  container.setAttribute("id", "container");
  topBar.setAttribute("id", "top-bar");
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

  taskCategory.setAttribute("class", "task-category grow-2"); // Built in task category for testing purposes
  taskCategoryIcon.setAttribute("class", "task-category-icon");
  taskCategoryIcon.setAttribute("src", circleDark);
  taskCategoryIcon.setAttribute("alt", "task category icon");

  mainContent.setAttribute("id", "main-content");

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
  newTaskCategories.appendChild(taskCategory);
  taskCategory.appendChild(taskCategoryIcon);
  taskCategory.appendChild(taskCategoryTxtContainer);
  taskCategoryTxtContainer.appendChild(TaskCategoryTxt);
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
    console.log("works negative");
    mainContent.style.gridColumn = "1 / 3";
    sideBar.style.width = "0";
    sideBar.style.padding = "0";
    todayLate.style.width = "0";
    taskCategories.style.width = "0";
  }
  if (document.body.offsetWidth > 800 && windowResizeDirection > 0) {
    console.log("works positive");
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
// today function (for loading the today tab which contains all tasks that are due today)
// declare elements
// add attributes
// append elements to dom

// late function (for loading the late tab which contains all tasks that were due before the present date and have not been completed yet)
// declare elements
// add attributes
// append elements to dom

// taskCategory function (for loading the content of a taskCategory that has been selected)
// declare elements
// add attributes
// append elements to dom

export { dashboard, windowResizeSideBar, buttonSideBar };
