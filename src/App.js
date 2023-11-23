import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Header>Most Views</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
