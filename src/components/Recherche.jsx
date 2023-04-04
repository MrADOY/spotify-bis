import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";

const Recherche = () => {
  // Type de recherche possible dans la select box
  const typeCritereConstante = ["Titre", "Artiste", "Genre"];

  // Valeur qui est affichée dans l'input
  const [search, setSearchInput] = React.useState("");

  // Valeur selectionnée de la select box
  const [typeCritere, setTypeCritere] = React.useState(typeCritereConstante[0]);

  // Ensemble des critères qui ont été selectionnés
  const [criteres, setCritere] = React.useState([]);

  /* 
    Lors du changement sur la select box, on met à jour le type de critère
    on met également l'input à jour avec la valeur enregistré par l'utilisateur
    précédemment
    */
  const handleChangeSelectBox = (event) => {
    setTypeCritere(event.target.value);
    const input = criteres.find(
      (critere) => critere.typeCritere === event.target.value
    );
    setSearchInput(input ? input?.valeur : "");
  };

  /*
    Lorsque l'utilisateur appuie sur le bouton entrée, cela ajoute un critère à 
    la liste si ce citère n'existait pas avant. Sinon on met à jour la valeur
  */
  const handlePressEnterSurInput = (e) => {
    if (criteres.find((critere) => critere.typeCritere === typeCritere)) {
      setCritere(
        criteres.map((critere) =>
          critere.typeCritere === typeCritere
            ? { ...critere, valeur: e.target.value }
            : critere
        )
      );
    } else {
      setCritere([
        ...criteres,
        {
          typeCritere,
          valeur: e.target.value,
        },
      ]);
    }
  };

  /* 
    Au clique sur le critere, on récupère les données saisies et on les 
    affiche dans l'input
  */

  const handleClickChip = (critere) => {
    setTypeCritere(critere.typeCritere);
    setSearchInput(critere.valeur);
  };

  // Au clique sur la corbeille, on supprime le critère
  const handleDeleteChip = (critereToDelete) => {
    setCritere(
      criteres.filter(
        (critere) => critere.typeCritere !== critereToDelete.typeCritere
      )
    );
  };

  return (
    <Box sx={{ mt: 3, mb: 1 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Select
          labelId="critere-select-label"
          id="critere-select"
          value={typeCritere}
          label="Critère"
          onChange={handleChangeSelectBox}
        >
          {typeCritereConstante?.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="outlined-basic"
          label="Recherche"
          variant="outlined"
          value={search}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handlePressEnterSurInput(e);
            }
          }}
        />
      </Stack>
      <Box sx={{ mt: 1, mb: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          {criteres?.map((critere) => (
            <Chip
              key={critere?.typeCritere}
              label={`${critere?.typeCritere} - ${critere?.valeur}`}
              onClick={() => handleClickChip(critere)}
              onDelete={() => handleDeleteChip(critere)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Recherche;
