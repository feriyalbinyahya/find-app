import React from 'react';
import {fireEvent, render, waitForElement} from '@testing-library/react';
import App from './App';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    value: "Sinta Dila"
  })
}))

describe('App', () => {
    it("load Sinta on mount", () => {
      const {container} = render(<App />)
      expect(container.innerHTML).toMatch("Sinta Dila")
    })
});
