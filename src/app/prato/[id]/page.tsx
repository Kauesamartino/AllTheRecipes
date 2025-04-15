"use client"

import { useParams, useRouter } from "next/navigation";
import receitas from "@/data/receitas.json";
import NotFound from "../../NotFound/NotFound";
import Image from "next/image";


export default function Prato() {
    const { id } = useParams();
    const router = useRouter();
    const prato = receitas.find(item => item.id === Number(id));

    if (!prato) {
        return <NotFound />;
    }

    const renderTextWithBreaks = (text: string) => {
        return text.split("\n").map((line, index) => (
            <p key={index} className="mb-2">{line}</p>
        ));
    };

    return (
        <div className="bg-[#fff8f0] px-40 pb-20">
            {/* Botão para voltar à página anterior */}
            <button
                className="bg-transparent rounded-none text-red-500 cursor-pointer text-[1.5rem] font-bold pt-4"
                onClick={() => router.back()}
            >
                {"< Voltar"}
            </button>

            <div className="items-center flex flex-col gap-[20px]">
                {/* Título do prato */}
                <h1 className="text-[3rem] pb-4">{prato.title}</h1>

                <div className="flex justify-between gap-[150px]">
                    {/* Descrição e Receita */}
                    <div className="flex flex-col max-w-[500px]">
                        {prato.ingredientes && (
                            <div className="mb-6">
                                <h2 className="text-[2rem] font-bold text-[#a52a2a] mb-2">Ingredientes</h2>
                                <div className="text-[1.1rem] text-gray-800 leading-relaxed">
                                    {renderTextWithBreaks(prato.ingredientes)}
                                </div>
                            </div>
                        )}

                        {prato.receita && (
                            <div>
                                <h2 className="text-[2rem] font-bold text-[#a52a2a] mb-2">Modo de Preparo</h2>
                                <div className="text-[1.1rem] text-gray-800 leading-relaxed">
                                    {renderTextWithBreaks(prato.receita)}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Imagem do prato */}
                    <div>
                        <Image
                            src={prato.photo}
                            alt={prato.title}
                            width={600}
                            height={400}
                            className="rounded-[8px] w-[100%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}