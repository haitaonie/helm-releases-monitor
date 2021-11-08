/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import HelmResourcesTable from "./HelmResourcesTable";
import Title from "../common/Title";

export default function HelmResources({resources}) {
  return (
    <div className={css(styles.flex_col)}>
      <div className={css(styles.flex, styles.flex_layout)}>
        <Title title="Helm Resources" />
        <div className={css(styles.flex_spacer)} />
        <HelmResourcesTable resources={resources} />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  flex_col: {
    display: "flex",
    flex: "0 1 450px", // TODO
  },
  flex: {
    display: "flex",
    flexDirection: "column",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: 0,
  },
  flex_spacer: {
    display: "flex",
    flex: "0 0 auto",
    minHeight: 50,
  },
});
