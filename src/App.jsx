import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [User, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  
  }, [])
    

  const handleLogin = (email, password)=>{
    
    if(email == 'admin@gmail.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if (userData) {
      const employees = userData.find((e) => email === e.email && password === e.password)
      if(employees){
        setUser('employees')
        setLoggedInUserData(employees)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employees', data:employees}))
      }
    }
    else{
      alert("Invalid Credemtial")
    }
  }
  
return (
  <>
    {!User && <Login handleLogin={handleLogin} />}

    {User === 'admin' && <AdminDashboard changeUser={setUser} />}
    {User === 'employees' && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
  </>
  
)}

export default App
