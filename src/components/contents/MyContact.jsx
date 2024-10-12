import Box from '@mui/material/Box';

const MyContact = () => {

    return <Box className="container" flexDirection="row" sx={{ width: 'auto', p: 7.5}}>
        <Box className="container">
            <Box component="h6" mt={0} mb={1.5}>Office:</Box>
            <Box component="span" className='text-sm'>
                Sangam Vihar Sector-2, Fullanpur, <br /> Ghazipur, UP India - 233300
            </Box>
        </Box>
        <Box className="container" alignItems="flex-end">
            <Box component="h6" mt={0} mb={1.5}>Call/SMS or Email@:</Box>
            <Box component="span" className='text-sm'>
               +91 8686340975
            </Box>
            <Box component="span" className='text-sm'>
               ramniwasg96@gmail.com
            </Box>
        </Box>
    </Box>
}

export default MyContact;
