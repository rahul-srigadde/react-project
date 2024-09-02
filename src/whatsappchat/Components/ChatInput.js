import React, { useState } from "react";
import { Box, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { socket } from "../socket/socket";
import { SOCKET_EVENTS } from "../Constants/constants";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 45,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ChatInput({ selectedChatUser, loggedInUser }) {
  const [message, setMessage] = useState(null);
  return (
    <Box
      ml={2}
      mr={2}
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <SentimentVerySatisfiedIcon
        sx={{ color: "#919191", marginLeft: "16px" }}
      />
      <AttachFileIcon sx={{ color: "#919191", marginLeft: "16px" }} />
      <Search sx={{ flexGrow: 1 }}>
        <StyledInputBase
          placeholder="Type a message"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </Search>
      <SendIcon
        sx={{ color: message ? "#666666" : "#919191", marginLeft: "16px" }}
        disabled={!message}
        onClick={() => {
          const messageBody = {
            conversationId: selectedChatUser.id,
            message: message,
            sentBy: {
              id: "123",
              name: "Srigdde",
              externalId: loggedInUser,
            },
            receivedBy: {
              id: "123",
              name: "Srigdde",
              externalId: selectedChatUser.userId,
            },
            createdAt: "2023-01-12T21:42:19.318+0000",
          };
          socket.emit(SOCKET_EVENTS.SEND_MESSAGE, messageBody);
          setMessage("");
        }}
      />
      <MicIcon sx={{ color: "#919191", marginLeft: "16px" }} />
    </Box>
  );
}
const xyz = {
  id: {
    type: "string",
    title: "Notification ID",
    pattern:
      "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
  },
  portalId: {
    type: "string",
    title: "Portal ID",
    pattern:
      "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
  },
  portalName: {
    type: "string",
    title: "Portal Name",
  },
  applicationId: {
    type: "string",
    title: "applicationId",
    description: "Application ID",
  },
  description: {
    type: "string",
    title: "Description",
  },
  createdBy: {
    type: "string",
    title: "Created Principal Id",
    pattern:
      "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
    description: "UserId who created the notification",
  },
  updatedBy: {
    type: "string",
    title: "Updated Principal Id",
    pattern:
      "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$",
    description: "UserId who updated the notification",
  },
  createdAt: {
    type: "string",
    format: "date-time",
    description: "Date-time notification was created",
  },
  updatedAt: {
    type: "string",
    format: "date-time",
    description: "Date-time notification was updated",
  },
  resourceId: {
    type: "string",
    title: "resourceId",
    description: "Resource ID",
  },
  resourceType: {
    type: "string",
    title: "resourceType",
    description: "Resource type",
  },
  subResourceId: {
    type: "string",
    title: "subResourceId",
    description: "Sub resource ID",
  },
  name: {
    type: "string",
    title: "Name",
    description: "Name of the application",
  },
  baseUrl: {
    type: "string",
    title: "baseUrl",
    description: "Base URL of the application",
  },
  templateEndPoint: {
    type: "string",
    title: "templateEndPoint",
    description: "Templates end point of the application",
  },
  userDetailsEndPoint: {
    type: "string",
    title: "userDetailsEndPoint",
    description: "Users end point of the application",
  },
  responseEventName: {
    type: "string",
    title: "responseEventName",
    description:
      "Event name for the application to receive notification response",
  },
};
