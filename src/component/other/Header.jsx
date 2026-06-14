import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null)
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-semibold'>
        Hello <br />
        <span className='text-4xl'>
          {props.data ? props.data.firstName : 'Admin'} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className='font-semibold rounded cursor-pointer hover:bg-red-600 active:scale-95 px-4 py-2 bg-red-500'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header