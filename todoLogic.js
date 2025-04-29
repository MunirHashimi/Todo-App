
function addtodo() {
    let decide = document.querySelector("#Decide");
    let from = document.querySelector("#from");
    let to = document.querySelector("#to");
    let taskBody = document.querySelector("#taskBody");

    if (!decide.value || !from.value || !to.value) {
      alert("Please fill all fields!");
      return;
    }

    let row = taskBody.insertRow();
    row.insertCell(0).innerText = decide.value;
    row.insertCell(1).innerText = from.value;
    row.insertCell(2).innerText = to.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("btn", "btn-danger", "btn-sm");
    delBtn.onclick = () => row.remove();
    row.insertCell(3).appendChild(delBtn);

    decide.value = "";
    from.value = "";
    to.value = "";
  }