import './App.css'
import { useState, useEffect } from "react";
import Column from "./components/Column";
import { DndContext } from "@dnd-kit/core"

type Task = {
  id: string;
  title: string;
  content: string;
  date: string;
  status: "todo" | "in-progress" | "in-review" | "done";
};


function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");

    if (saved) {
      return JSON.parse(saved);
    }

    return [
      {
        id: "1",
        title: "Welcome 👋",
        content: "Mulai bikin task pertama",
        date: "Today",
        status: "todo",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, content: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      content,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      }),
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === active.id ? { ...task, status: over.id }
          : task
      )
    );
  };

  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="min-h-screen py-5 px-7 flex items-start justify-center bg-neutral-900 text-white">

      <div className='w-full flex flex-col gap-5 items-start justify-center'>

        <h1 className="w-full text-start pt-10 text-[23px] font-semibold">
          Simple Web Task Manager
        </h1>

        <div className='w-full flex flex-row items-start justify-end gap-5'>
          <button
            className='py-2 px-3 bg-neutral-600 rounded-[5px] text-[14px] hover:bg-neutral-500 transition rounded-[5px] text-[14px]'
            onClick={() => setIsOpen(true)}
          >
            Add Task
          </button>
        </div>

        <DndContext onDragEnd={handleDragEnd}>

          <div className='w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 border rounded-[6px] '>

            <Column
              title="To Do"
              status='todo'
              tasks={tasks.filter((t: Task) => t.status === "todo")}
              onDelete={deleteTask}
            />
            <Column
              title="In Progress"
              status='in-progress'
              tasks={tasks.filter((t: Task) => t.status === "in-progress")}
              onDelete={deleteTask}
            />
            <Column
              title="In Review"
              status='in-review'
              tasks={tasks.filter((t: Task) => t.status === "in-review")}
              onDelete={deleteTask}
            />
            <Column
              title="Done"
              status='done'
              tasks={tasks.filter((t: Task) => t.status === "done")}
              onDelete={deleteTask}
            />
          </div>
        </DndContext>

      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="bg-white text-black p-5 rounded-lg w-[300px] flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-semibold">New Task</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="border p-2 rounded"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Description"
              className="border p-2 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>

              <button className="bg-black text-white px-3 py-1 rounded"
                onClick={() => {
                  if (!title.trim()) return;

                  addTask(title, content);
                  setTitle("");
                  setContent("");
                  setIsOpen(false);
                }}
              >
                Add
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}




export default App
