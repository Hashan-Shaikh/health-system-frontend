import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <div className='flex'>
          <img className='pr-2 w-10 h-8' src='/2744.jpg' />
          <h1 className='font-bold'>CarePulse</h1>
        </div>
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Welcome 👋</h1>
            <p>Let us know more about yourself</p>
        </div>
      </div>
      {/* <div>
        <img src='/med3.avif' className='rounded-sm' alt="nav-img" width={100}  />
      </div> */}
    </div>
  )
}

export default Navbar