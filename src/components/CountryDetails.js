import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const CountryDetails = () => {
  const { isLoading, country } = useSelector((state) => state.country);
  const countryDetails = country;
  if (isLoading) {
    return (
      <div className="details" data-testid="details-test">
        <div className="country-map">
          <img src={countryDetails.flag} alt="Country Map" />
          <div className="country-info txtwhite">
            <h2 className="country-name">
              {countryDetails.commonName}
              {" / "}
              {countryDetails.cca2}
            </h2>
            <div>
              <p>{countryDetails.population}</p>
            </div>
          </div>
        </div>
        <div className="country-headline">
          <h2>
            {countryDetails.commonName}
            {" / "}
            {countryDetails.cca2}
            <span>Details</span>
          </h2>
        </div>
        <ul className="country-details">
          <li className="item">
            <div className="txtItem">
              <h2>Common Name:</h2>
              <h2>{countryDetails.commonName}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Official Name:</h2>
              <h2>{countryDetails.officialName}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem coatOfArms">
              <h2>Coat Of Arms:</h2>
              {countryDetails.coatOfArms ? (
                <img src={countryDetails.coatOfArms} alt="Coat Of Arms" />
              ) : (
                ""
              )}
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Capital:</h2>
              <h2>{countryDetails.capital}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Language:</h2>
              <h2>{countryDetails.language}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Time zone:</h2>
              <h2>{countryDetails.timezone}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Currency:</h2>
              <h2>
                {countryDetails.currency}
                {" / "}
                {countryDetails.currencySymbol}
              </h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Area:</h2>
              <h2> {countryDetails.area} sq km</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
          <li className="item">
            <div className="txtItem">
              <h2>Population:</h2>
              <h2> {countryDetails.population}</h2>
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </li>
        </ul>
      </div>
    );
  }
  return isLoading;
};

export default CountryDetails;
