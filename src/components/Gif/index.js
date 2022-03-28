import GifContainer from './container';

const GifComponent = ({ data }) => {
  const Gifs = data.map((gif) => {
    return (
      data !== undefined && (
        <GifContainer
          key={gif.id}
          title={gif.title}
          imgUrl={gif.images.fixed_width.url}
        />
      )
    );
  });
  return Gifs;
}

export default GifComponent;