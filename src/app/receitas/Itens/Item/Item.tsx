import TagsPratos from "@/app/components/TagsPratos/TagsPratos";
import { Prato } from "@/app/types/Prato";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Item(props: Prato) {
    const { id, title, description, photo } = props;
    const router = useRouter();
    return (
        <div className="items-center rounded-[10px] pointer flex flex-wrap p-[20px] transition duration-200 ease-in" onClick={() => router.push(`/prato/${id}`)}>
            <div className="w-[300px] h-[200px] mb-[10px] overflow-hidden rounded-[8px]">
                <Image
                    src={photo}
                    alt=""
                    layout="fixed"
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-1 flex-col flex-wrap justify-around mx-[20px] md:flex-row md:mt-[20px] md:px-0">
                <div className="container">
                    <h2 className="text-[2rem] font-bold mb-[20px]">{title}</h2>
                    <p className="text-[#A9A9A9] text-[2rem] font-600 w-max-[600px] mb-[20px]">{description}</p>
                </div>
                <TagsPratos {...props}/>
            </div>
        </div>
    )
}