import React, { useState } from "react";

const SearchFilter = () => {
  const initialRecords = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Watermelon",
  ];

  const [records, setRecords] = useState(initialRecords);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredRecords = initialRecords.filter((record) =>
      record.toLowerCase().includes(term.toLowerCase()),
    );
    setRecords(filteredRecords);
  };

  return (
    <div>
      <h2>Search for the following - </h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {records.map((record, index) => (
          <li key={index}>{record}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
