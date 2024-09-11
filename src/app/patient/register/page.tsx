"use client";
import React, { useState, useEffect } from 'react';
import StepperComponent from './Stepper';
import Step1 from './Step1';
// import Step2 from './Step2';
import { useRouter } from 'next/navigation';
import PatientRegistrationHeader from './Header';
// import UserSubmissionModal from './UserSubmissionModal';
// import {post} from '../../service/GenericApiService';

// Step Data
const steps = [
  { id: 1, label: 'Personal Information' },
  { id: 2, label: 'Medical Information' },
  { id: 3, label: 'Identification and Verification'},
];

const CreateUserPage = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [pastStep, setPastStep] = useState('');
    const router = useRouter();
    const [form, setForm] = useState<any>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [responseData, setResponseData] = useState(null);

    const handleNext = (key:any, data: any) => {
    
    setForm((prevState: any) => ({
        ...prevState,
        [key]: data,
    }));
    setPastStep(key);
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setForm((prevState: any) => {
        const updatedState = { ...prevState };
        delete updatedState[pastStep]; // Remove the key corresponding to the current step
        return updatedState;
    });
    setActiveStep((prev) => prev - 1);
  };

//   const cancelDialog = () => {
//     setActiveStep((prev) => prev - 1);
//     setModalOpen(false);
//   }

  const submitForm = async () => {
    
    const newForm = {
        name: `${form.profile.fname} ${form.profile.lname}`,
        email: form.profile.email,
        password: form.profile.password,
        role: form.role.name,
        avatar: form.role.avatar,
    }

    // await post('users', newForm)
    //     .then((_res: any) => {
    //         console.log("Response:", _res.data);
    //         setResponseData(_res.data);
    //         setActiveStep(0);
    //         setForm(null);
    //         setPastStep('');
    //         setModalOpen(false);
    //         router.push('/admin/dashboard');
    //     })
    //     .catch((_err) => {
    //         console.log(`something went wrong, ${_err}`)
    //     })

  }

  useEffect(() => {
    if(activeStep === steps.length){
        setModalOpen(true);
    }
  }, [activeStep])


  return ( 
    <>
      <PatientRegistrationHeader />  
      <div className='mt-3'>
        <StepperComponent activeStep={activeStep} />
      </div>
      <div className='flex justify-center w-full h-full pt-3'>
        {activeStep === 0 && <Step1 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} />}
        {/* {activeStep >= 1 && <Step2 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps} />} */}
        {/* {modalOpen && <UserSubmissionModal submitForm={submitForm} cancelDialog={cancelDialog} />} */}
      </div>
    </>
  );
};

export default CreateUserPage;
