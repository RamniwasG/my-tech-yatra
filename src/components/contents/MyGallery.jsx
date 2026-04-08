import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import { images } from '../../utils';

const Others = () => {
    return <Box id="Gallery" className="container" sx={{ width: 'auto', background:'radial-gradient(#A9C4EB, white)', p: {xs: 3.5, md: 7.5}, border: '1px outset' }}>
        <Box component="h1" mt={0} className='text-shadow'>Project Gallery</Box>
        <Box className="w-[90%] h-[340px]" flexDirection="row p-3">
            <Carousel
                autoPlay={true}
                centerMode={false}
                infiniteLoop
                interval={1000}
                transitionTime={300}
                showThumbs={false}
                showIndicators={false}
            >
                {images.map((src, index) => (
                    <div key={index} className="rounded-lg shadow-md bg-white p-4">
                        <img src={src} width="240" height='300'
                            alt={`Gallery-pic-${index + 1}`}
                            className="w-[200px] md:width-[420px] h-full object-fit rounded-lg transition-transform duration-300 hover:scale-105"
                            style={{width: 'auto' }}
                        />
                    </div>
                ))}
            </Carousel>
        </Box>
    </Box>
}

export default Others;
