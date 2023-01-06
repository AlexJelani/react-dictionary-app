import {
  Stack,
  Typography,
  Box,
  IconButton,
  Divider,
  CircularProgress,
  useTheme,
  Button,
} from "@mui/material";
import {
  ArrowBack as BackIcon,
  BookmarkBorder as BookmarkIcon,
  PlayArrow as PlayIcon,
  Bookmark as BookmarkedIcon,
} from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";

const Definition = () => {
  const { word } = useParams();
  const goBack = useNavigate();
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exist, setExist] = useState(true);
  const theme = useTheme();

  console.log(definitions);

  useEffect(() => {
    const fetchDefinition = async () => {
      try {
        const resp = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        setDefinitions(resp.data);
        setLoading(false);
      } catch (error) {
        setExist();
      }
    };
    fetchDefinition();
  }, []);

  if (!exist)
    return (
      <Box sx={{ ...theme.mixins.alignInTheCenter }}>
        <Typography>Word not found</Typography>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalized" }}
          onClick={() => goBack(-1)}
        >
          Go back
        </Button>
      </Box>
    );
  if (loading)
    return (
      <Box sx={{ ...theme.mixins.alignInTheCenter }}>
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton onClick={() => goBack(-1)}>
          <BackIcon sx={{ color: "black" }} />
        </IconButton>
        <IconButton>
          <BookmarkIcon sx={{ color: "black" }} />
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
        <Typography sx={{ textTransform: "capitalize", mt: 2 }} variant="h5">
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

      {definitions.map((def, idx) => (
        <Fragment key={idx}>
          <Divider sx={{ display: idx === 0 ? "none" : "block", my: 5 }} />

          {def.meanings.map((meaning) => (
            <Box
              key={meaning.partOfSpeech}
              sx={{
                boxShadow: "Opx 10px 25px rgba(0, 0, 0, 0.5)",
                backgroundColor: "#fff",
                p: 2,
                borderRadius: 2,
                mt: 3,
              }}
            >
              <Typography
                sx={{ textTransform: "capitalize" }}
                color="GrayText"
                variant="subtitle1"
              >
                {meaning.partOfSpeech}
              </Typography>
              {meaning.definitions.map((definition, idx) => (
                <Typography
                  sx={{ my: 1 }}
                  color="GrayText"
                  variant="body2"
                  key={definition}
                >
                  {meaning.definitions.length > 1 && `${idx + 1}. `}
                  {definition.definition}
                </Typography>
              ))}
            </Box>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default Definition;
