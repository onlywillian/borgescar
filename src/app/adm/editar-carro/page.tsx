"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormEvent, useContext, useState } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";

type eventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export default function NewCar() {
  const { isAdmAuthenticated } = useContext(AuthContext);

  if (!isAdmAuthenticated) redirect("/adm/login");

  const [carData, setCarData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    stock: "",
  });

  const handleInputChange = (e: eventType) => {
    const { id, value } = e.target;

    // Inserindo com base no id
    setCarData((prevUserData) => ({ ...prevUserData, [id]: value }));
  };

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    if (
      !carData.name ||
      !carData.description ||
      !carData.type ||
      !carData.price ||
      !carData.stock
    )
      return alert("Preencha todos os campos!");

    const formData = new FormData();

    // Inserindo os dados do formulário
    formData.append("name", carData.name);
    formData.append("description", carData.description);
    formData.append("type", carData.type);
    formData.append("price", carData.price);
    formData.append("stock", carData.stock);

    // Mandando a requisição
    const response = await fetch("http://localhost:8000/cars/new", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.Error) return alert("Erro: " + data.Error);

    return alert("Carro criado com sucesso!");
  }

  return (
    <>
      <form
        className="flex p-20 justify-between w-full flex-col"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex w-full h-full justify-center">
          <div className="flex flex-col justify-center w-1/3">
            <Input
              id="name"
              label="Nome do Veiculo"
              type="text"
              placeholder="Ex: Aston Martin Vulcan"
              handleChange={handleInputChange}
            />
            <>
              <label htmlFor="espec" className="font-bold ml-4">
                Especificações
              </label>
              <textarea
                id="description"
                className="h-1/5 resize-none border-none bg-purple-input rounded-xl text-white p-2 outline-0"
                placeholder="Descrição completa do veículo"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </>
            <Input
              id="type"
              label="Tipo do Veiculo"
              type="text"
              placeholder="Ex: Esportivo"
              handleChange={handleInputChange}
            />
            <Input
              id="price"
              label="Preço (Em Reais)"
              type="text"
              placeholder="Ex: 1.000.000"
              handleChange={handleInputChange}
            />
            <Input
              id="stock"
              label="Estoque (Unidades)"
              type="number"
              placeholder="Ex: 10"
              handleChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex gap-10 w-full justify-center">
          <Button>Deletar Veículo</Button>
          <Button>Salvar Alterações</Button>
        </div>
      </form>
    </>
  );
}
