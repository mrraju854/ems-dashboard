import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const [newTask, setnewTask] = useState({})

    const submitHandler = (e) => {
    e.preventDefault()

  const newTaskObj = {
  taskTitle,
  taskDescription,
  taskDate,
  category,
  active: false,
  newTask: true,
  failed: false,
  completed: false
}

  const updatedData = userData.map((emp) => {
  if (emp.firstName === assignTo) {
    return {
      ...emp,
      tasks: [...emp.tasks, newTask],
      taskNumbers: {
        ...emp.taskNumbers,
        newTask: emp.taskNumbers.newTask + 1
      }
    }
  }
  return emp
})

setUserData(updatedData)
localStorage.setItem("employees", JSON.stringify(updatedData))

  settaskTitle('')
  settaskDescription('')
  settaskDate('')
  setassignTo('')
  setcategory('')


}

  return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex items-center rounded-md justify-between mt-10 bg-[#1c1c1c] p-6'>
                <div className='flex flex-col'>
                    <div>
                        <h3>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            settaskTitle(e.target.value)
                        }} className='p-2 h-7 mt-1 border-1 border-gray-300 outline-none rounded w-125' type="text" placeholder='Make a UI design' />
                    </div>
                    <div className='mt-2'>
                        <h3>Date</h3>
                        <input value={taskDate} onChange={(e)=>{
                            settaskDate(e.target.value)
                        }} className='p-2 h-7 mt-1 border-1 border-gray-300 outline-none rounded w-125' type="date" />
                    </div>
                    <div className='mt-2'>
                        <h3>Assign To</h3>
                        <input value={assignTo} onChange={(e)=>{
                            setassignTo(e.target.value)
                        }} className='p-2 h-7 mt-1 border-1 border-gray-300 outline-none rounded w-125' type="text" placeholder='Employee Name' />
                    </div>
                    <div className='mt-2'>
                        <h3>Category</h3>
                        <input value={category} onChange={(e)=>{
                            setcategory(e.target.value)
                        }} className='p-2 h-7 mt-1 border-1 border-gray-300 outline-none rounded w-125' type="text" placeholder='Design, Dev, etc' />
                    </div>
                
                </div>

                <div className='flex flex-col'>
                    <h3>Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{
                            settaskDescription(e.target.value)
                        }} className='h-40 w-130 border-1 outline-none py-2 px-3' name="" id=""></textarea>
                    <button className='text-md py-2 rounded-md mt-5 bg-green-600'>Create Task</button>

                </div>


            </form>
        </div>
  )
}

export default CreateTask
