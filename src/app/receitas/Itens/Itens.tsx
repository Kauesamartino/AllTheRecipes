import { useEffect, useState } from "react"
import receitas from '../../data/receitas.json'
import Item from "./Item/Item";


interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props){
    const [lista, setLista] = useState(receitas)
    const { filtro } = props;

    function testaFiltro(id:number){
        if(filtro !== null) return filtro === id;
        return true;
    }

    useEffect(() => {
        const novaLista = receitas.filter(item => testaFiltro(item.category.id));
        setLista(novaLista)
    }, [filtro]);

    return(
        <div className="">
            {lista.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}