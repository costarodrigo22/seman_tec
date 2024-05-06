import { ListUsers } from "@/Pages/ListUsers";
import { AddUsers } from "@/Pages/AddUsers";
import { EditUser } from "@/Pages/EditUser";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ListUsers />} />
      <Route path="/add" element={<AddUsers />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  );
}
