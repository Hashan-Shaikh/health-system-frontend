import React from 'react'
import styles from './dashboard.module.css'
import CustomCard from '../components/card/Card';
import CustomTable from './table/Table';

const CardContent = [
    {
        id: 1,
        logo: '/scheduled.svg',
        number: 94,
        text: 'Total number of scheduled appointments'
    },
    {
        id: 2,
        logo: '/pending.svg',
        number: 32,
        text: 'Total number of pending appointments'
    },
    {
        id: 3,
        logo: '/canceled.svg',
        number: 56,
        text: 'Total number of cancelled appointments'
    },
]

const DashboardPage = () => { 
  return (
    <div className='h-full w-full overflow-auto'>
        <div className='mt-5 ml-5'>
            <h1 className='text-3xl font-bold'>Welcome, Admin</h1>
            <p className={`${styles.fieldNames}`}>Start day with managing new appointments</p>
        </div>
        <div className='grid grid-cols-3 mt-5 ml-5'>
            {
                CardContent.map((item, index)=> <CustomCard key={item.id} logo={item.logo} number={item.number} text={item.text} />)
            }
        </div>
        <div className='h-full w-full flex justify-center mt-10'>
            <CustomTable />
        </div>
    </div>
  )
}

export default DashboardPage;