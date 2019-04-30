import React from "react";
import "./UserDetails.css";

export default function({ currentUser }) {
  return (
    <div className="user-details">
      <h2 className="title">User details</h2>
      {currentUser ? (
        <ul className="list">
          <li className="item"><b>username</b>: {currentUser.name}</li>
          <li className="item"><b>email</b>: {currentUser.email}</li>
          <li className="item"><b>age</b>: {currentUser.age}</li>
          <li className="item">
            <hr />
            <ul className="list">
              <h2 className="title">Hobbies:</h2>
              {currentUser.hobbies.map((hobby, i) => (
                <li className="item" key={i}>
                  {hobby}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ) : (
        <p>no details yet</p>
      )}
    </div>
  );
}
