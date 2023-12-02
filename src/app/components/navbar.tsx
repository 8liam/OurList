"use client"
import { useState } from 'react';

function Navbar() {
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
        <nav className="px-96 bg-[#1c1c24] py-3 flex justify-center text-center">
            <div className="basis-1/3 inline-block mr-4 text-left py-2 ">
                <a href="/" className="text-xl">
                    OurMovieList
                </a>
            </div>
            <div className="basis-1/3 inline-block py-2 text-lg">
                <a href="/" className="mx-4">
                    Movies
                </a>
                <a href="/" className="mx-4">
                    My List
                </a>
            </div>
            <div className="basis-1/3 inline-block">
                <input
                    className="rounded bg-[#13131a] border-[#13131a] p-2 border-2 mx-2"
                    name="query"
                    type="text"
                    id="input"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="rounded bg-[#13131a] border-[#13131a] hover:border-[#ffffff] p-2 border-2"
                    id="querySearch"
                    name="search"
                    type="button" // Change the type to button to prevent form submission
                    onClick={handleSearch}
                >
                    Search
                </button>

            </div>
        </nav>
    );
}

export default Navbar;
