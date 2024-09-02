import React from "react";
import { Box, Divider } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import ChatInput from "./ChatInput";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NoChat from "./Nochat";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Chat({ selectedChatUser, loggedInUser }) {
  const theme = useTheme();
  return selectedChatUser ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#ededed",
        flexGrow: 1,
      }}
    >
      <ChatHeader selectedChatUser={selectedChatUser} />
      <Divider />
      <ChatMain
        selectedChatUser={selectedChatUser}
        loggedInUser={loggedInUser}
      />
      <ChatInput
        selectedChatUser={selectedChatUser}
        loggedInUser={loggedInUser}
      />
    </Box>
  ) : (
    <Stack
      spacing={2}
      sx={{ height: "100%", width: "100%" }}
      alignItems="center"
      justifyContent={"center"}
    >
      <NoChat />
      <Typography variant="subtitle2">
        Select a conversation or start a{" "}
        <Link
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
          }}
          to="/"
        >
          new one
        </Link>
      </Typography>
    </Stack>
  );
}
