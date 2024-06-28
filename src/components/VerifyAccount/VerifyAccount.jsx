import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { verifyUser } from '../../redux/authorization/operations';

const VerifyAccount = () => {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const verification = async () => {
      try {
        await dispatch(verifyUser(verificationToken)).unwrap();
        navigate('/login');
      } catch (e) {
        navigate('/register');
      }
    };
    verification();
  }, [dispatch, navigate, verificationToken]);

  return null;
};

export default VerifyAccount;
