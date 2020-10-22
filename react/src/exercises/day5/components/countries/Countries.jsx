import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCountries } from "../../services/countriesService";
import CountryCard from "../country-card/CountryCard";
import styles from "./Countries.module.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState(30);

  useEffect(() => {
    setIsLoading(true);
    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleItemsToDisplayChange = (event) => {
    setItemsToDisplay(event.target.value);
  };

  const handleCountryRegionChange = (event) => {
    setCountryRegion(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(countryName.toLowerCase()) &&
      (countryRegion === "" || country.region === countryRegion)
    );
  });

  const CountryCards = () => {
    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    if (filteredCountries.length === 0) {
      return <div>No countries found. Try another search filters</div>;
    }

    return filteredCountries
      .slice(0, itemsToDisplay)
      .map((country) => (
        <CountryCard key={country.alpha2Code} country={country} />
      ));
  };

  return (
    <div className={styles.countries}>
      <div className={styles.filters}>
        <input
          className={styles.input}
          type="text"
          name="countryName"
          id="countryName"
          placeholder="&#x1F50D; Search for a country"
          onChange={handleCountryNameChange}
        />
        <div>
          <select
            className={styles.select}
            value={countryRegion}
            onChange={handleCountryRegionChange}
          >
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <select
            className={styles.selectItems}
            value={itemsToDisplay}
            onChange={handleItemsToDisplayChange}
          >
            <option value="" disabled>
              Countries to display
            </option>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={countries.length}>All ({countries.length})</option>
          </select>
        </div>
      </div>
      <div className={styles.countryCards}>
        <CountryCards />
      </div>
    </div>
  );
};

Countries.propTypes = {};

export default Countries;
