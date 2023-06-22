"use client";

import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

import Button from "@/components/Button";

interface Props {
  carName: string;
}

export default function AssistanceForm({ carName }: Props) {
  const [date, setDate] = useState<Date | null>();
  const [time, setTime] = useState("");

  const { user } = useContext(AuthContext);

  async function handleServiceButtonClick() {
    if (!date || !time) return alert("Preencha todos os campos");

    const tratedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    );

    if (tratedDate < new Date()) return alert("Selecione uma data válida");

    const response = await fetch("http://localhost:8000/schedules/new", {
      method: "POST",
      body: JSON.stringify({
        date: tratedDate,
        time: time,
        userName: user?.name,
        carName: carName,
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
      <label
        htmlFor="name"
        className="font-extrabold ml-4 text-sm overflow-hidden"
      >
        Nome Completo
      </label>
      <input
        id="name"
        type="text"
        className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
        readOnly
        value={user?.name}
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
