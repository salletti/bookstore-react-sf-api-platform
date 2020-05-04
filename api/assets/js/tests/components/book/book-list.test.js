import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";

import BookList from "../../../components/Book/BookList";

//mocking component
jest.mock("../../../components/Book/BookListItem", () => {
  return function FakeItem (props) {
    //console.log(props);
    return (
      <li id={props.id} key={props.id}>
        {props.title}
      </li>
    );
  };
});

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

const listBook = [
  {
    id: 1,
    title: "title 1",
    author: "author 1",
    comments: ['comment', 'comment'],
    image: '/media_objects/1',
  },
  {
    id: 2,
    title: "title 2",
    author: "author 2",
    comments: ['comment', 'comment'],
    image: '/media_objects/1',
  }
];

it("show should show 2 item", () => {
  act(() => {
    render(
        <BookList books={listBook} />,
        container
    );
  });
  expect(container.querySelector("li").textContent).toBe('title 1');
  expect(container.querySelector("li:nth-child(2").textContent).toBe('title 2');
});

it('item render correctly', () => {
  const tree = renderer
    .create(<BookList books={listBook} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
