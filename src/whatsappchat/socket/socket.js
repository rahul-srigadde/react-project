import io from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  const url = "http://localhost:8090";
  socket = io(url, {
    path: "/path/socket.io",
    query: `user_id=${user_id}`,
    extraHeaders: {
      //custom headers
    },
    // withCredentials: true,
    // auth: {
    //   Cookie:
    //     cookie
    // },
  });
};

export { socket, connectSocket };
