import { useEffect, useState } from "react";
import axios from "axios";
import GifComponent from "../../components/Gif";

const Trending = () => {
    const [data, setData] = useState([]);
    const apiKey = process.env.REACT_APP_GIPHY_KEY;

    useEffect(() => {
        const getTrendingGifs = async () => {
            const gifs = await axios.get(
                `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12`
            );
            setData(gifs.data.data);
        };
        getTrendingGifs();
    }, [apiKey])

    return (
        <div>
            <br />
            {data !== undefined && (<GifComponent data={data} key={data.id} />)}
        </div>
    );
}

export default Trending;

