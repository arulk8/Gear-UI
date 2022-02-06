const bar = document.querySelector("#barIcon");
const closeBtn = document.querySelector("#closeIcon");

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
