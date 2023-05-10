"use client"
import {useMultistepForm} from "@/hooks/useMultistepForm/useMultistepForm";
import {Dispatch, FormEvent, SetStateAction} from "react";
import {InformationForm} from "@/components/Form/InformationForm";
import {DataInitial} from "@/components/Form/types";

interface Props {
    data: DataInitial
    setData: Dispatch<SetStateAction<DataInitial>>
}

export const Form = ({data, setData}: Props) => {
    const setReligion = (religion: string) => {
        setData({...data, religion})
        console.log(data)
    }
    const updateField = (fields: Partial<DataInitial>) => {
        setData(prev => ({...prev, ...fields}))
        console.log(data)
    }

    const {
        steps,
        currentStepIndex, step,
        isFirstStep,
        isLastStep,
        back,
        next
    } = useMultistepForm([<InformationForm {...data} updateField={updateField} key={"1"}/>]);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!isLastStep) return next();
        console.log(data)
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                {currentStepIndex + 1}/{steps.length}
            </div>
            {step}
            <div>
                {!isFirstStep && <button type={"button"} onClick={back}>Back</button>}
                <button type={"submit"}>{isLastStep ? "Submit" : "Next"}</button>
            </div>
        </form>
    )
}