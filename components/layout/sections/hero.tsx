"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Lights } from "@/components/ui/lights";

interface HeroSectionProps {
    maxWidth?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ maxWidth = 'lg:max-w-screen-xl' }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="relative w-full h-full bg-grid-white/[0.03] mt-5 py-5 mb-10">
            <div className="w-full h-full flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp">
                <div className={`grid place-items-center ${maxWidth} gap-8 mx-auto py-18 md:py-28`}>
                    <div className="text-center space-y-8">
                        <Badge variant="outline" className="bg-black text-sm py-2">
                            <span className="mr-2 text-primary">
                                <Badge>Contribute</Badge>
                            </span>
                            <span> It's open source! </span>
                        </Badge>

                        <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold">
                            <h1>
                                Committed to <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                                    Quality, Driven
                                </span> by Innovation
                            </h1>
                        </div>

                        <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                            Welcome to the TechNexus! Let&apos;s innovate together.
                        </p>

                        <div className="space-y-4 md:space-y-0 md:space-x-4">
                            <Link href="/virtual-events">
                                <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                                    Explore Events <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button asChild variant="secondary" className="w-5/6 md:w-1/4 font-bold">
                                <Link href="https://github.com/pawarspeaks/TechNexus" target="_blank">
                                    Join the Movement
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Keeping the lights fixed at the bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none">
                        <Lights />
                    </div>
                </div>
            </div>
        </section>
    );
};
