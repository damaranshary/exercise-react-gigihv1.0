import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import SearchBar from "../../components/SearchBar"
import GifComponent from "../../components/Gif";
import { search } from "../../data/redux/search-slice";
import { getData } from "../../data/redux/data-slice"

const Search = () => {
    const [query, setQuery] = useState("");
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    const currentQuery = useSelector((state) => state.search.value);
    const currentData = useSelector((state) => state.data.value)
    const dispatch = useDispatch();     

    const handleFormChange = e => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        dispatch(search(query));
    }, [query, dispatch])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getGifs();
    }

    const getGifs = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`
                )
                .catch((error) => error);
        dispatch(getData(gifs.data.data))
        console.log(gifs);
    }

    return (
        <div>
            <SearchBar query={query} handleFormChange={handleFormChange} handleFormSubmit={handleFormSubmit} />
            {currentData !== undefined && (
                <GifComponent data={currentData} />)}
        </div>
    )
}

export { Search };
