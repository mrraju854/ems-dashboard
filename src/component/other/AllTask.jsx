import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] flex flex-col h-auto gap-2 mt-6 w-full p-6'>

      <div className='flex bg-red-400 w-full py-[6px] px-5 rounded text-xl justify-between items-center'>
        <h2 className='text-lg font-medium text-xl w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      <div className=' mt-2 overflow-y-auto shrink-0'>
        {userData.map(function(elem, idx){
          return <div key={idx} className='flex border-1 border- mb-1.5 w-full py-[6px] px-5 rounded text-xl justify-between items-center'>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5 text-blue-300'>{elem.taskNumbers.newTask}</h3>
          <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
          <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskNumbers.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h5>
        </div>
      })}
      </div>

    </div>
  )
}

export default AllTask
