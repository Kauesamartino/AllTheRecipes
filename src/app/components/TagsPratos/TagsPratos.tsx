import { Prato } from '../../types/Prato'

/**
 * @param {Prato} props
 * @param {Object} props.category
 * @param {number} props.price
 * @returns {JSX.Element}
 */


export default function TagsPratos({
    category,
    serving
}: Prato) {
    return (
        <>
            <div className="left-0">
                
                <div className="rounded-full h-10 gap-4">
                    <div className='text-[#000]'>
                        <span className='font-bold'>Categoria: </span>{category.label}
                    </div>
                    <div className=""><span className='font-bold'>Serve: </span>{serving} pessoas</div>
                </div>
            </div>
        </>
    )
}