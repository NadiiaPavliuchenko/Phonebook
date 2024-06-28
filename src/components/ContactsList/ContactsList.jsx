import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import {
  deleteContact,
  updateContact,
  updateStatusContact,
} from '../../redux/contacts/operations';
import { useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Checkbox } from '@mui/material';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const nameRefs = useRef({});
  const numberRefs = useRef({});

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleUpdate = id => {
    const body = {
      name: nameRefs.current[id].value,
      phone: numberRefs.current[id].value,
    };
    console.log(typeof numberRefs.current[id].value);
    dispatch(updateContact({ id, body }));
  };

  const handleUpdateStatus = (id, status) => {
    const body = {
      favorite: !status,
    };
    dispatch(updateStatusContact({ id, body }));
  };

  return (
    <Box>
      <List>
        {contacts &&
          contacts.map(contact => (
            <ListItem key={contact._id}>
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
                    inputRef={ref => (nameRefs.current[contact._id] = ref)}
                    size="small"
                    defaultValue={contact.name}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    inputRef={ref => (numberRefs.current[contact._id] = ref)}
                    size="small"
                    defaultValue={contact.email}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Phone number"
                    inputRef={ref => (numberRefs.current[contact._id] = ref)}
                    size="small"
                    defaultValue={contact.phone}
                  />
                </Grid>
                <Grid item>
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={contact.favorite}
                    onChange={() =>
                      handleUpdateStatus(contact._id, contact.favorite)
                    }
                  />
                </Grid>
                <Grid item>
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(contact._id)}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleUpdate(contact._id)}
                    >
                      <EditIcon />
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
