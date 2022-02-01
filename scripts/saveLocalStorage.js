function saveLocalStorage(obj) {
  let arr = Object.keys(obj);
  if (arr.length === 6) {
    addLocalStorage(obj);
    record = {};
    alert("Se guardó correctamente");
  } else {
    return alert("Por favor llena todos los campos");
  }
}

const addLocalStorage = (obj) => {
  obj.date = new Date().toLocaleTimeString();
  db.push(obj);
  localStorage.setItem("data", JSON.stringify(db));
};

let $btn = document.querySelector("button");
$btn.addEventListener("click", () => {
  saveLocalStorage(record);
});
