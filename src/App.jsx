import { useState } from "react";
import { Users } from "./users";
import Table from "./Table";

export default function App() {
  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="container mx-auto border w-[90%] text-center">
      <input
        type="text"
        placeholder="search"
        className="border p-2"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((item) => (
          <li key={item.id}>{item.first_name}</li>
        ))}
      </ul> */}
      <Table data={search(Users)} />
    </div>
  );
}
