import React from 'react'
import {Divider} from "@nextui-org/divider";
import { Avatar, Chip } from '@nextui-org/react';

const Doctors = [
  {
    id: 1,
    name: 'Dr Mosh',
    img: '/doc.jpeg',
  },
  {
    id: 2,
    name: 'Dr Sara',
    img: 'doctor.jpg',
  },
  {
    id: 3,
    name: 'Dr Fresor',
    img: 'doctor2.jpeg',
  },
]

const SuccessPage = () => {
  return (
    <div className='w-screen h-screen'>
        <div className='pt-2'>
          <img className='w-24 h-24 mx-auto' src='/Logo.svg' alt='logo' />
        </div>
        <div className='mt-10'>
          <img className='mx-auto' alt='check-circle' src='/check-circle.svg' width={100} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='text-sm lg:text-3xl font-bold'>Your <span className='text-sm lg:text-3xl text-green-600'>appointment request</span> has been successfully submitted!</span>
          <p className='font-bold pt-2 text-gray-400'>We'll be in touch shortly to confirm.</p>
        </div>
        <div className='flex justify-center items-center mx-24 my-10'>
          <Divider className='bg-slate-800' />
        </div>
        <div className='flex my-10 justify-center items-center'>
          <p className='pr-2 text-[#ABB8C4] text-xs lg:text-lg'>Requested appointment details:</p>
          <div className='h-10 flex px-2 rounded-sm bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00] border border-[#FFFFFF14]'>
            <Avatar className='my-auto w-6 h-6 text-tiny' src= {Doctors[0].img} />
            <div className='flex items-center justify-center px-2'><p className='text-sm'>{Doctors[0].name}</p></div>
          </div>
        </div>
        <div className='flex justify-center items-center mx-24 my-10'>
          <Divider className='bg-slate-800' />
        </div>
    </div>
  )
}

export default SuccessPage