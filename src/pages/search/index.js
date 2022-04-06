// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import SearchBar from "../../components/SearchBar"
import GifComponent from "../../components/Gif";
import { query } from "../../data/redux/search-slice";
import { data } from "../../data/redux/data-slice"

const Search = () => {
    // const [query, setQuery] = useState("");
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    const currentQuery = useSelector((state) => state.query.value);
    const currentData = useSelector((state) => state.data.value)
    const dispatch = useDispatch();     

    const handleFormOnChange = e => {
        dispatch(query(e.target.value));
        //setQuery(e.target.value);
    }

    // useEffect(() => {
    //     dispatch(search(query));
    // }, [query, dispatch])

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        handleGetGifsData();
    }

    const handleGetGifsData = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`
                )
                .catch((error) => error);
        dispatch(data(gifs.data.data))
        console.log(gifs);
    }

    return (
        <div>
            <SearchBar query={currentQuery} handleFormChange={handleFormOnChange} handleFormSubmit={handleFormOnSubmit} />
            {currentData !== undefined && (
                <GifComponent data={currentData} key={currentData.id} />)}
        </div>
    )
}

export default Search;