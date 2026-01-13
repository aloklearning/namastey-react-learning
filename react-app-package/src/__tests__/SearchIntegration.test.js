/**
 * This is an integration test involving testing
 * interactions between multiple components not in ISOLATION
 */
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

import HomePage from '../pages/HomePage';
import MOCK_DATA from '../mocks/mockResLists.json';

// Mocking fetch as jestdom cannot access actual browser APIs
globalThis.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue(MOCK_DATA),
});

describe('Home Page Search Integration', () => {
  beforeEach(async () => {
    // A component with async operations like fetch
    // needs to be loaded with act
    await act(() =>
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Should search burger from the home page', () => {
    const searchInput = screen.getByTestId('search-input');
    const resCardsBeforeSearch = screen.getAllByTestId('res-card');
    const searchBtn = screen.getByRole('button', { name: 'Search' });

    // Assertion
    expect(searchInput).toBeInTheDocument();
    expect(resCardsBeforeSearch.length).toBe(9);

    // Event Action
    fireEvent.change(searchInput, { target: { value: 'burger' } });
    fireEvent.click(searchBtn);

    // Assertion Post Action
    const resCardsAfterSearch = screen.getAllByTestId('res-card');
    expect(resCardsAfterSearch.length).toBe(1);
  });

  it('Should filter top rated restaurants', () => {
    const resCardsBeforeSearch = screen.getAllByTestId('res-card');
    const topRatedBtn = screen.getByRole('button', {
      name: 'Top Rated Restaurants',
    });

    // Assertion
    expect(resCardsBeforeSearch.length).toBe(9);

    // Event Action
    fireEvent.click(topRatedBtn);

    // Assertion Post Action
    const resCardsAfterSearch = screen.getAllByTestId('res-card');
    expect(resCardsAfterSearch.length).toBe(5);
  });
});
