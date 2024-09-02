import { styled } from "@mui/material/styles";
import React from "react";

const MultiColoredDiv = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(to bottom, #009688 0%, #009688 20%, #ccc 20%, #ccc 100%)",
  display: "flex",
  height: "100%",
  width: "100%",
}));
export default function Background(props) {
  return <MultiColoredDiv>{props.children}</MultiColoredDiv>;
}
