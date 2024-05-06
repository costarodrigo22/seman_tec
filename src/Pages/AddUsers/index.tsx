import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function AddUsers() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form action="" className="w-1/4 gap-4 flex flex-col">
        <Label className="text-lg">Adicione um usuário</Label>

        <Input placeholder="Nome" className="" />
        <Input placeholder="Endereço" className="" />

        <div className="flex flex-row gap-4">
          <Input placeholder="E-mail" />
          <Input placeholder="Idade" type="number" />
        </div>

        <Button type="button" className="w-full">
          Adicionar
        </Button>
      </form>
    </div>
  );
}
