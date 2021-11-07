import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Px, commonStyles } from "../posize";

export default function ClusterNamespace({ summary, getReleases, active }) {
  console.log('summary is %v', summary)
  return (
    <div
      className={css(styles.flex, styles.flex_layout1, commonStyles.clickable)}
      onClick={active ? getReleases: console.log('not active')}

    >
      <div className={css(styles.flex2_col)}>
        <div className={css(active ? styles.cover_group : styles.cover_group1, styles.cover_group_layout)}>
          <h4 className={css(styles.highlights, styles.highlights_layout)}>{summary.count}</h4>
        </div>
      </div>
      <div className={css(styles.flex2_spacer)} />
      <h4 className={css(styles.arch, styles.arch_layout)}>{summary.namespace}</h4>
    </div>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },
  flex_layout1: {
    position: "relative",
    overflow: "visible",
    margin: "10px 0px 0px",
  },
  flex2_col: {
    display: "flex",
    flex: "0 1 60px",
    minWidth: 55,
  },
  cover_group: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "10px 10px 10px 10px",
  },
  cover_group1: {
    display: "flex",
    backgroundColor: "rgba(126,135,169,0.7019607843137254)",
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
    justifyContent: "flex-end",
    font: '500 18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "right",
    letterSpacing: "0px",
  },
  highlights_layout: {
    position: "relative",
    flexGrow: 1,
    margin: "2px 12.77px",
  },
  flex2_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  arch: {
    font: '18px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(59,66,112)",
    letterSpacing: "0px",
  },
  arch_layout: {
    position: "relative",
    margin: "2px 5px",
    minWidth: 200,
  },
});
