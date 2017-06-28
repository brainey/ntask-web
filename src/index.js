import App from "./app.js";

window.onload = () => {
  const main = document.querySelector("main");
  console.dir(main);
  new App(main).init();
};
