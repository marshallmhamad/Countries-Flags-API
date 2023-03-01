import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [FetchData, setFetchData] = useState([]);

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    setFetchData(countries);
    console.log(countries);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <div className="card">
        {FetchData.map((data) => {
          return (
            <div className="flag">
              <img
                className="card"
                src={data.flags.png}
                alt={data.name.common}
              />
              <span className="span">{data.name.common}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
