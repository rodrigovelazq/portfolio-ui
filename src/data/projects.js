import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import SICCA01 from '../images/sicca/sicca01.png';
import SICCA02 from '../images/sicca/sicca02.png';
import CICEAMSO01 from '../images/ciceamso/ciceamso01.png';
import CICEAMSO02 from '../images/ciceamso/ciceamso02.png';
import DNCP01 from '../images/dncp/dncp01.png';
import DNCP02 from '../images/dncp/dncp02.png';
import MONITOR01 from '../images/monitor/monitor01.png';
import MONITOR02 from '../images/monitor/monitor02.png';
import MONITOR03 from '../images/monitor/monitor03.png';
import MONITOR04 from '../images/monitor/monitor04.png';
import ELUMEN01 from '../images/elumen/elumen01.jpg';
import ELUMEN02 from '../images/elumen/elumen02.jpg';
import ELUMEN03 from '../images/elumen/elumen03.png';
import ELUMEN04 from '../images/elumen/elumen04.png';
import ELUMEN05 from '../images/elumen/elumen05.png';
import SIEMBRA01 from '../images/siembra/siembra01.png';

export const projectsData = [
  {
    id: 1,
    title: "Vulnerability Intelligence",
    category: "Web Application",
    img: WebImage1,
    ProjectHeader: {
      title: "Vulnerability Intelligence Tool",
      publishDate: "May 2024",
    },
    ProjectImages: [
      { id: 1, title: "Vulnerability Graph", img: WebImage2 },
      { id: 2, title: "Notification Interface", img: UIImage1 }
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: 1, title: "Name", details: "Mentormate" },
        { id: 2, title: "Services", details: "Software Development" },
        { id: 3, title: "Website", details: "https://mentormate.com" },
        { id: 4, title: "Phone", details: "+595213279463" }
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Develop a Cyber Threat Intelligence tool for identifying vulnerabilities.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Node.js", "Nx Monorepo", "Express.js", "PostgreSQL", "Sequelize", "Docker", "GitLab"]
        }
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Building a knowledge graph aggregating data from multiple sources."
        },
        {
          id: 2,
          details: "Implementing efficient vulnerability matching mechanisms."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Curriculum Development System",
    category: "Web Application",
    img: ELUMEN05,
    ProjectHeader: {
      title: "University-Level Curriculum System",
      publishDate: "Mar 2021 - Jun 2023",
    },
    ProjectImages: [
      { id: 1, title: "Workflow Dashboard", img: ELUMEN01 },
      { id: 2, title: "Notification System", img: ELUMEN02 }
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: 1, title: "Name", details: "Elumen, Inc." },
        { id: 2, title: "Services", details: "Education Technology" },
        { id: 3, title: "Website", details: "https://elumen.com" },
        { id: 4, title: "Phone", details: "612204443291" },
        { id: 4, title: "Email", details: "info@elumenconnect.com" }
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Simplify curriculum management and workflow for universities.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Java 8", "MySQL", "AngularJS", "Spring Boot", "Jira", "Hibernate", "REST API"]
        }
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Aligning with accreditation requirements while supporting continuous improvement."
        }
      ]
    }
  },
  {
    id: 3,
    title: "Educational System",
    category: "Web Application",
    img: SIEMBRA01,
    ProjectHeader: {
      title: "Ed-Tech System for Schools",
      publishDate: "Aug 2020 - Feb 2021",
    },
    ProjectImages: [
      { id: 1, title: "Activity Results View", img: SIEMBRA01 }
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: 1, title: "Name", details: "Natura Software" },
        { id: 2, title: "Services", details: "Education Technology" },
        { id: 3, title: "Website", details: "https://siembradigital.com.py/" },
        { id: 4, title: "Phone", details: "+5950983337770" }
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Provide interactive educational content for students and teachers.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Material UI", "PostgreSQL", "Redux", "Git"]
        }
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Designing an intuitive interface for both teachers and students."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Accessibility Compliance",
    category: "Web Application",
    img: ELUMEN03,
    ProjectHeader: {
      title: "Accessibility Compliance for Ed-tech Platform",
      publishDate: "Dec 2019 - Jun 2020"
    },
    ProjectImages: [
      { id: 1, title: "Accessibility Enhancements Overview", "img": ELUMEN03 },
      { id: 2, title: "User Interaction Improvements", "img": ELUMEN04 }
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: 1, title: "Name", details: "Elumen, Inc." },
        { id: 2, title: "Services", details: "Education Technology" },
        { id: 3, title: "Website", details: "https://elumen.com" },
        { id: 4, title: "Phone", details: "612204443291" },
        { id: 4, title: "Email", details: "info@elumenconnect.com" }
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Address and resolve accessibility issues reported by OZART and QualityLogic, enhancing interaction capabilities for users with accessibility needs.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Git", "HTML", "Angular", "CSS"]
        }
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Developing features to improve accessibility while maintaining code quality and performance."
        },
        {
          id: 2,
          details: "Investigating and resolving complex bugs related to accessibility."
        },
        {
          id: 3,
          details: "Refactoring the existing codebase to align with updated accessibility standards."
        }
      ]
    }
  },  
  {
    id: 5,
    title: "GPS Tracking System",
    category: "Web Application",
    img: MONITOR04,
    ProjectHeader: {
      title: "Vehicle GPS Tracking and Control",
      publishDate: "Jan 2018 - Nov 2019",
    },
    ProjectImages: [
      { id: 1, title: "Application Login", img: MONITOR01 },
      { id: 2, title: "Real-time Tracking", img: MONITOR02 },
      { id: 2, title: "Sensor Data Overview", img: MONITOR03 }
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        { id: 1, title: "Name", details: "Monitor S.A." },
        { id: 2, title: "Services", details: "Tracking Solutions" },
        { id: 3, title: "Website", details: "https://www.monitor.com.py/" },
        { id: 4, title: "Phone", details: "+595213384500" },
        { id: 4, title: "Email", details: "administracion@monitor.com.py" }
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "Track and control vehicle parameters using sensor data.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Node.js", "Sequelize", "PostgreSQL", "Material UI"]
        }
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details: "Ensuring reliable real-time data processing and visualization."
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Public Procurement System',
    category: 'Web Application',
    img: DNCP01,
    ProjectHeader: {
      title: 'Public Procurement System',
      publishDate: 'Jan 2018 - Nov 2019',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Supplier Discovery',
        img: DNCP01,
      },
      {
        id: 2,
        title: 'Bid Management',
        img: DNCP02,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Dirección Nacional de Contrataciones Públicas' },
        { id: 2, title: 'Services', details: 'Software Development' },
        { id: 3, title: 'Website', details: 'https://www.contrataciones.gov.py' },
        { id: 4, title: 'Phone', details: '+595214154000' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Develop a comprehensive portal to manage government procurement efficiently.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Angular', 'Git', 'Nginx', 'Play Framework', 'PrimeNG', 'Java', 'SonarQube'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Implementing new features and maintaining system reliability through bug fixes and code refactoring.',
        },
        {
          id: 2,
          details: 'Engaging with stakeholders to understand and fulfill their evolving requirements.',
        },
      ],
    },
  },
  {
    id: 7,
    title: 'International Fund Monitoring System',
    category: 'Web Application',
    img: CICEAMSO01,
    ProjectHeader: {
      title: 'International Fund Monitoring System',
      publishDate: 'Jan 2017 - Dec 2017',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Project Monitoring',
        img: CICEAMSO01,
      },
      {
        id: 2,
        title: 'Resource Allocation',
        img: CICEAMSO02,
      },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Ceamso' },
        { id: 2, title: 'Services', details: 'Civil organization strengthening institutions and development' },
        { id: 3, title: 'Website', details: 'http://www.ceamso.org.py' },
        { id: 4, title: 'Phone', details: '+59521662585' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Oversee and ensure compliance of projects funded by international organizations.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['PrimeFaces', 'Jasper Reports', 'Hibernate', 'Java', 'Git', 'J2EE JPA', 'PostgreSQL', 'Java Server Faces'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Developing features to accommodate changing project requirements and ensure compliance.',
        },
        {
          id: 2,
          details: 'Enhancing code maintainability and performance through refactoring.',
        },
      ],
    },
  },
  {
    id: 8,
    title: 'Talent Acquisition Portal',
    category: 'Web Application',
    img: SICCA01,
    ProjectHeader: {
      title: 'Talent Acquisition Portal',
      publishDate: 'Oct 2013 - Mar 2014',
    },
    ProjectImages: [
      {
        id: 1,
        title: 'Candidate Evaluation',
        img: SICCA01,
      },
      {
        id: 2,
        title: 'Candidate Evaluation',
        img: SICCA02,
      }
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Secretaría de la Función Pública' },
        { id: 2, title: 'Services', details: 'Public service standards and oversight' },
        { id: 3, title: 'Website', details: 'https://www.paraguayconcursa.gov.py/' },
        { id: 4, title: 'Phone', details: '+59521446483' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails: 'Facilitate temporary hiring in the public sector, ensuring adherence to regulations.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['Java', 'JBOSS_Seam'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details: 'Maintaining system performance and reliability through efficient bug resolution and code reviews.',
        },
        {
          id: 2,
          details: 'Ensuring the portal adhered to strict public sector hiring regulations.',
        },
      ],
    },
  },
];
