import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

const Search = () => {
  const [value, setValue] = useState("");
  const [listData, setListData] = useState([]);

  const fetchResults = async (searchQuery) => {
    const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: value,
        },
      })

    if (response) {
        setListData(response.data.query.search);
    }
  }

  useEffect(() => {
    if (value) {
        console.log('query value we searched:', value)
      fetchResults(value);
    }
    console.log(value);
  }, [value]);

  return (
    <React.Fragment>
      <form className="ui form">
        <input
          type="text"
          placeholder="Search Wikipedia ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      <List results={listData} />
    </React.Fragment>
  );
};

export default Search;
