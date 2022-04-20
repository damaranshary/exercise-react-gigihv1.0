import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export type Gifs = {
  data: Array<{
    id: string,
    title: string,
    images: {
      fixed_width: {
        url: string,
      },
    },
  }>,
}

const GifComponent = (props: Gifs) => {
  return (
    <ImageList cols={4}>
      {props.data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.images.fixed_width.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.images.fixed_width.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={`gifs ${item.title}`}
          />
          <br />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GifComponent;