import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import Gallery7 from './../../assets/gallery-pictures/gallery-image-000001.png'
import Gallery6 from './../../assets/gallery-pictures/gallery-image-000002.png'
import Gallery3 from './../../assets/gallery-pictures/gallery-image-000003.png'
import Gallery4 from './../../assets/gallery-pictures/gallery-image-000004.png'
import Gallery5 from './../../assets/gallery-pictures/gallery-image-000005.png'
import Gallery1 from './../../assets/gallery-pictures/gallery-image-000006.png'
import Gallery2 from './../../assets/gallery-pictures/gallery-image-000007.png'

const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7
];

const Others = () => {

    return <Box id="Gallery" className="container" sx={{ width: 'auto', background:'radial-gradient(#A9C4EB, white)', p: {xs: 3.5, md: 7.5}, border: '1px outset' }}>
        <Box component="h1" mt={0} className='text-shadow'>Our Gallery</Box>
        <Box className="w-[90%] h-[340px]" flexDirection="row p-3">
            <Carousel
                autoPlay={true}
                centerMode={false}
                infiniteLoop
                transitionTime={1000}
                showThumbs={false}
            >
                {images.map((src, index) => (
                    <div key={index} className="rounded-lg shadow-md bg-white p-4">
                        <img src={src} width="240" height='300' alt={`Gallery-pic-${index + 1}`} className="w-[200px] md:width-[420px] h-full object-fit rounded-lg transition-transform duration-300 hover:scale-105" />
                    </div>
                ))}
            </Carousel>
        </Box>
    </Box>
}

export default Others;
