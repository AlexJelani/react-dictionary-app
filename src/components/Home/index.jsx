import { Typography, Box, FilledInput, IconButton } from "@mui/material";
import { Search as SearchIcon, Bookmark as BookmarkIcon } from "@mui/icons-material";

const Home = () => {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      height:'100vh'
    }}>
      <img src="src/assets/book.png" alt="Book" />
      <Typography variant="h4">Dictionary</Typography>
      <Typography>Find the meaning quick</Typography>
      <FilledInput/>
      <IconButton>
        <BookmarkIcon/>
      </IconButton>

    </Box>
  );
};

export default Home;
