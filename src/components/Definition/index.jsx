import { Stack, Typography, Box, IconButton } from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
} from "@mui/icons-material";
import { border as BookmarkedIcon } from "@mui/system";


const Definition = () => {
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
    </>
  );
};

export default Definition;
