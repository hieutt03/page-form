import React from 'react';
import SidebarBtnElement from "@/components/SidebarBtnElement";
import {FormElements} from "@/components/FormElements";
import {Separator} from "@/components/ui/separator";

function FormElementsSidebar() {
    return (
        <div>
            <p className={"text-sm text-foreground"}>Drag and drop elements</p>
            <Separator/>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center"}>
               <p className={"text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start"}>Layout elements</p>
                <SidebarBtnElement formElement={FormElements.TextField}/>
                <SidebarBtnElement formElement={FormElements.TitleField}/>
            </div>

        </div>
    );
}

export default FormElementsSidebar;