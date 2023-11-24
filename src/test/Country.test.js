import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Country from "../components/Country";
import store from "../components/Country";
import "@testing-library/jest-dom";

const country = {
  id: "1",
  commonName: "Kenya",
  region: "Africa",
  cca2: "KE",
  flag: {
    png: "https://flagcdn.com/w320/ke.png",
  },
};
it("Check if Item component has changed", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Country
            id={country.id}
            commonName={country.commonName}
            region={country.region}
            cca2={country.cca2}
            flag={country.flag.png}
          />
          ,
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
        <Country
          id={country.id}
          commonName={country.commonName}
          region={country.region}
          cca2={country.cca2}
          flag={country.flag.png}
        />
      </BrowserRouter>
    </Provider>
  );
  const container = await screen.findByTestId("country-test");
  expect(container).toBeInTheDocument();
});
