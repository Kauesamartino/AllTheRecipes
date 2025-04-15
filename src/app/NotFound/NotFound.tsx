"use client"

import NotFoundImage from '../assets/not_found.svg';
import { useRouter } from 'next/navigation';

/**
 * Página NotFound
 * 
 * Esta página é exibida quando uma rota não é encontrada (erro 404).
 * Inclui uma imagem ilustrativa e um botão para voltar à página anterior.
 * 
 * @returns {JSX.Element} Elemento JSX contendo a página de erro 404
 */

export default function NotFound() {

    const router = useRouter();

    return (
        <div className="items-center flex flex-1 flex-col justify-center">
            {/* Botão para voltar à página anterior */}
            <div className="flex justify-start w-[100%]">
                <button onClick={() => router.back()} className='bg-transparent rounded-none text-[#d73b3b] pointer text-[1.5rem] font-bold'>
                    {'< Voltar'}
                </button>
            </div>
            {/* Imagem ilustrativa do erro 404 */}
            <NotFoundImage />
        </div>
    );
}