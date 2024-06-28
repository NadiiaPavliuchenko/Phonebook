import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;
    const email = e.target.elements.email.value;

    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone, email }));

    e.target.reset();
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        marginBottom: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          type="tel"
          label="Phone number"
          name="phone"
          autoComplete="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Contact
        </Button>
      </Box>
    </Box>
  );
};

export default ContactsForm;
