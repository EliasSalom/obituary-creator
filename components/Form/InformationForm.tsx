"use client"

import {FormWrapper} from "@/components/Form/FormWrapper";
import Image from "next/image";
import {ReligionSection} from "@/components/Form/Form.styled";

interface userData {
    name: string,
    age: number,
    religion: string
}

type Props = userData & {
    updateField: (fields: Partial<userData>) => void
}
export const InformationForm = ({name, age, religion, updateField}: Props) => {
    return (
        <FormWrapper title={"Religion"}>
            <label htmlFor={"fullName"}>Name</label>
            <input id={"fullName"} type="text" value={name} required
                   onChange={e => updateField({name: e.target.value})}/>
            <label htmlFor={"age"}>age</label>
            <input id={"age"} type="number" value={age} required max={150}
                   onChange={e => updateField({age: Number(e.target.value)})}/>
            <label>religion</label>
            <ReligionSection>
                <label className="btn">
                    <input type="radio" name="religion" id="option1" value={"muslim"}
                           onChange={e => updateField({religion: e.target.value})}/>
                    <Image src={"/../public/icons/001-muslim.png"} alt={""} width={50} height={50}/>
                    <p>muslim</p>
                </label>
                <label className="btn">
                    <input type="radio" name="religion" id="option1" value={"christian"}
                           onChange={e => updateField({religion: e.target.value})}/>
                    <Image src={"/../public/icons/002-cross.png"} alt={""} width={50} height={50}/>
                    <p>christian</p>
                </label>
                <label className="btn">
                    <input type="radio" name="religion" id="option1" value={"jewish"}
                           onChange={e => updateField({religion: e.target.value})}/>
                    <Image src={"/../public/icons/003-jewish.png"} alt={""} width={50} height={50}/>
                    <p>jewish</p>
                </label>
            </ReligionSection>
        </FormWrapper>
    )
}