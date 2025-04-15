"use client"

import Link from "next/link"

export default function Header() {

    const rotas = [{
        label: 'Página inicial',
        to: '/'
    }, {
        label: 'Receitas',
        to: '/receitas'
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