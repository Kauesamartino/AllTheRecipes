import Image from "next/image";
import { useRouter } from 'next/navigation';
import receitas from '@/data/receitas.json'
import { Prato } from '../../types/Prato';
import Button from '../Button/Button';

export default function Recomendacoes() {
    let receitasRecomendadas = [...receitas];
    receitasRecomendadas = receitasRecomendadas.sort(() => 0.5 - Math.random()).splice(0, 3);

    const router = useRouter();

    function redirecionarParaDetalhes(prato: Prato) {
        const pratoQuery = encodeURIComponent(JSON.stringify(prato));
        router.push(`/prato/${prato.id}?prato=${pratoQuery}`);
    }

    return (
        <div className='bg-[#fff8f0] px-40 pb-20'>
            <h3 className='text-[3rem] pt-[30px] pb-[50px]'>Recomendações nossas</h3>
            <div className='rounded-[2px] flex flex-wrap gap-[30px] justify-around'>
                {receitasRecomendadas.map(item => (
                    <div key={item.id} className="">
                        <div className='w-[300px] h-[200px] mb-[10px] overflow-hidden rounded-[8px]'>
                            <Image
                                src={item.photo}
                                alt={item.alt}
                                layout="fixed"
                                width={300}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <Button
                            label="Ver mais"
                            onClick={() => redirecionarParaDetalhes(item)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

}