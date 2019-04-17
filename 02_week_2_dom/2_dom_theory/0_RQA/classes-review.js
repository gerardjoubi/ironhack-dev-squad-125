class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
class Player extends User {
  constructor(name, email, alias) {
    super(name, email);
    this.alias = alias;
    this.score = 0;
    this.badges = [];
  }
  setScore(val) {
      this.score = val;
  }
  grandBadge(index) {
      const allowedBadges = ["viking slayer", "saxon nemesis"];
      this.badges.push(allowedBadges[index]);
  }
}
// const u2 = new User("bar", "bar@gmail.com");
// console.log(u1, u2, u3);
const u1 = new User("frank", "admin@mygame.com");
const p1 = new Player("guillaume", "foo@gmail.com", "foodu92");
const p2 = new Player("mimi", "bar@gmail.com", "bardu93");
const p3 = new Player("chris", "baz@yahoo.com", "bazdu18eme");
console.log(u1);
console.log(p1);
console.log(p3);
p1.isExceptional = true;
p1.setScore(10);
p1.grandBadge(0);
console.log(p1);
