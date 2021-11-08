import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import Title from "./common/Title";
import Clusters from "./dashboard/Clusters";
import HelmResources from "./dashboard/HelmResources";
import HelmReleases from "./dashboard/HelmReleases";

export default function Dashboard(props) {
  const [releases, setReleases] = useState([]);
  const [resources, setResources] = useState([]);
  const getReleases = async (cluster, summary) => {
    await fetch("http://localhost:5000/helm-releases?cluster=" + cluster + "&namespace=" + summary.namespace)
      .then((res) => {
        if (!res.ok) throw Error("error coming back from server when fetching Helm Releases");
        return res.json();
      })
      .then((dataFromServer) => {
        setReleases(dataFromServer);
        setResources([]);
      })
      .catch((err) => {});
  };
  return (
    <div className={`dashboard ${css(styles.content_box, styles.content_box_layout)}`}>
      <div className={css(styles.flex, styles.flex_layout)}>
        <Title title="Clusters" />
        <div className={css(styles.flex_spacer)} />
        <div className={css(styles.height_1)}>
          <Clusters getReleases={getReleases} />
        </div>
      </div>

      <div className={css(styles.content_box_spacer)} />

      <div className={css(styles.flex2, styles.flex2_layout,styles.height_2)}>
        <HelmReleases releases={releases} setResources={setResources} />
        <div className={css(styles.flex2_spacer)} />
        <HelmResources resources={resources} />
      </div>
    </div>
  );
}

export const styles = StyleSheet.create({
  height_1: {
    minHeight: 180,
  },
  height_2: {
    minHeight: 520,
  },

  content_box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(242,246,255)",
  },
  content_box_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 464,
    flexGrow: 1,
    margin: 0,
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    margin: "0px 157px 0px 0px",
    "@media (max-width: 1399.98px)": {
      margin: "0px 79px 0px 0px",
    },
    "@media (max-width: 1199.98px)": {
      margin: "0px 40px 0px 0px",
    },
    "@media (max-width: 991.98px)": {
      margin: "0px 20px 0px 0px",
    },
    "@media (max-width: 767.98px)": {
      margin: "0px 10px 0px 0px",
    },
  },
  flex_spacer: {
    display: "flex",
    flex: "1 1 30px",
  },
  content_box_spacer: {
    display: "flex",
    flex: "1 1 50px",
  },
  flex2: {
    display: "flex",
  },
  flex2_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    margin: 0,
    "@media (max-width: 1399.98px)": {
      margin: "25px 0px 0px",
    },
  },
  flex2_spacer: {
    display: "flex",
    flex: "0 1 50px",
  },
});
