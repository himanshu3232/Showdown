import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RenderAttacks() {
  const playerPokemon  = useSelector(store => store.player.currPokemon.pokemon.pokemon)
  const handleAttack = (attack) => {
    
  }
  return (
    <Box sx={{ flexGrow: 1, mt: "1rem", maxWidth: '35rem', ml: 'auto', mr: 'auto' }}>
      <Grid container spacing={2}>
        {playerPokemon?.attacks.map((attack) => (
          <Grid key={attack.name} item xs={6} md={6} onClick={() => handleAttack(attack)}>
            <Item xs={6} md={8} sx={{ cursor: "pointer" }}>
              <Button variant="text">{attack.name}</Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}