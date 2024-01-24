import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <Box>
      <List
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
        <ListItem to="/login" component={Link}>
          Login
        </ListItem>
        <ListItem to="/register" component={Link}>
          Register
        </ListItem>
      </List>
    </Box>
  );
};

export default Auth;
