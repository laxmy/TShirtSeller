export type TShirtStyle =
  | 'half-sleeve'
  | 'v-neck'
  | 'ringer'
  | 'cap-sleeve'
  | 'pocket'
  | 'turtle-neck';

export type TShirtSize = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Gender = 'Male' | 'Female';

export type TShirt = {
  id: string;
  size: TShirtSize;
  style: TShirtStyle;
  previewUrl: string;
  gender: Gender;
  made: string;
  color: string;
  priceInUSD: number;
  description: string;
};
