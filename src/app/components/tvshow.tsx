import React from "react";
import Link from "next/link";
type TVShowProps = {
    id?: number;
    name: string;
    poster: string;
    description: string;
};

export default function TVShow(props: TVShowProps) {
    return (
        <Link href={`/tv/${props.id}`}>
            <div className="bg-[#1c1c24] rounded-lg hover:scale-[1.02] hover:translate-y-3 ease-in-out duration-300 ">
                <div>
                    <img
                        alt={props.name}
                        className="object-cover rounded-t-lg"
                        src={props.poster}
                    />
                    <div className="p-4">
                        <h1 className="font-regular">{props.name}</h1>
                    </div>
                    <div className="mt-auto">
                        <p className="font-extralight text-sm px-4 pb-4 truncate">{props.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
