import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Px, commonStyles } from "../posize";

export default function Title({title}) {
  return (
    <div className={`title ${css(styles.flex, styles.flex_layout)}`}>
      <h2 className={css(styles.helm_release, styles.helm_release_layout)}>{title}</h2>
    </div>
  );


}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    backgroundColor: "rgb(242,246,255)",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 10,
    maxHeight: 10,
    flexGrow: 1,
    margin: 0,
  },
  helm_release: {
    font: '500 25px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(126,135,169)",
    letterSpacing: "0px",
  },
  helm_release_layout: {
    position: "relative",
    flex: "0 0 auto",
    margin: 0,
  },
});
