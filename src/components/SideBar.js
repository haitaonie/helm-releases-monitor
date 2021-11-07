import React from "react";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { styles } from "../Home";

export default function SideBar(props) {
  return (
    <div className={css(styles.content_box_col)}>
      <div className={css(styles.content_box1, styles.content_box1_layout)}>
        {Item("/", "Home")}
        {Item("/dashboard", "Dashboard")}
      </div>
    </div>
  );

  function Item(link, name) {
    return (
      <div className={css(styles.content_box2, styles.content_box2_layout)}>
        {renderItemActive(link === props.path)}
        <div className={css(styles.content_box2_spacer)} />
        <Link to={link}>{renderItemIcon(link)}</Link>
        <div className={css(styles.content_box2_spacer1)} />
        <Link to={link}>
          <h4 className={css(styles.dashboard, styles.dashboard_layout)}>{name}</h4>
        </Link>
      </div>
    );
  }

  function renderItemActive(isActive) {
    return isActive ? (
      <div
        style={{
          "--src": `url(${require("assets/active-bar.png")})`,
        }}
        className={css(styles.img, styles.img_layout)} />
    ) : (
      <div/>
    );
  }

  function renderItemIcon(path) {
    switch (path) {
      case "/dashboard":
        return (
          <div
            style={{
              "--src": `url(${require("assets/dashboard/icon-side.png")})`,
            }}
            className={css(styles.image, styles.image_layout)} />
        );

      default:
        return <></>;
    }
  }
}
