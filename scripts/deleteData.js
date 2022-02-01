document.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    let data = JSON.parse(localStorage.getItem("data"));
    let filter = data.filter((obj) => obj.date !== e.target.dataset.id);
    localStorage.setItem("data", JSON.stringify(filter));
    $table.querySelector("tbody").innerHTML = " ";
    showData();
  }
});
