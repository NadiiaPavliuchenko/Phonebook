import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box>
      <List
        component="nav"
        sx={{
          display: 'flex',
          '& .MuiListItem-root': {
            color: 'black',
            borderRadius: 1,
            transition: 'background-color 0.5s ease',
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: '#c7cacb',
          },
        }}
      >
        <ListItem to="/" component={Link}>
          Home
        </ListItem>
        {isLoggedIn && (
          <ListItem to="/contacts" component={Link}>
            Contacts
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Navigation;
