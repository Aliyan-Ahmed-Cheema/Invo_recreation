
export const menuData = {
  "what-we-do": {
    // This menu uses the 'tabs' layout
    layout: 'tabs',
    subMenus: {
      'product-engineering': { title: "Product Engineering", icon: "⚙️", content: { type: 'links', items: [ { title: "Discovery Workshop", text: "Boost creativity and skills with innovative sessions." }, { title: "Web App Development", text: "Get scalable solutions for an impactful web presence." }, { title: "Custom Software Development", text: "Tailored solutions for your unique business needs." }, { title: "Mobile App Development", text: "Develop engaging apps to drive your mobile strategy." }, { title: "Software Quality Assurance", text: "Ensure flawless performance and system reliability." }, { title: "UI/UX Studio", text: "We craft intuitive experiences for user contentment." }, ] } },
      'digital-consulting': { title: "Digital Consulting", icon: "📈", content: { type: 'links', items: [ { title: "Enterprise Agile Transformation", text: "Empowering organizations through agile methodologies." }, { title: "Digital Transformation", text: "Driving business evolution with digital innovation." }, { title: "Application Modernisation", text: "Revitalizing applications for enhanced performance." }, { title: "Customer Experience (CX) Optimization", text: "Improve your customer interactions for better outcomes." }, { title: "E-commerce and Digital Commerce Solutions", text: "We enhance online commerce with tailored solutions." }, ] } },
      'data-ai': { title: "Data & Artificial Intelligence", icon: "🧠", content: { type: 'links', items: [ { title: "Agent as a Service (AaaS)", text: "On-demand agent solutions tailored to your needs." }, { title: "AI Strategy and Consultation", text: "Strategic guidance for effective AI implementation." }, { title: "AI Deployment And Integration", text: "Deploying AI seamlessly into your existing systems." }, { title: "Machine Learning Model Development", text: "Building advanced ML models for predictive insights." }, { title: "Custom AI/ML App Development", text: "Crafting bespoke AI/ML apps for unique requirements." }, { title: "Natural Language Processing (NLP)", text: "We use NLP for smarter data interpretation." }, ] } },
      'devops': { title: "DevOps & CloudOps", icon: "☁️", content: { type: 'links', items: [ { title: "CI/CD as a Service", text: "Automated software delivery solutions for efficiency." }, { title: "Infrastructure as Code", text: "Scalable deployments through Infrastructure as Code." }, { title: "Containerization And Orchestration", text: "Containerization And Orchestration for modern apps." }, { title: "Cloud Services And Management", text: "Comprehensive cloud services and management solutions." }, { title: "Monitoring And Logging", text: "Robust monitoring and logging services for insights." }, { title: "Security And Compliance", text: "Ensuring security and compliance across systems." }, ] } },
      'emerging-tech': { title: "Emerging Technologies", icon: "💡", content: { type: 'links', items: [ { title: "Metaverse", text: "Exploring limitless possibilities in the digital realm." }, { title: "AR/VR", text: "Get immersive experiences with AR/VR technologies." }, { title: "Apple Vision Pro", text: "Innovative solutions with Apple's vision technology." }, { title: "Cyber Security", text: "Protecting digital assets with robust cybersecurity." }, ] } },
      'blockchain': { title: "Blockchain & Web 3.0", icon: "🔗", content: { type: 'links', items: [ { title: "Smart Contract", text: "We offer smart contract solutions for decentralized applications." }, { title: "Blockchain Consultancy", text: "Expert guidance for blockchain implementation and strategy." }, { title: "Enterprise Blockchain Development", text: "We provide enterprise-grade blockchain development services." }, { title: "Web3 Development Services", text: "Developing decentralized applications for the Web 3.0." }, { title: "Token Development", text: "Creating custom tokens for blockchain-based solutions." }, { title: "DApp Development", text: "Crafting decentralized applications (DApps) for diverse needs." }, ] } },
    },
    sideCard: { title: "I Need A Rescue", buttonText: "Need A Fix", link: "#" }
  },
  "who-we-serve": {
    layout: 'tabs',
    subMenus: {
      'industries': { title: "Industries", icon: "🏭", content: { type: 'grid', items: ["Fintech", "Real Estate", "Healthcare", "Ed-Tech", "On-Demand", "Food & Grocery", "See All Industries →"] } },
      'work-portfolio': { title: "Work Portfolio", icon: "📂", content: { type: 'portfolio', items: [ { title: "Nymcard", tag: "Fintech", text: "Their legacy app lacked efficiency & security features." }, { title: "Freshprep", tag: "Ecommerce", text: "Fresh Prep has chef-made meal kits for easy dining." }, { title: "Analog", tag: "Blockchain", text: "Dapp interface with interoperable cross chain apps" }, { title: "Theraforga", tag: "Healthcare", text: "Hippocrates Tech: Leading multi-cloud digital health lab." } ] } },
    },
    sideCard: { title: "Working in a different industry?", text: "Our teams can offer solutions tailored to your needs.", buttonText: "Connect With Top Talent", link: "#" }
  },
  "how-we-engage": {
    layout: 'tabs',
    subMenus: {
      'dev-as-a-service': { title: "Development as a Service", icon: "💻", content: { type: 'links', items: [ { title: "Team Augmentation", text: "Expand your team with skilled professionals to accelerate project delivery." }, { title: "Dedicated Team", text: "Build a focused, fully integrated team dedicated to your business needs." }, ] } },
      'product-based': { title: "Product Based or Fixed Scope", icon: "📦", content: { type: 'links', items: [ { title: "Product Based", text: "Get innovative software solutions tailored to your needs." }, { title: "Fixed Scope", text: "Clear, defined project goals for successful outcomes." }, ] } },
      'monitoring': { title: "24/7 Monitoring & Support", icon: "🕒", content: { type: 'links', items: [ { title: "24/7 Monitoring & Support", text: "Round-the-clock monitoring to ensure optimal performance and uptime." }, { title: "Technical Support Services", text: "Round-the-clock monitoring to ensure optimal performance and uptime." }, ] } },
    },
    // No sideCard for this menu
  },
  "hire-dev": {
    layout: 'tabs',
    subMenus: {
      'backend': { title: "Backend Developers", icon: "⚙️", content: { type: 'grid', items: ["Elixir Developer", "Python developer", "Node.js Developer", "ROR Developer", "Django Developer", "Golang Developer"] } },
      'frontend': { title: "Frontend Developers", icon: "🖼️", content: { type: 'grid', items: ["Javascript Developer", "React JS Developer", "Angular Developer", "Typescript Developer"] } },
      'mobile': { title: "Mobile App Developers", icon: "📱", content: { type: 'grid', items: ["Flutter Developer", "iOS Developer", "Android Developer"] } },
      'by-role': { title: "Hire By Role", icon: "👤", content: { type: 'grid', items: ["Product Manager", "CTO", "SaaS Developer", "MERN Stack Developer"] } },
    },
    // This menu has a special CTA at the bottom of the sidebar
    sidebarCta: { title: "Hire Remote Developers", buttonText: "Explore More Use Cases", link: "#" }
  },
  "company": {
    // This menu uses a simple, static column layout
    layout: 'static-columns',
    columns: [
      { title: "About Us", links: ["Discover who we are and our mission."] },
      { title: "Podcasts", links: ["Read insightful articles from our experts."] },
      { title: "Blogs", links: ["Listen to engaging discussions on various topics."] },
      { title: "Resources", links: ["Access helpful tools and information."] },
    ],
    sideCard: { title: "About Us", buttonText: "Explore More", link: "#" }
  }
};