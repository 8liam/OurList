"use client";
import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // Check if the query is not null or empty
        if (query.trim() !== '') {
            // Navigate to the /search/{query} route
            window.location.href = `/search/${encodeURIComponent(query)}`;
        }
    };

    // Handle the Enter key press in the input field
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (
        <div className="xl:px-[20vw] lg:px-[15vw] md:px-[5vw] px-[2vw] mt-2 flex gap-2">
            <input
                className="rounded bg-[#1c1c24] border-[#13131a] p-2 border-2 w-[80%]"
                name="query"
                type="text"
                id="input"
                placeholder="Search for Movies"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="rounded bg-[#1c1c24] border-[#13131a] hover:border-[#ffffff] p-2 border-2 w-[20%]"
                id="querySearch"
                name="search"
                type="button" // Change the type to button to prevent form submission
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}