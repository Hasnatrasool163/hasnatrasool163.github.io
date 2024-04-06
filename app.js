const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}
hamburgerButton.addEventListener("click", toggleButton);

dayNightTheme = () => {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
};

window.addEventListener("load", dayNightTheme);
