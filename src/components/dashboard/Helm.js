import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import HelmResources from "./HelmResources";

import { HelmReleases } from "./HelmReleases";

export default function Helm({releases}) {

  const [resources, setResources] = useState([]);
  return (
    <div className={css(styles.flex2, styles.flex2_layout)}>
      {HelmReleases(releases, setResources)}
      <div className={css(styles.flex2_spacer)} />
      {HelmResources(resources)}
    </div>
  );
}

const styles = StyleSheet.create({
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
