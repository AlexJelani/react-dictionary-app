import { Stack, Typography, Box, IconButton } from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  PlayArrow as PlayIcon,
} from "@mui/icons-material";
import { border as BookmarkedIcon } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Definition = () => {
  const { word } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    const fetchDefinition = async () => {
      const resp = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
    };
    fetchDefinition();
  }, []);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton onClick={() => goBack(-1)}>
          <BackIcon />
        </IconButton>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          mt: 3,
          background:
            "linear-gradient(90.17deg, #191E5D 0.14%, #0F133A 98.58%)",
          boxShadow: "0px 10px 20px rgba(19, 23, 71, 0.25)",
          px: 4,
          py: 5,
          color: "white",
          borderRadius: 2,
        }}
      >
        <Typography sx={{ textTransform: "capitalize" }} variant="h5">
          {word}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 2,
            p: 2,
            color: "#fff",
            background: (theme) => theme.palette.pink,
          }}
        >
          <PlayIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default Definition;
