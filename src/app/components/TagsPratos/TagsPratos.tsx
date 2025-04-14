import { Prato } from '../../types/Prato'

/**
 * @param {Prato} props
 * @param {Object} props.category
 * @param {number} props.price
 * @returns {JSX.Element}
 */


export default function TagsPratos({
    category
}: Prato) {
    return (
        <>
            <div className="flex flex-wrap justify-between mb-20 w-max-[700px]">
                
                <div className="flex items-center rounded-full font-bold h-10 justify-center p-2">
                    <div className={`tipo ${category.label.toLowerCase() === 'massas' ? 'bg-massas text-white' : ''} ${category.label.toLowerCase() === 'carnes' ? 'bg-carnes text-white' : ''} ${category.label.toLowerCase() === 'doces' ? 'bg-doces' : ''}`}>
                        {category.label}
                    </div>
                </div>
            </div>
        </>
    )
}