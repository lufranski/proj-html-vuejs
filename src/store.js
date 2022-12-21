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
    businessAreas: {
        par: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
        icon: 'fa-solid fa-arrow-right',
        cards: [
            '../assets/consultant/svgs/svg-1.svg',
            '../assets/consultant/svgs/svg-2.svg',
            '../assets/consultant/svgs/svg-3.svg',
            '../assets/consultant/svgs/svg-4.svg',
            '../assets/consultant/svgs/svg-5.svg',
            '../assets/consultant/svgs/svg-6.svg',
            '../assets/consultant/svgs/svg-7.svg'
        ]
        
    }
});