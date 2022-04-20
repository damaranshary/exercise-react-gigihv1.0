import axios from "axios";
import { Response } from "./fetchTrendingGifs";

export const fetchSearchGifs = async (currentQuery: string): Promise<Response> => {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;

    const gifs = await
        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?q=${currentQuery}&api_key=${apiKey}&limit=12`
            )
            .catch((error) => error);
    return gifs.data.data;
};