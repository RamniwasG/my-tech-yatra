import Box from '@mui/material/Box';
import NestedList from '../sharedComps/NestedList';

const MyProjects = () => {

    return <Box id="Projects" className="container" sx={{ border: '1px outset'}}>
        <h1 className='text-shadow'>My Projects</h1>
        <NestedList />
    </Box>
}

export default MyProjects;
