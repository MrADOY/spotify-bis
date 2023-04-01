import { useParams } from "react-router-dom";
import MusiqueApi from "../api/MusiquesApi.js";
import { useQuery } from "react-query";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { CardMedia } from "@mui/material";

const { getMusiqueDetail } = MusiqueApi;

const MusiqueDetailPage = () => {
  const { musiqueId } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["musiques", musiqueId],
    () => getMusiqueDetail(musiqueId)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Typography variant="h3" gutterBottom>
        {data?.titre}
      </Typography>
      <Divider />

      {data.artiste.map((artiste) => (
        <Box sx={{ mt: 1, mb: 1 }} key={artiste?.id}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Avatar
              alt={artiste.prenom}
              src={artiste.photo}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="body1" gutterBottom>
              {`${artiste.prenom} - ${artiste.nom}`}
            </Typography>
          </Stack>
        </Box>
      ))}
      <Typography variant="h4" gutterBottom>
        Ecoutez la musique
      </Typography>
      <audio controls src={data?.urlFichier}></audio>
    </>
  );
};

export default MusiqueDetailPage;
