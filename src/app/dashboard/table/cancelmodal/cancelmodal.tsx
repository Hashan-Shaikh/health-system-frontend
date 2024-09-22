'use client'
import CustomDropDown from "@/app/components/dropdown/Dropdown";
import {Modal,DatePicker ,ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea} from "@nextui-org/react";
import styles from './cancelmodal.module.css';

export default function CancelModal({isOpen = false, setCancelModal}: any) {

    const closeModal = () => {
        setCancelModal(false);
    }

  return (
    <>
      <Modal className="bg-black" isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">
                Cancel Appointment
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to cancel the appointment</p>
                <div className={`${styles.customFields}`}>
                        <p className={`${styles.fieldNames}`}>Reason for cancellation</p>
                        <Textarea
                        placeholder="ex: Annual monthly check-up"
                        className="w-full"
                        />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="bg-red-600 w-full" onPress={closeModal}>
                  Cancel Appointment
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}