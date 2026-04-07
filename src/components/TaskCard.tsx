import calendar from "../assets/calendar.png"
import trash from "../assets/trash.png"


type Props = {
    title: string;
    content: string;
    date: string;
    onDelete?: () => void;
};

export default function TaskCard({ title, content, date, onDelete }: Props) {
    return (
        <div className='w-full flex flex-col items-start justify-center bg-neutral-100 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
            <h1 className='pt-3 px-2 text-[18px] font-semibold'>{title}</h1>
            <p className='pb-3 px-2'>{content}</p>
            <div className='w-full mt-2 border-t border-neutral-600'></div>

            <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2 flex flex-row gap-2 items-center'>
                    <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                    <p className='font-semibold text-[12px]'>{date}</p>
                </div>

                <button
                onClick={onDelete}
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