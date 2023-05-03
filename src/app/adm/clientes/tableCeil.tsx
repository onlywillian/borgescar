"use client";

import { IoTrashSharp } from 'react-icons/io5';

interface TableCeilProps {
    id: string;
    name: string;
    email: string;
}

export default function TableCeil({ id, name, email }: TableCeilProps) {
    async function handleDeleteButtonClick() {
        const data = await fetch("http://localhost:8000/users/remove", {
            method: "DELETE",
            body: JSON.stringify({ id, email }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        });

        return console.log(data);
    }

    return (
        <div
            key={id}
            className="w-full p-4 even:bg-adm-blue odd:bg-aqua-v-light flex"
        >
            <span className="w-2/5">{name}</span>
            <span className="w-3/5 border-l-2 border-black px-2">{email}</span>
            <span
                className="w-1/5 border-l-2 border-black cursor-pointer flex justify-center items-center"
                onClick={() => handleDeleteButtonClick()}
            >
                <IoTrashSharp className='text-2xl'/>
            </span>
        </div>
    );
}
