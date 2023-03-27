import { useQuery } from "react-query";
import MusiqueApi from "../api/MusiquesApi.js";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const { getListMusiques } = MusiqueApi;
import ListItemButton from "@mui/material/ListItemButton";

const MusiqueList = () => {
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
        <ListItem key={musique?.id}>
          <ListItemButton
            onClick={() => {
              alert("clicked");
            }}
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
      ))}
    </List>
  );
};

export default MusiqueList;
