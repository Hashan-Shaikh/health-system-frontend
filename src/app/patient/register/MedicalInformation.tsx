import React from 'react'
import CustomDropDown from '@/app/components/dropdown/Dropdown';
import styles from './register.module.css';
import {Input} from "@nextui-org/react";

const MedicalInformation = () => {
  return (
    <div className='mt-5'>
        <h1 className='text-2xl font-bold'>Medical Information</h1>
        <div className='grid grid-cols-2 pt-5'>
            <div className={`col-span-2 ${styles.customFields} ${styles.customDropdown}`}>
                <p className={`${styles.fieldNames} text-xs pb-2`}>Primary care physician</p>
                <CustomDropDown />
            </div>
            <div className={`col-span-1 pt-5 ${styles.customFields}`}>
                <p className={`${styles.fieldNames} text-xs pb-2`}>Insurance provider</p>  
                <Input
                    isRequired
                    type="text"
                    defaultValue=""
                />
            </div>
            <div className={`col-span-1 pt-5 pl-5 ${styles.customFields}`}>
                <p className={`${styles.fieldNames} text-xs pb-2`}>Insurance policy number</p>  
                <Input
                    isRequired
                    type="text"
                    defaultValue=""
                />
            </div>
        </div>
    </div>
  )
}

export default MedicalInformation