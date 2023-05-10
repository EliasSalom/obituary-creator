import {Form} from "@/components/Form/Form";
import {PreviewPage} from "@/components/PreviewPage/PreviewPage";
import {FormPageSection} from "@/style/main.styled";

export default function page() {
    const onChange = () => {

    }
    return (
        <FormPageSection>
            <Form/>
            <PreviewPage/>
        </FormPageSection>
    )
}