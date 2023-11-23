import React from "react";
import PropTypes from "prop-types";
import Country from "./Country";

const Countries = ({ countries }) => (
  <div className="countries" data-testid="countries-test">
    {countries.map((country) => (
      <Country
        id={country.id}
        key={country.id}
        commonName={country.commonName}
        cca2={country.cca2}
        flag={country.flag}
        population={country.population}
      />
    ))}
  </div>
);
Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};
export default Countries;
