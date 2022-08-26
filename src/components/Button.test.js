import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button test', () => {
  it('should render with correct text', () => {
    const BUTTON_TEXT = 'Start Game';
    render(<Button>{BUTTON_TEXT}</Button>);
  
    const button = screen.getByRole('button');
  
    expect(button).toHaveTextContent(BUTTON_TEXT);
  });
  
  it('should call onClick function', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
  
    const button = screen.getByRole('button');
    userEvent.click(button);
  
    expect(onClick).toBeCalledTimes(1);
  });
  
  it('should have class button-large when bigButton is true', () => {
    render(<Button bigButton />);
  
    const button = screen.getByRole('button');
  
    expect(button).toHaveClass('button-large');
  });
  
  it('should be disabled', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} disabled />);
  
    const button = screen.getByRole('button');
    userEvent.click(button);
  
    expect(button).toBeDisabled();
    expect(onClick).not.toBeCalled();
  });
});
