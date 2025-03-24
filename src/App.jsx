import "./App.css";
import First from "./first";
import Second from "./second";
import Third from "./third";

function App() {
  const data = [
    {
      name: "karthik",
      age: 25,
      location: "hyderabad",
    },
    {
      name: "naresh",
      age: 25,
      location: "hyderabad",
    },
    {
      name: "naveen",
      age: 25,
      location: "hyderabad",
    },
  ];

  // const greet = "Hello ";
  // const name = "Karthik";

  return (
    <>
      <First data={data} />
      {/* <First wish={greet} name = {name} /> */}
      {/* <Second />
      <Third /> */}
    </>
  );
}

export default App;
