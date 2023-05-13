'use client'
import {usePathname} from "next/navigation";
import Link from 'next-intl/link';
import {NavBar, NavBarItem} from "@/style/main.styled";

interface Props {
    navLinks: {
        name: string;
        href: string;
    }[];
    lang?: string;
}

export const Navigation = ({navLinks, lang}: Props) => {
    const pathname = usePathname();
    return (
        <NavBar>
            {navLinks.map((link) => {
                const isActive = pathname?.startsWith(link.href);
                return (
                    <Link
                        href={`${lang}/${link.href}`}
                        key={link.name}
                        locale={lang}
                        passHref
                        legacyBehavior
                    >
                        <NavBarItem>{link.name}</NavBarItem>
                    </Link>
                );
            })}
        </NavBar>
    );
}