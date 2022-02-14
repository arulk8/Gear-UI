const bar = document.querySelector("#barIcon");
const closeBtn = document.querySelector("#closeIcon");

const modalClose = document.querySelectorAll("#modalClose");
const modalShow = document.querySelector("#modalShow");
const backdrop = document.querySelector(".backdrop");
modalClose.forEach((node) => {
  node.addEventListener("click", (e) => {
    backdrop.classList.add("hide");
  });
});
modalShow.addEventListener("click", (e) => {
  backdrop.classList.remove("hide");
});

const leftNav = document.querySelector(".left-aside");

bar.addEventListener("click", (e) => {
  leftNav.style.display = "block";
  bar.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  leftNav.style.display = "none";
  bar.style.display = "block";
  closeBtn.style.display = "none";
});
