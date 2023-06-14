"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import { redirect } from "next/navigation";

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

  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);

  const handleInputChange = (e: eventType | ChangeEvent<HTMLSelectElement>) => {
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

    if (!file1 || !file2 || !file3 || !file4) return alert("Insira todas as imagens!");

    const formData = new FormData();

    // inserindo as imagens
    formData.append("image1", file1 as File);
    formData.append("image2", file2 as File);
    formData.append("image3", file3 as File);
    formData.append("image4", file4 as File);

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
                className="h-1/5 resize-none border-none mb-5 bg-purple-input rounded-xl text-white p-2 outline-0 placeholder-gray-300"
                placeholder="Descrição completa do veículo"
                onChange={(e) => handleInputChange(e)}
              ></textarea>
            </>
            <label htmlFor="type" className="font-bold ml-4">
              Tipo do veículo
            </label>
            <select
              id="type"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => handleInputChange(e)}
            >
              <option value="">Selecione aqui</option>
              <option value="Carro esportivo">Carro esportivo</option>
              <option value="Crossover">Crossover</option>
              <option value="Minivan">Minivan</option>
              <option value="Picape">Picape</option>
              <option value="Carro conversível">Carro conversível</option>
              <option value="Carro compacto">Carro compacto</option>
              <option value="Carro de corrida">Carro de corrida</option>
              <option value="Carro de rally">Carro de rally</option>
            </select>
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
            <h1 className="text-3xl font-extrabold mb-8">Imagens do Carro</h1>
            {/* Upload de imagens */}
            <label>Imagem da loja (amostra)</label>
            <input
              type="file"
              name="image1"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setFile1(e.target.files![0])}
              accept="image/*"
            />
            <label>Imagem da galeria 1</label>
            <input
              type="file"
              name="image2"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setFile2(e.target.files![0])}
              accept="image/*"
            />
            <label>Imagem da galeria 2</label>
            <input
              type="file"
              name="image3"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setFile3(e.target.files![0])}
              accept="image/*"
            />
            <label>Imagem da galeria 3</label>
            <input
              type="file"
              name="image4"
              className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              onChange={(e) => setFile4(e.target.files![0])}
              accept="image/*"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <Button>Cadastrar Veículo</Button>
        </div>
      </form>
    </>
  );
}
