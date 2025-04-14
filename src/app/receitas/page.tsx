"use client"

import { useState } from "react";
import Filtros from "./Filtros/Filtros";
import Itens from "./Itens/Itens";

/**
 * Página Receitas
 * 
 * @returns {JSX.Element} Elemento JSX contendo a página do cardápio
 */

const Receitas = () => {

    const [filtro, setFiltro] = useState<number | null>(null);

    return(
        <section className="bg-amber-50 items-center flex flex-wrap justify-between w-[100%] px-40 pb-20 pt-20">
            <h3 className="text-[#000000] text-[3rem] mb-[50px]">Receitas</h3>
            <div className="flex mb-[30px] w-[100%]">
                <Filtros filtro={filtro} setFiltro={setFiltro}/>
            </div>
            <Itens filtro={filtro}/>
        </section>
    )
}
export default Receitas;