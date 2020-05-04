import React from "react";
import renderer from 'react-test-renderer';

import {BrowserRouter as Router} from "react-router-dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BookListItem from "../../../components/Book/BookListItem";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const bookData = {
  id: 1,
  key: 1,
  title: "title 1",
  author: "author 1",
  commentsNumber: 10,
  image: '/media_objects/1',
};

const fakeImage = {
  id: "/media_objects/1",
  type: "http://schema.org/MediaObject",
  contentUrl: "/media/cover1.jpg",
};

it("show item", async () => {
  //mocking fetch
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeImage)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(
      <Router>
        <BookListItem {...bookData} />
      </Router>
      , container);
  });

  expect(container.querySelector("small").textContent).toBe('by ' + bookData.author);
  expect(container.querySelector("small:nth-child(2)").textContent).toBe('by ' + bookData.author);
  expect(container.querySelector("a").getAttribute("href")).toBe(`/bookstore/book/${bookData.id}`);
  expect(container.querySelector("img").getAttribute("src")).toBe("/media/cover1.jpg");

  //destroy mock
  global.fetch.mockClear();
  delete global.fetch;
});

it('item render correctly', () => {
  //mocking fetch
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeImage)
    })
  );

  const tree = renderer
    .create(<Router>
      <BookListItem {...bookData} />
    </Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();

  global.fetch.mockClear();
  delete global.fetch;
});
