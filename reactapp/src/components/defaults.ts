import { TShirtSize, TShirtStyle } from '../types';

export const availableColors: { color: string; displayName: string }[] = [
  { color: '#42a5f5', displayName: 'light blue' },
  { color: '#ba68c8', displayName: 'dark pink' },
  { color: '#ef5350', displayName: 'red' },
  { color: '#ff9800', displayName: 'orange' },
  { color: '#4caf50', displayName: 'green' }
];

export const availableSizes: { value: TShirtSize; displayName: string }[] = [
  { value: 'S', displayName: 'Small' },
  { value: 'M', displayName: 'Medium' },
  { value: 'L', displayName: 'Large' },
  { value: 'XL', displayName: 'Extra-Large' },
  { value: 'XXL', displayName: 'XX-Large' }
];

export const availableStyles: Record<TShirtStyle, string> = {
  'half-sleeve':
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Basic-half-sleeve-T-shirt_122719.png?w=500&ssl=1',
  'cap-sleeve':
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Cap-sleeve-t-shirt_122719.png?w=500&ssl=1',
  pocket:
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Pocket-T-shirt_122719.png?w=500&ssl=1',
  ringer:
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Ringer-T-%E2%80%93-shirt_122719.png?w=500&ssl=1',
  'v-neck':
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/V-neck-t-shirt_122719.png?w=500&ssl=1',
  'turtle-neck':
    'https://i0.wp.com/sellmerch.org/wp-content/uploads/2019/12/Turtle-neck-shirt_122719-2.png?w=500&ssl=1'
};

export const TShirtStyles = [
  'half-sleeve',
  'cap-sleeve',
  'pocket',
  'ringer',
  'v-neck',
  'turtle-neck'
];
