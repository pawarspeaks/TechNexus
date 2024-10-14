"use client"
import React, { useEffect, useState } from 'react';

const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchContributors = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/pawarspeaks/TechNexus/contributors');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setContributors(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchContributors();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loader"></div> {/* Add a loader class for styling */}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-600 text-center font-bold text-lg">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen p-5">
            <h2 className="text-3xl  my-8 font-bold md:text-4xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-200 via-primary to-indigo-200">
                Our Precious Contributors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:mx-36 gap-5">
                {contributors.map((contributor: any) => (
                    <div key={contributor.login} className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"> {/* Enhanced hover effect */}
                        <img
                            src={contributor.avatar_url}
                            alt={contributor.login}
                            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-md" // Added border and shadow
                        />
                        <h3 className="text-xl font-semibold text-white text-center">{contributor.login}</h3> {/* Enhanced typography */}
                        <p className="text-gray-200 text-center">Contributions: {contributor.contributions}</p>
                        <a
                            href={contributor.html_url}
                            className="block mt-3 text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Profile
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributors;
