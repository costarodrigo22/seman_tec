import axios from "axios";
import { useEffect, useState } from "react";

export function ListUsers() {
  const [data, setData] = useState<any[]>([]);

  async function getData() {
    const response = await axios.get("http://localhost:3000/users");

    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-800">
      {data.map((item) => (
        <>
          <span>{item.name}</span>
          <span>{item.email}</span>
          <span>{item.age}</span>
        </>
      ))}
    </div>
  );
}
