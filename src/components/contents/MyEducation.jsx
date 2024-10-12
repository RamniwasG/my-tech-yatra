import Box from '@mui/material/Box';
import CustomTable from '../sharedComps/CustomTable';

const MyEducation = () => {

    return <Box className="container" sx={{background: 'linear-gradient(to bottom, #ddd, white)'}}>
        <h1 className='text-shadow'>My Education</h1>
        <CustomTable />
    </Box>
}

export default MyEducation;
