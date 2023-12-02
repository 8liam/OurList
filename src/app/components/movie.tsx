import React from "react";
import Link from "next/link";
import Poster404 from '/public/404_poster.png';

type MovieProps = {
    id?: number;
    title: string;
    poster: any;
    description: string;
};


export default function Movie(props: MovieProps) {
    console.log(props.poster);
    return (
        <Link href={`/movie/${props.id}`}>
            <div className="bg-[#1c1c24] rounded-lg hover:scale-[1.02] hover:translate-y-3 ease-in-out duration-300">
                <div>
                    <img
                        alt={props.title}
                        className="object-cover rounded-t-lg"
                        src={props.poster}
                    />
                    <div className="p-4">
                        <h1 className="font-regular">{props.title}</h1>
                    </div>
                    <div className="mt-auto">
                        <p className="font-extralight text-sm px-4 pb-4 truncate">{props.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}