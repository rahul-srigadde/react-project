import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MENU_ITEMS } from "../constants/constant";
import { useNavigate } from "react-router-dom";

function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {MENU_ITEMS.map((element) => (
        <ListItemButton onClick={() => navigate(element.path)}>
          <ListItemIcon>{element.icon}</ListItemIcon>
          <ListItemText primary={element.name} />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
}

export default MainListItems;
