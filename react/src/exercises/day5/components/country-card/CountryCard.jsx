import React from "react";
import PropTypes from "prop-types";
import styles from "./CountryCard.module.css";

const CountryCard = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      <div className={styles.flag}>
        <img src={country.flag} alt={country.name} />
      </div>
      <div className={styles.summary}>
        <h4 className={styles.title}>{country.name}</h4>
        <ul>
          <li>
            <b>Population:</b> {country.population}
          </li>
          <li>
            <b>Region:</b> {country.region}
          </li>
          <li>
            <b>Capital:</b> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    alpha2Code: PropTypes.string,
    flag: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
};

export default CountryCard;
