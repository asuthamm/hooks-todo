import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(users => setusers(users));
  }, []);

  return users;
}