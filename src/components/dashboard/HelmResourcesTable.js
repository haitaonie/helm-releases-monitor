/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { Px, commonStyles } from "../posize";

import IconStatus from "../common/IconStatus";

export default function HelmResourcesTable(props) {

  return (
    <div className={`table ${css(styles.content_box, styles.content_box_layout)}`}>
      {renderHeader()}
      {renderRows()}
    </div>
  );

  function renderRows() {
    return (
      <div className={css(styles.flex, styles.flex_layout)}>
        {props.resources.map((resource) => renderRow(resource))}
      </div>
    );
  }

  function renderRow(resource) {
    return (
      <div className={css(styles.flex1, styles.flex1_layout)}>
        <div className={css(styles.flex1_spacer)} />
        {renderItem(resource.kind)}
        {renderItem(resource.namespace)}
        {renderItem(resource.name)}
        <IconStatus />
      </div>
    );

    function renderItem(item) {
      return (
        <div className={css(styles.flex1_col)}>
          <h5 className={css(styles.highlights, styles.highlights_layout)}>{item}</h5>
        </div>
      );
    }
  }

  function renderHeader() {
    return (
      <article className={css(styles.content_box1, styles.content_box1_layout)}>
        <div className={css(styles.content_box1_spacer)} />
        {renderItem("Kind")}
        {renderItem("Namespace")}
        {renderItem("Name")}
        {renderItem("Status")}
      </article>
    );

    function renderItem(item) {
      return (
        <div className={css(styles.content_box1_col)}>
          <h5 className={css(styles.environment, styles.environment_layout)}>{item}</h5>
        </div>
      );
    }
  }
}

const styles = StyleSheet.create({
  content_box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(242,246,255)",
  },
  flex1_layout: {
    position: "relative",
    overflow: "visible",
    margin: "7px 0px 0px",
  },
  content_box_layout: {
    position: "relative",
    overflow: "visible",
    minHeight: 106,
    flexGrow: 1,
    margin: 0,
  },

  content_box1_layout: {
    position: "relative",
    overflow: "visible",
    flex: "0 0 auto",
    minHeight: 18,
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
    margin: "5px 0px 4px",
  },
  content_box1: {
    display: "flex",
    backgroundColor: "rgb(23,119,255)",
    borderRadius: "2px 2px 2px 2px",
  },
  content_box1_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  content_box1_col: {
    display: "flex",
    flex: "0 1 110px",
  },
  environment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '500 15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(255,255,255)",
    textAlign: "center",
    letterSpacing: "0px",
  },
  environment_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
  flex1: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
  },

  flex1_spacer: {
    display: "flex",
    flex: "0 1 5px",
  },
  flex1_col: {
    display: "flex",
    flex: "0 1 110px",
  },
  flex1_spacer1: {
    display: "flex",
    flex: "0 1 5px",
    zIndex: 5,
  },
  highlights: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
    margin: 0,
  },
  highlights_layout: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
  },
});
