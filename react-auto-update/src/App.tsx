import { useEffect, useState } from "react";
import { AddUser, type Account } from "./components/AddUser";
import { UserList, type User } from "./components/UserList";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    axios
      .get<User[]>("http://localhost:4005/users")
      .then(response => setUsers(response.data))
  }, [])

  const addUser = (body: Account) => {
  fetch("http://localhost:4005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(newUser => {
      setUsers(prevUsers => [...prevUsers, newUser])
    })
}

  return (
    <div className="min-h-screen bg-gray-800 text-white p-2">
      <AddUser onAdd={addUser} />
      <UserList users={users} />
    </div>
  )
}