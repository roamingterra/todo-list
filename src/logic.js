const {
  format,
  differenceInDays,
  differenceInYears,
  parseISO,
} = require("date-fns");

// Array that holds all task category objects
const taskCategoryLibrary = [];

// today array (contains all task objects that have dueDate of todays date)
const todayLibrary = [];

// late array (contains all task objects that have a dueDate earlier that todays date)
const lateLibrary = [];

// taskCategory factory function (creates task category objects, which will contain tasks)
function taskCategoryFactory(title, color, index) {
  const tasksArray = [];
  let isSelected = false;

  const getTitle = () => title;
  const getColor = () => color;
  const getIndex = () => index;
  const getTasks = () => tasksArray;
  const getIsSelected = () => isSelected;
  const setTitle = (newTitle) => (title = newTitle);
  const setColor = (newColor) => (color = newColor);
  const setIndex = (newIndex) => (index = newIndex);
  const setTask = (newTask) => tasksArray.push(newTask);
  const setIsSelected = (booleanValue) => (isSelected = booleanValue);
  const removeTask = (taskIndex) => tasksArray.splice(taskIndex, 1);

  return {
    getTitle,
    getColor,
    getIndex,
    getTasks,
    getIsSelected,
    setTitle,
    setColor,
    setIndex,
    setTask,
    setIsSelected,
    removeTask,
  };
}

// task factory function (creates tasks that the user creates, which will be placed in a taskCategory)
function taskFactory(
  title,
  description,
  category,
  dueDate,
  priority,
  taskIndex
) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getCategory = () => category;
  const getCategoryTitle = () => taskCategoryLibrary[getCategory()].getTitle();
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getTaskIndex = () => taskIndex;
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setCategory = (newCategory) => (category = newCategory);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);
  const setTaskIndex = (newTaskIndex) => (taskIndex = newTaskIndex);

  return {
    getTitle,
    getDescription,
    getCategory,
    getCategoryTitle,
    getDueDate,
    getPriority,
    getTaskIndex,
    setTitle,
    setDescription,
    setCategory,
    setDueDate,
    setPriority,
    setTaskIndex,
  };
}

// Function to check if there are five task category objects in array
function checkTaskCategoryLibraryFull() {
  if (taskCategoryLibrary.length === 5) return true;
  else return false;
}

// Add new task category function
function addNewTaskCategory(taskCategoryIndex) {
  const dummyTaskCategory = taskCategoryFactory(
    "Category",
    "#000000",
    taskCategoryIndex
  );
  taskCategoryLibrary.push(dummyTaskCategory);
}

// Select task category function
function SelectTaskCategory(indexValue) {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    taskCategoryLibrary[indexValue].setIsSelected(true);
  }
}

// Set the task category in the array that is found to be true to false
function removeTaskCategorySelection() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    if (taskCategoryLibrary[i].getIsSelected()) {
      taskCategoryLibrary[i].setIsSelected(false);
    }
  }
}

// Find and return index of task category that is selected
function findTaskCategoryIndexIsSelected() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    if (taskCategoryLibrary[i].getIsSelected()) {
      return i;
    }
  }
}

// Return index from task category value
function returnIndexTaskCategoryValue(taskCategoryValue) {
  const regEXP = /(\d+)(?!.*\d)/;
  const result = taskCategoryValue.match(regEXP);
  return result[0];
}

// Move task into new task category
function moveTaskNewTaskCategory(
  taskCategoryIndex,
  taskIndex,
  newTaskCategoryIndex
) {
  // Move element to new task category array
  taskCategoryLibrary[newTaskCategoryIndex].setTask(
    taskCategoryLibrary[taskCategoryIndex].getTasks()[taskIndex]
  );

  // Remove element from original task category array
  taskCategoryLibrary[taskCategoryIndex].removeTask(taskIndex);
}

// Function that iterates through all tasks and task categories and sends them to local storage
function resetTaskCategoryAndTaskLocalStorage() {
  localStorage.clear();
  // Iterate through task category library
  let newTaskIndex = -1;
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    // Create object of primitive elements from task category
    const title = taskCategoryLibrary[i].getTitle();
    const color = taskCategoryLibrary[i].getColor();
    const taskCategoryLocalStorage = { title: title, color: color };
    // Stringify object and send it to local storage
    localStorage.setItem(
      `todoListAppTaskCategory${i}`,
      JSON.stringify(taskCategoryLocalStorage)
    );
    // Iterate through tasks in task category task array (if any)
    for (let j = 0; j < taskCategoryLibrary[i].getTasks().length; j++) {
      newTaskIndex++;
      // Create object of primitive elements from task category
      const title = taskCategoryLibrary[i].getTasks()[j].getTitle();
      const description = taskCategoryLibrary[i].getTasks()[j].getDescription();
      const category = taskCategoryLibrary[i].getTasks()[j].getCategory();
      const dueDate = taskCategoryLibrary[i].getTasks()[j].getDueDate();
      const priority = taskCategoryLibrary[i].getTasks()[j].getPriority();
      const taskIndexStorage = taskCategoryLibrary[i]
        .getTasks()
        [j].getTaskIndex();
      const taskLocalStorage = {
        title: title,
        description: description,
        category: category,
        dueDate: dueDate,
        priority: priority,
        taskIndex: taskIndexStorage,
      };
      // Stringify object and send it to local storage
      localStorage.setItem(
        `todoListAppTask${newTaskIndex}`,
        JSON.stringify(taskLocalStorage)
      );
    }
  }
}

// Local storage getter and object constructor task categories
function getTaskCategoriesLocalStorage() {
  const localStorageKeys = Object.keys(localStorage).filter((key) =>
    key.startsWith("todoListApp")
  );

  if (localStorageKeys.length === 0) {
    return 0;
  }

  // Find out how many task categories are in local storage
  let largestIndex = 0;
  for (let i = 0; i < localStorageKeys.length; i++) {
    const regEXP1 = /todoListAppTaskCategory[0-5]+/i;
    const result1 = localStorageKeys[i].match(regEXP1);
    if (result1 === null) continue;
    const regExp2 = /[0-5]+/i;
    const result2 = result1[0].match(regExp2);
    if (result2[0] > largestIndex) {
      largestIndex = result2[0];
    }
  }

  for (let i = 0; i <= largestIndex; i++) {
    // Get task category local storage object
    const taskCategoryLocalStorage = JSON.parse(
      localStorage.getItem(`todoListAppTaskCategory${i}`)
    );

    // Create task category object from task category retrieved local storage object
    const taskCategory = taskCategoryFactory(
      taskCategoryLocalStorage.title,
      taskCategoryLocalStorage.color
    );
    // Place task category object in taskCategoryLibrary array
    taskCategoryLibrary[i] = taskCategory;
  }
}

// Local storage getter and object constructor of tasks
function getTaskLocalStorage() {
  const localStorageKeys = Object.keys(localStorage).filter((key) =>
    key.startsWith("todoListApp")
  );

  if (localStorage.getItem(`todoListAppTask${0}`) === null) {
    return 0;
  }

  let largestIndex = 0;
  for (let i = 0; i < localStorageKeys.length; i++) {
    const regEXP1 = /task[0-9]+/i;
    const result1 = localStorageKeys[i].match(regEXP1);
    if (result1 === null) {
      continue;
    }
    const regExp2 = /[0-9]+/i;
    const result2 = result1[0].match(regExp2);
    if (result2[0] > largestIndex) {
      largestIndex = result2[0];
    }
  }

  // Iterate through all of the tasks in local storage
  for (let i = 0; i <= largestIndex; i++) {
    // parse JSON string into object of primitive values
    const taskLocalStorage = JSON.parse(
      localStorage.getItem(`todoListAppTask${i}`)
    );
    // create the task
    const task = taskFactory(
      taskLocalStorage.title,
      taskLocalStorage.description,
      taskLocalStorage.category,
      taskLocalStorage.dueDate,
      taskLocalStorage.priority,
      taskLocalStorage.taskIndex
    );
    // Place task in the appropriate taskCategory task array
    taskCategoryLibrary[taskLocalStorage.category].getTasks()[
      taskLocalStorage.taskIndex
    ] = task;
  }
}

// update indices of tasks of a task category
function updateTaskIndicesOfTaskCategory(taskCategoryIndex) {
  for (
    let i = 0;
    i < taskCategoryLibrary[taskCategoryIndex].getTasks().length;
    i++
  ) {
    taskCategoryLibrary[taskCategoryIndex].getTasks()[i].setTaskIndex(i);
  }
}

// Update task category indices of tasks
function updateTaskCategoryIndicesOfTasks() {
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    for (let j = 0; j < taskCategoryLibrary[i].getTasks().length; j++) {
      taskCategoryLibrary[i].getTasks()[j].setCategory(i);
    }
  }
}

// format date
function formatDate(date) {
  const today = format(new Date(), "yyyy-MM-dd");
  const differenceDays = differenceInDays(parseISO(date), parseISO(today));
  const differenceYears = differenceInYears(parseISO(date), parseISO(today));

  if (date === "") {
    return "";
  }
  if (differenceDays < 0) {
    return format(parseISO(date), "LLL dd yyyy") + " !!!";
  }

  if (differenceDays === 0) {
    return "today";
  }

  if (differenceDays === 1) {
    return "tomorrow";
  }

  if (differenceDays > 1 && differenceDays < 7) {
    return format(parseISO(date), "EEEE");
  }

  if (differenceDays >= 7 && differenceYears === 0) {
    return format(parseISO(date), "LLL dd");
  }

  if (differenceYears >= 1) {
    return format(parseISO(date), "LLL dd yyyy");
  }
}

// Sort tasks into today array function (sends task object to appropriate arrays)
function sortTasksToday() {
  // Clear todayLibrary array
  todayLibrary.length = 0;
  // Create new today date
  const today = format(new Date(), "yyyy-MM-dd");
  // Iterate through each task category and each task and determine which ones are due today,
  // and place tasks due today in the today array
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    for (let j = 0; j < taskCategoryLibrary[i].getTasks().length; j++) {
      if (taskCategoryLibrary[i].getTasks()[j].getDueDate() === today) {
        todayLibrary.push(taskCategoryLibrary[i].getTasks()[j]);
      }
    }
  }
  // Sort today array based on priority
  for (let i = 0; i < todayLibrary.length; i++) {
    for (let j = i; j < todayLibrary.length; j++) {
      if (todayLibrary[i].getPriority() > todayLibrary[j].getPriority()) {
        [todayLibrary[i], todayLibrary[j]] = [todayLibrary[j], todayLibrary[i]];
      }
    }
  }
}

// Sort tasks into late array function (sends task object to appropriate arrays)
function sortTasksLate() {
  // Clear lateLibrary array
  lateLibrary.length = 0;
  // Create new today date
  const today = format(new Date(), "yyyy-MM-dd");
  // Iterate through each task category and each task and determine which ones are late,
  // and place late tasks in the late array
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    for (let j = 0; j < taskCategoryLibrary[i].getTasks().length; j++) {
      if (
        taskCategoryLibrary[i].getTasks()[j].getDueDate() < today &&
        taskCategoryLibrary[i].getTasks()[j].getDueDate() !== ""
      ) {
        lateLibrary.push(taskCategoryLibrary[i].getTasks()[j]);
      }
    }
  }

  // Sort late array based on priority and date
  for (let i = 0; i < lateLibrary.length; i++) {
    for (let j = i; j < lateLibrary.length; j++) {
      if (lateLibrary[i].getDueDate() > lateLibrary[j].getDueDate()) {
        [lateLibrary[i], lateLibrary[j]] = [lateLibrary[j], lateLibrary[i]];
      } else if (
        (lateLibrary[i].getDueDate() === lateLibrary[j].getDueDate() &&
          lateLibrary[i].getPriority() > lateLibrary[j].getPriority()) ||
        (lateLibrary[i].getPriority() === "" &&
          lateLibrary[j].getPriority() !== "")
      ) {
        [lateLibrary[i], lateLibrary[j]] = [lateLibrary[j], lateLibrary[i]];
      }
    }
  }
}

// getDirectionOfWindowResize module (scope of this module is to determine the difference in width of window from when the user begins changing its size, in order to determine whether it is shrinking or growing)
const getDirectionOfWindowResize = (() => {
  let positionWidthLast;
  let newPosition;
  let positionWidthDifference;

  const setPositionWidthLast = (screenWidth) =>
    (positionWidthLast = screenWidth);
  const setNewPosition = (screenWidth) => (newPosition = screenWidth);
  const setPositionWidthDifference = () =>
    (positionWidthDifference = newPosition - positionWidthLast);
  const getPositionWidthDifference = () => positionWidthDifference;

  return {
    setPositionWidthLast,
    setNewPosition,
    setPositionWidthDifference,
    getPositionWidthDifference,
  };
})();

export {
  taskCategoryLibrary,
  todayLibrary,
  lateLibrary,
  taskFactory,
  checkTaskCategoryLibraryFull,
  addNewTaskCategory,
  SelectTaskCategory,
  removeTaskCategorySelection,
  findTaskCategoryIndexIsSelected,
  returnIndexTaskCategoryValue,
  moveTaskNewTaskCategory,
  resetTaskCategoryAndTaskLocalStorage,
  getTaskCategoriesLocalStorage,
  getTaskLocalStorage,
  updateTaskIndicesOfTaskCategory,
  updateTaskCategoryIndicesOfTasks,
  formatDate,
  sortTasksToday,
  sortTasksLate,
  getDirectionOfWindowResize,
};
