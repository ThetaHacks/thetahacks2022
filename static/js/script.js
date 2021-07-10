let navBtn = document.getElementById("navBtn");
let sidebar = document.querySelector(".sidebar");

navBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (navBtn.classList.contains("bx-menu")) {
    navBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    navBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
};
