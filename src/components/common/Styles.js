import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { StyleSheet } from "aphrodite/no-important";

export const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


export const Sheet = StyleSheet.create({

  clickable: {
    cursor: "pointer",
    userSelect: "none",
    transition: "opacity 0.2s",
    ":hover": { opacity: 0.7 },
  },
});