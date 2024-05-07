import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useState } from "react";

export function EditUser() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  function handleNameChange(name: string) {
    setName(name);
  }

  function handleAddressChange(address: string) {
    setAddress(address);
  }

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function handleAgeChange(age: string) {
    setAge(Number(age));
  }

  async function handleAddUser() {
    setLoading(true);

    const obj = {
      name,
      email,
      age,
      address,
    };

    try {
      await axios.post("http://localhost:3000/users", obj);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);

      setName("");
      setEmail("");
      setAddress("");
      setAge(0);
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form action="" className="w-1/4 gap-4 flex flex-col">
        <Label className="text-lg">Editando um usuário</Label>

        <Input
          value={name}
          onChange={(event) => handleNameChange(event.target.value)}
          placeholder="Nome"
          className=""
        />
        <Input
          value={address}
          onChange={(event) => handleAddressChange(event.target.value)}
          placeholder="Endereço"
          className=""
        />

        <div className="flex flex-row gap-4">
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(event) => handleEmailChange(event?.target.value)}
          />
          <Input
            value={age}
            onChange={(event) => handleAgeChange(event.target.value)}
            placeholder="Idade"
            type="number"
          />
        </div>

        <Button type="button" className="w-full" onClick={handleAddUser}>
          {loading ? "Carregando..." : "Adicionar"}
        </Button>
      </form>
    </div>
  );
}
