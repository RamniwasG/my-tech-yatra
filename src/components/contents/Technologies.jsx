import Box from '@mui/material/Box';
import HTML from './../../assets/js-techs-icons/html.png';
import JS from './../../assets/js-techs-icons/javascript.png';
import CSS from './../../assets/js-techs-icons/css.png';
import SCSS from './../../assets/js-techs-icons/isass.png';
import TS from './../../assets/js-techs-icons/typescript.png';
import AngularJS from './../../assets/js-techs-icons/angularjs.png';
import ReactJS from './../../assets/js-techs-icons/react-js.png';
import Redux from './../../assets/js-techs-icons/redux.png';
import NodeJS from './../../assets/js-techs-icons/nodejs.png';
import ExpressJS from './../../assets/js-techs-icons/express-js.png';
import RollUp from './../../assets/js-techs-icons/rollup-module-bundler-for-javascript.png';
import Bootstrap from './../../assets/js-techs-icons/bootstrap.png';
import JSON from './../../assets/js-techs-icons/json.png';
import Svelte from './../../assets/js-techs-icons/svelte.png';
import VueJs from './../../assets/js-techs-icons/vuejs.png';

const iconsList = [
    { label: 'HTML', url: HTML },
    { label: 'JS', url: JS },
    { label: 'CSS', url: CSS },
    { label: 'SCSS', url: SCSS },
    { label: 'TS', url: TS },
    { label: 'Bootstrap', url: Bootstrap },
    { label: 'JSON', url: JSON },
    { label: 'AngularJS', url: AngularJS },
    { label: 'ReactJS', url: ReactJS },
    { label: 'Redux', url: Redux },
    { label: 'Svelte', url: Svelte },
    { label: 'VueJs', url: VueJs },
    { label: 'NodeJS', url: NodeJS },
    { label: 'RollUp', url: RollUp },
    { label: 'ExpressJS', url: ExpressJS }
];


const TechnologiesIKnow = () => {

    return <Box id="Technologies" className="container" sx={{background: 'linear-gradient(to bottom, #ddd, white)', border: '1px outset'}}>
        <Box component="h1" mb={1} className='text-shadow'>Technology I Know</Box>
        <Box className="tech-logo-container">
            {iconsList.map(icon =>
                <Box key={icon.label} className="icon-wrapper">
                    <img src={icon.url} width="70px" height="70px" alt="technology icon" />
                    <Box component="span" style={{paddingTop: '8px',fontSize: '12px'}}>{icon.label}</Box>
                </Box>
            )}
        </Box>
    </Box>
}

export default TechnologiesIKnow;
