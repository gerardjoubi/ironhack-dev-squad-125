export default class User {
  constructor(n) {
    this.name = this.register();
    this.score = 0;
  }
  register() {
    // return window.prompt("your:name");
    return "toto";
  }
}
