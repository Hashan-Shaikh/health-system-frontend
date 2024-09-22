'use client'
import React from 'react'
import {Button, Card, Input} from "@nextui-org/react";
import {MailIcon} from '../patient/register/MailIcon';
import styles from './onboarding.module.css';
import PhoneInput from 'react-phone-number-input';
import {useForm} from 'react-hook-form';

const OnBoardingPage = () => {

    const { register, handleSubmit, setValue } = useForm();

  return (
    <div className='grid grid-cols-4 h-screen w-screen'>
        <div className='col-span-2 h-full'>
            <div className='flex my-10 mx-20'>
                <img className='w-10 h-8' src='/2744.jpg' alt='logo' />
                <p className='font-bold px-2'>CarePlus</p>
            </div>
            <div className='m-20'>
                <h1 className='font-bold text-4xl'>Hi there, ....</h1>
                <p className={`pt-2 ${styles.fieldNames}`}>Get Started with Appointments.</p>
            </div>
            <form className='m-20 h-full'>
                <div className={`mt-3 ${styles.fieldStyle}`}>
                    <p className={`${styles.fieldNames}`}>Full name</p>
                    <Input
                    type="text"
                    placeholder='Enter the name'
                    />
                </div>
                <div className={`mt-3 ${styles.fieldStyle}`}>
                    <p className={`${styles.fieldNames}`}>Email</p>
                    <Input
                    type="email"
                    //label="Email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    startContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    />
                </div>
                {/* <div className={`mt-3 ${styles.fieldPhone}`}>
                    <p className={`${styles.fieldNames}`}>Phone number</p>
                    <PhoneInput
                             defaultCountry="US"
                            onChange={(value) => setValue('phone', value)}
                            className=''
                    />
                </div> */}
                <Button className='mt-10 bg-sky-500 text-white w-full'>Get Started</Button>
            </form>
        </div>
        <Card className='rounded-lg col-span-2 h-full'>
            <img src='/onboarding.svg' alt='onboarding-pic' className='h-full w-full object-cover' />
        </Card>
    </div>
  )
}

export default OnBoardingPage;