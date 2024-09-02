import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Rahul Srigadde
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.onSignIn(data.get("email"));
  };
  return (
    <Box
      boxShadow={2}
      zIndex="tooltip"
      position="absolute"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 38px)",
        backgroundColor: "#ededed",
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#00bfa5",
          alignItems: "center",
          justifyContent: "center",
          height: "75px",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            marginRight: "12px",
            paddingTop: "6px",
            color: "black",
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
          Welcome to
        </Typography>
        <img src={logo} alt={"Investor Vision"} loading="lazy" />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            marginLeft: "12px",
            paddingTop: "6px",
            color: "black",
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
          Chat application
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </Box>
  );
}
