import {ReligionSection} from "@/components/Form/Form.styled";
import Image from "next/image";
import {useState} from "react";

interface Props {
    setReligion: (religion: string) => void
    updateField: (fields: string) => void
}

export const ReligionForm = () => {
    const [error, setError] = useState(false)
    return (
        <ReligionSection>
            <label className="btn">
                <input type="radio" name="religion" id="option1"/>
                <Image src={"/../public/icons/001-muslim.png"} alt={""} width={50} height={50}/>
                <p>muslim</p>
            </label>
            <label className="btn">
                <input type="radio" name="religion" id="option1"/>
                <Image src={"/../public/icons/002-cross.png"} alt={""} width={50} height={50}
                       onError={() => setError(true)}/>
                <p>cross</p>
            </label>
            <label className="btn">
                <input type="radio" name="religion" id="option1"/>
                <Image src={"/../public/icons/003-jewish.png"} alt={""} width={50} height={50}/>
                <p>jewish</p>
            </label>
        </ReligionSection>
    )
}