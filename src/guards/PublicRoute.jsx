import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/authorization/selectors';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { state: prevLocation } = useLocation();
  return !isLoggedIn ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PublicRoute;
