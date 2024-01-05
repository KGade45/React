import React from 'react'
import { useParams } from 'react-router-dom'
const Users = () => {
    const {userid} = useParams()
  return (
      <div className='bg-gray-600 text-white text-3xl p-4 flex items-center justify-center'>Users : {userid}</div>
  )
}

export default Users