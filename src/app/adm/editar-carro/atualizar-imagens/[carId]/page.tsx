"use client"

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function UpdateImages() {
    const router = useRouter();

    function returnToPreviouslyPage(e: MouseEvent) {
        router.back();
    }

    return (
        <>
            <form
                className="flex p-20 justify-between w-full flex-col"
                // onSubmit={(e) => handleFormSubmit(e)}
            >
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="flex flex-col justify-center w-1/3">
                        <h1 className="text-3xl font-extrabold mb-8">Imagens do Carro</h1>
                        {/* Upload de imagens */}
                        <label>Imagem 1</label>
                        <input
                            type="file"
                            name="image1"
                            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                            //   onChange={(e) => setFile1(e.target.files![0])}
                            accept="image/*"
                        />
                        <label>Imagem 2</label>
                        <input
                            type="file"
                            name="image1"
                            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                            //   onChange={(e) => setFile2(e.target.files![0])}
                            accept="image/*"
                        />
                        <label>Imagem 3</label>
                        <input
                            type="file"
                            name="image1"
                            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
                            //   onChange={(e) => setFile3(e.target.files![0])}
                            accept="image/*"
                        />
                    </div>
                    <div className="flex gap-10">
                        <Button handleButtonClick={returnToPreviouslyPage}>Voltar</Button>
                        <Button>Salvar Imagens</Button>
                    </div>
                </div>
            </form>
        </>
    )
}