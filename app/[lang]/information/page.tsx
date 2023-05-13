import {version} from "../../../package.json";

export default function Information() {
    return (
        <div>
            <h1>Information</h1>
            <p> description </p>
            <div>
                <label>version</label>
                <p>{version}</p>
                <label>usage</label>
                <p></p>
                <label>visitors</label>
                <p></p>
            </div>
        </div>
    )
}