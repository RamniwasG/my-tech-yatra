import Box from '@mui/material/Box';
// import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';
import MyEducation from './contents/MyEducation';
import MyProjects from './contents/MyProjects';
import MyContact from './contents/MyContact';
import TechnologiesIKnow from './contents/Technologies';
import MyGallery from './contents/MyGallery';
import ToolsComponent from './contents/Tools';
import MyCourseCompletion from './contents/MyCourseCompletion';

const MainContent = () => {

    return <Box id="Home" className="container">
        {/* <SearchBar /> */}
        <MyWorkTour />
        <MyProjects />
        <MyGallery />
        <MyCourseCompletion />
        <TechnologiesIKnow />
        <ToolsComponent />
        <MyEducation />
        <MyContact />
    </Box>
}

export default MainContent;
