import React from "react";
import useFetch from "../useFetch";

export default function DataLoader() {
  const users = useFetch("https://api.github.com/users");

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
}
