import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { getCountry } from "../redux/CountryDetails/CountryDetails";

const Country = ({ id, commonName, cca2, flag, population }) => {
  const dispatch = useDispatch();

  return (
    <article className="country-card" key={id} data-testid="country-test">
      <div className="country-flag">
        <img src={flag.png} alt="Country Flag" />
      </div>
      <div className="country-info txtwhite">
        <h2 className="country-name">
          {commonName}
          {" / "}
          {cca2}
        </h2>
        <p>{population}</p>
      </div>
      <div className="details-btn">
        <Link
          to={`/country/${cca2}`}
          onClick={() => dispatch(getCountry(commonName))}
        >
          <HiOutlineArrowCircleRight className="txtwhite" />
        </Link>
      </div>
    </article>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  cca2: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default Country;
