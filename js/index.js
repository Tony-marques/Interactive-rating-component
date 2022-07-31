// VARIABLES
const submitBtn = document.querySelector("#btn-submit");
const inputs = document.querySelectorAll(".note");
const view1 = document.querySelector(".view1");
const view2 = document.querySelector(".view2");
const resultNote = document.querySelector(".result-note");

let inputSelected;

// FONCTIONS
const submitHandler = () => {
  let checked = false;

  inputs.forEach((input) => {
    if (input.checked) {
      inputSelected = input.value;
      console.dir(inputSelected);
      checked = true;
    } else if (!input.checked && !inputSelected) {
      checked = false;
    }
  });
  console.log(checked);
  if (!checked) {
    alert("Merci de choisir une note");
  } else {
    displayResult(inputSelected);
    changeView();
  }
};

const displayResult = (inputSelected) => {
  resultNote.innerHTML = `You selected ${inputSelected} out of 5`;
};

const changeView = () => {
  view1.classList.toggle("visible");
  view1.style.visibility = "hidden";
  view2.classList.toggle("visible");
};

// LISTENER
submitBtn.addEventListener("click", submitHandler);
