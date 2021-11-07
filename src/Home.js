/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import SideBar from "components/SideBar";
import Dashboard from "components/Dashboard";

export default function Home(props) {
  const path = props.history.location.pathname;

  return (
    <div className={`home ${css(styles.content_box, styles.content_box_layout)}`}>
      <SideBar path={path} />

      <div className={css(styles.content_box_col1)}>
        <div className={css(styles.flex1, styles.flex1_layout)}>
          {renderHeader(path)}

          <div className={css(styles.flex3, styles.flex3_layout)}>{renderPage(path)}</div>
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
        return <Page />;
    }
  }
}

function Page() {
  return (
    <div>
      Welcome to the Helm Releases Monitor!
    </div>
  );
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
  content_box_col: {
    display: "flex",
    flex: "0 1 145px",
  },
  content_box1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    boxShadow: "0px 2px 14px 0px rgba(0,0,0,0.10196078431372549)",
  },
  content_box1_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
    
  },
  content_box2: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
  },
  content_box2_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 44,
    margin: "50px 0px 0px",
  },
  img: {
    background: "var(--src) center center / contain no-repeat",
    borderStyle: "solid",
    borderColor: "rgb(23,119,255)",
  },
  img_layout: {
    position: "relative",
    height: 43,
    width: 3,
    minWidth: 3,
    margin: "0px 0px 1px",
  },
  content_box2_spacer: {
    display: "flex",
    flex: "0 1 7px",
  },
  image: {
    background: "var(--src) center center / contain no-repeat",
  },
  image_layout: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: "7px 0px",
  },
  content_box2_spacer1: {
    display: "flex",
    flex: "0 1 5px",
  },
  dashboard: {
    font: '700 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  dashboard_layout: {
    position: "relative",
    margin: "11px 0px 12px",
  },
  content_box3: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
  },
  content_box3_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 44,
    margin: "73px 0px 0px",
  },
  content_box3_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  content_box3_spacer1: {
    display: "flex",
    flex: "0 1 5px",
  },
  metrics: {
    font: '700 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  metrics_layout: {
    position: "relative",
    margin: "11px 0px 12px",
  },
  group: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
  },
  group_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 44,
    margin: "73px 0px 575px",
  },
  flex: {
    display: "flex",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 10px",
  },
  icon: {
    background: "var(--src) center center / contain no-repeat",
  },
  icon_layout: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: "7px 0px",
  },
  flex_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  delivery: {
    font: '700 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  delivery_layout: {
    position: "relative",
    margin: "11px 0px 12px",
  },
  content_box_col1: {
    display: "flex",
    flex: "0 1 1647px",
  },
  flex1: {
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
  flex3: {
    display: "flex",
    flexDirection: "column",
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
  flex4: {
    display: "flex",
    flexDirection: "column",
  },
  flex4_layout: {
    position: "relative",
    overflow: "visible",
    margin: "0px 135px 0px 0px",
    "@media (max-width: 1399.98px)": {
      margin: "0px 68px 0px 0px",
    },
    "@media (max-width: 1199.98px)": {
      margin: "0px 34px 0px 0px",
    },
    "@media (max-width: 991.98px)": {
      margin: "0px 17px 0px 0px",
    },
    "@media (max-width: 767.98px)": {
      margin: "0px 10px 0px 0px",
    },
  },
  environment: {
    font: '500 25px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(126,135,169)",
    letterSpacing: "0px",
    "@media (max-width: 767.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "22px",
      textAlign: "left",
    },
  },
  environment_layout: {
    position: "relative",
    margin: 0,
  },
  flex5: {
    display: "flex",
    "@media (max-width: 1399.98px)": {
      flexWrap: "wrap",
    },
  },
  flex5_layout: {
    position: "relative",
    overflow: "visible",
    margin: "18px 0px 0px",
    "@media (max-width: 1199.98px)": {
      margin: "25px 0px 0px",
    },
  },
  flex5_col: {
    display: "flex",
    flex: "1 1 350px",
    "@media (max-width: 1399.98px)": {
      flex: "0 0 calc(50% - 10px)",
    },
    "@media (max-width: 1199.98px)": {
      flex: "0 0 100%",
    },
  },
  content_box4: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderStyle: "solid",
    borderColor: "rgb(126,135,169)",
    borderWidth: 0,
    borderRadius: "10px 10px 10px 10px",
  },
  content_box4_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 0px 3px",
  },
  development: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
    "@media (max-width: 991.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "33px",
      textAlign: "left",
    },
    "@media (max-width: 767.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "29px",
      textAlign: "left",
    },
  },
  development_layout: {
    position: "relative",
    margin: "15px 35px 0px",
  },
  flex6: {
    display: "flex",
    flexDirection: "column",
  },
  flex6_layout: {
    position: "relative",
    overflow: "visible",
    width: 191,
    minWidth: 191,
    margin: "12px 0px 14px 35px",
  },
  flex7: {
    display: "flex",
  },
  flex7_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  img1: {
    background: "var(--src) center center / contain no-repeat",
  },
  img1_layout: {
    position: "relative",
    height: 6.42,
    width: 12,
    minWidth: 12,
    margin: "9px 0px 9.58px",
  },
  flex7_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  flex7_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 25,
    flexGrow: 1,
    margin: 0,
  },
  highlights: {
    display: "flex",
    justifyContent: "center",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights_layout: {
    position: "relative",
    width: 33,
    minWidth: 33,
    margin: "2px 0px 2px 14.88px",
  },
  flex7_spacer1: {
    display: "flex",
    flex: "0 1 15px",
  },
  platforms: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  platforms_layout: {
    position: "relative",
    margin: "2px 0px",
  },
  flex8: {
    display: "flex",
    flexDirection: "column",
  },
  flex8_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 63px 0px 22px",
  },
  flex9: {
    display: "flex",
  },
  flex9_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  icon_layout1: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex9_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights1: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights1_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  flex10: {
    display: "flex",
  },
  flex10_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
  },
  icon_layout2: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex10_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights2: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights2_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  flex5_spacer: {
    display: "flex",
    flex: "0 1 25px",
    "@media (max-width: 1399.98px)": {
      flex: "0 0 20px",
    },
    "@media (max-width: 1199.98px)": {
      flex: "0 0 100%",
      minHeight: 20,
    },
  },
  content_box5: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderStyle: "solid",
    borderColor: "rgb(126,135,169)",
    borderWidth: 0,
    borderRadius: "10px 10px 10px 10px",
  },
  content_box5_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "1px 0px 2px",
  },
  integration: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
    "@media (max-width: 991.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "33px",
      textAlign: "left",
    },
    "@media (max-width: 767.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "29px",
      textAlign: "left",
    },
  },
  integration_layout: {
    position: "relative",
    margin: "15px 35px 0px",
  },
  flex11: {
    display: "flex",
    flexDirection: "column",
  },
  flex11_layout: {
    position: "relative",
    overflow: "visible",
    width: 197,
    minWidth: 197,
    margin: "12px 0px 14px 35px",
  },
  flex12: {
    display: "flex",
  },
  flex12_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  img2: {
    background: "var(--src) center center / contain no-repeat",
  },
  img2_layout: {
    position: "relative",
    height: 6.42,
    width: 12,
    minWidth: 12,
    margin: "9px 0px 9.58px",
  },
  flex12_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  flex12_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  flex12_spacer1: {
    display: "flex",
    flex: "0 1 15px",
  },
  flex13: {
    display: "flex",
    flexDirection: "column",
  },
  flex13_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px 22px",
  },
  flex14: {
    display: "flex",
  },
  flex14_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  image_layout3: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex14_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights4: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights4_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  flex15: {
    display: "flex",
  },
  flex15_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
  },
  icon_layout3: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex15_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights5: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights5_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  flex5_spacer1: {
    display: "flex",
    flex: "0 1 25px",
    "@media (max-width: 1399.98px)": {
      flex: "0 0 100%",
      minHeight: 20,
    },
  },
  content_box6: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderStyle: "solid",
    borderColor: "rgb(126,135,169)",
    borderWidth: 0,
    borderRadius: "10px 10px 10px 10px",
  },
  content_box6_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "3px 0px 0px",
  },
  staging: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
    "@media (max-width: 991.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "33px",
      textAlign: "left",
    },
    "@media (max-width: 767.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "29px",
      textAlign: "left",
    },
  },
  staging_layout: {
    position: "relative",
    margin: "15px 35px 0px",
  },
  flex16: {
    display: "flex",
    flexDirection: "column",
  },
  flex16_layout: {
    position: "relative",
    overflow: "visible",
    width: 191,
    minWidth: 191,
    margin: "12px 0px 14px 35px",
  },
  flex17: {
    display: "flex",
  },
  flex17_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  img3: {
    background: "var(--src) center center / contain no-repeat",
  },
  img3_layout: {
    position: "relative",
    height: 6.42,
    width: 12,
    minWidth: 12,
    margin: "9px 0px 9.58px",
  },
  flex17_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  flex17_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  flex17_spacer1: {
    display: "flex",
    flex: "0 1 15px",
  },
  flex18: {
    display: "flex",
    flexDirection: "column",
  },
  flex18_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 20px 0px 22px",
  },
  flex19: {
    display: "flex",
  },
  flex19_layout: {
    position: "relative",
    overflow: "visible",
    margin: 0,
  },
  icon_layout4: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex19_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights7: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights7_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  flex20: {
    display: "flex",
  },
  flex20_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
  },
  icon_layout5: {
    position: "relative",
    height: 30,
    width: 30,
    minWidth: 30,
    margin: 0,
  },
  flex20_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  highlights8: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  highlights8_layout: {
    position: "relative",
    margin: "5px 0px 4px",
  },
  content_box7: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderStyle: "solid",
    borderColor: "rgb(126,135,169)",
    borderWidth: 0,
    borderRadius: "10px 10px 10px 10px",
  },
  content_box7_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 0px 3px",
  },
  production: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
    "@media (max-width: 991.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "33px",
      textAlign: "left",
    },
    "@media (max-width: 767.98px)": {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      fontSize: "29px",
      textAlign: "left",
    },
  },
  production_layout: {
    position: "relative",
    margin: "15px 35px 0px",
  },
  flex21: {
    display: "flex",
  },
  flex21_layout: {
    position: "relative",
    overflow: "visible",
    margin: "12px 37.5px 94px",
  },
  img4: {
    background: "var(--src) center center / contain no-repeat",
  },
  img4_layout: {
    position: "relative",
    height: 12.5,
    width: 7,
    minWidth: 7,
    margin: "5.96px 0px 6.54px",
  },
  flex21_spacer: {
    display: "flex",
    flex: "0 1 12.5px",
  },
  flex21_col: {
    display: "flex",
    flex: "0 1 70px",
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  highlights_layout3: {
    position: "relative",
    flexGrow: 1,
    margin: "2px 17.12px 2px 9.88px",
  },
  flex21_spacer1: {
    display: "flex",
    flex: "0 1 15px",
  },
  flex22: {
    display: "flex",
  },
  flex22_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 1.82px 0px",
    "@media (max-width: 1399.98px)": {
      margin: "25px 10px 0px",
    },
  },
  flex22_col: {
    display: "flex",
    flex: "0 1 162.11px",
  },
  cover_group4: {
    display: "flex",
    backgroundColor: "rgb(247,175,64)",
  },
  cover_group4_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    flexGrow: 1,
    margin: "2px 0px 0px",
  },
  helm_charts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  helm_charts_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "9px 28.43px 10px 27.68px",
  },
  flex22_spacer: {
    display: "flex",
    flex: "0 1 2.89px",
  },
  cover_group5: {
    display: "flex",
    backgroundColor: "rgb(247,175,64)",
  },
  cover_group5_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    flexGrow: 1,
    margin: "0px 0px 2px",
  },
  status: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  status_layout: {
    position: "relative",
    width: 57,
    minWidth: 57,
    margin: "9px auto 10px",
  },
  flex22_spacer1: {
    display: "flex",
    flex: "0 1 5.07px",
  },
  flex22_col2: {
    display: "flex",
    flex: "0 1 150px",
  },
  content_box8: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "3px 3px 3px 3px",
  },
  content_box8_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 35,
    flexGrow: 1,
    margin: "3px 0px 4px",
  },
  content_box8_spacer: {
    display: "flex",
    flex: "0 1 15px",
  },
  namespace: {
    font: '16px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(126,135,169)",
    letterSpacing: "0px",
  },
  namespace_layout: {
    position: "relative",
    margin: "8px 0px",
  },
  content_box8_spacer1: {
    display: "flex",
    flex: "0 1 23px",
  },
  content_box8_col: {
    display: "flex",
    flex: "0 1 22px",
  },
  img5: {
    background: "var(--src) center center / contain no-repeat",
  },
  img5_layout: {
    position: "relative",
    height: 6.42,
    width: 12,
    minWidth: 12,
    margin: "14px 0px 14.58px",
  },
  flex22_spacer2: {
    display: "flex",
    flex: "0 1 8px",
  },
  flex22_col3: {
    display: "flex",
    flex: "0 1 150px",
  },
  content_box9: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "3px 3px 3px 3px",
  },
  content_box9_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 35,
    flexGrow: 1,
    margin: "3px 0px 4px",
  },
  content_box9_spacer: {
    display: "flex",
    flex: "0 1 15px",
  },
  status1: {
    font: '16px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(126,135,169)",
    letterSpacing: "0px",
  },
  status1_layout: {
    position: "relative",
    margin: "8px 0px",
  },
  content_box9_spacer1: {
    display: "flex",
    flex: "0 1 63px",
  },
  content_box9_col: {
    display: "flex",
    flex: "0 1 22px",
  },
  img6: {
    background: "var(--src) center center / contain no-repeat",
  },
  img6_layout: {
    position: "relative",
    height: 6.42,
    width: 12,
    minWidth: 12,
    margin: "14px 0px 14.58px",
  },
  flex23: {
    display: "flex",
  },
  flex23_layout: {
    position: "relative",
    overflow: "visible",
    margin: "8px 0px 0px",
    "@media (max-width: 1399.98px)": {
      margin: "25px 0px 0px",
    },
  },
  flex23_col: {
    display: "flex",
    flex: "0 1 1100px",
  },
  flex24: {
    display: "flex",
    flexDirection: "column",
  },
  flex24_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 0px 0.5px",
    "@media (max-width: 991.98px)": {
      flexGrow: 1,
      margin: "0px 0px 25px",
    },
  },
  group2: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "2px 2px 2px 2px",
  },
  group2_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 18,
    margin: 0,
  },
  flex_layout2: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 7px",
    "@media (max-width: 991.98px)": {
      flexGrow: 1,
      margin: "0px 10px",
    },
  },
  flex25_col: {
    display: "flex",
    flex: "0 1 89px",
  },
  environment1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  environment1_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer: {
    display: "flex",
    flex: "0 1 17.5px",
  },
  flex25_col1: {
    display: "flex",
    flex: "0 1 63px",
  },
  platform: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  platform_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer1: {
    display: "flex",
    flex: "0 1 20px",
  },
  flex25_col2: {
    display: "flex",
    flex: "0 1 84px",
  },
  namespace1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  namespace1_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer2: {
    display: "flex",
    flex: "0 1 88.5px",
  },
  flex25_col3: {
    display: "flex",
    flex: "0 1 44px",
  },
  name: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  name_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer3: {
    display: "flex",
    flex: "0 1 167.5px",
  },
  flex25_col4: {
    display: "flex",
    flex: "0 1 41px",
  },
  chart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  chart_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer4: {
    display: "flex",
    flex: "0 1 102px",
  },
  flex25_col5: {
    display: "flex",
    flex: "0 1 55px",
  },
  version: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  version_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer5: {
    display: "flex",
    flex: "0 1 27px",
  },
  flex25_col6: {
    display: "flex",
    flex: "0 1 47px",
  },
  status2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  status2_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer6: {
    display: "flex",
    flex: "0 1 32px",
  },
  flex25_col7: {
    display: "flex",
    flex: "0 1 31px",
  },
  app: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  app_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer7: {
    display: "flex",
    flex: "0 1 32px",
  },
  flex25_col8: {
    display: "flex",
    flex: "0 1 61px",
  },
  revision: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  revision_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex25_spacer8: {
    display: "flex",
    flex: "0 1 8px",
  },
  flex25_col9: {
    display: "flex",
    flex: "0 1 76.5px",
  },
  resources: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  resources_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "0px 1.5px 0px 0px",
  },
  flex26: {
    display: "flex",
    flexDirection: "column",
  },
  flex26_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
    "@media (max-width: 991.98px)": {
      margin: "25px 0px 0px",
    },
  },
  content_box10: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "5px 5px 5px 5px",
  },
  content_box10_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    margin: 0,
  },
  content_box10_spacer: {
    display: "flex",
    flex: "0 1 18.98px",
  },
  content_box10_col: {
    display: "flex",
    flex: "0 1 76px",
  },
  integration1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  integration1_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer1: {
    display: "flex",
    flex: "0 1 2px",
  },
  content_box10_col1: {
    display: "flex",
    flex: "0 1 107px",
  },
  highlights10: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights10_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer2: {
    display: "flex",
    flex: "0 1 28px",
  },
  content_box10_col2: {
    display: "flex",
    flex: "0 1 24px",
  },
  lab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  lab_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer3: {
    display: "flex",
    flex: "0 1 66px",
  },
  content_box10_col3: {
    display: "flex",
    flex: "0 1 149px",
  },
  highlights11: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights11_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer4: {
    display: "flex",
    flex: "0 1 61px",
  },
  content_box10_col4: {
    display: "flex",
    flex: "0 1 149px",
  },
  highlights12: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights12_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer5: {
    display: "flex",
    flex: "0 1 52.5px",
  },
  content_box10_col5: {
    display: "flex",
    flex: "0 1 46px",
  },
  highlights13: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights13_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer6: {
    display: "flex",
    flex: "0 1 44.52px",
  },
  img7: {
    background: "var(--src) center center / contain no-repeat",
  },
  img7_layout: {
    position: "relative",
    height: 4.88,
    width: 9.05,
    minWidth: 9.05,
    margin: "19.02px 0px 16.1px",
  },
  content_box10_spacer7: {
    display: "flex",
    flex: "0 1 54.45px",
  },
  content_box10_col6: {
    display: "flex",
    flex: "0 1 25px",
  },
  highlights14: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(80,210,198)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights14_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer8: {
    display: "flex",
    flex: "0 1 59px",
  },
  content_box10_col7: {
    display: "flex",
    flex: "0 1 13px",
  },
  highlights15: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(80,210,198)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights15_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box10_spacer9: {
    display: "flex",
    flex: "0 1 63.76px",
  },
  content_box10_col8: {
    display: "flex",
    flex: "0 1 51.74px",
  },
  icon_layout6: {
    position: "relative",
    height: 9.5,
    width: 9.5,
    minWidth: 9.5,
    margin: "16.99px 0px 13.51px",
  },
  content_box11: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "5px 5px 5px 5px",
  },
  content_box11_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    margin: 0,
  },
  content_box11_spacer: {
    display: "flex",
    flex: "0 1 18.98px",
  },
  content_box11_col: {
    display: "flex",
    flex: "0 1 76px",
  },
  integration2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  integration2_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer1: {
    display: "flex",
    flex: "0 1 2px",
  },
  content_box11_col1: {
    display: "flex",
    flex: "0 1 107px",
  },
  highlights16: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights16_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer2: {
    display: "flex",
    flex: "0 1 28px",
  },
  content_box11_col2: {
    display: "flex",
    flex: "0 1 24px",
  },
  content_box11_spacer3: {
    display: "flex",
    flex: "0 1 66px",
  },
  content_box11_col3: {
    display: "flex",
    flex: "0 1 149px",
  },
  highlights17: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights17_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer4: {
    display: "flex",
    flex: "0 1 61px",
  },
  content_box11_col4: {
    display: "flex",
    flex: "0 1 149px",
  },
  highlights18: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights18_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer5: {
    display: "flex",
    flex: "0 1 52.5px",
  },
  content_box11_col5: {
    display: "flex",
    flex: "0 1 46px",
  },
  highlights19: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights19_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer6: {
    display: "flex",
    flex: "0 1 44.52px",
  },
  img8: {
    background: "var(--src) center center / contain no-repeat",
  },
  img8_layout: {
    position: "relative",
    height: 4.88,
    width: 9.05,
    minWidth: 9.05,
    margin: "19.02px 0px 16.1px",
  },
  content_box11_spacer7: {
    display: "flex",
    flex: "0 1 54.45px",
  },
  content_box11_col6: {
    display: "flex",
    flex: "0 1 25px",
  },
  highlights20: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(80,210,198)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights20_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer8: {
    display: "flex",
    flex: "0 1 59px",
  },
  content_box11_col7: {
    display: "flex",
    flex: "0 1 13px",
  },
  highlights21: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(80,210,198)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights21_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "17.07px 0px 4.93px",
  },
  content_box11_spacer9: {
    display: "flex",
    flex: "0 1 63.76px",
  },
  content_box11_col8: {
    display: "flex",
    flex: "0 1 51.74px",
  },
  icon_layout7: {
    position: "relative",
    height: 9.5,
    width: 9.5,
    minWidth: 9.5,
    margin: "16.99px 0px 13.51px",
  },
  flex23_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  flex23_col1: {
    display: "flex",
    flex: "0 1 500px",
  },
  flex27: {
    display: "flex",
    flexDirection: "column",
  },
  flex27_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  group3: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "2px 2px 2px 2px",
  },
  group3_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 18,
    margin: 0,
  },
  flex_layout3: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px 25.5px",
    "@media (max-width: 575.98px)": {
      flexGrow: 1,
      margin: "0px 13px",
    },
  },
  flex28_col: {
    display: "flex",
    flex: "0 1 34px",
  },
  kind: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  kind_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex28_spacer: {
    display: "flex",
    flex: "0 1 31px",
  },
  flex28_col1: {
    display: "flex",
    flex: "0 1 84px",
  },
  namespace2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  namespace2_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex28_spacer1: {
    display: "flex",
    flex: "0 1 83.5px",
  },
  flex28_col2: {
    display: "flex",
    flex: "0 1 44px",
  },
  flex28_spacer2: {
    display: "flex",
    flex: "0 1 109.5px",
  },
  flex28_col3: {
    display: "flex",
    flex: "0 1 63px",
  },
  status3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  status3_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "0px 16px 0px 0px",
  },
  flex29: {
    display: "flex",
    flexDirection: "column",
  },
  flex29_layout: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
    "@media (max-width: 575.98px)": {
      margin: "25px 0px 0px",
    },
  },
  content_box12: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "5px 5px 5px 5px",
  },
  content_box12_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    margin: 0,
  },
  content_box12_spacer: {
    display: "flex",
    flex: "0 1 14.5px",
  },
  content_box12_col: {
    display: "flex",
    flex: "0 1 56px",
  },
  stateful: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  stateful_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box12_spacer1: {
    display: "flex",
    flex: "0 1 55px",
  },
  content_box12_col1: {
    display: "flex",
    flex: "0 1 24px",
  },
  lab_layout2: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box12_spacer2: {
    display: "flex",
    flex: "0 1 91px",
  },
  content_box12_col2: {
    display: "flex",
    flex: "0 1 99px",
  },
  highlights22: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights22_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box12_spacer3: {
    display: "flex",
    flex: "0 1 57.5px",
  },
  img9: {
    background: "var(--src) center center / contain no-repeat",
  },
  img9_layout: {
    position: "relative",
    height: 10,
    width: 9.05,
    minWidth: 9.05,
    margin: "15px 0px",
  },
  content_box12_spacer4: {
    display: "flex",
    flex: "0 1 15.95px",
  },
  content_box12_col3: {
    display: "flex",
    flex: "0 1 78px",
  },
  running: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(80,210,198)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  running_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 19px 11px 0px",
  },
  content_box13: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: "5px 5px 5px 5px",
  },
  content_box13_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 40,
    margin: "0px 0px 0.5px",
    "@media (max-width: 575.98px)": {
      minHeight: 40,
      margin: "0px 0px 25px",
    },
  },
  content_box13_spacer: {
    display: "flex",
    flex: "0 1 0.5px",
  },
  content_box13_col: {
    display: "flex",
    flex: "0 1 84px",
  },
  deployment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  deployment_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box13_spacer1: {
    display: "flex",
    flex: "0 1 41px",
  },
  content_box13_col1: {
    display: "flex",
    flex: "0 1 24px",
  },
  lab_layout3: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box13_spacer2: {
    display: "flex",
    flex: "0 1 91px",
  },
  content_box13_col2: {
    display: "flex",
    flex: "0 1 99px",
  },
  highlights23: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  highlights23_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "11px 0px",
  },
  content_box13_spacer3: {
    display: "flex",
    flex: "0 1 57.5px",
  },
  img10: {
    background: "var(--src) center center / contain no-repeat",
  },
  img10_layout: {
    position: "relative",
    height: 10,
    width: 9.05,
    minWidth: 9.05,
    margin: "15px 0px",
  },
  content_box13_spacer4: {
    display: "flex",
    flex: "0 1 15.95px",
  },
  content_box13_col3: {
    display: "flex",
    flex: "0 1 78px",
  },
});
