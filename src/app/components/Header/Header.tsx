import Link from "next/link"

export default function Header() {

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
        <nav className=''>
            {/* Logo do restaurante */}
            {/* Lista de links de navegação */}
            <ul className=''>
                {rotas.map((rota, index) => (
                    <li key={index} className=''>
                        <Link href={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}