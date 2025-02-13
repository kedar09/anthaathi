import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import {IntlProvider} from 'react-intl';

import locale from '../../../../../../compiled-locales/en-US.json';
import {ThemeProvider} from 'react-native-paper';
import BasketItem from './index';

describe('BasketItem', () => {
  it('should render the item', function () {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BasketItem
            title="Items"
            items={[
              {
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );

    expect(temp).toMatchSnapshot();
    expect(temp.queryByTestId('basketItem')).toBeTruthy();
  });

  it('should have BasketItem title', () => {
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BasketItem
            title="Items"
            items={[
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    expect(temp.queryByText('Items')).toBeTruthy();
  });

  it('should call when we call tap handlePress', function () {
    const onpress = jest.fn();
    const temp = render(
      <ThemeProvider>
        <IntlProvider locale="en-US" messages={locale}>
          <BasketItem
            title="Items"
            handlePress={onpress}
            items={[
              {
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </IntlProvider>
      </ThemeProvider>,
    );
    fireEvent.press(temp.queryByTestId('handlePressBasketItem')!);
    expect(onpress).toBeCalledTimes(1);
  });
});
