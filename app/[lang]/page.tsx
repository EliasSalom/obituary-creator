'use client'

import Link from "next/link";
import {MainSection, StartButton} from "@/style/main.styled";
import {useTranslations} from 'next-intl';

export default function Home({params: {lang}}: PageProps) {
    // const dict = getDictionary(lang);
    const t = useTranslations('products');
    return (
        <MainSection>
            <title>Obituary Website</title>
            <h1>{t("cart")}</h1>
            <h1>Create Automatic Obituaries in Minutes </h1>
            <h3>with The Obituary Website</h3>
            <p>Our obituary website allows you to create free automatic obituaries without signup. Simply fill in the
                details and receive a printable PDF that&apos;s ready to post on social media or send to loved ones.
                With our
                easy-to-use interface and customizable templates, you can create a beautiful obituary in just a few
                minutes. Our service is free, fast, and hassle-free, so you can focus on honoring your loved one&apos;s
                memory. Start creating your obituary today and share your loved one&apos;s story with the world</p>
            <Link href={`${lang}/form-page`} locale={lang} legacyBehavior passHref>
                <StartButton>Start Here</StartButton>
            </Link>
        </MainSection>
    )
}
