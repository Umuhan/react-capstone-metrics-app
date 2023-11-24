import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Countries from "../components/Countries";

import "@testing-library/jest-dom";

it("Should render Countries component", () => {
  const tree = render
    .create(
      <BrowserRouter>
        <Countries />,
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
