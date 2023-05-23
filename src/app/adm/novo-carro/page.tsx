"use client";

import Input from "@/components/Input";
import Aside from "@/components/Aside";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";

type eventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export default function NewCar() {
  const [carData, setCarData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    stock: "",
  });

  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  const handleInputChange = (e: eventType) => {
    const { id, value } = e.target;

    // Inserindo com base no id
    setCarData((prevUserData) => ({ ...prevUserData, [id]: value }));
  };

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();

    // inserindo as imagens
    formData.append("image1", file1 as File);
    formData.append("image2", file2 as File);
    formData.append("image3", file3 as File);

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

    console.log(data);
  }

  return (
    <>
      <main className="flex">
        <Aside />
        <form
          className="flex p-20 justify-between w-full flex-col"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="flex w-full h-full justify-between">
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
            <div className="flex flex-col justify-center w-1/3">
              {/* Upload de imagens */}
              <label>Imagem 1</label>
              <input
                type="file"
                name="image1"
                className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                onChange={(e) => setFile1(e.target.files![0])}
                accept="image/*"
              />
              <label>Imagem 2</label>
              <input
                type="file"
                name="image1"
                className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                onChange={(e) => setFile2(e.target.files![0])}
                accept="image/*"
              />
              <label>Imagem 3</label>
              <input
                type="file"
                name="image1"
                className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                onChange={(e) => setFile3(e.target.files![0])}
                accept="image/*"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <Button>Cadastrar Veículo</Button>
          </div>
        </form>
      </main>
    </>
  );
}
