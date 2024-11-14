import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'Google Health Platform',
    category: 'Web Application',
    img: WebImage2,
    ProjectHeader: {
      title: 'Google Health Platform UI',
      publishDate: 'May 15, 2022',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Health Dashboard',
        img: WebImage2,
      },
      {
        id: 2,
        title: 'User Interface',
        img: UIImage1,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Google Inc.' },
        { id: 2, title: 'Services', details: 'Healthcare Solutions' },
        { id: 3, title: 'Website', details: 'https://health.google.com' },
        { id: 4, title: 'Phone', details: '800-123-4567' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Develop a scalable healthcare platform to aid medical professionals.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React', 'Node.js', 'Firebase', 'Google Cloud'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Building a secure and efficient health data management system.',
        },
        {
          id: 2,
          details: 'Integrating real-time data analytics for medical insights.',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Phoenix Digital Agency',
    category: 'Mobile Application',
    img: MobileImage2,
    ProjectHeader: {
      title: 'Phoenix Agency App',
      publishDate: 'Sep 10, 2023',
    },
    ProjectImages: [
      { id: 1, title: 'Main Dashboard', img: MobileImage2 },
      { id: 2, title: 'User Flow', img: UIImage2 },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Phoenix Digital' },
        { id: 2, title: 'Services', details: 'Marketing & Strategy' },
        { id: 3, title: 'Website', details: 'https://phoenixdigital.com' },
        { id: 4, title: 'Phone', details: '123-456-7890' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Launch an intuitive mobile app for marketing solutions.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Flutter', 'Dart', 'Firebase', 'Figma'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Creating a seamless UX for various marketing tools.',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: UIImage1,
    ProjectHeader: {
      title: 'Project Management Dashboard',
      publishDate: 'Dec 18, 2021',
    },
    ProjectImages: [
      { id: 1, title: 'Dashboard View', img: UIImage1 },
      { id: 2, title: 'Team Collaboration', img: UIImage2 },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'PM Solutions' },
        { id: 2, title: 'Services', details: 'Project Management Software' },
        { id: 3, title: 'Website', details: 'https://pmsolutions.com' },
        { id: 4, title: 'Phone', details: '987-654-3210' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Design a user-friendly project management dashboard.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Sketch', 'InVision', 'CSS3', 'JavaScript'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Enhancing team collaboration features and data visualization.',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
    ProjectHeader: {
      title: 'Cloud Storage UI Design',
      publishDate: 'Feb 14, 2022',
    },
    ProjectImages: [
      { id: 1, title: 'Storage Dashboard', img: UIImage2 },
      { id: 2, title: 'File Management', img: UIImage1 },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Cloudify Inc.' },
        { id: 2, title: 'Services', details: 'Cloud Solutions' },
        { id: 3, title: 'Website', details: 'https://cloudify.com' },
        { id: 4, title: 'Phone', details: '555-123-4567' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Create an intuitive design for managing cloud storage efficiently.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Figma', 'React', 'Bootstrap', 'JavaScript'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Designing a user-friendly interface to organize and manage files seamlessly.',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'React Social App',
    category: 'Mobile Application',
    img: MobileImage1,
    ProjectHeader: {
      title: 'Social Networking App',
      publishDate: 'Jan 20, 2023',
    },
    ProjectImages: [
      { id: 1, title: 'User Profile Page', img: MobileImage1 },
      { id: 2, title: 'News Feed', img: UIImage1 },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'SocialHub' },
        { id: 2, title: 'Services', details: 'Social Media Solutions' },
        { id: 3, title: 'Website', details: 'https://socialhub.com' },
        { id: 4, title: 'Phone', details: '800-567-1234' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Develop a mobile social networking app with interactive features.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Redux', 'Firebase', 'Expo'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Ensuring smooth real-time communication and data updates.',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Apple Design System',
    category: 'Web Application',
    img: WebImage1,
    ProjectHeader: {
      title: 'Design System for Apple Products',
      publishDate: 'Oct 5, 2022',
    },
    ProjectImages: [
      { id: 1, title: 'Component Library', img: WebImage1 },
      { id: 2, title: 'UI Guidelines', img: UIImage2 },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Apple Inc.' },
        { id: 2, title: 'Services', details: 'Technology & Design' },
        { id: 3, title: 'Website', details: 'https://apple.com' },
        { id: 4, title: 'Phone', details: '888-555-9999' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Create a comprehensive design system for consistent product experiences.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Sketch', 'React', 'Storybook', 'Sass'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Establishing a unified design language across multiple Apple products.',
        },
      ],
    },
  },
  
];
