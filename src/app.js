import Signup from "./components/signup.js";
import Signin from "./components/signin.js";

class App {
  constructor(body) {
    this.signin = new Signin(body);
    this.signup = new Signup(body);
  }
  init() {
    this.signin.render();
    this.addEventListener();
  }
  addEventListener() {
    this.signinEvents();
    this.signupEvents();
  }
  signinEvents() {
    this.signin.on("error", () => alert("Authentication error"));
    this.signon.on("signin", (token) => {
      localStorage.setItem("token", `JWT ${token}`);
      alert("You are logged in!");
    });
    this.signin.on("signup", () => this.signup.render());
  }
  signupEvents() {
    this.signup.on("error", () => alert("Register error"));
    this.signup.on("signup", (user) => {
      alert(`${user.name} you are registered!`);
      this.signin.render();
    });
  }
}

module.exports = App;
