import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BookImage from "../../../components/Book/BookImage";

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

it("show image", () => {
  act(() => {
    render(<BookImage imagePath={'img/test.png'}/>, container);
  });
  expect(container.querySelector("img").getAttribute("src")).toBe("img/test.png");
});
