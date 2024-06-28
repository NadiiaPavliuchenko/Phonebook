import RegisterForm from 'components/RegisterForm/RegisterForm';
import ResendLetter from 'components/ResendLetter/ResendLetter';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { verificationEmailSent } from '../../redux/authorization/selectors';
import { useSelector } from 'react-redux';

const Register = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const isEmailSent = useSelector(verificationEmailSent);

  useEffect(() => {
    console.log(isEmailSent);
    if (isEmailSent) {
      alert(
        'Verification email has been sent to your email address. Please verify your account before logging in.'
      );
    }
  }, [isEmailSent]);

  const OpenModal = () => {
    setOpenModal(true);
  };

  const CloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RegisterForm />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 28,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              gap: 1,
            }}
          >
            <Typography component="p">Already have an account?</Typography>
            <Link to="/login" component={RouterLink}>
              {'Login'}
            </Link>
          </Box>
          <Box>
            <Link component="button" onClick={OpenModal}>
              Resend Email
            </Link>
          </Box>
        </Box>
      </Box>
      <ResendLetter isModalOpen={isModalOpen} closeModal={CloseModal} />
    </>
  );
};

export default Register;
