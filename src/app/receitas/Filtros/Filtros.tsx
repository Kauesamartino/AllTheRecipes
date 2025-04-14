import Button from '@/app/components/Button/Button';
import filtros from './filtros.json'

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: Props){

    function selecionarFiltro(opcao: IOpcao){
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }

    return(
        <div className="flex gap-[24px] flex-wrap mx-[20px]">
            {filtros.map(opcao => (
                <Button 
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                    label={opcao.label}
                    className={`flex items-center justify-center bg-gray-300 border-none rounded-md text-base font-bold h-10 w-38 ${filtro === opcao.id ? 'bg-blue-500 text-white' : ''} hover:cursor-pointer`}
                />
            ))}
        </div>
    )
}
