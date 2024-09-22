import { Avatar } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import styles from './dashboard.module.css';
const DashboardLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className={`${styles.mainContainer} w-screen h-screen`}>
            <div className='flex justify-between px-5 py-5'>
                <div className=''>
                    <img src='/Logo.png' className='w-24' />
                </div>
                <div className='flex '>
                    <Avatar src='/doc.jpeg' className='w-5 h-5' />
                    <p className='pl-2 text-small'>Admin</p>
                </div>
            </div>
            <div className='w-full h-full'>
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout