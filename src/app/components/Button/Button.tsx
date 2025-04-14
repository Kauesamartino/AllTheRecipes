interface ButtonProps {
    onClick: () => void;
    label: string;
    className?: string;
}

export default function Button({ onClick, label, className = '' }: ButtonProps) {
    return (
        <button
            className={`bg-red-500 border-none rounded-md text-white cursor-pointer text-base font-bold py-2.5 px-0 w-full transition duration-200 ease hover:bg-red-700 ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}