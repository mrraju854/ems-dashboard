import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {

  const [userData, , updateTaskStatus] = useContext(AuthContext)

  // logged in employee find karo
  const employee = userData?.find(
    (e) => e.email === props.data?.email
  )

  return (
    <div className='p-10'>
      <Header changeUser={props.changeUser} data={employee} />

      <TaskListNumber data={employee} />

      <TaskList 
        data={employee} 
        updateTaskStatus={updateTaskStatus}
      />
    </div>
  )
}

export default EmployeeDashboard