
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import style from "./Search.module.css";

const SearchBar = () => {

    const [query, setQuery] = useState("");

   

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (

        <div className={style.searchBar}>
            <div className={style.searchBox}>
            <CiSearch className={style.searchIcon}  />
            <input
                type="text"
                className={style.searchInput}
                placeholder="Search for Products, Brands and More"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
           
        </div>
        </div>
    );
};


export default SearchBar;