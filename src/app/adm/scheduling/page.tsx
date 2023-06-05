import TableCeil from "../clientes/tableCeil";

export default async function Scheduling() {
  const response = await fetch("http://localhost:8000/schedules/all", {
    cache: "no-store",
  });
  const schedulesData = await response.json();

  return (
    <div className="w-full h-screen flex flex-col p-8">
      <div className="h-1/5 w-full flex items-center ">
        <h1 className="font-bold text-4xl">Agendamentos</h1>
      </div>
      <div className="flex flex-col items-center justify-center h-4/5">
        <div className="flex w-full font-bold p-4">
          <span className="flex-1 text-center">Nome do Usuário</span>
          <span className="flex-1 border-l-2 border-black text-center">
            Data
          </span>
          <span className="flex-1 border-l-2 border-black text-center">
            Horário
          </span>
          <span className="flex-1 border-l-2 border-black text-center">ID</span>
        </div>
        {schedulesData.Scheduling.map((schedule: any) => (
          <div
            key={schedule.id}
            className="w-full p-4 even:bg-adm-blue odd:bg-aqua-v-light flex"
          >
            <span className="flex-1 text-center">{schedule.userName}</span>
            <span className="flex-1 border-l-2 border-black text-center">
              {schedule.date}
            </span>
            <span className="flex-1 border-l-2 border-black text-center">
              {schedule.time}
            </span>
            <span className="flex-1 border-l-2 border-black text-center">
              {schedule.id}
            </span>
            {/* <Link
              href={`/adm/editar-carro/${iten.id}`}
              className="w-1/5 border-l-2 border-black flex justify-center items-center"
            >
              <IoSettingsSharp className="text-2xl" />
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
