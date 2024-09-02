import React from "react";
import { Divider, Tooltip, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

export default function ConversationList({
  conversations,
  setSelectedChatUser,
  selectedChatUser,
}) {
  return (
    <List
      sx={{
        backgroundColor: conversations.length ? "#FFFFFF" : "#ededed",
        mb: 0,
        overflow: "auto",
        borderRight: "5px solid gainsboro",
        borderRightWidth: "thin",
      }}
    >
      {conversations.map((c, index) => (
        <React.Fragment key={c.id}>
          <ListItem
            sx={{
              cursor: "pointer",
              backgroundColor:
                selectedChatUser && selectedChatUser.userId === c.userId
                  ? "#ededed"
                  : "#FFFFFF",
            }}
            onClick={() => setSelectedChatUser(c)}
          >
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={c.person} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="h4"
                  style={{
                    fontSize: "1.1em",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  {c.name}
                </Typography>
              }
              secondary={
                <Tooltip
                  id={c.id}
                  sx={{ maxWidth: "20rem" }}
                  placement="bottom"
                  enterDelay={1000}
                  title={c.text}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "15rem",
                    }}
                  >
                    <Typography
                      noWrap
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {c.text}--hh
                    </Typography>
                  </div>
                </Tooltip>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
