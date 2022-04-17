import { useEffect} from "react";
import { fetchTrendingGifs } from "../../api-call/fetchTrendingGifs";
import { useAppDispatch, useAppSelector } from "../../data/hooks";
import { trendingData } from "../../data/redux/data-slice";
import { RootState } from "../../data/store";
import GifComponent from "../../components/Gif";

const Trending = () => {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    const currentData = useAppSelector((state : RootState) => state.data.value.trending);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const searchResult = fetchTrendingGifs();
        searchResult.then(result => dispatch(trendingData(result)));
    }, [apiKey, dispatch]);

    return (
        <div className="grid-container trending">
            {currentData !== undefined && (<GifComponent data={currentData} />)} 
        </div>
    )
}

export default Trending;

