import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

it("Should render App component", () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});

// it("Check if the App container is there", async () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const container = await screen.findByTestId("nav-test");
//   expect(container).toBeInTheDocument();
// });
