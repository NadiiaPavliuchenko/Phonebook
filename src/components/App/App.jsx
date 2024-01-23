import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { getCurrentUser } from '../../redux/authorization/operations';
import { selectUser } from '../../redux/authorization/selectors';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';
import { selectIsLoading } from '../../redux/root/selectors';

const Header = lazy(() => import('../../pages/Header/Header'));
const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Register = lazy(() => import('../../pages/Register/Register'));
const Login = lazy(() => import('../../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    !user && dispatch(getCurrentUser());
  }, [dispatch, user]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
