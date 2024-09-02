import {makeStyles} from '@mui/styles'
import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import {MessageLeft, MessageRight} from "./Message";
import {TextInput} from "./TextInput";
import {displayName, getRandomChatHistory, setFromAndToUserid} from "./data";
import {connectSocket, socket} from "./socket";
import {faker} from "@faker-js/faker";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
    paper: {
        width: "80vw",
        height: "80vh",
        maxHeight: "700px",
        display: "flex",
        alignItems: "left",
        padding: '10px',
        flexDirection: "column",
        position: "relative"
    },
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    container1: {

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    messagesBody: {
        width: "calc( 100% - 20px)",
        margin: 10,
        overflowY: "scroll",
        padding: 12,
        height: "calc( 100% - 80px )"
    }
}))
export default function ChatApp() {
    const {fromUserid, toUserid} = setFromAndToUserid()
    console.log(fromUserid, toUserid, 'jbfglkbsdjkvbxjdvb;xjdfb;sdjf')
    const [chatData, setChatData] = React.useState(getRandomChatHistory(10, fromUserid))
    const classes = useStyles();

    useEffect(() => {
        if (!socket) {
            console.log('hello')
            connectSocket(fromUserid);
        }
        socket.on("new_message", (data) => {
            console.log('new_message', data)
            setChatData((prev) => [...prev, data]);
        });
        return () => {
            console.log('new_message return')
            socket?.off("new_message");
        };
    }, [fromUserid])
    const sendMessage = (message, e) => {
        e.preventDefault()
        e.stopPropagation()
        const messageBody = {
            from: fromUserid,
            to: toUserid,
            message,
            timestamp: Date.now(),
            photoURL: faker.image.avatar(),
            displayName: faker.name.firstName(),
            avatarDisp: faker.image.avatar()
        }
        socket.emit("send_message", messageBody);
    }
    return (<div>

            <div className={classes.container}>
                <Paper className={classes.paper} zDepth={2}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Avatar
                            sx={{ width: 12, height: 12 }}
                            alt={fromUserid}
                            src={faker.image.avatar()}/>
                        <Typography
                            noWrap
                            variant="subtitle2"
                            gutterBottom
                        >
                            {/*From: {displayName[fromUserid]} --> To {displayName[toUserid]}*/}
                            {fromUserid} --> {toUserid}
                        </Typography>
                    </Stack>
                    <Paper id="style-1" className={classes.messagesBody}>
                        {chatData.map((message) => {
                            if (message.to === fromUserid) {
                                return <MessageLeft
                                    message={message.message}
                                    timestamp={message.timestamp}
                                    photoURL={message.photoURL}
                                    displayName={message.fromDisplayName}
                                    avatarDisp={message.avatarDisp}
                                />
                            } else if (message.from === fromUserid) {
                                return <MessageRight
                                    message={message.message}
                                    timestamp={message.timestamp}
                                    photoURL={message.photoURL}
                                    displayName={message.toDisplayName}
                                    avatarDisp={message.avatarDisp}
                                />
                            }
                            else {
                                return <></>
                            }
                        })}
                    </Paper>
                    <TextInput sendMessage={sendMessage}/>
                </Paper>
            </div>
        </div>
    );
}