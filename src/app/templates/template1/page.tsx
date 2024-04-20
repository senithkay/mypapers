"use client";
import { NavbarComponent } from "@/components/NavBarComponent";
import React, { useState } from "react";
import { Input } from "@/components/input";
import { Label } from "@radix-ui/react-label";
import {
  LabelInputContainer,
  BottomGradient,
} from "@/components/LabelInputContainer";
import FormBuilder from "@/utils/formBuilder";
import { FormDefBuilder } from "@/utils/formDefinition";

function Page() {
  const [stepNumber, setStepNumber] = useState(0);
  const handleNext = () => {
    let newStepNumber = stepNumber;
    if (stepNumber <= 3) {
      newStepNumber++;
    }
    setStepNumber(newStepNumber);
  };

  const formDefBuilder = new FormDefBuilder({
    formId: 1,
    formComponents: [
      {
        columnID: 1,
        children: [
          {
            fieldID: 1,
            label: "Question 01",
            type: "type",
            id: "id",
            placeHolder: "place holder",
          },
          {
            fieldID: 2,
            label: "Label",
            type: "type",
            id: "id",
            placeHolder: "place holder",
          },
          {
            formId: 1,
            formComponents: [
              {
                columnID: 1,
                children: [
                  {
                    fieldID: 2,
                    label: "Label",
                    type: "type",
                    id: "id",
                    placeHolder: "place holder",
                  },
                ],
              },

              {
                columnID: 2,
                children: [
                  {
                    fieldID: 2,
                    label: "Label",
                    type: "type",
                    id: "id",
                    placeHolder: "place holder",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  return (
    <div className=' w-full bg-white h-[100vh] flex items-center  flex-col px-[10%] justify-center'>
      <NavbarComponent className='top-2' />

      <div className=' w-[400px]  absolute z-[1000] overflow-hidden'>
        <div
          className={`w-[1600px]  relative  border-solid border-gray-300 border-2 rounded-3xl flex -translate-x-${stepNumber}/4 transition duration-[500]`}
        >
          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Tell us about the paper
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              This template requires the following information to continue
            </p>

            <form className=' pt-[30px]' onSubmit={() => {}}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label
                  htmlFor='subject-title'
                  className=' text-gray-500 font-medium'
                >
                  Subject Title
                </Label>
                <Input
                  id='subject-title'
                  placeholder='Mathematics'
                  type='text'
                />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='year' className=' text-gray-500 font-medium'>
                  Year
                </Label>
                <Input id='year' placeholder='202' type='date' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                  htmlFor='exam-code'
                  className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394' />
              </LabelInputContainer>

              <button
                className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              >
                Next &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* step 02*/}

          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Type the question and its answers below
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              Question 01
            </p>

            <form className=' pt-[30px]' onSubmit={() => {}}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label
                  htmlFor='subject-title'
                  className=' text-gray-500 font-medium'
                >
                  Subject Title
                </Label>
                <Input
                  id='subject-title'
                  placeholder='Mathematics'
                  type='text'
                />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='year' className=' text-gray-500 font-medium'>
                  Year
                </Label>
                <Input id='year' placeholder='202' type='date' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                  htmlFor='exam-code'
                  className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394' />
              </LabelInputContainer>

              <button
                className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              >
                Next &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* step 03*/}

          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Tell us about the paper
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              This template requires the following information to continue
            </p>

            <FormBuilder formDef={formDefBuilder.getComponent()} />
          </div>

          {/* step 04*/}

          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Tell us about the paper
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              This template requires the following information to continue
            </p>

            <form className=' pt-[30px]' onSubmit={() => {}}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label
                  htmlFor='subject-title'
                  className=' text-gray-500 font-medium'
                >
                  Subject Title
                </Label>
                <Input
                  id='subject-title'
                  placeholder='Mathematics'
                  type='text'
                />
              </LabelInputContainer>
              <LabelInputContainer className='mb-4'>
                <Label htmlFor='year' className=' text-gray-500 font-medium'>
                  Year
                </Label>
                <Input id='year' placeholder='202' type='date' />
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                  htmlFor='exam-code'
                  className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394' />
              </LabelInputContainer>

              <button
                className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Submit &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
