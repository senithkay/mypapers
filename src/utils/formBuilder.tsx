"use client";
import React from "react";
import { Field, FormDefinition } from "./formDefinition";
import {
  LabelInputContainer,
  BottomGradient,
} from "@/components/LabelInputContainer";
import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { FormHelper } from "./formDefinition";

function FormBuilder(props: { formDef: FormDefinition }) {
  const formdef: FormDefinition = props.formDef;

  function renderFormComponents(formdef: FormDefinition) {
    return (
      <>
        {formdef.formComponents.map((element) => {
          return (
            <div
              key={element.columnID}
              id={`form${formdef.formId}-column${element.columnID}`}
            >
              {element.children.map((columnChild) => {
                if (FormHelper.isField(columnChild)) {
                  const child = columnChild as Field;
                  return (
                    <div key={child.id}>
                      <LabelInputContainer>
                        <Label
                          htmlFor={child.id}
                          className=' text-gray-500 font-medium'
                        >
                          {child.label}
                        </Label>
                        <Input
                          id={child.id}
                          placeholder={child.placeHolder}
                          type={child.type}
                        />
                      </LabelInputContainer>
                    </div>
                  );
                } else {
                  const child = columnChild as FormDefinition;
                  return (
                    <div className='flex'>{renderFormComponents(child)}</div>
                  );
                }
              })}
            </div>
          );
        })}
      </>
    );
  }

  return (
    <form
      id={`form${formdef.formId}`}
      className=' pt-[30px] flex'
      onSubmit={() => {}}
    >
      {renderFormComponents(formdef)}
    </form>
  );
}

export default FormBuilder;
