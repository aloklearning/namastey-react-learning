import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MOCK_DATA from '../mocks/resCardMock.json';
import RestaurantCard, { withVegLabel } from '../components/RestaurantCard';

describe('Restaurant Card', () => {
  it('Should be able to render restaurant card with the info', () => {
    render(
      <BrowserRouter>
        <RestaurantCard resData={MOCK_DATA} />
      </BrowserRouter>
    );
    const resName = screen.getByText('Pizza Paradise');

    expect(resName).toBeInTheDocument();
  });

  it('Should be able to render withVegLabel card with the info', () => {
    const RestaurantWithVegLabel = withVegLabel(RestaurantCard);

    render(
      <BrowserRouter>
        <RestaurantWithVegLabel resData={MOCK_DATA} />
      </BrowserRouter>
    );
    const vegLabel = screen.getByText('Vegetarian');

    expect(vegLabel).toBeInTheDocument();
  });
});
