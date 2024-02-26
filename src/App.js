import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  console.log("get data from API");

  // built in functions / methods;
  // fetch() -> API hit
  // then() ->
  // json() ->

  // fetch();
  // then();
  // json();

  // fetch(`https://swapi.dev/api/people/1`)
  //   .then((res) => res.json())
  //   .then((data) => setStarWarsData(data)); //=>setter function state variable

  // console.log(starWarsData);

  React.useEffect(
    function () {
      console.log("Effect ran");
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    // setterFunction((receive current value of state variable) => receivedVariable +/-)

    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
      {/* respects line breaks and spaces  */}

      <pre>{JSON.stringify(starWarsData, null, 5)}</pre>
      {/* maintains line breaks and spaces */}
      {/* JS expressions = {} */}
    </div>
  );
}
