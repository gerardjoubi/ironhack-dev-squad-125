/* this baby step patter can work but will quickly seems cumbersome */
/* we can provide a better way with class (es6) (previously constructor functions in es5) */

const user = {
    firstName: "gui",
    lastName: "amg",
    pet: null,
    age: 38,
    getInfos: function() {
      return `user infos: ${this.firstName} ${this.lastName} - ${
        this.age
      } !!!`;
    }
};
const user1 = {
  firstName: "foo",
  lastName: "bar",
  age: 38,
  getInfos: function () {
    return `user infos: ${this.firstName} ${this.lastName} - ${
      this.age
      } !!!`;
  }
};
const user3 = {
  firstName: "bar",
  lastName: "amg",
  age: 38,
  getInfos: function () {
    return `user infos: ${this.firstName} ${this.lastName} - ${
      this.age
      } !!!`;
  }
};
// helloWorld => camelCase : traditionaly used in JS
// hello_world => snake_case
// kebab-case => kebab-case

// user = {}; error cause if you try to reassign a value to a constant var
console.log(user);
console.log(this); // what ????
console.log(user.getInfos())
