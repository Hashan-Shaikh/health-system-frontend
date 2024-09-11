import React from 'react'
import Navbar from '@/app/Navbar'

const PatientRegistrationHeader = () => {
  return (
    <>
        <div className='ml-20 pt-5'>
            <Navbar />
        </div>
        <div className='ml-20 mt-5'>
            <h1 className='text-2xl font-bold'>Welcome 👋</h1>
            <p>Let us know more about yourself</p>
        </div>
    </>
  )
}

export default PatientRegistrationHeader