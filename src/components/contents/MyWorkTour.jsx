import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { myWorkTour } from '../../apis/db';
import { toast } from 'react-toastify';
import TextInfo from '../sharedComps/TextInfo';

const MyWorkTour = () => {

    const handleWorkItemClick = (work) => {
        if(!work.url) {
            toast.error('URL not found OR It might be possible that this app is made for internal use.')
            return
        }
    }

    return <Box id="Work" className="container" sx={{border: '1px outset'}}>
        <Box component="h1" mb={1} className='text-shadow'>My work tour</Box>
        <TextInfo text="( To get a quick tour of my work, please click on below links. )" />
        <Box className="container"
            alignItems="center"
            justifyContent="flex-start"
            width="auto"
            mb={3.5}
            sx={{
                flexDirection: { md: 'row'},
                pl: { xs: 4, md: 10},
                pr: { xs: 4, md: 10}
            }}
        >
            {myWorkTour.map((wt) => 
                <Box key={wt.tourType} component="span"
                    className='container' flexDirection="row" justifyContent="flex-start"
                    sx={{ alignItems: { xs: 'flex-start', md: 'center'}}}
                >
                    <Box component="h5" sx={{mt: {xs: 0.75, md: .5} }}>{wt.tourType}:</Box>
                    <Box ml={1}>
                        {wt.data.map((work) =>
                            <Button
                                key={work.value}
                                href={work.url}
                                onClick={() => handleWorkItemClick(work)}
                                target='_blank'
                                sx={{textDecoration: 'underline'}}
                            >{work.label}</Button>
                        )}
                    </Box>
                </Box>
            )}
        </Box>
    </Box>
}

export default MyWorkTour;
