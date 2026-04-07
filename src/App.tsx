import './App.css'
import { useState, useEffect } from "react";
import Column from "./components/Column";

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

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      content: "No description",
      date: "Today",
      status: "todo",
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen py-5 px-7 flex items-start justify-center bg-neutral-900 text-white">

      <div className='w-full flex flex-col gap-5 items-start justify-center'>

        <h1 className="w-full text-start pt-10 text-[23px] font-semibold">
          Simple Web Task Manager
        </h1>

        <div className='w-full flex flex-row items-start justify-end gap-5'>
          <button className='py-2 px-3 bg-neutral-600 rounded-[5px] text-[14px]'>
            Add Task
          </button>
        </div>

        <div className='w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 border rounded-[6px] '>

          <Column
            title="To Do"
            tasks={tasks.filter((t: Task) => t.status === "todo")}
            onAdd={addTask}
            onDelete={deleteTask}
          />
          <Column
            title="In Progress"
            tasks={tasks.filter(t => t.status === "in-progress")}
          />
          <Column
            title="In Review"
            tasks={tasks.filter(t => t.status === "in-review")}
          />
          <Column
            title="Done"
            tasks={tasks.filter(t => t.status === "done")}
          />
        </div>

      </div>
    </div>
  );
}



export default App
