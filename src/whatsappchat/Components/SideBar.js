import React, { useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideBarSearch from "./SideBarSearch";
import ConversationList from "./ConversationList";
import SideBarHeader from "./SideBarHeader";

export default function SideBar({
  conversations,
  setSelectedChatUser,
  selectedChatUser,
}) {
  const [isProfileOpen, setProfileOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#FFFFFF",
          width: "400px",
        }}
      >
        <SideBarHeader openProfile={setProfileOpen} />
        <Divider />
        <SideBarSearch />
        <Divider />
        <ConversationList
          conversations={conversations}
          setSelectedChatUser={setSelectedChatUser}
          selectedChatUser={selectedChatUser}
        />
      </Box>
      {isProfileOpen && (
        <Box
          boxShadow={2}
          zIndex="tooltip"
          position="absolute"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 38px)",
            backgroundColor: "#ededed",
            width: "400px",
          }}
        >
          <Box
            pt={7.6}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#00bfa5",
            }}
          >
            <Box
              sx={{
                ml: 2,
                marginTop: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton onClick={() => setProfileOpen(false)}>
                <ArrowBackIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Typography
                component="h1"
                color="#ffffff"
                sx={{ fontSize: "19px", marginTop: "11px", marginLeft: "20px" }}
              >
                Profile
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
