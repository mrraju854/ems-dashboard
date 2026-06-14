import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [UserData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  const updateTaskStatus = (employeeEmail, taskIndex, status) => {
    if (!UserData) return

    const updatedData = UserData.map((emp) => {
      if (emp.email === employeeEmail) {
        const updatedTasks = emp.tasks.map((task, i) => {
          if (i === taskIndex) {
            return {
              ...task,
              active: status === 'active',
              completed: status === 'completed',
              failed: status === 'failed',
              newTask: false,
            }
          }
          return task
        })

        const taskNumbers = {
          newTask: updatedTasks.filter((t) => t.newTask).length,
          active: updatedTasks.filter((t) => t.active).length,
          completed: updatedTasks.filter((t) => t.completed).length,
          failed: updatedTasks.filter((t) => t.failed).length,
        }

        return {
          ...emp,
          tasks: updatedTasks,
          taskNumbers,
        }
      }

      return emp
    })

    setUserData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
  }

  return (
    <AuthContext.Provider
      value={[UserData, setUserData, updateTaskStatus]}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider