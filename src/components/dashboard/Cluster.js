import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import ClusterNamespace from "./ClusterNamespace";
import { LightTooltip, Sheet } from "../common/Styles";

export default function Cluster({ cluster, selected, selectCluster, getReleases }) {
  const [summaries, setSummaries] = useState([]);
  const getSummaries = async () => {
    await fetch("http://localhost:5000/helm-releases-summaries/"+cluster)
      .then((res) => {
        if (!res.ok) throw Error("error coming back from server when fetching Helm Releases");
        return res.json();
      })
      .then((dataFromServer) => {
        setSummaries(dataFromServer.releases);
      }) 
      .catch((err) => {});
  };


  return (
    <div className={`cluster ${css(styles.content_box, styles.content_box_layout)}`}>
      <div className={css(styles.flex, styles.flex_layout, Sheet.clickable)} onClick={click}>
        <div
          style={
            selected
              ? { "--src": `url(${require("assets/common/cluster.png")})` }
              : { "--src": `url(${require("assets/common/cluster-unselected.png")})` }
          }
          className={css(styles.icon, styles.icon_layout)}
        />
        <div className={css(styles.flex_spacer)} />
        <h1 className={css(styles.hero_title, styles.hero_title_layout)}>{cluster}</h1>
      </div>

      <div className={css(styles.flex1, styles.flex1_layout)}>
        {summaries.map((summary) => (
          <ClusterNamespace summary={summary} getReleases={() => getReleases(cluster, summary)} active={selected} />
        ))}
      </div>
    </div>
  );

  function click() {
    selectCluster()
    getSummaries()
  }


}

const styles = StyleSheet.create({
  content_box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(255,255,255)",
    borderStyle: "solid",
    borderColor: "rgb(126,135,169)",
    borderWidth: 0,
    borderRadius: "10px 10px 10px 10px",
  },
  content_box_layout: {
    position: "relative",
    overflow: "hidden",
    // minHeight: 190,
    flexGrow: 1,
    margin: 0,
  },
  hero_title: {
    font: '500 35px/1.2 "Lato", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    letterSpacing: "0px",
  },
  hero_title_layout: {
    position: "relative",
    margin: 0,
  },
  flex: {
    display: "flex",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "15px 35px 0px",
  },

  flex_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },

  flex1: {
    display: "flex",
    flexDirection: "column",
  },
  flex1_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    minWidth: 190,
    margin: "5px 30px  5px",
    // margin: '15px 36px 17px 35px'
  },
  icon: {
    background: "var(--src) center center / contain no-repeat",
  },
  icon_layout: {
    position: "relative",
    flex: "0 1 35px",
    height: 35,
    width: 35,
    minWidth: 35,
    margin: "7px 0px 0px",
  },
});
