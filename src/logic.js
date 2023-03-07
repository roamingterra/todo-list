const {
  format,
  differenceInDays,
  differenceInYears,
  parseISO,
} = require("date-fns");

// taskCategory factory function (creates task category objects, which will contain tasks)
// properties: title (received from user form), color (received from user form), array of tasks
// methods: getTitle, getColor, getTasks (get tasks from tasks array), setTitle, setColor, setTask (add task to tasks array),
function taskCategoryFactory(title, color) {
  const tasksArray = [];
  let isSelected = false;

  const getTitle = () => title;
  const getColor = () => color;
  const getTasks = () => tasksArray;
  const getIsSelected = () => isSelected;
  const setTitle = (newTitle) => (title = newTitle);
  const setColor = (newColor) => (color = newColor);
  const setTask = (newTask) => tasksArray.push(newTask);
  const setIsSelected = (booleanValue) => (isSelected = booleanValue);
  const removeTask = (taskIndex) => tasksArray.splice(taskIndex, 1);

  return {
    getTitle,
    getColor,
    getTasks,
    getIsSelected,
    setTitle,
    setColor,
    setTask,
    setIsSelected,
    removeTask,
  };
}

// task factory function (creates tasks that the user creates, which will be placed in a taskCategory)
// properties: title (received from user form), description (received from user form),
//             category (received from user form), dueDate (received from user form),
//             priority (received from user form)
// methods: getTitle, getDescription, getCategory, getDueDate, getPriority
//          setTitle, setDescription, setCategory, setDueDate, setPriority
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

// Array that holds all task category objects
const taskCategoryLibrary = [];
const taskCategoryLibraryStringified = localStorage.setItem(
  "taskCategoryLibrary",
  JSON.stringify(taskCategoryLibrary)
);

// Function to check if there are five task category objects in array
function checkTaskCategoryLibraryFull() {
  if (taskCategoryLibrary.length === 5) return true;
  else return false;
}

// Add new task category function
function addNewTaskCategory() {
  const dummyTaskCategory = taskCategoryFactory("Category", "#000000");
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

// today array (contains all task objects that have dueDate of todays date)
const todayLibrary = [];

// late array (contains all task objects that have a dueDate earlier that todays date)
const lateLibrary = [];

// Sort tasks into today array function (sends task object to appropriate arrays)
// NOTE: Something to consider is that when a new day comes along, certain task objects will need to be automatically
//       placed into either the today array, or the late array.
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
// NOTE: Something to consider is that when a new day comes along, certain task objects will need to be automatically
//       placed into either the today array, or the late array.
function sortTasksLate() {
  // Clear lateLibrary array
  lateLibrary.length = 0;
  // Create new today date
  const today = format(new Date(), "yyyy-MM-dd");
  // Iterate through each task category and each task and determine which ones are late,
  // and place late tasks in the late array
  for (let i = 0; i < taskCategoryLibrary.length; i++) {
    for (let j = 0; j < taskCategoryLibrary[i].getTasks().length; j++) {
      if (taskCategoryLibrary[i].getTasks()[j].getDueDate() < today) {
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

// changeTheme function (changes UI to dark mode or light mode )

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
  taskCategoryLibraryStringified,
  taskCategoryFactory,
  taskFactory,
  checkTaskCategoryLibraryFull,
  addNewTaskCategory,
  SelectTaskCategory,
  removeTaskCategorySelection,
  findTaskCategoryIndexIsSelected,
  returnIndexTaskCategoryValue,
  moveTaskNewTaskCategory,
  updateTaskIndicesOfTaskCategory,
  formatDate,
  todayLibrary,
  lateLibrary,
  sortTasksToday,
  sortTasksLate,
  getDirectionOfWindowResize,
};
