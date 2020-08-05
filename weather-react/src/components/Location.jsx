import React from "react";

const Location = () => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septempber",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="location-box">
      <div className="location"> London, UK </div>
      <div className="date"> {dateBuilder(new Date())} </div>
      <div className="box"></div>
    </div>
  );
};

export default Location;

//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function App() {
//   const api = {
//     key: "b3eeac9873199e3b6c23996e0eb4ab5e",
//     base: "https://api.openweathermap.org/data/2.5/",
//   };

//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   const search = (evt) => {
//     if (evt.key === "enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())
//         .then((result) => {
//           setWeather(result);
//           setQuery("");
//           console.log(weather);
//         });
//     }
//   };

//   const dateBuilder = (d) => {
//     let months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "Septempber",
//       "October",
//       "November",
//       "December",
//     ];

//     let days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`;
//   };

//   return (
//     <div className="app">
//       <main>
//         <div className="search-box">
//           <input
//             type="text"
//             className="search-bar"
//             autoComplete="on"
//             required
//             placeholder="City..."
//             onChange={(e) => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         <div className="location-box">
//           <div className="location"> London, UK </div>
//           <div className="date"> {dateBuilder(new Date())} </div>
//           <div className="box"></div>
//         </div>
//         <div className="weather-box">
//           <div className="temp"> 20° C </div>
//           <div className="weather-icon"> sun </div>
//           <div className="weather"> Sunny </div>
//         </div>
//         <div className="social"></div>
//       </main>
//     </div>
//   );
