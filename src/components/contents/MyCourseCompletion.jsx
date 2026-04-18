import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import { courseGallery } from '../../utils';

const MyCourseCompletion = () => {
    return <Box id="Udemy_Courses" className="container" sx={{ width: 'auto', background:'radial-gradient(#A9C4EB, white)', p: {xs: 3.5, md: 7.5}, border: '1px outset' }}>
        <Box component="h1" mt={0} className='text-shadow'>Udemy Course Gallery</Box>
        <Box className="w-[90%] h-[340px]" flexDirection="row p-3">
            <Carousel
                autoPlay={true}
                centerMode={false}
                infiniteLoop
                interval={1000}
                transitionTime={600}
                showThumbs={false}
                showIndicators={true}
                showArrows={false}
            >
                {courseGallery.map((src, index) => (
                    <div key={index} className="rounded-lg shadow-md bg-white p-4">
                        <img src={src} width="280" height='420'
                            alt={`Gallery-pic-${index + 1}`}
                            className="w-[280px] md:width-[420px] h-full object-fit rounded-lg transition-transform duration-300 hover:scale-105"
                            style={{width: 'auto' }}
                        />
                    </div>
                ))}
            </Carousel>
        </Box>
    </Box>
}

export default MyCourseCompletion;
