"use client";

import Link from "next/link";
import { IoHomeSharp, IoNewspaperSharp, IoTrash } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/authContext";
import Aside from "@/components/Aside";

export default function Schedules() {
  const { user } = useContext(AuthContext);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8000/schedules/all");
      const data = await response.json();

      setSchedules(data.Scheduling);
    }
    getData();
  }, [user]);

  function formatDate(dateString: Date) {
    const date = new Date(dateString);

    return date.toLocaleDateString("pt-BR");
  }

  async function handleTrashIconClick(scheduleId: string, scheduleDate: string) {
    const confirmation = confirm("Deseja mesmo cancelar a consulta?")

    if (!confirmation) return

    const response = await fetch("http://localhost:8000/schedules/remove", {
      method: "DELETE",
      body: JSON.stringify({
        id: scheduleId,
        userName: user?.name,
        date: scheduleDate,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();

    alert(data.Success);
  }

  return (
    <div className="flex">
      <Aside>
        <Link href={"/"} className="font-bold">
          <p className="flex w-full gap-2 items-center text-lg hover:border-b-2 hover:border-black transition-all">
            <IoHomeSharp /> HOME
          </p>
        </Link>
        <Link href={`/user/schedules/`} className="font-bold">
          <p className="flex w-full gap-2 items-center text-lg hover:border-b-2 hover:border-black transition-all">
            <IoNewspaperSharp /> AGENDAMENTOS
          </p>
        </Link>
      </Aside>
      <div className="w-full h-screen flex flex-col p-8">
        <div className="h-1/5 w-full flex items-center ">
          <h1 className="font-bold text-4xl">Seus Agendamentos</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-4/5">
          <div className="flex w-full font-bold p-4">
            <span className="flex-1 text-center">Nome do Carro</span>
            <span className="flex-1 border-l-2 border-black text-center">
              Data
            </span>
            <span className="flex-1 border-l-2 border-black text-center">
              Horário
            </span>
            <span className="flex-1 border-l-2 border-black text-center">
              Cancelar
            </span>
          </div>
          {schedules.map((schedule: any) => {
            if (schedule.userName == user?.name) {
              return (
                <div
                  key={schedule.id}
                  className="w-full p-4 even:bg-adm-blue odd:bg-aqua-v-light flex"
                >
                  <span className="flex-1 text-center">{schedule.carName}</span>
                  <span className="flex-1 border-l-2 border-black text-center">
                    {formatDate(schedule.date)}
                  </span>
                  <span className="flex-1 border-l-2 border-black text-center">
                    {schedule.time}
                  </span>
                  <span className="flex-1 border-l-2 border-black flex justify-center items-center text-2xl cursor-pointer">
                    <IoTrash onClick={() => handleTrashIconClick(schedule.id, schedule.date)}/>
                  </span>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
