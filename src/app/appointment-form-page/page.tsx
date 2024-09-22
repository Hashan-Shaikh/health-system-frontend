import React from 'react'
import styles from './appointment-form.module.css';
import CustomDropDown from '../components/dropdown/Dropdown';
import {Textarea} from "@nextui-org/react";
import {DatePicker} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

const AppointmentFormPage = () => {
  return (
    <div className={`h-screen w-screen ${styles.mainContainer}  grid grid-cols-5`}>
        <div className='h-full mx-20 my-10 col-span-4'>
            <div className='flex'>
                <img src='/Logo.png'  />
            </div>
            <div className='my-10'>
                <h1 className='font-bold text-3xl'>Hey there 👋</h1>
                <p className={`${styles.fieldNames}`}>Request a new appointment in 10 seconds</p>
            </div>
            <div className='my-10 w-full '>
                <div className={`${styles.customDropdown}`}>
                    <p className={`${styles.fieldNames}`}>Doctor</p>
                    <CustomDropDown />
                </div>
                <div className='pt-6 w-full flex justify-between'>
                    <div className={`${styles.customFields} w-2/5`}>
                        <p className={`${styles.fieldNames}`}>Reason For Appointment</p>
                        <Textarea
                        placeholder="ex: Annual monthly check-up"
                        className="w-full"
                        />
                    </div>
                    <div className={`${styles.customFields} w-2/5`}>
                        <p className={`${styles.fieldNames}`}>Additional Comments/Notes</p>
                        <Textarea
                        placeholder="ex: Prefer appointments, if possible"
                        className="w-full"
                        />
                    </div>
                </div>
                <div className={`${styles.customFields} pt-6 w-full`}>
                    <p className={`${styles.fieldNames}`}>Expected Appointment Date</p>
                    <DatePicker className="w-full" />
                </div>
                <div className='pt-10 w-full'>
                    <Button className='bg-sky-500 text-white w-full'>Submit and continue</Button>
                </div>
            </div>
        </div>
        <div className='col-span-1 h-full'>
            <img src='/i2.png' alt='image' className='h-full' />
        </div>
    </div>
  )
}

export default AppointmentFormPage