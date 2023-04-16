import { fireEvent, render, screen } from '@testing-library/react';
import { EditTShirtDialog } from './EditTShirtDialog';
import { ActiveDialogContext, TShirtsContext } from '../../providers';
import { TShirt } from '../../types';
import '@testing-library/jest-dom';
import { Button } from '@mui/material';
/**
 * @jest-environment jsdom
 */

const mockedTShirt: TShirt = {
  id: '123',
  style: 'v-neck',
  size: 'M',
  priceInUSD: 40,
  gender: 'Female',
  made: 'India',
  previewUrl: 'https:/mockPreview',
  color: '#ff9800',
  description: 'test'
};

const mockedTShirtsContext = {
  tShirts: [mockedTShirt],
  setTShirts: jest.fn,
  loading: false,
  setLoading: jest.fn()
};

describe('Edit TShirt Dialog', () => {
  test('renders Edit TShirt Dialog if context matches', () => {
    render(
      <ActiveDialogContext.Provider
        value={{ activeContext: { type: 'edit', itemId: '123' }, setActiveContext: jest.fn() }}>
        <TShirtsContext.Provider value={mockedTShirtsContext}>
          <EditTShirtDialog item={mockedTShirt} />
        </TShirtsContext.Provider>
      </ActiveDialogContext.Provider>
    );
    const titleText = screen.getByText(/Edit a TShirt/i);
    expect(titleText).toBeInTheDocument();
  });

  test('renders no Edit TShirt Dialog if context does not match', () => {
    render(
      <ActiveDialogContext.Provider
        value={{ activeContext: { type: 'edit', itemId: 'foo' }, setActiveContext: jest.fn() }}>
        <TShirtsContext.Provider value={mockedTShirtsContext}>
          <EditTShirtDialog item={mockedTShirt} />
        </TShirtsContext.Provider>
      </ActiveDialogContext.Provider>
    );
    const titleText = screen.queryByText(/Edit a TShirt/i);
    expect(titleText).toBeNull();
  });

  test('sets Dialog Context when button is clicked', () => {
    const setContext = jest.fn();
    render(
      <ActiveDialogContext.Provider
        value={{ activeContext: { type: 'edit', itemId: 'foo' }, setActiveContext: setContext }}>
        <TShirtsContext.Provider value={mockedTShirtsContext}>
          <EditTShirtDialog item={mockedTShirt} />
        </TShirtsContext.Provider>
      </ActiveDialogContext.Provider>
    );

    const editButton = screen.getByLabelText('edit');
    fireEvent.click(editButton);
    expect(setContext).toBeCalledWith({ type: 'edit', itemId: mockedTShirt.id });
  });
});
