"use client"
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react'; // Import the Heart icon

interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
}

function FavouritesPage() {
    const [favourites, setFavourites] = useState<{ type: string; event: Event }[]>([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');
        const validFavourites = storedFavourites.filter((fav: any) => fav.event && fav.event.id);
        setFavourites(validFavourites);
    }, []);

    const toggleFavourite = (event: Event, type: string) => {
        const updatedFavourites = favourites.some(fav => fav.event.id === event.id && fav.type === type)
            ? favourites.filter(fav => !(fav.event.id === event.id && fav.type === type))
            : [...favourites, { type, event }];

        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-12">
            <h2 className="text-3xl font-bold md:text-4xl text-center mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-indigo-400 to-indigo-800">
            💖Favourite💖
            </h2>            <div className="flex flex-col items-center w-full max-w-4xl">
                {favourites.map(({ event, type }) => (
                    event ? (
                        <div key={event.id} className={`my-6 relative max-w-[900px] py-8 sm:py-6 sm:pt-14 md:py-10 lg:py-10 px-4 md:px-[75px] w-full happening-card border border-[#323232]/50 bg-opacity-20 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] p-6 shadow-xl backdrop-blur-8xl rounded-lg text-white overflow-hidden transition-transform duration-300 transform`}>

                            <div className="flex flex-col-reverse md:flex-row relative justify-between items-center gap-8">
                                <div className="w-full md:w-2/3 flex flex-col">
                                    <div className="text-4xl text-slate-100 font-semibold leading-tight">{event.title}</div>
                                    <div className="pt-3 text-base text-zinc-200 opacity-90">
                                        {event.description.length > 100 ? `${event.description.substring(0, 100)}...` : event.description}
                                    </div>
                                    <div className="py-4 grid grid-cols-2 gap-5">
                                        <div className="flex flex-col">
                                            <div className="font-semi-bold text-xs md:text-base">Date</div>
                                            <div className="font-medium text-xs md:text-base">{event.date}</div>
                                        </div>
                                        {event.location && ( // Check if location is available
                                            <div className="flex flex-col">
                                                <div className="font-semi-bold text-xs md:text-base">Location</div>
                                                <div className="font-medium text-xs md:text-base">{event.location}</div>
                                            </div>
                                        )} 
                                        <div className="">
                                            <button onClick={() => toggleFavourite(event, type)} className="mt-4">
                                                <Heart className={`w-6 h-6 ${favourites.some(fav => fav.event.id === event.id && fav.type === type) ? 'text-red-500' : 'text-gray-500'}`} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center w-full md:w-1/3">
                                    <div className="w-250 h-250 rounded-2xl border-1 border-[#363A42]">
                                        <img src={event.image} alt={event.title} className="HappeningIMG rounded-2xl transition-transform duration-300 transform hover:scale-105" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
}

export default FavouritesPage;
