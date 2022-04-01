const GifComponent = ({ data }) => {
  const Gifs = data.map((gif) => {
    return (
      data !== undefined && (
        <>
          <img src={gif.images.fixed_width.url} alt="giphy-images" />
          <p>Title: {gif.title}</p>
        </>
      )
    );
  });
  return Gifs;
}

export default GifComponent;