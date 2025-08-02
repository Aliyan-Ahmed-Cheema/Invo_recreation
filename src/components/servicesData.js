

// Import all the icons we will need
import productEngIcon from '../images/product-engineering-icon.svg';
import dataAIIcon from '../images/data-ai-icon.svg';
import hireDevIcon from '../images/hire-dev-icon.svg';
import devopsIcon from '../images/devops-icon.svg'; 
import emergingIcon from '../images/emerging-tech-icon.svg'; 
import blockchainIcon from '../images/blockchain-icon.svg'; 

import rubyIcon from '../images/ruby.svg';
import reactIcon from '../images/react.svg';
import nodeIcon from '../images/nodejs.svg';
// Add all other tech stack icon imports here...

export const servicesData = {
  'product-engineering': {
    icon: productEngIcon,
    title: 'Product Engineering',
    description: 'Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.',
    links: ['Discovery Workshop', 'Web App Development', 'Custom Software Development', 'Mobile App Development'],
    techIcons: [rubyIcon, reactIcon, nodeIcon /*, ...and so on */]
  },
  'data-ai': {
    icon: dataAIIcon,
    title: 'Data & Artificial Intelligence',
    description: 'Leverage data-driven insights and AI-powered solutions to innovate and automate your business processes.',
    links: ['Data Science', 'Machine Learning', 'Big Data Analytics', 'Business Intelligence'],
    techIcons: [/* ... icons for Data & AI ... */]
  },
  'hire-dev': {
    icon: hireDevIcon,
    title: 'Hire Dev',
    description: 'Quickly scale your development team with our top-tier, pre-vetted remote developers and engineers.',
    links: ['Staff Augmentation', 'Dedicated Teams', 'Project-Based Hiring', 'Offshore Development Center'],
    techIcons: [/* ... icons for Hire Dev ... */]
  },
  'devops': {
    icon: devopsIcon,
    title: 'DevOps & CloudOps',
    description: 'Automate and streamline your operations with our DevOps and CloudOps expertise for enhanced efficiency.',
    links: ['CI/CD Pipeline', 'Infrastructure as Code', 'Cloud Migration', 'Container Orchestration'],
    techIcons: [/* ... icons for DevOps ... */]
  },
  'emerging-tech': {
    icon: emergingIcon,
    title: 'Emerging Technologies',
    description: 'Stay ahead of the curve by leveraging cutting-edge technologies like AR/VR, IoT, and more.',
    links: ['AR/VR Development', 'IoT Solutions', 'Metaverse', 'Computer Vision'],
    techIcons: [/* ... icons for Emerging Tech ... */]
  },
  'blockchain': {
    icon: blockchainIcon,
    title: 'Blockchain & Web 3.0',
    description: 'Build secure, decentralized applications and enter the new era of the internet with Web 3.0 technologies.',
    links: ['Smart Contracts', 'dApp Development', 'NFT Marketplaces', 'DeFi Solutions'],
    techIcons: [/* ... icons for Blockchain ... */]
  },
};