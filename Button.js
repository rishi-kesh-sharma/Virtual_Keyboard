const textContainer = document.querySelector(".text-container");

class Button {
  constructor(name, value, classes, iconClasses) {
    this.name = name;
    this.classes = classes;
    if (iconClasses) this.iconClasses = iconClasses;
    this.value = value;
    this.element = null;
  }

  DOM() {
    const keyboard = document.querySelector(".keyboard");
    this.element = document.createElement("button");
    this.classes.forEach((item) => {
      this.element.classList.add(item);
    });
    if (this.iconClasses) {
      const icon = document.createElement("i");
      this.iconClasses.forEach((item) => {
        icon.classList.add(item);
      });
      this.element.append(icon);
    } else {
      this.element.textContent = this.name;
    }
    keyboard.append(this.element);
  }

  listenToClickEvent(button) {
    this.element.addEventListener("click", function (e) {
      // console.log(button.name);
      switch (button.name) {
        case "backspace": {
          const textArray = textContainer.textContent.split("").slice(0, -1);
          // console.log(textArray);
          const text = textArray.join("");
          textContainer.textContent = text;
          console.log(text);
          break;
        }
        case "enter": {
          console.log(button.name);
          let text = textContainer.textContent;
          text = text + "<br/>";
          textContainer.innerHTML = text;
          console.log(text);
          break;
        }
        default: {
          const text = textContainer.textContent;
          textContainer.textContent = text + button.value;
        }
      }
    });
  }
}

export default Button;
