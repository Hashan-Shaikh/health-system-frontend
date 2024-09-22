'use client'
import {Select, SelectItem, Avatar, select} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import React from "react";

const Doctors = [
  {
    id: 1,
    name: 'Dr Mosh',
    img: '/doc.jpeg',
  },
  {
    id: 2,
    name: 'Dr Sara',
    img: 'doctor.jpg',
  },
  {
    id: 3,
    name: 'Dr Fresor',
    img: 'doctor2.jpeg',
  },
]

export default function CustomDropDown() {

  const [selectedDoctor, setSelectedDoctor] = React.useState(null)

  const selectHandler = (id: any) => {
    console.log(id)
    setSelectedDoctor(id);
  }

  // Function to get the avatar based on the selected doctor
  const returnAvatar = (id: number | null) => {
    const selectedDoc = Doctors.find((doctor) => doctor.id === id);
    return selectedDoc ? selectedDoc.img : null;
  };

  return (
      <Select
        className="w-full"
        startContent={selectedDoctor === null ? <CiSearch /> : <Avatar className="w-6 h-6" src={returnAvatar(selectedDoctor) || ''} />}
      >
        {Doctors.map((doctor, index) => 
         <SelectItem
          onClick={() => selectHandler(doctor.id)} 
          key={doctor.id}
          startContent={<Avatar alt={doctor.name} className="w-6 h-6" src={doctor.img} />}
         >{doctor.name}
         </SelectItem>
        )}
      </Select>
  );
}