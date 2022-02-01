const D = document;
const F = document.querySelector("form");

let db = [];
let record = {};

// window.localStorage.setItem(1, JSON.stringify(entry));
// let data = localStorage.getItem(1);

function createObject() {
  let val = this.value;
  switch (this.name) {
    case "name":
      record.name = val;
      break;
    case "rut":
      record.rut = val;
      break;
    case "registrationCar":
      record.registrationCar = val;
      break;
    case "brandCar":
      record.brandCar = val;
      break;
    case "modelCar":
      record.modelCar = val;
      break;
    case "colorCar":
      record.colorCar = val;
      break;
    default:
      console.error("There is an error");
  }
}

function setUp() {
  // $abc means HTML elements
  let $imputs = Array.from(F.querySelectorAll("input"));
  let $selects = Array.from(F.querySelectorAll("select"));

  //Add event for creating an object
  for (let val of $imputs) {
    val.addEventListener("change", createObject);
  }

  for (let val1 of $selects) {
    val1.addEventListener("change", createObject);
  }
}

function submit(e) {
  e.preventDefault();
  return;
}

D.addEventListener("DOMContentLoaded", setUp);
F.addEventListener("submit", submit);
