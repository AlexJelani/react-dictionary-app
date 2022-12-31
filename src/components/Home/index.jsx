import { Typography, Box, FilledInput, IconButton } from "@mui/material";
import {
  Search as SearchIcon,
  Bookmark as BookmarkIcon,
} from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
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
        <FilledInput
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
      </Box>
      <IconButton
        sx={{
          backgroundColor: "red",
          borderRadius: 2,
          p: 2,
          color: "#fff",
        }}
      >
        <BookmarkIcon />
      </IconButton>
    </Box>
  );
};

export default Home;
