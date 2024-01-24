import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const numberRef = useRef();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = id => {
    const body = {
      name: nameRef.current.value,
      number: numberRef.current.value,
    };
    dispatch(updateContact({ id, body }));
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
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Grid item>
                  <TextField
                    label="Name"
                    ref={nameRef}
                    size="small"
                    defaultValue={contact.name}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Number"
                    ref={numberRef}
                    size="small"
                    defaultValue={contact.number}
                  />
                </Grid>
                <Grid item>
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(contact.id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleUpdate(contact.id)}
                    >
                      <SaveIcon />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactsList;
