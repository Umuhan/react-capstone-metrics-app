import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CountryDetails from "../components/CountryDetails";
import store from "../redux/store";
import "@testing-library/jest-dom";

it("Check if the component has changed", async () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CountryDetails />,
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
