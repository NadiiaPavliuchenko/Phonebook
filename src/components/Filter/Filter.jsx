import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filtersSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      component="div"
      sx={{
        marginTop: 4,
        width: 580,
      }}
    >
      <Typography component="p" variant="p">
        Filter contacts by name
      </Typography>
      <TextField
        margin="normal"
        fullWidth
        id="filter"
        label="Name"
        name="filter"
        autoComplete="filter"
        onChange={handleInputChange}
      />
    </Box>
  );
};

export default Filter;
