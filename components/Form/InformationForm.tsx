"use client"

import {FormWrapper} from "@/components/Form/FormWrapper";
import {ButtonForm} from "@/components/Form/ButtonForm";

export const InformationForm = () => {
    return (
        <FormWrapper title={"Religion"}>
            <label htmlFor={"fullName"}>Name</label>
            <input id={"fullName"} type="text" required/>
            <label htmlFor={"age"}>age</label>
            <input id={"age"} type="number" required max={150}/>
            <label htmlFor={"age"}>religion</label>
            <ButtonForm/>
        </FormWrapper>
    )
}