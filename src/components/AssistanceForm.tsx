"use client";

import { useState } from "react";

import Button from "./Button";
import Input from "./Input";

export default function AssistanceForm() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  async function handleServiceButtonClick() {
    if (!userName || !date || !time) return alert("Preencha todos os campos");

    const response = await fetch("http://localhost:8000/schedules/new", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        date: date,
        time: time,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="h-full bg-aside-bg w-2/5 flex flex-col p-8 gap-10 justify-center">
      <h1 className="font-bold text-2xl self-center">Agendamento</h1>
      <Input
        id="name"
        label="Nome Completo"
        type="text"
        handleInput={setUserName}
      />
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="date" className="font-extrabold ml-4 text-lg">
            Dia do atendimento
          </label>
          <select
            id="date"
            className="bg-purple-input border-none outline-0 p-2 rounded text-lg mb-5 text-white"
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="">Selecione aqui</option>
            <option value="23">23 de maio</option>
            <option value="23">24 de maio</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="time" className="font-extrabold ml-4 text-lg">
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
