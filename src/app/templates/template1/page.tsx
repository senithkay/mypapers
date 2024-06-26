"use client";
import { NavbarComponent } from "@/components/NavBarComponent";
import React, { useState } from "react";
import { Input } from "@/components/input";
import { Label } from "@radix-ui/react-label";
import {
  LabelInputContainer,
  BottomGradient,
} from "@/components/LabelInputContainer";
import Button from "@mui/material/Button";
import FullScreenDialog from "@/components/MIUI/dialog";
import CreateQuestion from "@/components/PopUps/create-questions";
import {ACTION_TYPES} from "@/utils/enums";
import {connect} from "react-redux";

function Page({openSnackBar}: {openSnackBar: ()=>any}) {
  const [stepNumber, setStepNumber] = useState(0);
  const [isCreatedManual, setIsCreatedManual] = useState(false);

  const handleManualSave = () => {
    setIsCreatedManual(true);
    openSnackBar();
  };

  const handleNext = () => {
    let newStepNumber = stepNumber;
    if (stepNumber <= 3) {
      newStepNumber++;
    }
    setStepNumber(newStepNumber);
  };

  const handleUndo = () => {
    setIsCreatedManual(false);
  };

  return (
      <div className='   absolute z-[1000] overflow-hidden'>
        <div
            className={`w-[1600px]  relative  -solid border-gray-300 border-2  rounded-3xl flex -translate-x-${stepNumber}/4 transition duration-[500]`}
        >
          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Tell us about the paper
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              This template requires the following information to continue
            </p>

            <form className=' pt-[30px]' onSubmit={() => {
            }}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text'/>
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
                <Input id='year' placeholder='202' type='date'/>
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                    htmlFor='exam-code'
                    className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394'/>
              </LabelInputContainer>

              <button
                  className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
              >
                Next &rarr;
                <BottomGradient/>
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

            <form className=' pt-[30px]' onSubmit={() => {
            }}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text'/>
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
                <Input id='year' placeholder='202' type='date'/>
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                    htmlFor='exam-code'
                    className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394'/>
              </LabelInputContainer>

              <button
                  className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                  onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                  }}
              >
                Next &rarr;
                <BottomGradient/>
              </button>
            </form>
          </div>

          {/* step 03*/}

          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Time to create the questions
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              Provide questions and there answers here
            </p>

            {isCreatedManual ? (
                <div className='flex h-full'>
                  <p className=' text-black my-auto'>
                    Questions are ready to be submitted
                  </p>
                  <Button
                      className='bg-white hover:bg-slate-200 text-black mx-3 my-auto'
                      variant='contained'
                      onClick={handleUndo}
                  >
                    Undo
                  </Button>
                  <Button
                      className='bg-blue-600 my-auto'
                      variant='contained'
                      onClick={handleNext}
                  >
                    Next
                  </Button>
                </div>
            ) : (
                <>
                  <div className=' w-full  flex flex-col justify-center items-center gap-3 my-10'>
                    <p className=' text-black text-center'>
                      You can create your own questions here
                    </p>
                    <FullScreenDialog
                        title='Create'
                        child={<CreateQuestion/>}
                        onSubmit={handleManualSave}
                    />
                  </div>

                  <div className=' w-full  flex flex-col justify-center items-center gap-3 my-4'>
                    <p className=' text-black text-center'>
                      You can automatically generate questions based on the
                      subject
                    </p>
                    <FullScreenDialog
                        title='Generate'
                        child={<>aaa</>}
                        onSubmit={handleManualSave}
                    />
                  </div>
                </>
            )}
          </div>

          {/* step 04*/}

          <div className='max-w-md w-full rounded-none md:rounded-2xl  md:p-8 shadow-input bg-white dark:bg-black'>
            <h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>
              Tell us about the paper
            </h2>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>
              This template requires the following information to continue
            </p>

            <form className=' pt-[30px]' onSubmit={() => {
            }}>
              <LabelInputContainer>
                <Label htmlFor='title' className=' text-gray-500 ffont-medium'>
                  Exam Title
                </Label>
                <Input id='exam-title' placeholder='GCE A/L' type='text'/>
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
                <Input id='year' placeholder='202' type='date'/>
              </LabelInputContainer>
              <LabelInputContainer className='mb-8'>
                <Label
                    htmlFor='exam-code'
                    className=' text-gray-500 font-medium'
                >
                  Exam Code
                </Label>
                <Input id='exam-code' type='text' placeholder='Ex: 182394'/>
              </LabelInputContainer>

              <button
                  className='bg-gradient-to-br relative group/btn bg-blue-600 dark:from-zinc-900 dark:to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
                  onClick={(e) => {
                    e.preventDefault();
                  }}
              >
                Submit &rarr;
                <BottomGradient/>
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state: any) => {
};

const dispatchToProps = (dispatch: any) => ({
  openSnackBar: () => dispatch({
    type: ACTION_TYPES.SNACK_BAR_OPEN,
    payload: {description: 'Saved all changes', extra: {}}
  }),
})

export default connect(mapStateToProps, dispatchToProps)(Page);
