"use client";
import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import MedicalInformation from './MedicalInformation';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

// Step Data
const steps = [
  { id: 1, label: 'Personal Information' },
  { id: 2, label: 'Medical Information' },
  { id: 3, label: 'Identification and Verification'},
];

const CreateUserPage = () => {

  const router = useRouter();
    
    const submitRequest = () => {
        router.push('/appointment-form-page');
    }
  
  return ( 
    <div className='grid grid-cols-4 w-screen h-screen overflow-y-auto'>
      <div className='col-span-3 mb-20'>
        <div className='mx-20'>
          <img src='../Logo.svg' className='h-24 w-24' alt='main-logo' />
        </div>
        <div className='mx-20'>
          <h1 className='text-3xl font-bold'>Welcome 👋</h1>
          <h2 className='text-[#ABB8C4]'>Let us know more about yourself</h2>
        </div>
        <div className='mx-20'>
          <PersonalInformation />
          <MedicalInformation />
          <Button onClick={submitRequest} className='mt-10 bg-sky-500 text-white w-full'>Submit And Continue</Button>
        </div>
      </div>
      <div className='relative col-span-1'>
        <img src="../Illustration.svg" alt="side-photo" className='absolute inset-y-0 right-0' />
      </div>
    </div>
  );
};

export default CreateUserPage;
