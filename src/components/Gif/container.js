const GifContainer = ({ imgUrl, title }) => {
    return (
        <div>
            <img src={imgUrl} alt="giphy-images" />
            <p>Title: {title}</p>
        </div>
    )
};

export default GifContainer;