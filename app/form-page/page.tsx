"use client"
import {Form} from "@/components/Form/Form";
import {PreviewPage} from "@/components/PreviewPage/PreviewPage";
import {FormPageSection} from "@/style/main.styled";
import {useState} from "react";
import {DataInitial} from "@/components/Form/types";

export default function Page() {
    const [data, setData] = useState<DataInitial>({
        name: "",
        age: 0,
        location: "",
        time: "",
        religion: "",
        picture: ""
    })
    const onChange = () => {

    }
    return (
        <FormPageSection>
            <Form data={data} setData={setData}/>
            <PreviewPage {...data}/>
        </FormPageSection>
    )
}