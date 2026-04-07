import { useDraggable } from "@dnd-kit/core";
import calendar from "../assets/calendar.png"
import trash from "../assets/trash.png"


type Props = {
    id: string;
    title: string;
    content: string;
    date: string;
    onDelete?: () => void;
};

export default function TaskCard({ id, title, content, date, onDelete }: Props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
    };

    const isDragging = !!transform;

    const baseClass =
        "w-full flex flex-col items-start justify-center bg-neutral-100 text-neutral-900 rounded-[5px]";

    const headerClass =
        "w-full flex flex-col items-start justify-center bg-neutral-100 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition select-none cursor-grab active:cursor-grabbing";


    return (
        <div
            className={`${baseClass} ${isDragging ? "opacity-70 scale-105" : ""}`}
            ref={setNodeRef}
            style={style}

        >
            <div
                className={`${headerClass} ${isDragging ? "opacity-70 scale-105" : ""}`}
                {...listeners}
                {...attributes}
            >
                <h1 className='pt-3 px-2 text-[18px] font-semibold truncate w-full'>{title}</h1>
                <p className='pb-3 px-2 break-words whitespace-pre-wrap w-full'>{content}</p>
                <div className='w-full mt-2 border-t border-neutral-600'></div>

            </div>

            <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2 flex flex-row gap-2 items-center'>
                    <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                    <p className='font-semibold text-[12px]'>{date}</p>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete?.();
                    }}
                    className="opacity-70 hover:opacity-100 transition"
                >
                    <img src={trash} alt="trash"
                        className='w-4 h-4 m-2 text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer'
                    />
                </button>
            </div>
        </div>

    );
}