import { reactive } from "vue";

export const store = reactive ({
    navLinks: ['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'RESULTS'],
    contacts: [
        {
            name: '+1 (305) 1234-5678',
            icon: 'fa-solid fa-phone'
        },
        {
            name: 'hello@example.com',
            icon: 'fa-solid fa-envelope'
        },
        {
            name: 'Main Avenue, 987',
            icon: 'fa-solid fa-location-dot'
        }
    ],
    brands: [
        {
            icon: 'fa-brands fa-facebook-f'
        },
        {
            icon: 'fa-brands fa-twitter'
        },
        {
            icon: 'fa-brands fa-linkedin-in'
        }
    ],
    footerNav: [
        {
            title: 'About',
            icon: 'fa-solid fa-chevron-right',
            subLink: [
                'The Company',
                'Institutional',
                'Social & Events',
                'Innovation',
                'Environment',
                'Technology'
            ]
        },
        {
            title: 'Services',
            icon: 'fa-solid fa-chevron-right',
            subLink: [
                'Audit & Assurance',
                'Financial Advisory',
                'Analytics M&A',
                'Middle Marketing',
                'Legal Consulting',
                'Regulatory Risk'
            ]
        },
        {
            title: 'Support',
            icon: 'fa-solid fa-chevron-right',
            subLink: [
                'Responsibility',
                'Terms of Use',
                'About Cookies',
                'Privacy Policy',
                'Accessibility',
                'Information'
            ]
        }
    ],
    businessAreas: [
        {
            title: 'Audit & Assurance',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-1.svg' 
        },
        {
            title: 'Financial Advisory',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-2.svg' 
        },
        {
            title: 'Analytics and M&A',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-3.svg' 
        },
        {
            title: 'Middle Marketing',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-4.svg' 
        },
        {
            title: 'Legal Consulting',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-5.svg' 
        },
        {
            title: 'Regulatory Risk',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
            icon: '../../public/svg-6.svg' 
        },
    ],
    theCompany: [
        {
            title: 'Tradition',
            icon: 'fa-solid fa-award',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
        },
        {
            title: 'Security',
            icon: 'fa-solid fa-lock',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
        },
        {
            title: 'Certificate',
            icon: 'fa-solid fa-pen-to-square',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
        },
        {
            title: 'Expertise',
            icon: 'fa-solid fa-graduation-cap',
            par: 'Lorem ipsum dolor sit amet consectetur adipiscing edit.',
        },
    ],
    actionsProjects: {
        list: [
            'ALL',
            'INSTITUTIONAL',
            'SOCIAL',
            'EVENTS',
            'INNOVATION',
            'ENVIRONMENT',
            'TECHNOLOGY'
        ],
        cards: [
            {
                par: 'Academic professional program in social media',
                bg: '../../public/img/project-1.jpg'
            },
            {
                par: "President's speech at the annual meeting",
                bg: '../../public/img/project-2.jpg'
            },
            {
                par: 'International business trip in Shangai',
                bg: '../../public/img/project-3.jpg'
            },
            {
                par: 'Technology workshop with education theme',
                bg: '../../public/img/project-4.jpg'
            },
            {
                par: 'Donation of clothes and food to the partner NGO',
                bg: '../../public/img/project-5.jpg'
            },
            {
                par: 'Confraternization of the procurement team',
                bg: '../../public/img/project-6.jpg'
            },
        ]
    }
});