let $template = document.querySelector("#crudTemplate").content;
let $fragment = document.createDocumentFragment();
let $table = document.querySelector(".table");

function getData() {
  let data = JSON.parse(localStorage.getItem("data"));
  return data;
}

function showData() {
  let data = getData();
  if (data.length >= 1) {
    data.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    data.forEach((obj, i) => {
      $template.querySelector(".name").textContent = obj.name;
      $template.querySelector(".rut").textContent = obj.rut;
      $template.querySelector(".registrationCar").textContent =
        obj.registrationCar;
      $template.querySelector(".brandCar").textContent = obj.brandCar;
      $template.querySelector(".modelCar").textContent = obj.modelCar;
      $template.querySelector(".colorCar").textContent = obj.colorCar;
      $template.querySelector(".delete-btn").dataset.id = obj.date;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $table.querySelector("tbody").appendChild($fragment);
  } else {
    alert("No hay datos disponibles");
  }
}

document.addEventListener("DOMContentLoaded", showData);
