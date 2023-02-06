import { render, screen } from '@testing-library/react';
import App from './App';
import { capitalizeFirstLetter } from './utils/string';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// assert
// expect


describe("capitalizeFirstLetter", () => {
 
    test("Passed value is valid", () => {
      const value = "hats";
      const expectedValue = "Hats";
      const transformedValue = capitalizeFirstLetter(value);
      expect(transformedValue).toBe(expectedValue);
  });
  
    test("Passed value is empty string", () => {
      const value = "";
      const expectedValue = "";
      const transformedValue = capitalizeFirstLetter(value);
      expect(transformedValue).toBe(expectedValue);
  });
    
    test("Passed value is undefined", () => {
      const value = undefined;
      const expectedValue = "";
      const transformedValue = capitalizeFirstLetter(value);
      expect(transformedValue).toBe(expectedValue);
  });
});

