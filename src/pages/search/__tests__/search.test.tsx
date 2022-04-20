import Search from "../index";
import { render, screen } from '@testing-library/react';
import {Provider } from 'react-redux';
import {store} from '../../../data/store';

test('should show search pages', () => {
    render(<Provider store={store}><Search /></Provider>);

    const searchImg = screen.getByAltText(/gifs.*?/i);
    expect(searchImg).toBeInTheDocument();
}); 