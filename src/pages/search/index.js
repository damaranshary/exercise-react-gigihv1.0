import { useState } from "react";
import axios from 'axios';
import SearchBar from "../../components/SearchBar"
import GifComponent from "../../components/Gif";

const Search = () => {
    const [data, setData] = useState();
    const [query, setQuery] = useState("");
    const apiKey = process.env.REACT_APP_GIPHY_KEY; 
    
    const handleFormChange = e => {
        setQuery(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        getGifs();
    }

    const getGifs = async () => {      
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12`
                )
                .catch((error) => error);
        setData(gifs.data.data)
        console.log(gifs);
    }

    return (
        <div>
            <SearchBar query={query} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            {data !== undefined && (
                <GifComponent data={data} />)}
        </div>
    )

}

export { Search };
