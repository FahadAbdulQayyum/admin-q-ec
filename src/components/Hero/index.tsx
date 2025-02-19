import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

import { useDispatch } from "react-redux";
import { AppDispatch } from "../lib/store";

import { setLoading } from "../lib/features/loader/loaderSlice";



const Hero: React.FC = () => {

    const dispatch: AppDispatch = useDispatch(); // Use typed dispatch

    const [loadingg, setLoadingg] = React.useState(false);

    const router = useRouter();

    if (loadingg) {
        return <div className="flex justify-center items-center h-screen relative">
            <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
        </div>;
    }

    const goToBooking = async () => {
        dispatch(setLoading(true));
        setLoadingg(true);
        await router.push('/Location');
        setLoadingg(false);
        dispatch(setLoading(false));
    }

    return (
        <div className="relative h-screen overflow-hidden mx-standardSize">
            {/* The hero image will cover the full container */}
            <Image
                src="/assets/download.avif"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                priority
                className="object-center" // Optionally center the image
                loading="eager" // Ensures faster loading
                unoptimized={true} // Disable optimization

            />

            {/* Overlay content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    Welcome to Our Store
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                    Explore the latest collection of Bendat Fashion
                </p>
                <button
                    className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm md:text-base lg:text-lg"
                    onClick={goToBooking}
                >
                    Book Now
                </button>
            </div>
        </div >
    );
};

export default Hero;
