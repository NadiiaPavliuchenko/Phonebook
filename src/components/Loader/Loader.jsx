import { Box } from '@mui/material';
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Rings
        visible={true}
        height="100"
        width="100"
        color="#1976d2"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  );
};

export default Loader;
