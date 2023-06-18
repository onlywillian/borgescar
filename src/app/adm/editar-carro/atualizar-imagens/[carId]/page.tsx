"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface Props {
  params: {
    carId: string;
  };
}

export default function UpdateImages({ params }: Props) {
  const [carInformation, setCarInformation] = useState<any>([]);

  const router = useRouter();

  function returnToPreviouslyPage(e: MouseEvent) {
    router.back();
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://localhost:8000/cars/${params.carId}`
      );
      const data = await response.json();

      console.log(data);
      setCarInformation(data.Car);
    }
    getData();
  }, []);

  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    if (!file1 || !file2 || !file3 || !file4)
      return alert("Insira todas as imagens!");

    const formData = new FormData();

    // inserindo as imagens
    formData.append("image1", file1 as File);
    formData.append("image2", file2 as File);
    formData.append("image3", file3 as File);
    formData.append("image4", file4 as File);

    formData.append("carName", carInformation.name);

    // Mandando a requisição
    const response = await fetch("http://localhost:8000/cars/updateImages", {
      method: "PUT",
      body: formData,
    });
    const data = await response.json();

    if (data.Error) return alert(data.Error);

    return alert("Carro atualizado com sucesso!");
  }

  return (
    <>
      <form
        className="flex p-20 justify-between w-full flex-col"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col justify-center w-1/3">
            <h1 className="text-3xl font-extrabold mb-8">Imagens do Carro</h1>
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
          <div className="flex gap-10">
            <Button
              handleButtonClick={(e: MouseEvent) => returnToPreviouslyPage(e)}
            >
              Voltar
            </Button>
            <Button>Salvar Imagens</Button>
          </div>
        </div>
      </form>
    </>
  );
}
