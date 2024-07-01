"use client";

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {FormElementInstance} from "../FormElements";

type DesignerContextType = {
    elements: FormElementInstance[];
    setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
    addElement: (index: number, element: FormElementInstance) => void;
    removeElement: (id: string) => void;
    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
    updateElement: (id: string, element: FormElementInstance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);
export default function DesignerContextProvider({
                                                    children,
                                                }: {
    children: ReactNode;
}) {
    const [elements, setElements] = useState<FormElementInstance[]>([]);
    const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);
    const addElement = (index: number, element: FormElementInstance) => {
        setElements((prev) => {
            const newElements = [...prev];
            newElements.splice(index, 0, element);
            return newElements;
        });
    };
    const updateElement = (id: string, element: FormElementInstance) => {
        setElements(prevState => {
            const newElements = [...prevState];
            const index = elements.findIndex(element => element.id === id);
            newElements[index] = element;
            return newElements;
        })
    }
    const removeElement = (id: string) => {
        setElements((pre) => pre.filter((element) => element.id !== id));
    };

    return (
        <DesignerContext.Provider
            value={{
                elements,
                setElements,
                addElement,
                removeElement,
                selectedElement,
                setSelectedElement,
                updateElement,

            }}
        >
            {children}
        </DesignerContext.Provider>
    );
}
