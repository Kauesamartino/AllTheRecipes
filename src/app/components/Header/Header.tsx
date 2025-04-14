"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Header() {

    const router = useRouter();

    const rotas = [{
        label: 'Página inicial',
        to: '/'
    }, {
        label: 'Receitas',
        to: '/receitas'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }]

    return (
        <nav className='bg-[#ffd5b5] pl-40 py-5'>
            <ul className='flex gap-16'>
                {rotas.map((rota, index) => (
                    <li key={index} className=''>
                        <Link href={rota.to} className="text-[16px] font-semibold">
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}