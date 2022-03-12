const btn = document.getElementById("btn");
const toast = document.getElementById("toast");
const bodyTag = document.querySelector("body");
let click = false;

btn.addEventListener("mouseover", () => {
  toast.style.display = "flex";

  btn.addEventListener("mouseleave", () => {
    toast.style.display = "none";
  });
});

const mobileFooterTag = document.querySelector(".mobileFooter");
let bodyWidth = bodyTag.clientWidth;

if (bodyWidth <= 500) {
  mobileFooterTag.classList.remove("d-none");
} else {
  mobileFooterTag.classList.add("d-none");
}

window.addEventListener("resize", (e) => {
  bodyWidth = bodyTag.clientWidth;
  if (bodyWidth <= 500) {
    mobileFooterTag.classList.remove("d-none");
    return;
  }

  if (bodyWidth > 500) {
    mobileFooterTag.classList.add("d-none");
    return;
  }
});
