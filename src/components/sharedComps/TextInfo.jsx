import React from 'react'
import Box from '@mui/material/Box';

const TextInfo = ({ text, styles}) => {
    return <Box component="span" className='text-info' style={{...styles}}>{text}</Box>
}

export default TextInfo;
