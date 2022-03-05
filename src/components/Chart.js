import React from "react";
import { changeSelect } from "../actions";
import { connect } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import chartStyle from "../scss/components/_chart.module.scss";

const Chart = (props) => {
  const _selectChange = (e) => {
    props.changeSelect(e.target.value);
  };

  if (props.taipeiPopulation.length === 0) return <div>Loading</div>;
  const siteIdx = props.sites.findIndex((site) => site === props.selected);
  const testData = props.taipeiPopulation[siteIdx];
  const data = Object.keys(testData)
    .map((key) => {
      return {
        name:
          key === "household_single"
            ? "獨立生活戶"
            : key === "household_ordinary"
            ? "共同生活戶"
            : "something else",
        男: testData[key].m,
        女: testData[key].f,
      };
    })
    .reverse();

  return (
    <div className={chartStyle.chart}>
      <div className={chartStyle.chart__region}>
        <span>地區</span>
        <select onChange={_selectChange} defaultValue={props.selected}>
          {props.sites.map((site, idx) => (
            <option key={idx} value={site}>
              {site.slice(3)}
            </option>
          ))}
        </select>
      </div>
      <BarChart
        width={720}
        height={480}
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 10,
          bottom: 5,
        }}
        className={chartStyle.chart__graph}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="男" fill="#68903F" />
        <Bar dataKey="女" fill="#E6443F" />
      </BarChart>
    </div>
  );
};

const mapStateToProps = ({ sites, taipeiPopulation, selected }) => ({
  sites,
  taipeiPopulation,
  selected,
});

export default connect(mapStateToProps, { changeSelect })(Chart);
