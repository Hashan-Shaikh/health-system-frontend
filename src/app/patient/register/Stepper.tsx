"use client"; // Use client component for interactivity

import React from 'react';
import { Stepper, Step, StepLabel, Button, Box, StepConnector, stepConnectorClasses, styled, StepIconProps } from '@mui/material';

// Custom Step Connector
const CustomConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage: 'linear-gradient(to top right, #ec4899, #f59e0b)', // Gradient from pink to yellow
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Large shadow (shadow-lg equivalent)
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage: 'linear-gradient(to top right, #ec4899, #f59e0b)', // Gradient from pink to yellow
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Large shadow
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  }));

// Custom Step Icon
const CustomStepIconRoot = styled('div')<{
  ownerState: { active?: boolean; completed?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed
    ? 'linear-gradient(to top right, #ec4899, #f59e0b)' // Color for completed steps
    : '#757575', // Color for pending steps
  color: '#fff',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  ...(ownerState.active && {
    backgroundColor: '#06b6d4', // Color for active step
  }),
}));

// Step Icon Component
const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;
  const iconContent = props.icon; // The step number

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {iconContent}
    </CustomStepIconRoot>
  );
};

//Step Data
const steps = [
    { id: 1, label: 'Personal Information' },
    { id: 2, label: 'Medical Information' },
    { id: 3, label: 'Identification and Verification'},
];


const StepperComponent = ({ activeStep }: any) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} connector={<CustomConnector />} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel StepIconComponent={CustomStepIcon}>
              <div className="text-white">{step.label}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
