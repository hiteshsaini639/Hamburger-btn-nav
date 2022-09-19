const msg = document.getElementById("msg");
const text = "My name is hitesh saini, i love coding!💜💛💙🧡   ";
let index = 0;

(() => {
  setInterval(() => {
    msg.innerText = text.slice(0, index);
    index++;
    if (index > text.length - 1) {
      index = 0;
    }
  }, 100);
})();
