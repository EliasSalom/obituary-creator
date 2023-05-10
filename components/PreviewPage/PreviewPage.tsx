"use client"
import {PreviewPagePrinted} from "@/components/PreviewPage/Previewpage.styled";
import {DataInitial} from "@/components/Form/types";

export const PreviewPage = (data: DataInitial, style: any,) => {
    return (
        <PreviewPagePrinted>
            <h1>Preview Page</h1>
        </PreviewPagePrinted>
    );
}