import { useState } from "react";
import TaskCard from "./TaskCard";
import add from "../assets/add.png"

type Task = {
    id: string;
    title: string;
    content: string;
    date: string;
};

type Props = {
    title: string;
    tasks: Task[];
    onAdd?: (title: string) => void;
    onDelete?: (id: string) => void;
};

export default function Column({ title, tasks, onAdd, onDelete }: Props) {
    const [input, setInput] = useState("");

    return (
        <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'>
            <div className='w-full flex flex-row gap-3 items-center
             justify-between '>
                <p className='text-sm font-medium text-neutral-300'>{title}</p>
                <button
                    onClick={() => {
                        if (!input.trim()) return;
                        onAdd?.(input);
                        setInput("");
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (!input.trim()) return;
                            onAdd?.(input);
                            setInput("");
                        }
                    }}
                    className="opacity-70 hover:opacity-100"
                >
                    <img src={add} alt="add" className='w-5 h-5 invert opacity-70 hover:opacity-100 transition' />
                </button>
            </div>

            {onAdd && (
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="New Task..."
                    className="w-full p-2 rounded text-black"
                />
            )}

            <div className='w-full flex flex-col items-start justify-center bg-neutral-100 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        content={task.content}
                        date={task.date}
                        onDelete={() => onDelete?.(task.id)}
                    />
                ))}
            </div>
        </div>
    );
}