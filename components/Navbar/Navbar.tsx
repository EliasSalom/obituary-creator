'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
import {NavBar, NavBarItem} from "@/style/main.styled";

interface Props {
    navLinks: {
        name: string;
        href: string;
    }[];
}

export const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname();

    return (
        <NavBar>
            {navLinks.map((link) => {
                const isActive = pathname?.startsWith(link.href);
                return (
                    <Link
                        className={isActive ? 'text-blue' : 'text-black'}
                        href={link.href}
                        key={link.name}
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