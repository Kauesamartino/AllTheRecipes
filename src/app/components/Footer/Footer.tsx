export default function Footer() {

    const integrantes = [
        {
            id: 1,
            name: "Kauê Samartino",
            rm: 559317
        },{
            id: 2,
            name: "Davi Praxedes",
            rm: 560719
        },{
            id: 3,
            name: "João dos Santos",
            rm: 560400
        }
    ]

    return(
        <>
            <div className="bg-[#ffd5b5] relative py-2">
                {integrantes.map(item => (
                    <div key={item.id} className="flex justify-center">
                        <div className="pb-1 font-bold">{item.name} - RM{item.rm}</div>
                    </div>
                ))}
            </div>
        </>
    )
}