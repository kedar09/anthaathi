import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import FeaturedProduct from './index';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';

describe('FeaturedProduct', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedProduct
            productInfo={{
              name: 'test',
              price: 0,
              description: 'test',
              currency: 'USD',
              image: [
                'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              ],
            }}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('featuredProduct')).toBeTruthy();
  });

  it('should have FeaturedProduct name, description', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedProduct
            productInfo={{
              name: 'Name test',
              price: 0,
              description: 'Description test',
              currency: 'USD',
              image: [
                'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              ],
            }}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp.queryByText('Name test')).toBeTruthy();
    expect(temp.queryByText('Description test')).toBeTruthy();
  });

  it('should call when we call tap handleAddToCart, handleBuyItNow', function () {
    const onpress1 = jest.fn();
    const onpress2 = jest.fn();

    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <FeaturedProduct
            productInfo={{
              name: 'test',
              price: 0,
              description: 'test',
              currency: 'USD',
              image: [
                'https://burst.shopifycdn.com/photos/tea-cup-with-hot-peppers-and-yellow-tomatoes-on-red.jpg?width=240&format=pjpg&exif=1&iptc=1',
              ],
            }}
            handleAddToCart={onpress1}
            handleBuyItNow={onpress2}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    fireEvent.press(temp.queryByTestId('handleAddToCart')!);
    fireEvent.press(temp.queryByTestId('handleBuyItNow')!);
    expect(onpress1).toBeCalledTimes(1);
    expect(onpress2).toBeCalledTimes(1);
  });
});
