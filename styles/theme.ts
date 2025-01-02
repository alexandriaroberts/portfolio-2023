import type { Theme } from 'theme-ui';

export const theme: Theme = {
  fonts: {
    body: 'Noto Serif, serif',
    heading: 'Lora',
  },
  colors: {
    text: '#1A3A34',
    background: '#F0F7F4',
    primary: '#F7931A',
    secondary: '#4D4D4D',
    accent: '#9EE6CF',
    highlight: '#FFE0B2',
    muted: '#E0E0E0',
  },
  breakpoints: ['641px', '749px', '1024px', '1288px'],
  styles: {
    root: {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        position: 'relative', // Make absolutely positioned elements relative to their parent by default
        margin: 0,
        minWidth: 0, // Prevent flex items from overflowing horizontally
        minHeight: 0, // Prevent flex items from overflowing vertically
        padding: 0,
        border: 0,
        borderRadius: 0,
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        backgroundPosition: 'center center', // Normally defaults to 0% 0%
        backgroundRepeat: 'no-repeat', // Normally defaults to `repeat`
      },
    },
  },
};
