import Image from 'next/image';
import "./style.css"
import {ReligionSection} from "@/components/Form/Form.styled";

interface Props {
    setReligion: (religion: string) => void
}

export const ButtonForm = () => {
    return (
        <ReligionSection>
            <label className="btn">
                <input type="radio" name="religion" id="option1"/>
                <Image src={"/../public/icons/001-muslim.png"} alt={""} width={50} height={50}/>
                <p>muslim</p>
            </label>
            <label className="btn">
                <input type="radio" name="religion" id="option1"/>
                <Image src={"/../public/icons/002-cross.png"} alt={""} width={50} height={50}/>
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