import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((datapoint) => datapoint.value);
  console.log(props.dataPoints)
  const totalMaximumvalue = Math.max(...dataPointsValues);

  const dataPoints=[
    {
        label:"Jan",
        value:10
    },
    {
        label:"feb",
        value:20
    },
    {
        label:"march",
        value:30
    }
]

  return (
    <div className="chart">
     
      {dataPoints.map((datapoint) => {
      <ChartBar
        key={datapoint.label}
        value={datapoint.value}
        label={datapoint.label}
        maxValue={totalMaximumvalue}
      />
        
      })}
    </div>
  );
};

export default Chart;

/*
eg:
datapoints=[
    {
        label:"Jan",
        value:10
    },
    {
        label:feb",
        value:20
    },
    {
        label:"march",
        value30
    }
]
*/
