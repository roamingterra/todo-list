// Imports
import {
  dashboard,
  windowResizeSideBar,
  buttonSideBar,
} from "./dom-manipulation.js";
import { getDirectionOfWindowResize } from "./logic.js";
import "./style.css";

dashboard();

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
