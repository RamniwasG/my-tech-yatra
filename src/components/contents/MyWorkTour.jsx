import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { myWorkTour } from '../../apis/db';
import { toast } from 'react-toastify';

const MyWorkTour = () => {

    const handleWorkItemClick = (work) => {
        if(!work.url) {
            toast.error('URL not found OR It might be possible that this app is made for internal use.')
            return
        }
    }

    return <Box id="Work" className="container" sx={{border: '1px outset'}}>
        <h1 className='text-shadow'>My work tour</h1>
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
                    <Box component="h5" sx={{mt: 0.75}}>{wt.tourType}:</Box>
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
