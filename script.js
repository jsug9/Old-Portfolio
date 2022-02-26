function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.querySelectorAll(".nav-bar-item").forEach(n => n.addEventListener("click", () => {
  document.getElementById("myNav").style.width = "0%";
}))