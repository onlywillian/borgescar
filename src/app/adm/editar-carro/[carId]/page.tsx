"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";

type eventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface Props {
  params: {
    carId: string;
  };
}

export default function NewCar({ params }: Props) {
  const [carData, setCarData] = useState<any>({});
  const router = useRouter();

  const { isAdmAuthenticated } = useContext(AuthContext);

  if (!isAdmAuthenticated) router.push("/adm/login");

  useEffect(() => {
    async function getCarData() {
      const response = await fetch(
        `http://localhost:8000/cars/${params.carId}`
      );
      const data = await response.json();

      setCarData(data.Car);
    }
    getCarData();
  }, []);

  const handleInputChange = (e: eventType | ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    // Inserindo com base no id
    setCarData((prevUserData: any) => ({ ...prevUserData, [id]: value }));
  };

  async function handleDeleteButtonClick(e: MouseEvent) {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/cars/remove", {
      method: "delete",
      body: JSON.stringify({ id: params.carId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return router.push("adm/carros");
  }

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

    // Mandando a requisição
    const response = await fetch("http://localhost:8000/cars/update", {
      method: "PUT",
      body: JSON.stringify(carData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.Error) return alert("Erro: " + data.Error);

    return alert("Update completo criado com sucesso!");
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
              defaultValue={carData.name}
            />
            <>
              <label htmlFor="espec" className="font-bold ml-4">
                Descrição
              </label>
              <textarea
                id="description"
                className="h-1/5 w-full resize-none border-none bg-purple-input rounded-xl text-white p-2 outline-0"
                placeholder="Descrição completa do veículo"
                onChange={(e) => handleInputChange(e)}
                defaultValue={carData.description}
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
              <option value={carData.type}>{carData.type}</option>
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
              defaultValue={carData.price}
            />
            <Input
              id="stock"
              label="Estoque (Unidades)"
              type="number"
              placeholder="Ex: 10"
              handleChange={handleInputChange}
              defaultValue={carData.stock}
            />
            <Link href={`/adm/editar-carro/atualizar-imagens/${carData.id}`} className="flex justify-center">
              <Button>Atualizar Imagens</Button>
            </Link>
          </div>
        </div>
        <div className="flex gap-10 w-full justify-center">
          <Button
            handleButtonClick={(e: MouseEvent) => handleDeleteButtonClick(e)}
          >
            Deletar Veículo
          </Button>
          <Button>Salvar Alterações</Button>
        </div>
      </form>
    </>
  );
}
