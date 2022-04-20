import Trending from '../index';
import {render, screen} from '@testing-library/react'
import {Provider } from 'react-redux';
import {store} from '../../../data/store';

test('should show trending gifs', () => {
    render(<Provider store={store}><Trending /></Provider>);

    const searchImg = screen.getByAltText(/gifs.*?/i);
    expect(searchImg).toBeInTheDocument(); 

});