import React, { Component } from "react";
import "./App.css";
import User from "./User/User";
import UserDetails from "./UserDetails/UserDetails";
import ListRenderer from "./SimpleListRenderer/SimpleListRenderer";
import users from "./data/users.json";
// import {fruits} from "./data/arrays.js";
// import {letters} from "./data/arrays.js";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: null,
      users: users
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(user) {
    console.log("this data comes from child User component => ", user);
    this.setState({ currentUser: user });
  }

  render() {
    const { users, currentUser } = this.state;
    return (
      <div className="App">
        <div className="users">
          <h2 className="title">Users list</h2>
          <ul className="list">
            {users.map((user, index) => (
              <User user={user} key={index} onClick={this.handleClick} />
            ))}
          </ul>
          <UserDetails currentUser={currentUser} />
        </div>
      </div>
    );
  }
}

// export default function App() {
//   return (
//     <div className="App">
//       <ListRenderer list={fruits} background="dodgerblue" />
//       <ListRenderer list={letters} background="#FF851B" />
//       <ListRenderer list={[1, 2, 3, 4]} />
//     </div>
//   );
// }

