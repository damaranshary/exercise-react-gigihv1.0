import React, { Component } from "react";
import axios from 'axios';
import GifComponent from "../../components/Gif";

class Search extends Component {
    state = { data: [], query: "" };
    apiKey = process.env.REACT_APP_GIPHY_KEY;

    handleOnChange = (e) => {
        //dapetin nilai input value
        this.setState({
            query: e.target.value
        })
    }

    getGifs = async () => {
        const gifs = await
            axios
                .get(
                    `http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${this.apiKey}&limit=12`
                )
                .then((response) => response)
                .catch((error) => error);
        this.setState({ data: gifs.data.data })
        console.log(gifs);
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <input type="text" name="search" id="search" onChange={this.handleOnChange} />
                <button className="fa fa-search" type="submit" onClick={this.getGifs}></button>
                <GifComponent data={data} />
            </div>
        )
    };

}

export { Search };
