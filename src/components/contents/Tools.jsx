import Box from '@mui/material/Box';
import JiraWork from './../../assets/JiraWork.png'
import Github from './../../assets/Github.png'
import Render from './../../assets/renderwork.png'

const devOpsWork = [
    { title: 'Jira', subTitle: 'Managing all Jira operations', imgUrl: JiraWork, styles: { backgroundColor: 'bisque'} },
    { title: 'Git',  subTitle: 'Performing all Git actions', imgUrl: Github, styles: { color: 'white', backgroundColor: 'firebrick'} },
    { title: 'Deployment',  subTitle: 'Build, Run and Deploy apps on render, railway, firebase etc', imgUrl: Render, styles: { color: 'white', backgroundColor: 'orange'} }
]

const ToolsComponent = () => {
    return <Box id="Tools" display={'flex'} flexDirection={'column'}>
        {devOpsWork.map((dow, index) => {
            return <Box key={dow.title} id="jira-work"
                className={`container ${dow.classes}`}
                display="flex"
                sx={{
                    // height: {xs: '40vh', sm: '60vh', md: '80vh' },
                    flexDirection: { 
                        sm: index % 2 === 0 ? 'column' : 'column-reverse', 
                        md: index % 2 === 0 ? 'row' : 'row-reverse'
                    }
                }}
                style={{...dow.styles}}
            >
                <Box display={'flex'} textAlign="center" flexDirection={'column'} sx={{width: { xs: '100%', sm: '40%', md: '30%' }}}>
                    <Box component="h2" mb={0}>
                        {dow.title}
                    </Box>
                    <Box component="h5" textAlign={'center'} m={0}>
                        ({dow.subTitle})
                    </Box>
                </Box>
                <Box sx={{width: { xs: '100%', sm: '85%', md: '70%'}}}>
                    <img
                        src={dow.imgUrl}
                        id="home_work_img"
                        alt="something important" width="auto" height='auto' className='w-100'
                        style={{width: '96%', padding: '2%'}}
                    />
                </Box>
            </Box>
        })}
    </Box>
}

export default ToolsComponent;
