import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resendLetter } from '../../redux/authorization/operations';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ResendLetter = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();
  const handleResend = e => {
    e.preventDefault();
    const { email } = e.target.elements;
    const body = { email: email.value };
    dispatch(resendLetter(body));
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={closeModal}>
          <Box sx={style}>
            <Box
              component="form"
              onSubmit={handleResend}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography component="h3" variant="label">
                Enter Your Email
              </Typography>
              <TextField label="Email" name="email" variant="outlined" />
              <Button type="submit" variant="contained">
                Resend
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ResendLetter;
