"use client"
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

function Navbar() {
    const { isLoaded, isSignedIn, user } = useUser();


    console.log(user)
    const email = user?.emailAddresses[0].emailAddress;
    console.log(email);
    const name = user?.firstName;
    console.log(name);
    const picture = user?.imageUrl;
    console.log(picture);
    if (!user) {
        return (
            <nav className="bg-[#1c1c24] py-3 flex items-center justify-between p-2 xl:px-[25vw] lg:px-[15vw] md:px-[5vw] px-[2vw]">
                <div className="flex items-center"> {/* Adjusted this div */}
                    <a className="font-bold text-xl" href="/">OurMovieList</a>
                </div>
            </nav>
        );
    }

    else {
        return (
            <nav className="bg-[#1c1c24] py-3 flex items-center justify-between p-2 xl:px-[25vw] lg:px-[15vw] md:px-[5vw] px-[2vw]">
                <div className="flex items-center">
                    <a className="font-bold text-xl" href="/">OurMovieList</a>
                </div>
                <div className="text-right">
                    <UserButton />


                </div>
            </nav>
        )
    }
}

export default Navbar;
