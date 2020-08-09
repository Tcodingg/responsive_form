const burgerMenu = document.querySelector(".burger");
const mainMenu = document.querySelector(".main-menu");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  console.log("burger menu clicked");
  mainMenu.style.display === "block"
    ? (mainMenu.style.display = "none")
    : (mainMenu.style.display = "block");
});

// document.addEventListener("click", (event) => {
//   if (!mainMenu.contains(event.target)|| !burgerMenu.contains(event.target)||) {
//     mainMenu.style.display = "none";
//     console.log("menu close");
//   }
// });

// function hide_menu(e) {
//   if (e.target != mainMenu) {
//     mainMenu.style.display = "none";
//     console.log("closed");
//   }
// }

// document.body.addEventListener("click", hide_menu);
