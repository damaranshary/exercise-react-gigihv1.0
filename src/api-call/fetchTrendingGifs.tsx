import axios from "axios";

export type Response = {
    data: {
        id: string;
        title: string;
        images: {
            fixed_width: {
                url: string;
            }
        }
    }
}

export const fetchTrendingGifs = async (): Promise<Response> => {
    const apiKey = process.env.REACT_APP_GIPHY_KEY;
    const gifs = await axios.get(
        `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12` //
    );
    return gifs.data.data;
};