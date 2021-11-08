import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import ReactTooltip from 'react-tooltip';

export default function IconStatus({ status }) {
  return (
    <div className={`icon-text ${css(styles.content_box, styles.content_box_layout)}`}>
      <div className={css(styles.content_box_col1)}>
        <div
          style={renderIcon(status.code)}
          className={css(styles.icon, styles.icon_layout)}
          data-tip={status.desc}
        />
        <ReactTooltip backgroundColor="rgb(22,118,255)"/>
      </div>
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
