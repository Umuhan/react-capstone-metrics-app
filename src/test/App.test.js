import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";
import "@testing-library/jest-dom";

it("Check if Item component has changed", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Check if the App container is there", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const container = await screen.findByTestId("nav-test");
  expect(container).toBeInTheDocument();
});
