import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';

import CartPage from '../pages/CartPage';
import Header from '../components/Header';
import appStore from '../redux/appStore';
import MOCK_MENU_ITEMS from '../mocks/mockMenuItems.json';
import RestaurantMenuPage from '../pages/RestaurantMenuPage';

globalThis.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(MOCK_MENU_ITEMS),
});

describe('Cart Page Integration', () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        /**
         * MemoryRouter takes control of cases like :queryParams
         * Unlike BrowserRouter which is for browser navigation
         * MemoryRouter helps us have our own routes for testing
         */
        <MemoryRouter initialEntries={['/restaurants/123456']}>
          <Provider store={appStore}>
            <Routes>
              <Route
                path='/restaurants/:resId'
                element={
                  <>
                    <Header />
                    <RestaurantMenuPage />
                    <CartPage />
                  </>
                }
              />
            </Routes>
          </Provider>
        </MemoryRouter>
      )
    );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Should render menu accordion with no Cart Items initially', () => {
    const menuItems = screen.getAllByTestId('menu-item');

    expect(menuItems.length).toBe(3);
    expect(screen.getByText('Cart - 0 Items'));
  });

  it('Should render food items when accordion is clicked', () => {
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[0]);
    expect(screen.getAllByTestId('food-item').length).toBe(3);
  });

  it('Should add food items to cart', () => {
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[0]);

    const addFoodItemsBtn = screen.getAllByRole('button', { name: 'Add' });
    fireEvent.click(addFoodItemsBtn[0]);

    expect(screen.getByText('Cart - 1 Items')).toBeInTheDocument();

    fireEvent.click(addFoodItemsBtn[1]);
    expect(screen.getByText('Cart - 2 Items')).toBeInTheDocument();
  });

  it('Should render added food items on Cart Page', () => {
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[0]);

    const addFoodItemsBtn = screen.getAllByRole('button', { name: 'Add' });
    fireEvent.click(addFoodItemsBtn[0]);
    fireEvent.click(addFoodItemsBtn[1]);

    fireEvent.click(menuItems[0]);

    expect(screen.getAllByTestId('food-item').length).toBe(2);
  });

  it('Should remove all food items on clear cart', () => {
    const menuItems = screen.getAllByTestId('menu-item');

    fireEvent.click(menuItems[0]);

    const addFoodItemsBtn = screen.getAllByRole('button', { name: 'Add' });
    fireEvent.click(addFoodItemsBtn[0]);
    fireEvent.click(addFoodItemsBtn[1]);

    fireEvent.click(menuItems[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
    expect(
      screen.getByText('Cart is Empty! Please add something.')
    ).toBeInTheDocument();
  });
});
