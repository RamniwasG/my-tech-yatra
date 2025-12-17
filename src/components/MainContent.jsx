import Box from '@mui/material/Box';
// import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';
import MyEducation from './contents/MyEducation';
import MyProjects from './contents/MyProjects';
import MyContact from './contents/MyContact';
import TechnologiesIKnow from './contents/Technologies';
import MyGallery from './contents/MyGallery';
import HomePage from './contents/Home';

const MainContent = () => {

    return <Box id="Home" className="container">
        {/* <SearchBar /> */}
        <HomePage />
        <MyWorkTour />
        <MyProjects />
        <TechnologiesIKnow />
        <MyEducation />
        <MyGallery />
        <MyContact />
    </Box>
}

export default MainContent;
