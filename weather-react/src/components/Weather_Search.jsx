// import React, { useEffect } from "react";
// import axios from "axios";

// const API_KEY = "b3eeac9873199e3b6c23996e0eb4ab5e";

// const Weather_Search = () => {
//   const api_call = async () => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`;
//     const request = axios.get(url);
//     const response = await request;

//     console.log(response);
//   };

//   useEffect(() => {
//     api_call();
//   }, []);

//   return (
//     <div>
//       <div className="search-box">
//         <input
//           type="text"
//           className="search-bar"
//           autoComplete="off"
//           required
//           placeholder="City..."
//           //   onChange={(e) => setQuery(e.target.value)}
//           //   value={query}
//           //   onKeyPress={search}
//         />
//       </div>
//     </div>
//   );
// };

// export default Weather_Search;
