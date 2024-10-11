import Box from '@mui/material/Box';
import SearchBar from './contents/SearchBar';
import MyWorkTour from './contents/MyWorkTour';

const MainContent = () => {

    return <Box className="container">
        <SearchBar />
        <MyWorkTour />
    </Box>
}

export default MainContent;
