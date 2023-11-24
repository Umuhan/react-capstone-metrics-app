import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Countries from "../components/Countries";
import store from "../redux/store";
import "@testing-library/jest-dom";

const countries = [
  {
    id: "1",
    commonName: "Yemen",
    region: "Asia",
    cca2: "YE",
    flag: "https://restcountries.eu/data/afg.png",
  },
  {
    id: "2",
    commonName: "Palestine",
    region: "Asia",
    cca2: "PS",
    flag: "https://flagcdn.com/w320/ps.png",
  },
];
it("Check if Item component has changed", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Countries countries={countries} />,
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Check if the component container is there", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Countries countries={countries} />
      </BrowserRouter>
    </Provider>
  );
  const container = await screen.findByTestId("countries-test");
  expect(container).toBeInTheDocument();
  expect(screen.getByText("Yemen / YE")).toBeInTheDocument();
  expect(screen.getByText("Palestine / PS")).toBeInTheDocument();
});
