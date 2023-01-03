import { Stack, Typography, Box, IconButton } from "@mui/material"
import { ArrowBack as BackIcon, BookmarkBorder as BookmarkIcon, Border as BookmarkedIcon } from "@mui/icons-material"


const Definition = () => {
  return (
    <>
      <Stack>
        <IconButton>
          <BackIcon/>
        </IconButton>
        <IconButton>
          <BookMarkIcon/>
        </IconButton>
      </Stack>
    </>
  )
}

export default Definition
