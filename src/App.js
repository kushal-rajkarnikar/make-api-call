import "./App.css";

import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  // const [count, setCount] = React.useState(1);

  console.log("get data from API");

  fetch(`https://swapi.dev/api/people/2`)
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  // React.useEffect(
  //   function () {
  //     console.log("Effect ran");
  //     fetch(`https://swapi.dev/api/people/${count}`)
  //       .then((res) => res.json())
  //       .then((data) => setStarWarsData(data));
  //   },
  //   [count]
  // );

  return (
    <div>
      {/* <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button> */}
      <pre>{JSON.stringify(starWarsData, null, 10)}</pre>
    </div>
  );
}
