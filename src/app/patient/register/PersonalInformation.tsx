import React from 'react'
import styles from './register.module.css';
import {MailIcon} from './MailIcon';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm } from 'react-hook-form';
import {DatePicker} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

const PersonalInformation = () => {

    const { register, handleSubmit, setValue } = useForm();

    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-bold'>Personal Information</h1>
            <div className='grid grid-cols-2 pt-5'>
                <div className={`col-span-2 ${styles.customFields}`}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Full Name</p>
                    <Input
                        isRequired
                        type="text"
                        defaultValue=""
                    />
                </div>
                <div className={`col-span-1 ${styles.customFields} pt-5`}>
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
                <div className={`pl-5 col-span-1 ${styles.fieldPhone} pt-5`}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Phone Number</p>
                    <PhoneInput
                        defaultCountry="US"
                        onChange={(value) => setValue('phone', value)}
                    />
                </div>
                <div className={`col-span-1 pt-5 ${styles.customFields}`}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Address</p>  
                    <Input
                        isRequired
                        type="text"
                        defaultValue=""
                    />
                </div>
                <div className={`col-span-1 pt-5 pl-5 ${styles.customFields}`}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Occupation</p>  
                    <Input
                        isRequired
                        type="text"
                        defaultValue=""
                    />
                </div>
                <div className={`col-span-1 pt-5 ${styles.customFields}`}>
                    <p className={`${styles.fieldNames} text-xs pb-2`}>Emergency contact name</p>  
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

export default PersonalInformation