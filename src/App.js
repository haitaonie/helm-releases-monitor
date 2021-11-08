import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import "./fonts.css";
import { StyleSheet, css } from "aphrodite/no-important";
import SideBar from "components/SideBar";
import Dashboard from "components/Dashboard";
import Home from "components/Home";


function Root() {
  return (
    <BrowserRouter>
      <Route render={(props) => <App {...props} />} />
    </BrowserRouter>
  );
}

function App(props) {
  const path = props.history.location.pathname;

  return (
    <div className={`home ${css(styles.content_box, styles.content_box_layout)}`}>
      <SideBar path={path} />

      <div className={css(styles.content_box_col1)}>
        <div className={css(styles.flex_col, styles.flex1_layout)}>
          {renderHeader(path)}

          <div className={css(styles.flex_col, styles.flex3_layout)}>{renderPage(path)}</div>
        </div>
      </div>
    </div>
  );
  function renderHeader(path) {
    switch (path) {
      case "/dashboard":
        return <HeaderDashboard />;
      default:
        return <Header />;
    }
  }

  function renderPage(path) {
    switch (path) {
      case "/dashboard":
        return <Dashboard />;
      default:
        return <Home />
    }
  }
}

function Header() {
  return (
    <div className={css(styles.group1, styles.group1_layout)}>
      <div className={css(styles.flex, styles.flex_layout1)}>
        <div
          style={{
            "--src": `url(${require("assets/icon-home.png")})`,
          }}
          className={css(styles.image, styles.image_layout2)}
        />
        <div className={css(styles.flex2_spacer)} />
        <h1 className={css(styles.hero_title, styles.hero_title_layout)}>{"Home"}</h1>
      </div>
    </div>
  );
}

function HeaderDashboard() {
  return (
    <div className={css(styles.group1, styles.group1_layout)}>
      <div className={css(styles.flex, styles.flex_layout1)}>
        <div
          style={{
            "--src": `url(${require("assets/dashboard/icon.png")})`,
          }}
          className={css(styles.image, styles.image_layout2)}
        />
        <div className={css(styles.flex2_spacer)} />
        <h1 className={css(styles.hero_title, styles.hero_title_layout)}>{"Dashboard"}</h1>
      </div>
    </div>
  );
}

export default Root;
export const styles = StyleSheet.create({
  content_box: {
    display: "flex",
    backgroundColor: "rgb(242,246,255)",
  },
  content_box_layout: {
    position: "relative",
    overflow: "hidden",
    minHeight: 972,
    flexGrow: 1,
    margin: 0,
  },
  content_box_col1: {
    display: "flex",
    flex: "0 1 1647px",
  },
  flex_col: {
    display: "flex",
    flexDirection: "column",
  },
  flex1_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
  },
  group1: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25098039215686274)",
  },
  group1_layout: {
    position: "relative",
    overflow: "hidden",
    minHeight: 84,
    margin: 0,
  },
  flex: {
    display: "flex",
  },
  flex_layout1: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "21px 16px",
    "@media (max-width: 1399.98px)": {
      flexGrow: 1,
      margin: "25px 10px",
    },
  },

  flex3_layout: {
    position: "relative",
    overflow: "visible",
    margin: "30px 5px 0px 32px",
    "@media (max-width: 1399.98px)": {
      margin: "25px 10px 0px 16px",
    },
    "@media (max-width: 1199.98px)": {
      margin: "25px 10px 0px",
    },
  },
  image: {
    background: "var(--src) center center / contain no-repeat",
  },
  image_layout2: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: "9px 0px 3px",
  },
  flex2_spacer: {
    display: "flex",
    flex: "0 1 48px",
  },
  hero_title: {
    display: "flex",
    alignItems: "center",
    font: '500 35px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    letterSpacing: "0px",
    "@media (max-width: 991.98px)": {
      alignItems: "center",
      justifyContent: "flex-start",
      fontSize: "33px",
      textAlign: "left",
    },
    "@media (max-width: 767.98px)": {
      alignItems: "center",
      justifyContent: "flex-start",
      fontSize: "29px",
      textAlign: "left",
    },
  },
  hero_title_layout: {
    position: "relative",
    margin: 0,
  },
});
