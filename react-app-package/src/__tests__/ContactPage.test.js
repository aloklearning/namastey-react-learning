import { render, screen } from '@testing-library/react';

import ContactPage from '../pages/ContactPage';

describe('Contact Us Page', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('Should load Contact Us header in the document', () => {
    // Query
    const header = screen.getByRole('heading');

    // Assertion
    expect(header).toBeInTheDocument();
  });

  it('Should load submit button in the document', () => {
    // Query
    const submitButton = screen.getByRole('button');

    // Assertion
    expect(submitButton).toBeInTheDocument();
  });

  it('Should load 3 inputs in the document', () => {
    // Query
    const inputTexts = screen.getAllByRole('textbox');

    // Assertion
    expect(inputTexts.length).toBe(3);
  });
});
