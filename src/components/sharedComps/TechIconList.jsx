import React from 'react'
import Box from '@mui/material/Box';

const TechIconsList = ({ iconsList, title, imgStyles }) => {
    return <>
        <Box component="h6" m={0} pl={8.5}>{title}</Box>
        <Box className="tech-logo-container">
            {iconsList.map(icon =>
                <Box key={icon.label} className="icon-wrapper">
                    <img src={icon.url} alt="technology icon" style={{...imgStyles}} />
                    <Box component="span" style={{paddingTop: '8px',fontSize: '12px'}}>{icon.label}</Box>
                </Box>
            )}
        </Box>
    </>
}

export default TechIconsList;
