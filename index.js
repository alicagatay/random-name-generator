import names from "./nameList.js";
import surnames from "./surnameList.js";
let nameGeneratingButton = document.getElementById("nameGenerator");

nameGeneratingButton.addEventListener("click", generateName);
let nameDisplay = document.createElement("p");
document.body.appendChild(nameDisplay);

function generateName() {
  let randomName = names[Math.floor(Math.random() * names.length)];
  let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  let fullName = randomName + " " + randomSurname;
  nameDisplay.innerText = fullName;
}
