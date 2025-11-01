import React from "react";
import { Link } from "react-router-dom";

function UserList() {
  const users = [
    { id: 1, name: "Tejaswarrao" },
    { id: 2, name: "Prasanna" },
    { id: 3, name: "Sai Teja" },
    { id: 4, name: "Abhishek" },
    { id: 5, name: "Dhilli Rao" }
  ];

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
