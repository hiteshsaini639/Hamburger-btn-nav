const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", createNotification);

function createNotification() {
  const div = document.createElement("div");
  div.classList.add("show");
  div.innerText = "Hitesh saini";
  container.appendChild(div);
  (() => {
    setTimeout(() => {
      div.remove();
    }, 3000);
  })();
}
