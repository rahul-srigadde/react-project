import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState, useContext, useEffect } from "react";
import Background from "./Background";
import Foreground from "./Foreground";
import GlobalStyles from "./GlobalStyles";
import SideBar from "./SideBar";
import CssBaseline from "@mui/material/CssBaseline";
import Chat from "./Chat";
import Login from "./Login";
import { connectSocket, socket } from "../socket/socket";
import { loaderContext } from "../../App";
import { SOCKET_EVENTS } from "../Constants/constants";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          "@media (min-width: 600px)": {
            paddingLeft: "5px",
            paddingRight: "25px",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
export function App() {
  const showLoader = useContext(loaderContext);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [selectedChatUser, setSelectedChatUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(true);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    selectedUser && showLoader(!socket?.connected);
    if (!socket && selectedUser) {
      connectSocket(selectedUser);
      showLoader(false);
      socket.emit(
        SOCKET_EVENTS.GET_DIRECT_CONVERSATIONS,
        { user: selectedUser },
        (data) => {
          const convs = data.map((x, index) => ({
            name: x.user.name,
            userId: x.user.participantId,
            id: x.id,
            text: ``,
            person: `https://material-ui.com/static/images/avatar/${index}.jpg`,
          }));
          setConversations(convs);
        }
      );
    }
  }, [selectedUser, showLoader]);

  const handleSignIn = (value) => {
    setShowLogin(false);
    setSelectedUser(value);
    // window.localStorage.setItem("login_id", value);
  };
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <GlobalStyles />
      {/* <Background> */}
      <Foreground>
        {showLogin ? (
          <Login onSignIn={handleSignIn} />
        ) : (
          <>
            <SideBar
              conversations={conversations}
              setSelectedChatUser={setSelectedChatUser}
              selectedChatUser={selectedChatUser}
            />
            <Chat
              selectedChatUser={selectedChatUser}
              loggedInUser={selectedUser}
            />
          </>
        )}
      </Foreground>
      {/* </Background> */}
      {/* </ThemeProvider> */}
    </>
  );
}
