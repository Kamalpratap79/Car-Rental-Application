import { Outlet } from "react-router-dom";
import { CarFront } from "lucide-react";
import loginCar from "../assets/images/login-car.jpg";

const AuthLayout = () => {

    return (
        <div className="min-h-screen grid md:grid-cols-2 bg-white">

            {/* Left Section */}

            <div
                className="hidden md:flex relative flex-col
                           justify-start p-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${loginCar})`
                }}
            >

                <div className="absolute inset-0 bg-slate-950/40" />

                <div className="relative z-10 text-white">

                    <div className="flex items-center gap-2 mb-12">
                        <CarFront size={28} />

                        <span className="text-xl font-semibold">
                            Car Rental
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight">
                        Rent the right car,
                        <br />
                        in a few clicks.
                    </h1>

                    <p className="mt-4 max-w-md text-slate-100">
                        Browse the fleet, pick your dates and send
                        a booking request. An admin will approve it.
                    </p>

                </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center justify-center p-8">

                <div className="w-full max-w-md">

                    <Outlet />

                </div>

            </div>

        </div>
    );
};

export default AuthLayout;