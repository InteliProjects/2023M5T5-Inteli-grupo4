import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute', // Define o estilo CSS para o modal
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false); // Estado para controlar se o modal está aberto ou fechado
  const handleOpen = () => setOpen(true); // Função para abrir o modal
  const handleClose = () => setOpen(false); // Função para fechar o modal

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button> {/* Botão para abrir o modal */}
      <Modal
        open={open} // Controla a abertura e fechamento do modal com base no estado 'open'
        onClose={handleClose} // Função para fechar o modal quando o usuário clica fora dele
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
