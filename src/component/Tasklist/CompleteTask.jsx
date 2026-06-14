import React from 'react'

const CompleteTask = ({data}) => {
  return (
      <div className=' shrink-0 h-[330px] p-5 bg-green-500 w-[340px] rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='px-3 py-1 bg-red-600 text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-bold'>{data.title}</h2>
        <p className='text-[18px] mt-3 text-gray-100'>{data.description}
        </p>
        <div className='mt-6 '>
            <button  className='bg-green-700 font-semibold rounded-md border-none py-1 px-2 text-sm'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
