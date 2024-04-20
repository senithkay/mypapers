import FormBuilder from "@/utils/formBuilder";
import { FormComponents, FormDefBuilder } from "@/utils/formDefinition";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function CreateQuestion() {
  const [questionList, setQuestionList] = useState<FormComponents[]>([
    {
      columnID: 1,
      children: [
        {
          fieldID: 1,
          label: "New question",
          type: "type",
          id: "id",
          placeHolder: "Enter a question",
        },
        {
          formId: 1,
          formComponents: [
            {
              columnID: 1,
              children: [
                {
                  fieldID: 2,
                  label: "Answer 01",
                  type: "type",
                  id: "id",
                  placeHolder: "Enter answer 01",
                },
                {
                  fieldID: 2,
                  label: "Answer 03",
                  type: "type",
                  id: "id",
                  placeHolder: "Enter answer 03",
                },
              ],
            },

            {
              columnID: 2,
              children: [
                {
                  fieldID: 2,
                  label: "Answer 02",
                  type: "type",
                  id: "id",
                  placeHolder: "Enter answer 02",
                },
                {
                  fieldID: 2,
                  label: "Answer 04",
                  type: "type",
                  id: "id",
                  placeHolder: "Enter answer 04",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  const formDefBuilder = new FormDefBuilder({
    formId: 1,
    formComponents: questionList,
  });

  const createQuestionFormBuilder = new FormDefBuilder({
    formId: 1,
    formComponents: [
      {
        columnID: 1,
        children: [
          {
            fieldID: 1,
            label: "New question",
            type: "type",
            id: "id",
            placeHolder: "Enter a question",
          },
          {
            formId: 1,
            formComponents: [
              {
                columnID: 1,
                children: [
                  {
                    fieldID: 2,
                    label: "Answer 01",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 01",
                  },
                  {
                    fieldID: 2,
                    label: "Answer 03",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 03",
                  },
                ],
              },

              {
                columnID: 2,
                children: [
                  {
                    fieldID: 2,
                    label: "Answer 02",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 02",
                  },
                  {
                    fieldID: 2,
                    label: "Answer 04",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 04",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  const handleAdd = () => {
    setQuestionList([
      ...questionList,
      {
        columnID: 1,
        children: [
          {
            fieldID: 1,
            label: "New question",
            type: "type",
            id: "id",
            placeHolder: "Enter a question",
          },
          {
            formId: 1,
            formComponents: [
              {
                columnID: 1,
                children: [
                  {
                    fieldID: 2,
                    label: "Answer 01",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 01",
                  },
                  {
                    fieldID: 2,
                    label: "Answer 03",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 03",
                  },
                ],
              },

              {
                columnID: 2,
                children: [
                  {
                    fieldID: 2,
                    label: "Answer 02",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 02",
                  },
                  {
                    fieldID: 2,
                    label: "Answer 04",
                    type: "type",
                    id: "id",
                    placeHolder: "Enter answer 04",
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  };

  return (
    <div className=' w-full h-full flex p-4'>
      <FormBuilder formDef={formDefBuilder.getComponent()} />
      <div className=' m-4  w-[60%] px-[100px]'>
        <h2 className=' text-lg font-bold'>Add New Question</h2>
        <div className=''>
          <FormBuilder formDef={createQuestionFormBuilder.getComponent()} />
        </div>
        <Button
          className='bg-blue-600 m-4'
          variant='contained'
          onClick={handleAdd}
        >
          Add to List
        </Button>
      </div>
    </div>
  );
}

export default CreateQuestion;
