import './App.css'
import calendar from "./assets/calendar.png"
import add from "./assets/add.png"
import trash from "./assets/trash.png"

function App() {
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

          <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'>
            <div className='w-full flex flex-row gap-3 items-center
             justify-between '>
              <p className='text-sm font-medium text-neutral-300'>To Do</p>
              <button>
                <img src={add} alt="add" className='w-5 h-5 invert opacity-70 hover:opacity-100 transition' />
              </button>
            </div>

            <div className='w-full flex flex-col items-start justify-center bg-neutral-100 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
              <h1 className='pt-3 px-2 text-[18px] font-semibold'>Title</h1>
              <p className='pb-3 px-2'>Content</p>
              <div className='w-full mt-2 border-t border-neutral-600'></div>

              <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2 flex flex-row gap-2 items-center'>
                  <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                  <p className='font-semibold text-[12px]'>Apr 4</p>
                </div>

                <img src={trash} alt="trash"
                  className='w-4 h-4 m-2 text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'>
            <div className='w-full flex flex-row gap-3 items-center
             justify-between'>
              <p className='text-sm font-medium text-neutral-300'>In Progress</p>
              <button>
                <img src={add} alt="add" className='w-5 h-5 invert opacity-70 hover:opacity-100 transition' />
              </button>
            </div>

            <div className='w-full flex flex-col items-start justify-center bg-neutral-200 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
              <h1 className='pt-3 px-2 text-[18px] font-semibold'>Title</h1>
              <p className='pb-3 px-2'>Content</p>
              <div className='w-full mt-2 border-t border-neutral-600'></div>

              <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2  flex flex-row gap-2 items-center'>
                  <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                  <p className='font-semibold text-[12px]'>Apr 4</p>
                </div>

                <img src={trash} alt="trash"
                  className='w-4 h-4 m-2 text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'>
            <div className='w-full flex flex-row gap-3 items-center
             justify-between '>
              <p className='text-sm font-medium text-neutral-300'>In Review</p>
              <button>
                <img src={add} alt="add" className='w-5 h-5 invert opacity-70 hover:opacity-100 transition' />
              </button>
            </div>

            <div className='w-full flex flex-col items-start justify-center  bg-neutral-200 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
              <h1 className='pt-3 px-2 text-[18px] font-semibold'>Title</h1>
              <p className='pb-3 px-2'>Content</p>
              <div className='w-full mt-2 border-t border-neutral-600'></div>

              <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2  flex flex-row gap-2 items-center'>
                  <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                  <p className='font-semibold text-[12px]'>Apr 4</p>
                </div>

                <img src={trash} alt="trash"
                  className='w-4 h-4 m-2 text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-start justify-start bg-neutral-800 p-3 gap-4 rounded-[5px] min-h-[300px]'>
            <div className='w-full flex flex-row gap-3 items-center
             justify-between '>
              <p className='text-sm font-medium text-neutral-300'>Done</p>
              <button>
                <img src={add} alt="add" className='w-5 h-5 invert opacity-70 hover:opacity-100 transition' />
              </button>
            </div>

            <div className='w-full flex flex-col items-start justify-center  bg-neutral-200 text-neutral-900 rounded-[5px] hover:bg-neutral-300 transition'>
              <h1 className='pt-3 px-2 text-[18px] font-semibold'>Title</h1>
              <p className='pb-3 px-2'>Content</p>
              <div className='w-full mt-2 border-t border-neutral-600'></div>

              <div className='w-full flex flex-row items-center justify-between'>
                <div className='p-2  flex flex-row gap-2 items-center'>
                  <img src={calendar} alt="calendar" className='w-5 h-5 opacity-55' />
                  <p className='font-semibold text-[12px]'>Apr 4</p>
                </div>

                <img src={trash} alt="trash"
                  className='w-4 h-4 m-2 text-red-500 opacity-70 hover:opacity-100 hover:scale-110 transition cursor-pointer' />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}



export default App
