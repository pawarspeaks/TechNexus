"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BenefitsSection } from "@/components/layout/sections/about";
import CommunitySection from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";

export default function Home() {
    const [visibleSections, setVisibleSections] = useState({
        hero: true,
        benefits: false,
        community: false,
        contact: false,
        footer: false,
    });

    const sectionsRef = useRef<HTMLDivElement[]>([]);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSections((prev) => ({
                        ...prev,
                        [entry.target.id]: true,
                    }));
                } else {
                    setVisibleSections((prev) => ({
                        ...prev,
                        [entry.target.id]: false,
                    }));
                }
            });
        }, {
            threshold: 0.1 // Adjust this threshold as needed
        });

        const currentSections = sectionsRef.current;
        currentSections.forEach((section) => {
            if (section) {
                observer.current?.observe(section);
            }
        });

        return () => {
            if (observer.current) {
                currentSections.forEach((section) => {
                    if (section) {
                        observer.current?.unobserve(section);
                    }
                });
            }
        };
    }, []);

    return (
        <>
            <motion.div
                id="hero"
                ref={(el) => {
                    if (el) sectionsRef.current[0] = el;
                }}
                style={{ opacity: visibleSections.hero ? 1 : 0, transition: 'opacity 4s ease' }}
            >
                <HeroSection />
            </motion.div>
            <motion.div
                id="benefits"
                ref={(el) => {
                    if (el) sectionsRef.current[1] = el;
                }}
                style={{ opacity: visibleSections.benefits ? 1 : 0, transition: 'opacity 5s ease' }}
            >
                <BenefitsSection />
            </motion.div>
            <motion.div
                id="community"
                ref={(el) => {
                    if (el) sectionsRef.current[2] = el;
                }}
                style={{ opacity: visibleSections.community ? 1 : 0, transition: 'opacity 4s ease' }}
            >
                <CommunitySection />
            </motion.div>
            <motion.div
                id="contact"
                ref={(el) => {
                    if (el) sectionsRef.current[3] = el;
                }}
                style={{ opacity: visibleSections.contact ? 1 : 0, transition: 'opacity 6s ease' }}
            >
                <ContactSection />
            </motion.div>
            <motion.div
                id="footer"
                ref={(el) => {
                    if (el) sectionsRef.current[4] = el;
                }}
                style={{ opacity: visibleSections.footer ? 1 : 0, transition: 'opacity 4s ease' }}
            >
                <FooterSection />
            </motion.div>
        </>
    );
}
