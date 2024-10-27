import Box from '@mui/material/Box';
import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';
import MyEducation from './contents/MyEducation';
import MyProjects from './contents/MyProjects';
import MyContact from './contents/MyContact';
import TechnologiesIKnow from './contents/Technologies';
import Others from './contents/Other';

const MainContent = () => {

    return <Box id="Home" className="container">
        <SearchBar />
        <MyWorkTour />
        <MyEducation />
        <MyProjects />
        <TechnologiesIKnow />
        <Others />
        <MyContact />
    </Box>
}

export default MainContent;
