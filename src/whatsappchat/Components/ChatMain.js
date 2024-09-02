import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { socket } from "../socket/socket";
import moment from "moment";
import { SOCKET_EVENTS } from "../Constants/constants";

const useStyles = makeStyles(() => ({
  chatContainer: {
    position: "relative",
    width: "100%",
    height: "calc(100% - 120px)",
    padding: "50px",
    overflowY: "auto",
    backgroundColor: "#e5ddd5",
  },
  messageBox: {
    position: "relative",
    display: "flex",
    width: "100%",
    margin: "5px 0",
    "& p": {
      position: "relative",
      right: 0,
      textAlign: "right",
      maxWidth: "65%",
      padding: "12px",
      background: "#dcf8c6",
      borderRadius: "10px",
      fontSize: "0.9em",
      "& span": {
        display: "block",
        marginTop: "5px",
        fontSize: "0.8em",
        opacity: 0.5,
      },
    },
  },
  myMessage: {
    justifyContent: "flex-end",
    "& p": {
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: "-12px",
        width: "20px",
        height: "20px",
        background:
          "linear-gradient(135deg, #dcf8c6 0%, #dcf8c6 50%, transparent 50%, transparent)",
      },
    },
  },
  friendMessage: {
    justifyContent: "flex-start",
    "& p": {
      background: " #fff",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "-12px",
        width: "20px",
        height: "20px",
        background:
          "linear-gradient(225deg, #fff 0%, #fff 50%, transparent 50%, transparent)",
      },
    },
  },
}));
export default function ChatMain({ loggedInUser, selectedChatUser }) {
  const classes = useStyles();
  const [chatHistory, setChatHistory] = useState(data);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.emit(
      SOCKET_EVENTS.GET_MESSAGES,
      { conversationId: selectedChatUser.id },
      (data) => {
        setChatHistory((prev) => [...data]);
        scrollToBottom();
      }
    );

    socket.on(SOCKET_EVENTS.NEW_MESSAGE, (data) => {
      setChatHistory((prev) => [...prev, data]);
    });

    return () => {
      socket?.off(SOCKET_EVENTS.NEW_MESSAGE);
      socket?.off(SOCKET_EVENTS.GET_MESSAGES);
    };
  }, [selectedChatUser.id]);

  const getClasses = (chat) => {
    console.log(chat, "data");
    return chat.sentBy.externalId === loggedInUser
      ? classes.messageBox + " " + classes.myMessage
      : classes.messageBox + " " + classes.friendMessage;
  };
  return (
    <div className={classes.chatContainer}>
      {chatHistory.map((chat) => {
        return (
          <div className={getClasses(chat)} key={chat.id} ref={messagesEndRef}>
            <p>
              {chat.message}
              <br />
              <span>{moment(chat.createdAt).format("DD/MM/YYYY")}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

const data = [
  {
    conversationId: "12345",
    message: "I've been waiting to see that show asap!",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde625@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "Ahh, I can't believe you do too!",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "The trailer looks good",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde625@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: " 😐😐😐",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "Mee too! 😊",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "We should video chat to discuss, if you're up for it!",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde625@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "Sure",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "I'm free now!",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde625@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
  {
    conversationId: "12345",
    message: "Awesome! I'll start a video chat with you in a few.",
    sentBy: {
      id: "123",
      name: "Srigdde",
      externalId: "rahul.srigadde@gmail.com",
    },
    createdAt: "2023-01-12T21:42:19.318+0000",
  },
];
