import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
  textAlign: 'center',
};

export default function DeleteAllModal(props) {

  // Define dois estados usando React.useState
  const [error, setError] = React.useState(false); // Para controlar mensagens de erro
  const [input, setInput] = React.useState(''); // Para armazenar a entrada do usuário

  // Função para deletar todos os nós e conexões
  const deleteAllNodesAndConnections = async () => {
    try {
      // Envia uma requisição DELETE para uma URL
      const response = await fetch('https://back-roots.onrender.com/api/v1/general/deleteAll', {
        method: 'DELETE',
      });

      if (response.ok) {
        // Se a resposta for bem-sucedida, recarrega a página
        console.log('All nodes and connections deleted successfully.');
        window.location.reload();
      } else {
        // Se a resposta não for bem-sucedida, exibe uma mensagem de erro
        console.error('Failed to delete all nodes and connections.');
      }
    } catch (error) {
      // Se ocorrer um erro durante a requisição, exibe uma mensagem de erro
      console.error('An error occurred:', error);
    }
  };

  // Função para fechar o modal
  const handleClose = () => {
    setError(false); // Reseta o estado de erro
    props.setOpen(false); // Fecha o modal com a função passada como prop
  };

  // Função para lidar com a mudança no campo de texto
  const handleTextFieldChange = (event) => {
    setInput(event.target.value); // Atualiza o estado de entrada com o valor do campo de texto
  }

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    if (input != "DELETE") {
        setError(true); // Se a entrada não for "DELETE", define o estado de erro como verdadeiro
    } else {
        deleteAllNodesAndConnections(); // Caso contrário, chama a função para deletar e recarregar
        handleClose(); // Fecha o modal
    }
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            color="error"
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom="30px">
            To delete all nodes, type DELETE and click the button below.
          </Typography>
          <div>
            <TextField
              id="outlined-basic"
              label="Delete"
              variant="outlined"
              onChange={handleTextFieldChange}
              InputLabelProps={{
                style: {
                  color: 'gray',
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'green',
                  },
                },
              }}
            />
          </div>
          {error && <div style={{ color: 'red' }}>You must type DELETE.</div>} {/* Exibe a mensagem de erro se houver erro */}
          <div style={{ marginTop: '20px' }}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={handleSubmit} // Chama a função de envio ao clicar no botão
            >
              Delete
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
