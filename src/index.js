import App from "./app.js";

window.onload = () => {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  console.dir(footer);
  new App(main, footer).init();
};
