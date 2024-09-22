'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Avatar, Pagination, getKeyValue} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import styles from './table.module.css'
import React from "react";
import { Chip } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { FaRegHourglass } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ScheduleModal from "./schedulemodal/schedulemodal";
import CancelModal from "./cancelmodal/cancelmodal";

const Patients = [
    {
        patient: 'Tony',
        date: 'Jan 21, 2024',
        status: 'scheduled',
        statusIcon: <FaCheck />,
        doctor: 'Dr Mosh',
        doctorImg: '/doc.jpeg',
        actions: ['Schedule', 'Cancel'],
    },
    {
        patient: 'Mark',
        date: 'Jan 22, 2024',
        status: 'pending',
        statusIcon: <FaRegHourglass />,
        doctor: 'Dr Sara',
        doctorImg: '/doctor.jpg',
        actions: ['Schedule', 'Cancel'],
    },
    {
        patient: 'Tim',
        date: 'Jan 23, 2024',
        status: 'canceled',
        statusIcon: <RxCross2 />,
        doctor: 'Dr Freddy',
        doctorImg: '/doctor2.jpeg',
        actions: ['Schedule', 'Cancel'],
    },
    {
        patient: 'Jim',
        date: 'Jan 21, 2024',
        status: 'scheduled',
        statusIcon: <FaCheck />,
        doctor: 'Dr Mosh',
        doctorImg: '/doc.jpeg',
        actions: ['Schedule', 'Cancel'],
    },
    {
        patient: 'Carl',
        date: 'Jan 22, 2024',
        status: 'pending',
        statusIcon: <FaRegHourglass />,
        doctor: 'Dr Sara',
        doctorImg: '/doctor.jpg',
        actions: ['Schedule', 'Cancel'],
    },
    {
        patient: 'Ali',
        date: 'Jan 23, 2024',
        status: 'canceled',
        statusIcon: <RxCross2 />,
        doctor: 'Dr Freddy',
        doctorImg: '/doctor2.jpeg',
        actions: ['Schedule', 'Cancel'],
    },
]

const Chips = {
    'scheduled': 'success',
    'pending': 'warning',
    'canceled': 'danger',
}

export default function CustomTable() {

    const [page, setPage] = React.useState(1);
    
    const [scheduleModal, setScheduleModal] = React.useState(false);
    const [cancelModal, setCancelModal] = React.useState(false);
    
    const rowsPerPage = 4;

    const pages = Math.ceil(Patients.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
    
        return Patients.slice(start, end);
      }, [page, Patients]);


      const scheduleHandler = () => {
        setScheduleModal(true);
      }

      const cancelHandler = () => {
        setCancelModal(true);
      }

  return (
    <>
    <Table isStriped
    className={`${styles.customTableContainer} w-3/4 pt-5`} 
    aria-label="Example static collection table"
    bottomContent={
        <div className={`flex w-full justify-center ${styles.customPaginator}`}>
          <Pagination
            isCompact
            showControls
            showShadow
            //color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
    }
    >
        
      <TableHeader>
        <TableColumn>Patient</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Doctor</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (<TableRow key={item.patient}>
          <TableCell>{item.patient}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell><Chip className="text-xs" startContent={item.statusIcon} variant="flat" color={Chips[item.status]}>{item.status}</Chip></TableCell>
          <TableCell className="flex gap-2">
            <Avatar src={item.doctorImg} />
            <div className="flex items-center">
                <p>{item.doctor}</p>
            </div>
          </TableCell>
          <TableCell>
            <Link onClick={scheduleHandler} className="text-sky-500 text-sm pr-2">{item.actions[0]}</Link>
            <Link onClick={cancelHandler} className="text-gray-600 text-sm">{item.actions[1]}</Link>
          </TableCell>
        </TableRow>)}
      </TableBody>
    </Table>
    <ScheduleModal isOpen={scheduleModal} setScheduleModal={setScheduleModal} />
    <CancelModal isOpen={cancelModal} setCancelModal={setCancelModal} />
    </>
  );
}