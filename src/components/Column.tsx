import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";
import { useState } from "react";

type Task = {
    id: string;
    title: string;
    content: string;
    date: string;
};

type Props = {
    title: string;
    status: string;
    tasks: Task[];
    onAdd?: (title: string) => void;
    onDelete?: (id: string) => void;
};

export default function Column({ status, title, tasks, onDelete }: Props) {
    const { setNodeRef } = useDroppable({
        id: status,
    });

    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'
            ref={setNodeRef}
        >
            <div className='w-full flex flex-row gap-3 items-center
             justify-between '>
                <p className='text-sm font-medium text-neutral-300'>{title} ({tasks.length})</p>
            </div>
            <div className='w-full flex flex-col gap-3 items-start justify-center bg-neutral-800 text-neutral-900 rounded-[5px]'>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        content={task.content}
                        date={task.date}
                        onDelete={() => onDelete?.(task.id)}
                        expanded={expandedId === task.id}
                        onToggle={() => toggleExpand(task.id)}
                    />
                ))}
                {tasks.length === 0 && (
                    <p className="text-sm text-neutral-400 text-center mt-4">
                        No tasks yet
                    </p>
                )}
            </div>
        </div>
    );
}