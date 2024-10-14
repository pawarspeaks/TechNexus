"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import TechNexusLogo from '../asset/logo-no-background.png'
import DevcodeLogo from '../asset/DevCode-without-BG.png'

interface RouteProps {
    href: string;
    label: string;
}
import Image from "next/image";
const routeList: RouteProps[] = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/offline-events",
        label: "Offline Events",
    },
    {
        href: "/virtual-events",
        label: "Online Events",
    },
    {
        href: "/contributors",
        label: "Contributor",
    },
    {
        href: "/#contact",
        label: "Contact",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
            <Link href="/" className="font-bold text-lg flex items-center">
                <Image src={TechNexusLogo} alt="logo" className="h-9 w-auto"></Image>
            </Link>
            {/* <!-- Mobile --> */}
            <div className="flex items-center lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Menu
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer lg:hidden"
                        />
                    </SheetTrigger>

                    <SheetContent
                        side="left"
                        className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                    >
                        <div>
                            <SheetHeader className="mb-4 ml-4">
                                <SheetTitle className="flex items-center">
                                    <Link href="/" className="flex items-center">
                                        <Image src={TechNexusLogo} alt="logo" className="h-9 w-auto"></Image>

                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-2">
                                {routeList.map(({ href, label }) => (
                                    <Button
                                        key={href}
                                        onClick={() => setIsOpen(false)}
                                        asChild
                                        variant="ghost"
                                        className="justify-start text-base"
                                    >
                                        <Link href={href}>{label}</Link>

                                    </Button>
                                ))}
                                {/* need to add github button here */}
                            </div>

                        </div>

                        <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                            <Separator className="mb-2" />

                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/* <!-- Desktop --> */}
            <NavigationMenu className="hidden lg:flex items-center mx-auto">
                <NavigationMenuList className="flex items-center">
                    <NavigationMenuItem className="flex items-center">
                        {routeList.map(({ href, label }) => (
                            <NavigationMenuLink key={href} asChild>
                                <Link href={href} className="text-base px-2">
                                    {label}
                                </Link>
                            </NavigationMenuLink>
                        ))}
                        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
                            <Link
                                aria-label="View on GitHub"
                                href="https://github.com/pawarspeaks/TechNexus"
                                target="_blank"
                            >
                                <Github className="size-5" />
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex">
                <Image src={DevcodeLogo} alt="DevcodeLogo" className="h-9 w-auto"></Image>

            </div>
        </header>
    );
};
