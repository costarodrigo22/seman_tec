import { Button } from "@/components/ui/Button";
import axios from "axios";
import { useEffect, useState } from "react";

interface IUsers {
  id: string;
  name: string;
  email: string;
  age: number;
  address: string;
}

export function ListUsers() {
  const [data, setData] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState(false);

  async function getData() {
    const response = await axios.get("http://localhost:3000/users");

    setData(response.data);
  }

  async function handleDeleteUser(id: string) {
    setLoading(true);

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);

      await getData();
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-800 flex items-center justify-center">
      {data.map((item) => (
        <div className="bg-red-300 w-[300px]">
          <div className="bg-white flex flex-col">
            <span>
              Name: <strong>{item.name}</strong>
            </span>
            <span>
              {" "}
              Email: <strong>{item.email}</strong>
            </span>
            <span>
              Idade: <strong>{item.age}</strong>
            </span>

            <Button
              onClick={() => handleDeleteUser(item.id)}
              className="w-36 bg-red-500"
            >
              {loading ? "Deletando..." : "Deletar"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
