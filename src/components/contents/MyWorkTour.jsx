import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { myWorkTour } from '../../apis/db';

const MyWorkTour = () => {

    return <Box className="container" sx={{outline: '1px solid'}}>
        <h1 className='text-shadow'>My work tour</h1>
        <Box className="container"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="auto"
            pl={10} mb={3.5}
            sx={{flexDirection: { md: 'row'}}}
        >
            {myWorkTour.map((wt) => 
                <Box key={wt.tourType} component="span" className='container' flexDirection="row" justifyContent="flex-start">
                    <Box component="h5" sx={{mt: 0.5}}>{wt.tourType}:</Box>
                    <Box ml={1}>
                        {wt.data.map((work) =>
                            <Button
                                key={work.value}
                                href={work.url}
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
