import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import { useState } from 'react';

const SearchBar = () => {
    
    const [searchText, setSearchText] = useState('');

    return <Box className="container" sx={{background:'radial-gradient(#A9C4EB, white)' }}>
        <h1 className='text-shadow'>My Tech Yatra</h1>
        <FormControl sx={{ alignItems: 'center', mb: 7.5}} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={
                <InputAdornment position="end">
                    <Button color="warning" variant='contained' 
                        sx={{backgroundColor: '#FF6666', width: "110px", height: '54px', borderRadius: '0px'}}>
                    Search</Button>
                </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight'
            }}
            sx={{ pr: 0, width: '60%'}}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder='Search Work, Education, Projects etc.'
          />
        </FormControl>
    </Box>
}

export default SearchBar;
