import DevcodeLogo from "./logo/DevCode-without-BG.png"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const CommunitySection = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="JoinCommunity">
            <div className=" ">
                <div className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8  ">
                    <div className="relative isolate overflow-hidden bg-black/40 backdrop-filter backdrop-blur-4xl px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 max-h-[80vh]">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#1E90FF" />
                                    <stop offset="1" stopColor="#00008B" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
                            <Image src={DevcodeLogo} alt="DevCode logo" className="h-16 mb-4 w-auto"></Image>
                            <h2 className="text-3xl font-bold text-white sm:text-3xl">Community For Developers by Developers!  <span className="text-3xl font-bold md:text-4xl text-center mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-foreground to-primary">
                                Dev Code                </span></h2>
                            <p className="mt-3 text-lg leading-8 text-gray-200">
                                Dev Code Community is a passionate group of developers and tech enthusiasts dedicated to fostering growth, collaboration, and innovation in the tech world. Our mission is to create a supportive environment where members can learn, share knowledge, and contribute to exciting open-source projects like TechNexus.

                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <motion.a
                                    className="px-4 py-2 text-foreground font-medium bg-primary/60 rounded-full inline-flex items-center border border-1 border-gray-800"
                                    href="https://dev-code-community.github.io/bio/"
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    whileHover={{ scale: 1.05 }} // Scale effect on hover
                                    transition={{ type: "spring", stiffness: 300 }} // Smooth transition
                                >
                                    Join Devcode Community
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 ml-1 duration-150"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ rotate: isHovered ? -45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </motion.svg>
                                </motion.a>
                            </div>
                        </div>
                        <div className="relative mt-6 h-30 lg:mt-4">
                            <img className="absolute left-0 top-0 w-[80rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="CodeINBlogs" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
