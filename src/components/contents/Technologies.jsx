import Box from '@mui/material/Box';
import TechIconsList from '../sharedComps/TechIconList';
import { techIconsList } from '../sharedComps/icons';

const TechnologiesIKnow = () => {
    return <Box id="Technologies" className="container" sx={{background: 'linear-gradient(to bottom, #ddd, white)', border: '1px outset'}}>
        <Box component="h1" mb={1} className='text-shadow'>Technology I Know</Box>
        <TechIconsList iconsList={techIconsList} />
    </Box>
}

export default TechnologiesIKnow;
