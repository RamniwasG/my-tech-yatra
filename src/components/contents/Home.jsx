import Box from '@mui/material/Box';
import JiraWork from './../../assets/JiraWork.png'
import Github from './../../assets/Github.png'
import Render from './../../assets/renderwork.png'

const devOpsWork = [
    { title: 'Jira work', subTitle: 'Perform all Jira operations for my personal projects', imgUrl: JiraWork, styles: { backgroundColor: 'bisque'} },
    { title: 'Git work',  subTitle: 'Perform all Githb actions for my personal and official projects', imgUrl: Github, styles: { color: 'white', backgroundColor: 'firebrick'} },
    { title: 'Render work',  subTitle: 'Build, Run and Deploy apps on render, railway, firebase etc', imgUrl: Render, styles: { color: 'white', backgroundColor: 'orange'} }
]

const HomePage = () => {
    return <Box display={'flex'} flexDirection={'column'}>
        {devOpsWork.map((dow) => {
            return <Box key={dow.title} id="jira-work"
                className={`container ${dow.classes}`}
                height={'80vh'}
                display="flex" flexDirection="row"
                style={{...dow.styles}}
            >
                <Box display={'flex'} textAlign="center" flexDirection={'column'} width={'30%'}>
                    <Box component="h2">
                        {dow.title}
                    </Box>
                    <Box component="h6" m={0}>
                        {dow.subTitle}
                    </Box>
                </Box>
                <Box flex={1}>
                    <img src={dow.imgUrl}
                        alt="something important" width="auto" height='auto' className='w-100'
                        style={{width: '100%', transform: 'rotate3d(1, 1, 1, -45deg)'}}
                    />
                </Box>
            </Box>
        })}
    </Box>
}

export default HomePage;
