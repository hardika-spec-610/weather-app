import React from "react";

function TopButton() {
  const cities = [
    { id: 1, title: "Surat" },
    { id: 2, title: "Bielefeld" },
    { id: 3, title: "London" },
    { id: 4, title: "Long Beach" },
    { id: 5, title: "Toronto" },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          title="City Name"
          type="button"
          key={city.id}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
