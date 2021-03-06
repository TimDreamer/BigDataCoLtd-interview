import React from "react";
import { YEAR } from "../config";
import { loadDB } from "../actions";
import { connect } from "react-redux";
import Chart from "./Chart";

import appStyle from "../scss/components/_app.module.scss";
import logo from "../imgs/taipeilogo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadDB();
  }

  render() {
    return (
      <div className={appStyle.app}>
        <aside className={appStyle.app__sidebar}>
          <img className={appStyle.app__logo} src={logo} alt="logo" />
          <h1 className={appStyle.app__title}>{YEAR}年人口戶數及性別</h1>
        </aside>
        <main className={appStyle.app__main}>
          <Chart />
        </main>
      </div>
    );
  }
}

export default connect(null, { loadDB })(App);
