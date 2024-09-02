import React, { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 45,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.55),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  flexGrow: 1,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const useStyles = makeStyles({
  searchStyle: {
    animation: "$spinSearch 0.1s linear",
    color: "#919191",
  },
  arrowStyle: {
    animation: "$spinArrow 0.1s linear",
    color: "#4fc3f7",
  },
  "@keyframes spinArrow": {
    "0%": { transform: "rotate(-90deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
  "@keyframes spinSearch": {
    "0%": { transform: "rotate(90deg)" },
    "100%": { transform: "rotate(0deg)" },
  },
});

export default function SideBarSearch() {
  const styles = useStyles();
  const PT = "Search or start new chat";
  const [placeHolder, setPlaceHolder] = useState(PT);
  const [searchText, setSearchText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const onSearchFocus = () => {
    if (searchText === "") {
      setPlaceHolder("");
    }
    setIsFocus(true);
  };

  const onSearchBlur = () => {
    if (searchText === "") {
      setPlaceHolder(PT);
    }
    setIsFocus(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        borderLeft: "0px solid gainsboro",
        borderRightWidth: "thin",
        backgroundColor: "#ededed",
      }}
    >
      <Search>
        <SearchIconWrapper>
          {isFocus ? (
            <ArrowBackIcon className={styles.arrowStyle} />
          ) : (
            <SearchIcon className={styles.searchStyle} />
          )}
        </SearchIconWrapper>
        <StyledInputBase
          text={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={onSearchFocus}
          onBlur={onSearchBlur}
          placeholder={placeHolder}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Box>
  );
}
