export const myWorkTour = [
    {
        tourType: 'Personal',
        data: [
            {
                label: 'My Tech Yatra',
                value: 'mty',
                url: 'https://my-tech-yatra.web.app/'
            },

            {
                label: 'Monthly Hisab Kitab',
                value: 'mhk',
                url: 'https://monthly-hisab-kitab.web.app/'
            },
            {
                label: 'HR Mgt App',
                value: 'hr-app',
                url: 'https://pridim-hr-app.firebaseapp.com/'
            },
            {
                label: 'Maiher Farms Ltd',
                value: 'mfltd',
                url: 'https://maihar-farms-ltd.web.app/home'
            },
            {
                label: 'Hell App',
                value: 'hell-app',
                url: 'https://rtp-app-dfa0e.web.app/#/'
            },
            {
                label: 'RamanG Journal',
                value:'rng-journal',
                url: 'https://ramang-journal.web.app/#/'
            },
            {
                label: 'Vaidh Ji',
                value: 'vaidh-ji-app',
                url: 'https://vaidji-b9c70.web.app/'
            }
        ]
    },
    {
        tourType: 'Company',
        data: [
            {
                label: 'MPTool UI',
                value: 'mptool-ui',
                url: ''
            },
            {
                label: 'ePropertyPlus',
                value: 'epp',
                url: 'https://play.google.com/store/search?q=epropertyplus&c=apps&hl=en'
            },
            {
                label: 'NextUp Performance',
                value: 'nextup',
                url: 'https://play.google.com/store/apps/details?id=com.nextup.app&hl=en'
            }
        ]
    }
];

export const myProjects = [
    { 
        id: 0, type: 'web', title: 'WG Phase 3 Rollout', company: 'TA Digital(Credera)', tenure: '2022 - Till now',
        role: 'Senior Specialist',
        desc: 'This application is used for fetch/update the jobs and related appointments that have been Scheduled/Hold for a certain date and assigned some of the most suitable technicians and many more.',
        technologies: ['Svelte', 'Svelte/Store', 'CSS'],
        isOpen: false
    },
    { 
        id: 1, type: 'web', title: 'Digital Onboarding', company: 'TA Digital(Credera)', tenure: 'Feb-2023 to Oct-2023',
        role: 'Senior Software engineer',
        desc: 'A system that allows a customer/patient to onboard or upload his past history to monitor and also be able to add/search PCP and many other features.',
        technologies: ['VueJS', 'Nucleus4', 'HTML/CSS'],
        isOpen: false
    },
    { 
        id: 2, type: 'web', title: 'Platform Development of Micropore Tool', company: 'Innominds Pvt Ltd', tenure: 'Oct-2021 to Dec-2022',
        role: 'UI Engineer',
        desc: 'This is a scientific tool based on AI/ML and Data Science for analyzing and processing the scanned data of eyes and provides human readable/understandable user interface. Also facilitates to create patient details manually and view the all four eye quadrant details in a single page on the full view page. It includes following details like pore details, NSI/PVF values, Center of Mass, Center of gravity etc.',
        technologies: ['React', 'Redux', 'MUI', 'ThreeJS', 'Axios', 'HTML5/CSS3'],
        isOpen: false
    },
    { 
        id: 3, type: 'web', title: 'ECAT', company: 'Innominds Pvt Ltd', tenure: 'Feb-2021 to Aug-2021',
        role: 'UI Engineer',
        desc: 'The project is for creating and managing selections/candidates under the Projects and calculating/generating the candidate based on type of selected data.',
        technologies: ['React', 'Redux', 'RollUp', 'MUI', 'Axios', 'HTML5/CSS3'],
        isOpen: false
    },
    { 
        id: 4, type: 'web', title: 'POS', company: 'Qvantel Solutions Pvt Ltd', tenure: '2019 - 2020',
        role: 'UI Developer',
        desc: 'POS is a stand-alone application for the omnichannel agents/salespersons who use this application for creating a new customer OR updating the services given to customers.',
        technologies: ['React', 'Redux', 'Redux/Saga', 'TypeScript', 'Consul', 'Internal CSS'],
        isOpen: false
    },
    { 
        id: 5, type: 'web', title: 'InAppBi', company: 'Quanteon Solutions LLP', tenure: '2018 - 2019',
        role: 'UI Developer',
        desc: 'InAppBI played a vital role in creating data sources, data models, and adding tables to these models, and building custom visualizations that look clean, modern, and fit seamlessly with a data-driven web portal backed. InAppBI proved to be a powerful and flexible framework for our needs, greatly reducing the time needed to generate and share insights from complex data.',
        technologies: ['React', 'Redux', 'Angular', 'Reactstrap', 'HTML/CSS'],
        isOpen: false
    },
    { 
        id: 6, type: 'mobile', title: 'ePropertyPlus', company: 'Quanteon Solutions LLP', tenure: 'Mar-2018 to Jul-2018',
        role: '',
        desc: 'ePropertyPlus is a web as well as a mobile application too. I worked on a mobile app. We are turning the whole epropertyplus.com website to mobile (Android + iOS) both using React + Redux with Java as backend with MySQL Database. it is an application to create, view, edit, update and manage the property, services, and users too. allow them to navigate to the property using map view, can see the street view, property longitude, and altitude also.',
        technologies: ['React', 'Redux', 'Thunk', 'Bootstrap', 'HTML/CSS', 'NodeJS'],
        isOpen: false
    },
    { 
        id: 7, type: 'mobile', title: 'NextUp', company: 'Quanteon Solutions LLP', tenure: '2017 - 2018',
        role: 'JavaScript Full Stack Developer',
        desc: 'Nextup is a mobile application that enables student-athletes and general sports enthusiasts to set goals, track daily progress, compare with athletes preparing for the same sports, create and respond to challenges. Worked as a full-stack developer on this project, developing backend services using Restify and mobile UI using the Ionic/AngularJS framework. This application requires media management (upload and play video files, capture camera recording, on-demand rank calculations). Uses S3 for storing media files (both videos and photos).',
        technologies: ['React', 'Redux', 'Angular', 'NodeJS', 'Express', 'Bootstrap', 'HTML/CSS'],
        isOpen: false
    },
    { 
        id: 8, type: 'web', title: 'Internal Project', company: 'Quanteon Solutions LLP', tenure: '2016 - 2017',
        role: 'Full Stack Developer',
        desc: 'A candidate hiring online tool that helps you to create a significant type of questions required and able to collect the provided output with different type of accuracy parameters like typing speed, number of backspace and many others.',
        technologies: ['React', 'Angular', 'NodeJS', 'Express', 'Bootstrap', 'HTML/CSS', 'MySQL'],
        isOpen: false
    }
]