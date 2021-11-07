import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

import HelmReleasesTable from "./HelmReleasesTable";
import Title from "components/common/Title";


export function HelmReleases(releases, setResources) {
  return (
    <div className={css(styles.flex2_col)}>
      <div className={css(styles.flex, styles.flex_layout1)}>
  
        <Title title="Helm Releases" />
        <div className={css(styles.flex3_spacer)} />
        <HelmReleasesTable releases={releases} applyRelease={setResources}/>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  flex2_col: {
    display: "flex",
    flex: "0 1 1000px",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  flex_layout1: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  flex3_spacer: {
    display: "flex",
    flex: '0 0 auto',
    minHeight: 50
  },
});
