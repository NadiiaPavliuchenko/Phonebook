import Auth from 'components/Auth/Auth';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Loader from 'components/Loader/Loader';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <AppBar position="static" color="grey">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <Auth />}
        </Toolbar>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
