import { useQuery } from "react-query";
import MusiqueApi from "../api/MusiquesApi.js";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import PATH from "../constantes/Path.js";
import Divider from "@mui/material/Divider";

const { getListMusiques } = MusiqueApi;

const { MUSIQUE_DETAIL_PATH } = PATH;

const MusiqueList = () => {
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery(
    "musiques",
    getListMusiques
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <List>
      {data?.map((musique) => (
        <React.Fragment key={musique?.id}>
          <ListItem>
            <ListItemButton
              onClick={() => navigate(MUSIQUE_DETAIL_PATH(musique?.id))}
            >
              <ListItemAvatar>
                <Avatar alt={musique?.pochetteUrl} src={musique?.pochetteUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={musique?.titre}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {musique?.artiste?.join("-")}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default MusiqueList;
