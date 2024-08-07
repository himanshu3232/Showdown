import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ListPokemon from "./ListPokemon";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ChoosePokemon({ pokemon }: { pokemon: string[] }) {
  const [open, setOpen] = React.useState<boolean>(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ListPokemon pokemon={pokemon} />
        </Box>
      </Modal>
    </>
  );
}
