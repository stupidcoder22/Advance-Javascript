const form = document.querySelector(".form");
const inputText = document.getElementById("inputText");
const todolist = document.querySelector(".todolist");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const textval = inputText.value;
  inputText.value = "";
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="text">${textval}</span>
        <div class="todolistbtn">
            <button class="todobtn done">Done</button>
            <button class="todobtn remove">Remove</button>
        </div>
        `;
  todolist.append(li);
});

todolist.addEventListener("click", (e) => {
  //   console.log(e.target.classList);
  if (e.target.classList.contains("done")) {
    const spantarget = e.target.parentNode.previousElementSibling;
    spantarget.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const targetli = e.target.parentNode.parentNode;
    targetli.remove();
  }
});
