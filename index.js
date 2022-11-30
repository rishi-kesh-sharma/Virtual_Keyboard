import Button from "./Button.js";
import buttons from "./buttons.js";

const btnElements = buttons.map((button) => {
  const { name, value, classes, iconClasses } = button;
  const btnElement = new Button(name, value, classes, iconClasses);
  btnElement.DOM();
  btnElement.listenToClickEvent(button);
  return btnElement;
});
