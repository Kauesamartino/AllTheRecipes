"use client"

import { useRouter } from 'next/navigation';
import receitas from './data/receitas.json'
import Image from "next/image";
import { Prato } from './types/Prato';
import Hero from './components/Hero/Hero';

export default function Home() {

  let receitasRecomendadas = [...receitas];
  receitasRecomendadas = receitasRecomendadas.sort(() => 0.5 - Math.random()).splice(0, 3);

  const router = useRouter();

  function redirecionarParaDetalhes(prato: Prato){
    const pratoQuery = encodeURIComponent(JSON.stringify(prato));
    router.push(`/prato/${prato.id}?prato=${pratoQuery}`);
  }

  return (
    <>
    <Hero />
      <div className='bg-[#fff8f0]'>
        <h3 className=''>Recomendações da cozinha</h3>
        <div className=''>
          {receitasRecomendadas.map(item =>(
            <div key={item.id} className="">
              <div className=''>
                <Image className=''
                  src={item.photo}
                  alt={item.alt}
                />
              </div>
              <button 
              className=''
              onClick={() => redirecionarParaDetalhes(item)}>
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
