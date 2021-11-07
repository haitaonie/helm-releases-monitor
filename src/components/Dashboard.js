import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import Helm from "./dashboard/Helm";
import Clusters from "./dashboard/Clusters";
import Title from "./common/Title";

export default function Dashboard(props) {
  const [releases, setReleases] = useState([]);
  const getReleases = async (cluster, summary) => {
    console.log("cluster %s ns %s", cluster, summary.namespace);

    await fetch("http://localhost:5000/helm-releases")
      .then((res) => {
        if (!res.ok) throw Error("error coming back from server when fetching Helm Releases");
        return res.json();
      })
      .then((dataFromServer) => {
        setReleases(dataFromServer);
      })
      .catch((err) => {});
  };
  return (
    <div className={`dashboard ${css(styles.content_box, styles.content_box_layout)}`}>
      <div className={css(styles.flex, styles.flex_layout)}>
        <Title title="Clusters" />
        <div className={css(styles.flex_spacer)} />

        <Clusters getReleases={getReleases} />
      </div>

      <div className={css(styles.content_box_spacer)} />

      <Helm releases={releases} />
    </div>
  );
}

export const styles = StyleSheet.create({
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
  flex_spacer: {
    display: "flex",
    flex: "1 1 30px",
  },
  content_box_spacer: {
    display: "flex",
    flex: "1 1 50px",
  },
});
