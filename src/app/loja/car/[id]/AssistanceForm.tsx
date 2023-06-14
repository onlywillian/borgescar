"use client";

import { useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";

interface Props {
  carName: string
}

export default function AssistanceForm({ carName }: Props) {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState<Date | null>();
  const [time, setTime] = useState("");

  async function handleServiceButtonClick() {
    if (!userName || !date || !time) return alert("Preencha todos os campos");

    if (date < new Date()) return alert("Selecione uma data válida");

    const response = await fetch("http://localhost:8000/schedules/new", {
      method: "POST",
      body: JSON.stringify({
        date: date,
        time: time,
        userName: userName,
        carName: carName
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.Error) return alert(data.Error);

    alert("Agendamento Concluído com sucesso!");
  }

  return (
    <div className="h-full bg-aside-bg w-1/4 self-center flex flex-col p-8 gap-2 justify-center">
      <h1 className="font-bold text-2xl self-center">Agendamento</h1>
      <Input
        id="name"
        label="Nome Completo"
        type="text"
        handleInput={setUserName}
      />
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="date"
            className="font-extrabold ml-4 text-sm overflow-hidden"
          >
            Dia de Atendimento
          </label>
          <input
            type="date"
            id="date"
            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
            onChange={(e) => setDate(e.target.valueAsDate)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="time" className="font-extrabold text-sm">
            Horário do atendimento
          </label>
          <select
            id="time"
            className="bg-purple-input border-none outline-0 p-2 rounded text-lg mb-5 text-white"
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Selecione aqui</option>
            <option value="7:00">7:00 AM</option>
            <option value="13:00">13:00 PM</option>
          </select>
        </div>
      </div>

      <Button handleButtonClick={handleServiceButtonClick}>
        Agendar Agora
      </Button>
    </div>
  );
}
