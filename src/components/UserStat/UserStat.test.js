import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserStat from './UserStat';

describe('<UserStat />', () => {
  test('it should mount', () => {
    render(<UserStat />);
    
    const userStat = screen.getByTestId('UserStat');

    expect(userStat).toBeInTheDocument();
  });
});