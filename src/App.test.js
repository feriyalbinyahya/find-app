import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {fireEvent, waitForElement, screen} from '@testing-library/react';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders user data", async () => {

  // Use the asynchronous version of act to apply resolved promises
  act( () => {
    render(<App />, container);
  });

  
  expect(container.textContent).toContain("FindFriendApp");

  // remove the mock to ensure tests are completely isolated
});