'use client'

import Input from "@/components/Input";
import Aside from "@/components/Aside";
import Button from "@/components/Button";
import { FormEvent, useState } from "react";

export default function NewCar() {
  const [carName, setCarName] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [carType, setCarType] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carStock, setCarStock] = useState('');

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const formElement: HTMLFormElement = e.target; 

    const response = await fetch('http://localhost:8000/adms/new', {
      method: 'POST',
      body: new FormData()
    });
  }

  return (
    <>
      <main className="flex">
        <Aside />
        <form className="flex p-20 justify-between w-full flex-col" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="flex w-full h-full justify-between">
            <div className="flex flex-col justify-center w-1/3">
              <Input
                id="nome-veiculo"
                label="Nome do Veiculo"
                type="text"
                placeholder="Ex: Aston Martin Vulcan"
              />
              <>
                <label htmlFor="espec" className="font-bold ml-4">
                  Especificações
                </label>
                <textarea
                  id="espec"
                  className="h-1/5 resize-none border-none bg-purple-input rounded-xl text-white p-2 outline-0"
                  placeholder="Descrição completa do veículo"
                ></textarea>
              </>
              <Input
                id="tipo-veiculo"
                label="Tipo do Veiculo"
                type="text"
                placeholder="Ex: Esportivo"
              />
              <Input
                id="preco-veiculo"
                label="Preço (Em Reais)"
                type="text"
                placeholder="Ex: 1.000.000"
              />
              <Input
                id="estoque-veiculo"
                label="Estoque (Unidades)"
                type="number"
                placeholder="Ex: 10"
              />
            </div>
            <div className="flex flex-col justify-center w-1/3">
              <label>Imagem 1</label>
              <input
                type='file'
                name="img1"
                className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
              />
              {/* <Input id="img1" label="Segunda Imagem do Carro" type="file" />
              <Input id="img1" label="Terceira Imagem do Carro" type="file" /> */}
              {/* <Input id="som" label="Som do Veículo" type="file" /> */}
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
