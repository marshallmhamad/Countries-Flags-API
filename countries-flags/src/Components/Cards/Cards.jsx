import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [FetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");

  const requestData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();

    setFetchData(countries);
    console.log(countries);
  };

  const filteredData = () => {
    return FetchData.filter((data) => data.name.common.includes(search));
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card">
        {search.length !== 0
          ? filteredData().map((data) => {
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
            })
          : FetchData.map((data) => {
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
