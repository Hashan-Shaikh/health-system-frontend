'use client'
import Navbar from '@/app/Navbar'
import React from 'react'
import {Input} from "@nextui-org/react";
import styles from './register.module.css';
import {MailIcon} from './MailIcon';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm } from 'react-hook-form';
import {DatePicker} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";


const PersonalInformation = ({handleBack, handleNext, activeStep, steps}: any) => {

    const { register, handleSubmit, setValue } = useForm();

  return (
    <div className='w-screen h-screen grid grid-cols-5'>
        <div className='col-span-4'>
            <div className='ml-20 mt-5 flex flex-col gap-5 '>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Personal Information</h1>
                </div>
                <div className={`${styles.customFields} grid-cols-1 w-full `}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Full Name</p>
                    <Input
                        isRequired
                        type="text"
                        defaultValue=""
                        className="max-w-xl"
                    />
                </div>
                <div className=' flex gap-10 '>
                    <div className={`${styles.customFields} w-1/2`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Email</p>
                        <Input
                            type="email"
                            placeholder=""
                            labelPlacement="outside"
                            className=''
                            startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                        />
                    </div>
                    <div className={`w-1/3 ${styles.fieldPhone}`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Phone Number</p>
                        <PhoneInput
                             defaultCountry="US"
                            onChange={(value) => setValue('phone', value)}
                            className=''
                        />
                    </div>
                </div>
                <div className='flex gap-10 '>
                    <div className={`${styles.customFields} ${styles.customBorder} w-1/2`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Date Of Birth</p>  
                        <DatePicker className="max-w-[284px]" />
                    </div>
                    <div className={`${styles.customFields} ${styles.radio} w-1/2`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Insurance Policy Number</p>  
                        <RadioGroup
                        label=""
                        orientation='horizontal'
                        >
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                        <Radio value="other">Other</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='flex gap-10 '>
                    <div className={`${styles.customFields} ${styles.customBorder} w-1/2`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Address</p>  
                        <Input
                        isRequired
                        type="text"
                        defaultValue=""
                        className="max-w-xs "
                        />
                    </div>
                    <div className={`${styles.customFields} ${styles.customBorder} w-1/2`}>
                        <p className={`${styles.fieldNames} text-xs pb-2`}>Occupation</p>  
                        <Input
                        isRequired
                        type="text"
                        defaultValue=""
                        className="max-w-xs "
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='col-span-1 border-2 border-yellow-100 h-2/3'>
            <img src='' className='h-full' />
        </div>
    </div>
  )
}

export default PersonalInformation;