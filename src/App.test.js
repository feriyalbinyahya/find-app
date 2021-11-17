import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
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


it("renders findfriendapp", async () => {

  // Use the asynchronous version of act to apply resolved promises
  act( () => {
    render(<App />, container);
  });

  
  expect(container.textContent).toContain("FindFriendApp");

  // remove the mock to ensure tests are completely isolated
});


it("renders user data", async () => {
  const fakeUser = {
    results: [{"gender":"female","name":{"title":"Ms","first":"Ella","last":"Fisher"},
              "location":{"street":{"number":175,"name":"Park Avenue"},"city":"Monaghan",
              "state":"Galway","country":"Ireland","postcode":21314,"coordinates":
              {"latitude":"18.8289","longitude":"164.1454"},"timezone":{"offset":"-3:00",
              "description":"Brazil, Buenos Aires, Georgetown"}},"email":"ella.fisher@example.com",
              "login":{"uuid":"54c509a4-2b79-468b-8788-7300c5d04a82","username":"lazyladybug293",
              "password":"lllllll","salt":"SCKzGUpE","md5":"79b24c79ae0b8d8f01ac088de731d739",
              "sha1":"51a97ad9caf893e86ef0a9f55c419745c8bb00a0",
              "sha256":"d6a1a12635d2a90d459d4f90d4fc76271dd809fc3706ca61e6cfc72011c566ef"},
              "dob":{"date":"1947-05-11T02:17:18.967Z","age":74},"registered":
              {"date":"2002-04-15T18:08:16.584Z","age":19},"phone":"031-803-6514",
              "cell":"081-275-8765","id":{"name":"PPS","value":"2271524T"},"picture":
              {"large":"https://randomuser.me/api/portraits/women/74.jpg",
              "medium":"https://randomuser.me/api/portraits/med/women/74.jpg",
              "thumbnail":"https://randomuser.me/api/portraits/thumb/women/74.jpg"},"nat":"IE"}],
    info: {"seed":"559461c5ab9dd5d0","results":1,"page":1,"version":"1.3"}
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App />, container);
  });

  expect(container.querySelector("#name").textContent).toBe(fakeUser.results[0].name.first + " " + fakeUser.results[0].name.last);
  expect(container.querySelector("#phone").textContent).toBe(fakeUser.results[0].phone);
  expect(container.querySelector("#country").textContent).toBe(fakeUser.results[0].location.country);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});