// Урок
// import { alert, notice, info, success, error } from "@pnotify/core";
// import "@pnotify/core/dist/BrightTheme.css";

// const form = document.querySelector("#form");
// const output = document.querySelector("#output");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const email = form.elements.email.value;
//   const name = form.elements.name.value;
//   const tel = form.elements.tel.value;
//   if (email === "" || name === "" || tel === "") {
//     error({
//       text: "I'm an error message.",
//     });
//   }
// });

// Дз

const button = document.querySelector("#button");
const title = document.querySelector("#title");

function forButton(entry) {
  entry.style.color = "green";
}

button.addEventListener("click", () => {
  forButton(title);
  const subtitle = document.createElement("p");
  subtitle.textContent = "Hello";
  subtitle.addEventListener("mouseenter", () => {
    subtitle.style.color = "red";
    subtitle.style.fontWeight = 900;
  });
  document.body.appendChild(subtitle);
});
