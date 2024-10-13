import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WebIcon from '@mui/icons-material/Web';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import { myProjects } from '../../apis/db';

export default function NestedList() {
    const [projectList, setProjectList] = React.useState(myProjects)
    const [selectedProjectId, setSelectedProject] = React.useState(0);

    React.useEffect(() => {
        if(selectedProjectId > -1) {
            const updatedList = myProjects.map((project) => {
                if(project.id === selectedProjectId) {
                    return {
                        ...project,
                        isOpen: !project.isOpen
                    }
                } else {
                    return project
                }
            })
            setProjectList(updatedList)
        }
    }, [selectedProjectId])

    const handleClick = (id) => {
        setSelectedProject(id);
    };

  return (
    <List
        sx={{
            width: 'auto', fontSize: '16px',
            pl: { xs: '0rem', sm: '3rem', md: '5rem'},
            pr: { xs: '0rem', sm: '3rem', md: '5rem'},
            mb: 5
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
    >
        {projectList.map((project) =>
            <Box component="span" key={project.id}>
                <ListItemButton
                    selected={selectedProjectId === project.id}
                    onClick={() => handleClick(project.id)}
                    sx={{ border: '1px solid',}}
                >
                    <ListItemIcon>
                        {project.type === 'web' ? <WebIcon /> : <PhoneAndroidIcon />}
                    </ListItemIcon>
                    <ListItemText primary={project.title} primaryTypographyProps={{fontWeight: 'bold', fontSize: { xs: '.75rem', md: '1rem'}}} sx={{width: '25%'}} />
                    <ListItemText primary={project.company} primaryTypographyProps={{fontWeight: 'bold', fontSize: { xs: '.75rem', md: '1rem'}}} sx={{width: '20%'}} />
                    <ListItemText primary={project.tenure} primaryTypographyProps={{fontWeight: 'bold', fontSize: { xs: '.75rem', md: '1rem'}}} sx={{width: '20%'}} />
                    {project.isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={project.isOpen} timeout="auto" unmountOnExit sx={{ border: '1px groove'}}>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <PermIdentityIcon />
                            </ListItemIcon>
                            <ListItemText primary={project.role} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary={project.desc} />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary={project.technologies.join(', ') + " etc."} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </Box>
        )}
    </List>
  );
}
