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
function taskFactory(title, description, category, dueDate, priority) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getCategory = () => category;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const setTitle = (newTitle) => (title = newTitle);
  const setDescription = (newDescription) => (description = newDescription);
  const setCategory = (newCategory) => (category = newCategory);
  const setDueDate = (newDueDate) => (dueDate = newDueDate);
  const setPriority = (newPriority) => (priority = newPriority);

  return {
    getTitle,
    getDescription,
    getCategory,
    getDueDate,
    getPriority,
    setTitle,
    setDescription,
    setCategory,
    setDueDate,
    setPriority,
  };
}

// Array that holds all task category objects
const taskCategoryLibrary = [];

// Function to check if there are five task category objects in array
function checkTaskCategoryLibraryFull() {
  if (taskCategoryLibrary.length === 5) return true;
  else return false;
}

// Edit task category name function
function editTaskCategoryName(event) {
  taskCategoryLibrary[event.target.classList[1]].setTitle(
    event.target.textContent
  );
}

// Edit task category icon color function
function editTaskCategoryIconColor(event) {
  taskCategoryLibrary[event.target.classList[1]].setColor(event.target.value);
}

// Remove task category function
function removeTaskCategory(event) {
  taskCategoryLibrary.splice(event.target.classList[1], 1);
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

// late array (contains all task objects that have a dueDate earlier that todays date)

// setComplete function (sets task as complete and deletes it from all arrays that contain it)
// This function performs an animation before deleting it unlike the next function...

// deleteTask function (deletes task from all arrays that contains it)

// organizeTask function (sends task object to appropriate arrays)
// NOTE: Something to consider is that when a new day comes along, certain task objects will need to be automatically
//       placed into either the today array, or the late array.

// editTask function (receives data from user form, then calls task set methods to change the appropriate properties)

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
  formatDate,
  getDirectionOfWindowResize,
};
