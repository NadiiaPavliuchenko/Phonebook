import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box>
      <List>
        {contacts &&
          contacts.map(contact => (
            <ListItem key={contact.id}>
              <Grid
                container
                spacing={1}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: '1px solid black',
                  padding: 3,
                }}
              >
                <Grid item sx={{ display: 'flex', gap: 1 }}>
                  <Grid item>
                    <Typography component="p" variant="h6">
                      {contact.name}:
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography component="p" variant="h6">
                      {contact.number}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(contact.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactsList;
