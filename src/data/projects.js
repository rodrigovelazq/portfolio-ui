import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
  {
    id: 1,
    title: 'Google Health Platform',
    category: 'Web Application',
    img: WebImage2,
    ProjectHeader: {
      title: 'Google Health Platform UI',
      publishDate: 'May 15, 2022',
      tags: 'Health / Web App',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/google' },
        { id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/google' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Web Analytics Dashboard', img: WebImage1 },
        { id: 2, title: 'Cloud Management System', img: UIImage2 },
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
      tags: 'Mobile / Agency',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/phoenixdigital' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Marketing Insights App', img: MobileImage1 },
        { id: 2, title: 'Digital Strategy Platform', img: WebImage1 },
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
      tags: 'UI/UX / Management',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/pm-solutions' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'UI Design Kit', img: UIImage2 },
        { id: 2, title: 'Web Management Platform', img: WebImage1 },
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
      tags: 'UI / Cloud',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'YouTube', icon: <FiYoutube />, url: 'https://youtube.com/cloudify' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Backup Management System', img: MobileImage2 },
        { id: 2, title: 'Secure Cloud Platform', img: WebImage1 },
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
      tags: 'Mobile / Social',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/socialhub' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Messaging App', img: MobileImage2 },
        { id: 2, title: 'Community Platform', img: WebImage2 },
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
      tags: 'Web / Design System',
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
      SocialSharingHeading: 'Share This',
      SocialSharing: [
        { id: 1, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/company/apple' },
      ],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Developer Toolkit', img: UIImage1 },
        { id: 2, title: 'Apple Marketing App', img: MobileImage1 },
      ],
    },
  },
  
];
