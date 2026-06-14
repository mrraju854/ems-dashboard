import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ data }) => {
  const [, , updateTaskStatus] = useContext(AuthContext)

  return (
    <div
      id='tasklist'
      className='mt-15 overflow-x-auto w-full flex gap-7 h-[55%] py-5'
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return (
            <AcceptTask
              key={idx}
              data={elem}
              index={idx}
              employeeEmail={data.email}
              updateTaskStatus={updateTaskStatus}
            />
          )
        }

        if (elem.newTask) {
          return (
            <NewTask
              key={idx}
              data={elem}
              index={idx}
              employeeEmail={data.email}
              updateTaskStatus={updateTaskStatus}
            />
          )
        }

        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }

        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }

        return null
      })}
    </div>
  )
}

export default TaskList