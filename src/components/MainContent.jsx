import Box from '@mui/material/Box';
import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';
import MyEducation from './contents/MyEducation';
import MyProjects from './contents/MyProjects';

const MainContent = () => {

    return <Box className="container">
        <SearchBar />
        <MyWorkTour />
        <MyEducation />
        <MyProjects />
    </Box>
}

export default MainContent;
