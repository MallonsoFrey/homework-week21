import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 1],
    ["Study", 5],
    ["Eat", 3],
    ["Commute", 5],
    ["Sleep", 10],
  ];

  const options = {
    title: "My Daily Activities",
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
