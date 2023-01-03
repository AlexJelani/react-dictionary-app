import { Stack, Typography, Box, IconButton } from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
} from "@mui/icons-material";
import { border as BookmarkedIcon } from "@mui/system";
import { useParams } from "react-router-dom";

const Definition = () => {
  const {word} = useParams();
  
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <IconButton>
          <BackIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Stack>
      <Box>
        <Typography variant="h4">{word}</Typography>
      </Box>
    </>
  );
};

export default Definition;
