import Box from '@mui/material/Box';
import NestedList from '../sharedComps/NestedList';
import TextInfo from '../sharedComps/TextInfo';

const MyProjects = () => {

    return <Box id="Projects" className="container" sx={{ border: '1px outset'}}>
        <Box component="h1" mb={1} className='text-shadow'>My Projects</Box>
        <TextInfo text="( To get a quick view of my official projects, please click on below items. )" />
        <NestedList />
    </Box>
}

export default MyProjects;
