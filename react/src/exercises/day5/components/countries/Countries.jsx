import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCountries } from "../../services/countriesService";
import CountryCard from "../country-card/CountryCard";
import styles from "./Countries.module.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [countryRegion, setCountryRegion] = useState("");

  useEffect(() => {
    getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
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
    return filteredCountries.map((country) => (
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
          placeholder="Search for a country"
          onChange={handleCountryNameChange}
        />
        <select
          className={styles.select}
          value={countryRegion}
          onChange={handleCountryRegionChange}
        >
          <option value="">Select a region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={styles.countryCards}>
        <CountryCards />
      </div>
    </div>
  );
};

Countries.propTypes = {};

export default Countries;
