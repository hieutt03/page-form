import React from "react";
import {TextFieldFormElement} from "./fields/TextField";
import {TitleFieldFormElement} from "@/components/fields/TitleField";

export type ElementsType = "TextField" | "TitleField";

export type SubmitFunction = (key: string, value: string) => void

export type FormElement = {
    type: ElementsType;
    construct: (id: string) => FormElementInstance;
    designerBtnElement: {
        icon: React.ElementType;
        label: string;
    };
    designerComponent: React.FC<{
        elementInstance: FormElementInstance
    }>;
    formComponent: React.FC<{
        elementInstance: FormElementInstance,
        submitValue?: SubmitFunction,
        isInvalid?: boolean,
        defaultValue?: string
    }>;
    propertiesComponent: React.FC<{
        elementInstance: FormElementInstance
    }>;
    validate: (formElement: FormElementInstance, currentValue: string) => boolean
};

type FormElementsType = {
    [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
    TextField: TextFieldFormElement,
    TitleField: TitleFieldFormElement
};
export type FormElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
};
// export default FormElements;
// FormElements["TextField"];
