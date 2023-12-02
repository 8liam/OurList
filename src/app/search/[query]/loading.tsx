"use client";
import Navbar from '../../components/navbar';
import { Dna } from 'react-loader-spinner';

export default function Loading() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-8">
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        </>
    )
}