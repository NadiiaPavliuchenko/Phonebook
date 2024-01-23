import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authorization/operations';
import { selectUser } from '../../redux/authorization/selectors';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    user && (
      <div>
        <p>Welcome, {user.email}</p>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    )
  );
};

export default UserMenu;
