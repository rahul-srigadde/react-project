import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ChatHeader({ selectedChatUser }) {
  return (
    <AppBar
      elevation={0}
      position="static"
      color="default"
      sx={{
        backgroundColor: "#ededed",
        borderLeft: "5px solid gainsboro",
        borderLeftWidth: "thin",
      }}
    >
      <Toolbar style={{ minWidth: "100px" }}>
        <IconButton>
          <Avatar alt={selectedChatUser.name} src={selectedChatUser.person} />
        </IconButton>
        <Box>
          <Typography noWrap component="h1" color="textPrimary">
            {selectedChatUser.name}
          </Typography>
          <Typography noWrap component="span" variant="body2" color="#919191">
            last seen today at 7:33 PM
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
