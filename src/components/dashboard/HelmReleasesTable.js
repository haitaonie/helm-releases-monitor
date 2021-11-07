/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React, { useEffect, useState } from "react";

import { StyleSheet, css } from "aphrodite/no-important";
import { Px, commonStyles } from "../posize";

import IconStatus from "../common/IconStatus";

export default function HelmReleasesTable({ releases, applyRelease }) {
  const [selection, setSelection] = useState({});

  return (
    <div className={`table ${css(styles.content_box, styles.content_box_layout)}`}>
      <Header />

      <div className={css(styles.flex, styles.flex_layout)}>
        {releases.map((release) => (
          <Row release={release} selected={release === selection} selectRelease={() => select(release)} />
        ))}
      </div>
    </div>
  );

  function select(release) {
    setSelection(release);
    applyRelease(release.resources === undefined ? [] : release.resources);
  }
}

function Header() {
  return (
    <article className={css(styles.content_box1, styles.content_box1_layout)}>
      {renderItem("Environment")}
      {renderItem("Platform")}
      {renderItem("Namespace")}
      {renderItem("Name")}
      {renderItem("Chart")}
      {renderItem("Version")}
      {renderItem("Status")}
      {renderItem("Revision")}
      {renderItem("Resources")}
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

function Row({ release, selected, selectRelease }) {
  return (
    <div className={css(selected ? styles.flex1_select : styles.flex1_regular, styles.flex1_layout)}>
      {renderItem(release.environment)}
      {renderItem(release.platform)}
      {renderItem(release.namespace)}
      {renderItem(release.name)}
      {renderItem(release.chart)}
      {renderItem(release.version)}
      <IconStatus />
      {renderItem(release.environment)}
      <IconResources
        text={release.resources !== undefined ? release.resources.length : 0}
        click={selectRelease}
      />
    </div>
  );

  function renderItem(item) {
    return (
      <div className={css(styles.flex1_col)}>
        <h5 className={css(styles.highlights, styles.highlights_layout)}>{item}</h5>
      </div>
    );
  }

  function IconResources({ text, click }) {
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
      content_box_col: {
        display: "flex",
        flex: "0 1 100px",
      },
      group: {
        display: "flex",
      },
      group_layout: {
        position: "relative",
        overflow: "visible",
        flexGrow: 1,
        margin: 0,
      },

      content_box_spacer: {
        display: "flex",
        flex: "0 1 20px",
      },
      content_box_col1: {
        display: "flex",
        flex: "0 1 10px",
      },
      icon: {
        background: "var(--src) center center / contain no-repeat",
      },
      icon_layout: {
        position: "relative",
        height: 12.5,
        width: 12,
        minWidth: 12,
      },

      highlights: {
        display: "flex",
        alignItems: "center",
        // justifyContent: 'flex-end',
        font: '15px/1.2 "Roboto", Helvetica, Arial, serif',
        color: "rgb(33,33,33)",
        textAlign: "right",
        letterSpacing: "0px",
        margin: 0,
      },
      highlights_layout: {
        position: "absolute",
        right: 30,
      },
    });

    return (
      <div className={`icon-text ${css(styles.content_box, styles.content_box_layout)}`}>
        <Text text={text} />
        <Icon click={click} />
      </div>
    );

    function Icon({ click }) {
      return (
        <div className={css(styles.content_box_col1)}>
          <div
            style={{ "--src": `url(${require("assets/next.png")})` }}
            className={css(styles.icon, styles.icon_layout, commonStyles.clickable)}
            onClick={click}
          />
        </div>
      );
    }

    function Text({ text }) {
      return (
        <div className={css(styles.content_box_col)}>
          <h5 className={css(styles.highlights, styles.highlights_layout)}>{text}</h5>
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
  flex1_regular: {
    display: "flex",
    backgroundColor: "rgb(255,255,255)",
  },
  flex1_select: {
    display: "flex",
    backgroundColor: "rgb(145, 179, 250)",
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
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif, ',
    color: "rgb(33,33,33)",
    textAlign: "center",
    letterSpacing: "0px",
    margin: 0,
  },
  highlights_selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    font: '15px/1.2 "Roboto", Helvetica, Arial, serif, ',
    color: "rgb(22,118,255)",
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
