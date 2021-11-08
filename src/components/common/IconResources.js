import * as React from "react";

import { StyleSheet, css } from "aphrodite/no-important";
import { LightTooltip, Sheet } from "./Styles";

export default function IconResources({ selected, text, click }) {
  return (
    <div className={`icon-resources ${css(styles.group, styles.group_layout)}`}>
      <div className={css(styles.flex, styles.flex_layout)}>
        <div className={css(styles.flex_spacer1)} />
        <Text selected={selected} text={text} />
        <div className={css(styles.flex_spacer)} />
        <Icon selected={selected} click={click} />
      </div>
    </div>
  );

  function Icon({ selected, click }) {
    return (
      <LightTooltip title="Click to show hte Helm Resources" placement="right">
        <div
          style={
            selected
              ? { "--src": `url(${require("assets/common/x-set-selected.png")})` }
              : { "--src": `url(${require("assets/common/x-set.png")})` }
          }
          className={css(styles.group2, styles.group2_layout, Sheet.clickable)}
          onClick={click}
        />
      </LightTooltip>
    );
  }

  function Text({ selected, text }) {
    return (
      <div className={css(styles.group1, styles.group1_layout)}>
        <h5
          className={css(selected ? styles.highlights_selected : styles.highlights, styles.highlights_layout)}
        >
          {text}
        </h5>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  group: {
    display: "flex",
  },
  group_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 18,
    flexGrow: 1,
    margin: 0,
  },
  flex: {
    display: "flex",
  },
  flex_layout: {
    position: "relative",
    overflow: "visible",
    flexGrow: 1,
    margin: "0px -2px",
  },
  group1: {
    display: "flex",
  },
  group1_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 23px",
    height: 18,
    width: 20,
    minWidth: 20,
    margin: "0px 3px 0px 0px",
  },
  highlights: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    textAlign: "right",
    letterSpacing: "0px",
    color: "rgb(33,33,33)",
  },
  highlights_selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    textAlign: "right",
    letterSpacing: "0px",
    color: "rgb(255,255,255)",
  },
  highlights_layout: {
    position: "absolute",
    top: 0,
    height: 18,
    minWidth: 12,
    left: 0,
    right: -10,
  },
  flex_spacer: {
    display: "flex",
    flex: "0 1 10px",
  },
  group2: {
    display: "flex",
    background: "var(--src) center top / contain no-repeat",
  },
  group2_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 1 17px",
    height: 18,
    width: 17,
    minWidth: 17,
    margin: 0,
  },
  flex_spacer1: {
    display: "flex",
    flex: "0 1 20px",
  },
});
