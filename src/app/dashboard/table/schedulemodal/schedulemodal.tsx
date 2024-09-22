'use client'
import CustomDropDown from "@/app/components/dropdown/Dropdown";
import {Modal,DatePicker ,ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import styles from './schedulemodal.module.css';

export default function ScheduleModal({isOpen = false, setScheduleModal}: any) {

    const closeModal = () => {
        setScheduleModal(false);
    }

  return (
    <>
      <Modal className="bg-black" isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">
                Schedule Appointment
              </ModalHeader>
              <ModalBody>
                <p>Please fill in the following details to schedule</p>
                <div className={`${styles.customDropdown}`}>
                    <p className={`${styles.fieldNames}`}>Doctor</p>
                    <CustomDropDown />
                </div>
                <div className={`${styles.customFields}`}>
                        <p className={`${styles.fieldNames}`}>Reason For Appointment</p>
                        <Textarea
                        placeholder="ex: Annual monthly check-up"
                        className="w-full"
                        />
                </div>
                <div className={`${styles.customFields} pt-6 w-full`}>
                    <p className={`${styles.fieldNames}`}>Expected Appointment Date</p>
                    <DatePicker className="w-full" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-sky-500 w-full" onPress={closeModal}>
                  Schedule Appointment
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}