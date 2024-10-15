"use client"; // Add this directive to make the component a Client Component

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import BinocularsIcon from "@/components/icons/BinocularsIcon";
import HandshakeIcon from "@/components/icons/Handshake";
import RocketIcon from "@/components/icons/RocketIcon";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useState } from "react"; // Import useState from React
interface BenefitsProps {
    icon: JSX.Element; // Change from string to JSX.Element
    title: string;
    description: string;
}

const benefitList: BenefitsProps[] = [
    {
        icon: <BinocularsIcon />,
        title: "Connect",
        description: "Add events, share knowledge, and grow the community."
    },
    {
        icon: <HandshakeIcon />,
        title: "Network",
        description: "Network with like-minded professionals and enthusiasts.",
    },
    {
        icon: <RocketIcon />,
        title: "Contribute",
        description: "Add events, share knowledge, and grow the community.",
    },
];

export const BenefitsSection = () => {
    const [activeTab, setActiveTab] = useState("aboutTab"); // State to manage active tab

    return (
        <section id="benefits" className="container py-22 sm:py-30">
            <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
                <div>
                    <h2 className="text-lg text-primary mb-2 tracking-wider">Why Us?</h2>
                    {/* Tabs Navigation */}
                    <div className="flex mb-4">
                        <button
                            className={`rounded-l-3xl border-1 py-2 px-4 ${activeTab === "aboutTab" ? "bg-primary text-white" : "bg-muted"}`}
                            onClick={() => setActiveTab("aboutTab")}
                            id="aboutButton"
                        >
                            About
                        </button>
                        <button
                            className={`py-2 px-4 ${activeTab === "eventTab" ? "bg-primary text-white" : "bg-muted"}`}
                            onClick={() => setActiveTab("eventTab")}
                            id="eventButton"
                        >
                            Event
                        </button>
                        <button
                            className={`rounded-r-3xl border-1 py-2 px-4 ${activeTab === "contributeTab" ? "bg-primary text-white" : "bg-muted"}`}
                            onClick={() => setActiveTab("contributeTab")}
                            id="contributeButton"
                        >
                            Contribute
                        </button>
                    </div>
                    <motion.div
                        id="aboutTab"
                        className="tab-content fade-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeTab === "aboutTab" ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} // Smooth transition
                        style={{ display: activeTab === "aboutTab" ? "block" : "none" }}
                    >
                        <h3 className="text-2xl font-bold">About TechNexus</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            TechNexus is a vibrant ecosystem where tech enthusiasts, developers, and innovators converge. Our community-driven platform showcases a diverse array of technology events from around the globe, fostering connections and driving innovation.
                        </p>
                    </motion.div>
                    <motion.div
                        id="eventTab"
                        className="tab-content fade-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeTab === "eventTab" ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} // Smooth transition
                        style={{ display: activeTab === "eventTab" ? "block" : "none" }}
                    >
                        <h3 className="text-2xl font-bold">Featured Event</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Discover cutting-edge tech conferences, workshops, and meetups. From AI and blockchain to cybersecurity and DevOps, TechNexus brings you events that shape the future of technology.
                        </p>
                    </motion.div>
                    <motion.div
                        id="contributeTab"
                        className="tab-content fade-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeTab === "contributeTab" ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} // Smooth transition
                        style={{ display: activeTab === "contributeTab" ? "block" : "none" }}
                    >
                        <h3 className="text-2xl font-bold">Contribute Year-Round</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            The spirit of open-source collaboration doesn&apos;t end with Hacktoberfest or any open source event. At TechNexus, we believe in fostering a community of continuous contribution. Your input shapes the future of our global tech community.
                        </p>
                        <Button asChild className="mb-4">
                            <a href="https://github.com/" target="_blank">
                                Meet Our Contributors
                            </a>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 w-full">
                    {benefitList.map(({ icon, title, description }, index) => (
                        <Card
                            key={title}
                            className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
                        >
                            <CardHeader>
                                <div className="flex justify-between">
                                    {icon} {/* Use the SVG icon directly */}
                                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                                        0{index + 1}
                                    </span>
                                </div>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                {description}
                            </CardContent>
                        </Card>
                    ))}
                    <Card
                        className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number flex items-center justify-center h-full px-4 py-4 sm:px-6 md:px-8"
                    >
                        <p className="text-1xl text-center sm:text-2xl mb-4">Ready to dive in?</p>
                        <Button asChild>
                            <a href="https://github.com/pawarspeaks/TechNexus" target="_blank">
                                Contribute
                            </a>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
};
