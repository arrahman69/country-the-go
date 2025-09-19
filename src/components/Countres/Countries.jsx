import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div >
      <h1 id="www">There are a total of 250 countries in our world <br /><span className="ccc">which are given below.</span>{countries.l} </h1>

     <div className="c-abba"> {countries.map((country) => (
        <Country country={country}></Country>
      ))}</div>
    </div>
  );
};

export default Countries;
