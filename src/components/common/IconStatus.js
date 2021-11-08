import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { LightTooltip, Sheet } from "./Styles";

export default function IconStatus({ status }) {
  return (
    <div className={`icon-text ${css(styles.content_box, styles.content_box_layout)}`}>
      <LightTooltip title={status.desc} placement="right">
        <div style={renderIcon(status.code)} className={css(styles.icon, styles.icon_layout)} />
      </LightTooltip>
    </div>
  );

  function renderIcon(code) {
    switch (code) {
      case -1:
        return { "--src": `url(${require("assets/common/point-red.png")})` };
      case 0:
        return { "--src": `url(${require("assets/common/point-yellow.png")})` };
      case 1:
        return { "--src": `url(${require("assets/common/point-green.png")})` };
      default:
        return { "--src": `url(${require("assets/common/point-gray.png")})` };
    }
  }
}

const styles = StyleSheet.create({
  content_box: {
    display: "flex",
  },
  content_box_layout: {
    position: "relative",
    overflow: "visible",
    // width: 250,
    minWidth: 110,
    margin: 0,
  },

  icon: {
    background: "var(--src) center center / contain no-repeat",
    alignItems: "center",
  },
  icon_layout: {
    height: 8,
    width: 8,
    position: "absolute",
    right: 50,
    top: 5,
  },
});
