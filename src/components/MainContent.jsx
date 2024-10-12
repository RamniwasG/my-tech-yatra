import Box from '@mui/material/Box';
import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';
import MyEducation from './contents/MyEducation';
import MyProjects from './contents/MyProjects';
import MyContact from './contents/MyContact';

const MainContent = () => {

    return <Box className="container">
        <SearchBar />
        <MyWorkTour />
        <MyEducation />
        <MyProjects />
        <MyContact />
    </Box>
}

export default MainContent;
