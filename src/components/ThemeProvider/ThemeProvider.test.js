import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeProvider from './ThemeProvider';

describe('<ThemeProvider />', () => {
  test('it should mount', () => {
    render(<ThemeProvider />);
    
    const themeProvider = screen.getByTestId('ThemeProvider');

    expect(themeProvider).toBeInTheDocument();
  });
});