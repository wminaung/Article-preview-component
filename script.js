const btn = document.getElementById("btn");
const toast = document.getElementById("toast");
let click = false;
btn.addEventListener("mouseover", () => {
  toast.style.display = "flex";

  btn.addEventListener("mouseleave", () => {
    toast.style.display = "none";
  });
});
