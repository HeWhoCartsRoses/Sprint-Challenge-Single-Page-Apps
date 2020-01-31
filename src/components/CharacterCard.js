import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
  const [rick, setRick] = useState([]);

  // is looking at our input value and filtering what we input
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState('')
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        const place = response.data.results.filter(character =>
          character.origin.name.toLowerCase().includes(origin.toLowerCase())
        );
        setRick(characters);
        setRick(place);
      });
  }, [query], [origin]);
  // this is the function watching for what we put in our input
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  const handleInputChange2 = event => {
    setOrigin(event.target.value);
  };
  return (
    <div className="name">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="name"
          autoComplete="off"
        />
      </form>
      <form className="search2">
        <input
          type="text"
          onChange={handleInputChange2}
          value={origin}
          name="origin"
          tabIndex="0"
          className="prompt search-origin"
          placeholder="origin"
          autoComplete="off"
        />
      </form>
      <div className="characters">
        {rick.map(data => {
          return (
            <div className="character-list " key={data.id}>
              <h2>
                {data.name}
              </h2>
              <img
                className="character-img"
                src={data.image}
                alt="rick"
              />
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Gender: {data.gender}</h3>
              <h3 className="capital">Origin: {data.origin.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
