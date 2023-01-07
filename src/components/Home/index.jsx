import {
  Typography,
  Box,
  FilledInput,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [word, setWord] = useState("");
  const history = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedWord = word.trim().toLowerCase();
    if (!trimmedWord || trimmedWord.split(" ").length > 1) return;
    history(`/search/${word}`);
  };
  return (
    <Box sx={{ ...theme.mixins.alignInTheCenter }}>
      <img src="src/assets/book.png" alt="Book" />
      <Typography
        sx={{
          mt: 3,
          mb: 1,
        }}
        color="primary"
        fontWeight="fontWeightBold"
        variant="h4"
      >
        Dictionary
      </Typography>
      <Typography color="GrayText">Find the meaning quick</Typography>
      <Box sx={{ width: "360px" }}>
        <form onSubmit={handleSubmit}>
          <FilledInput
            value={word}
            onChange={(event) => setWord(event.target.value)}
            placeholder="search word"
            sx={{
              my: 4,
              backgroundColor: "white",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.5)",
              "& .MuiFilledInput-input": {
                p: 2,
              },
            }}
            startAdornment={<SearchIcon color="disabled" />}
            fullWidth
          />
        </form>
      </Box>

      <IconButton
        to="/bookmarks"
        component={Link}
        sx={{
          backgroundColor: "red",
          borderRadius: 2,
          p: 2,
          color: "#fff",
          background: "linear-gradient(138.72deg, #DC8295 0%,#DC687C 95.83%)",
          boxShadow: "0px 10px 10px rgba(221, 114, 133, 0.2)",
        }}
      >
        <BookmarkIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
