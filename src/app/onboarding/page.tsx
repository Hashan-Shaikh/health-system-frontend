'use client'
import React from 'react'
import {Button, Card, Input} from "@nextui-org/react";
import {MailIcon} from '../patient/register/MailIcon';
import styles from './onboarding.module.css';
import PhoneInput from 'react-phone-number-input';
import {useForm} from 'react-hook-form';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/navigation';

const OnBoardingPage = () => {

    const { register, handleSubmit, setValue } = useForm();
    const router = useRouter();
    
    const submitRequest = () => {
        router.push('/patient/register');
    }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-screen h-screen'>
        <section className='col-span-1 h-full'>
            <div className='my-5 mx-20'>
                <img className='w-24 h-24' src='/Logo.svg' alt='logo' />
            </div>
            <div className='my-5 mx-20'>
                <h1 className='font-bold text-3xl'>Hi there, ....</h1>
                <p className={`pt-2 ${styles.fieldNames}`}>Get Start with Appointments</p>
            </div>
            <form className='mx-20'>
                <div className={`mt-3 ${styles.fieldStyle}`}>
                    <p className={`${styles.fieldNames} text-small py-2`}>Full Name</p>
                    <Input
                    type="text"
                    placeholder='Enter the name'
                    />
                </div>
                <div className={`mt-3 ${styles.fieldStyle}`}>
                    <p className={`${styles.fieldNames} text-small py-2`}>Email</p>
                    <Input
                    type="email"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    startContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    />
                </div>
                <div className={`mt-3 ${styles.fieldPhone}`}>
                    <p className={`${styles.fieldNames} text-small py-2`}>Phone number</p>
                    <PhoneInput className='px-2' defaultCountry='US' onChange={(val) => setValue('phone', val)} />
                </div>
                <Button onClick={submitRequest} className='mt-10 bg-sky-500 text-white w-full'>Get Started</Button>
            </form>
            <Image src='./copyright.svg' alt='copyright-img' width={120} height={120} className='mt-40 mx-20' />
        </section>
        <div className='hidden lg:block col-span-1 relative h-full'>
            <Image src='./onboarding.svg' alt='onboarding-pic' fill className='object-cover' />
        </div>   
    </div>
  )
}

export default OnBoardingPage;