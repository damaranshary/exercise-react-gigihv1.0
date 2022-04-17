import { ChangeEvent, FormEvent } from "react";
import { useAppSelector, useAppDispatch} from "../../data/hooks";
import SearchBar from "../../components/SearchBar"
import GifComponent from "../../components/Gif";
import { search } from "../../data/redux/search-slice";
import { fetchSearchGifs } from "../../api-call/fetchSearchGifs";
import { RootState } from "../../data/store";
import { searchData } from "../../data/redux/data-slice";

const Search = () => {
    const currentQuery = useAppSelector((state: RootState) => state.query.value);
    const currentData = useAppSelector((state: RootState) => state.data.value.search);
    const dispatch = useAppDispatch();

    const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(query(e.target.value));
        dispatch(search(e.target.value));
    }

    const handleFormOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const searchResult = await fetchSearchGifs(currentQuery);
        dispatch(searchData(searchResult));
    }

    // const handleGetGifsData = async () => {
    //     const gifs = await
    //         axios
    //             .get(
    //                 `http://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`
    //             )
    //             .catch((error) => error);
    //     dispatch(data(gifs.data.data))
    //     console.log(gifs);
    // }

    return (
        <div>
            <SearchBar query={currentQuery} handleFormChange={handleFormOnChange} handleFormSubmit={handleFormOnSubmit} />
            {currentData !== undefined && (
                <div className="grid-container search">
                    <GifComponent data={currentData}/>
                </div>)}
        </div>
    )
}

export default Search;