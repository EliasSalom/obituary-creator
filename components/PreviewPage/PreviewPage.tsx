"use client"
import {PreviewPagePrinted} from "@/components/PreviewPage/Previewpage.styled";
import {DataInitial} from "@/components/Form/types";

export const PreviewPage = (data: DataInitial) => {
    return (
        <PreviewPagePrinted>
            <h2>أنا هو القيامة والحياةُ</h2>
            <h2>مَنْ آمَنَ بِي وَلَوْ مَاتَ فَسَيَحْيَا</h2>
            <h4>والدة الفقيد واخوته جريس مخلص وفارس وأخواته وزوجته مريم سلوم
                وأولاده رامي وحلا وعموم آل سلوم وجميع اقرباؤهم وأنسباؤهم في البلاد
                والخارج ينعون بمزيد الحزن والاسى فقيدهم الغالي المرحوم</h4>
            <h1>{data.name}</h1>
            <h3>عن عمر يناهز {data.age} عاماً</h3>
        </PreviewPagePrinted>
    );
}