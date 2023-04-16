import Button from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render a button.', () => {
    const { getByText } = render(<Button>TEST</Button>);

    expect(getByText('TEST')).toBeInTheDocument();
  });
});
