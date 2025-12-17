import Box from '@mui/material/Box';

const MyContact = () => {

    return <Box id="contact" className="container" sx={{ width: 'auto', p: {xs: 3.5, md: 7.5} }}>
        <Box component="h1" mt={0} className='text-shadow'>Contact</Box>
        <Box className="container" flexDirection="row">
            <Box className="container">
                <Box component="h6" mt={0} mb={1}>Address:</Box>
                <Box component="span" className='text-sm'>
                    H.No. 70K, Jargon Khas<br /> Ghazipur, UP India - 233300
                </Box>
            </Box>
            <Box className="container" alignItems="flex-end">
                <Box component="h6" mt={0} mb={1}>Call/SMS or Email@:</Box>
                <Box component="span" className='text-sm'>
                +91 8686340975
                </Box>
                <Box component="span" className='text-sm'>
                ramniwasg96@gmail.com
                </Box>
            </Box>
        </Box>
    </Box>
}

export default MyContact;
