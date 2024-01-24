import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/authorization/selectors';

// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const location = useLocation();
//   return isLoggedIn ? children : <Navigate to="/login" state={location} />;
// };

// export default PrivateRoute;

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
