document.addEventListener('DOMContentLoaded', function() {
  const SUPPORTED_LANGUAGES = ['es', 'en', 'fr'];
  const NAV_KEYS = ['home', 'projects', 'archive', 'resources', 'about'];

  const I18N = {
    es: {
      short: 'ES',
      nav: {
        home: 'Inicio',
        projects: 'Proyectos',
        archive: 'Archivo',
        resources: 'Recursos',
        about: 'Sobre Mi'
      },
      navAria: {
        home: 'Ir a la pagina de inicio',
        projects: 'Ir a la pagina de proyectos',
        archive: 'Ir a la pagina de archivo',
        resources: 'Ir a la pagina de recursos',
        about: 'Ir a la pagina sobre mi'
      },
      controls: {
        openMenu: 'Abrir menu',
        closeMenu: 'Cerrar menu',
        languageSelector: 'Seleccionar idioma',
        back: 'Volver atras'
      },
      pages: {
        indexTitle: 'Jsh3lby | Jorge Herrera - Apasionado Principiante en Ciberseguridad ASIR',
        projectsTitle: 'Proyectos - Jorge Herrera',
        homeWelcome: 'Jsh3lby | Apasionado Principiante en Ciberseguridad y Desarrollo Tecnico',
        homeContactTitle: 'Conectemos',
        homeContactSubtitle: 'Tienes algo en mente? Hablemos!'
      }
    },
    en: {
      short: 'EN',
      nav: {
        home: 'Home',
        projects: 'Projects',
        archive: 'Archive',
        resources: 'Resources',
        about: 'About Me'
      },
      navAria: {
        home: 'Go to home page',
        projects: 'Go to projects page',
        archive: 'Go to archive page',
        resources: 'Go to resources page',
        about: 'Go to about page'
      },
      controls: {
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        languageSelector: 'Select language',
        back: 'Go back'
      },
      pages: {
        indexTitle: 'Jsh3lby | Jorge Herrera - Beginner Cybersecurity Enthusiast ASIR',
        projectsTitle: 'Projects - Jorge Herrera',
        homeWelcome: 'Jsh3lby | Beginner Cybersecurity and Technical Development Enthusiast',
        homeContactTitle: 'Let\'s Connect',
        homeContactSubtitle: 'Got something in mind? Let\'s talk!'
      }
    },
    fr: {
      short: 'FR',
      nav: {
        home: 'Accueil',
        projects: 'Projets',
        archive: 'Archive',
        resources: 'Ressources',
        about: 'A Propos'
      },
      navAria: {
        home: 'Aller a la page d\'accueil',
        projects: 'Aller a la page des projets',
        archive: 'Aller a la page archive',
        resources: 'Aller a la page ressources',
        about: 'Aller a la page a propos'
      },
      controls: {
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
        languageSelector: 'Choisir la langue',
        back: 'Retour'
      },
      pages: {
        indexTitle: 'Jsh3lby | Jorge Herrera - Debutant passionne en cybersecurite ASIR',
        projectsTitle: 'Projets - Jorge Herrera',
        homeWelcome: 'Jsh3lby | Debutant passionne en cybersecurite et developpement technique',
        homeContactTitle: 'Restons en contact',
        homeContactSubtitle: 'Une idee en tete? Parlons-en!'
      }
    }
  };

  const PAGE_CONTENT_I18N = {
    en: {
      index: {
        title: "Jsh3lby | Jorge Herrera - Beginner Cybersecurity Enthusiast ASIR",
        metaDescription: "Jsh3lby - Jorge Herrera portfolio. Beginner enthusiast in cybersecurity and ethical hacking. ASIR student documenting progress in pentesting, Linux and automation.",
        textEntries: [
          [".welcome span", "Jsh3lby | Beginner Cybersecurity and Technical Development Enthusiast"],
          ["#proyectos .section-title a", "My Cybersecurity Projects"],
          ["#proyectos .title-accent", "Featured"],
          ["#proyectos .section-subtitle", "Explore my collection of cybersecurity, ethical hacking and technical development projects"],
          ["#archivo .section-title a", "My Archive"],
          ["#archivo .title-accent", "Professional"],
          ["#archivo .section-subtitle", "Explore my projects and certifications organized chronologically"],
          ["#recursos .section-title a", "Technical Resources"],
          ["#recursos .title-accent", "Tools"],
          ["#recursos .section-subtitle", "Explore my collection of specialized resources and tools"],
          ["#sobre-mi .section-title a", "About Me"],
          ["#sobre-mi .title-accent", "Professional"],
          ["#sobre-mi .section-subtitle", "Learn about my background, skills and experience in technology"],
          ["#sobre-mi .about-card:nth-child(1) .highlight", "\"Building knowledge day by day for a safer future.\""],
          ["#sobre-mi .about-cta .cta-button", "See my full journey"],
          ["#contacto .title-accent", "Let's Connect"],
          ["#contacto .section-subtitle", "Got something in mind? Let's talk!"],
          ["footer p", "© 2025 Jorge Herrera. All rights reserved."]
        ],
        htmlEntries: [
          [".hero-description", "I am <strong>Jorge Herrera</strong> (<em>Jsh3lby</em>), an ASIR student passionate about <strong>cybersecurity</strong> and <strong>ethical hacking</strong>. As a beginner committed to continuous learning, I document my progress and projects at <strong>Jsh3lby.github.io</strong>, including pentesting, Linux automation, and security analysis."]
        ],
        listEntries: [
          ["#proyectos .project-card h3", ["Complete OverTheWire Bandit Guide", "My Website", "Linux Permissions Manager"]],
          ["#proyectos .project-card p", ["Complete OverTheWire Bandit documentation with 34 solved levels, Linux pentesting techniques and ethical hacking step by step.", "Complete documentation of the creation process of this portfolio website with all technical decisions.", "Automated scripts to audit and manage file permissions in Linux systems."]],
          ["#proyectos .project-card .project-stats .stat", ["34 Completed Levels", "100% Documented", "Documented", "Automated"]],
          ["#archivo .archive-card h3", ["Current Certifications", "Project Milestones"]],
          ["#archivo .archive-card p", ["Google Cybersecurity Certification and specialization in AI applied to business productivity.", "Documentation of featured projects, from OverTheWire Bandit to automation tools."]],
          ["#archivo .archive-card .archive-stats .stat", ["5 Certifications", "In Progress", "Documented"]],
          ["#recursos .resource-card h3", ["Pentesting Guide", "Automation Scripts", "Learning Resources"]],
          ["#recursos .resource-card p", ["Specialized resources and tools for security audits and professional pentesting.", "Collection of Python and Bash scripts for system administrators.", "Curated links to cybersecurity courses and certifications."]],
          ["#recursos .resource-card .resource-link", ["View guide", "Explore", "Access"]],
          ["#sobre-mi .about-card h3", ["My Philosophy", "Academic Background", "Technical Skills"]],
          ["#sobre-mi .about-card p:not(.highlight)", ["I am Jorge Herrera, a beginner enthusiast in ethical hacking and cybersecurity. I combine relentless curiosity with constant dedication to grow my technical skills and contribute to the digital security ecosystem.", "ASIR student - Higher Technician in Network Computer Systems Administration", "Knowledge in programming languages: Python, Bash and SQL for automation, plus HTML and C++." ]],
          ["#sobre-mi .about-card .about-stats .stat", ["Passionate Beginner", "Constant Learner", "In Progress", "5+ Languages"]],
          ["#contacto .contact-card p", ["For projects, collaborations or professional inquiries", "Connect with me for professional opportunities", "Explore my projects and open-source code"]],
          ["#contacto .contact-card .contact-link", ["Email me", "View profile", "@Jsh3lby"]]
        ]
      },
      proyectos: {
        title: "Projects - Jorge Herrera",
        metaDescription: "Explore Jorge Herrera's projects in cybersecurity, technical development and video game design.",
        textEntries: [
          [".hero-badge span:last-child", "Project Portfolio"],
          [".hero-title", "My Projects"],
          [".hero-subtitle", "Explore my collection of projects in cybersecurity, technical development and creative design. Each project represents a step in my professional and technical growth."],
          [".hero-cta.primary span:first-child", "View Projects"],
          [".hero-cta.secondary span:first-child", "View Archive"],
          ["#projects .section-title", "Technical Portfolio"],
          ["#projects .section-subtitle", "Projects classified by technology and specialization area"],
          [".cta-section p", "Interested in collaborating or learning more details about a project?"],
          [".cta-section .cta-button", "View Full Archive"],
          ["footer p", "© 2025 Jorge Herrera. All rights reserved."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Projects", "Technologies", "Open Source"]],
          [".tag-cloud .tag", ["All", "Cybersecurity", "Python", "SQL", "Bash", "Linux", "Web", "Video Games"]],
          [".project-card .project-badge", ["Featured", "Featured", "In Development", "In Development"]],
          [".project-card h3", ["Bandit Levels Guide", "My Website", "Bash Port Scanner", "Secure SQL Filters", "Linux Permissions Manager", "Custom Video Game", "Advanced Security Tool"]],
          [".project-card > p", ["Complete documentation of the OverTheWire Bandit challenge. Step-by-step tutorial covering 34 progressive Linux security levels, from basic commands to advanced penetration testing techniques.", "Complete documentation of the creation process of this portfolio website, from conceptual design to final implementation, including technical decisions, architecture and best practices.", "Educational tool to detect open ports on individual hosts and full networks. Built entirely in Bash using /dev/tcp, with no external dependencies.", "Robust SQL injection protection system for web applications. Includes input validation, query sanitization and security logging.", "Specialized script set for automation and permission auditing in enterprise Linux environments, including insecure configuration detection and compliance reports.", "Development of a complete Python game using Pygame. Includes innovative mechanics, custom graphics and a basic physics system with modular architecture.", "Development of a specialized Python tool for security analysis and cybersecurity process automation. Currently in conceptualization and architecture design phase."]],
          [".project-card .cta-button", ["View Documentation", "View Documentation", "View Tool", "View Project", "View Scripts", "In Progress", "In Research"]]
        ]
      },
      archivo: {
        title: "Archive - Jorge Herrera",
        metaDescription: "Timeline of Jorge Herrera's projects, certifications and milestones in cybersecurity, technical development and video game design.",
        textEntries: [
          [".hero-badge span:last-child", "My Professional Journey"],
          [".hero-title", "Archive"],
          [".hero-subtitle", "Explore my professional evolution through projects, certifications and milestones in cybersecurity, technical development and more. Each milestone represents one step toward excellence in technology."],
          [".hero-cta.primary span:first-child", "Explore Archive"],
          [".hero-cta.secondary span:first-child", "View Projects"],
          ["#archive .section-title", "My Technical Journey"],
          ["#archive .section-subtitle", "Explore projects, certifications and milestones by category throughout my professional growth"],
          [".cta-section p", "Interested in learning more details about a specific project?"],
          [".cta-section .cta-button", "Explore Full Projects"],
          ["footer p", "© 2025 Jorge Herrera. All rights reserved."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Technologies", "Updated"]],
          [".tag-cloud .tag", ["All", "Cybersecurity", "Python", "SQL", "Bash", "Linux", "Video Games", "Certifications"]],
          [".timeline-entry .timeline-date", ["June 2023", "May", "April", "March", "February", "February", "February", "January", "October", "August", "January", "April", "January", "August", "June"]],
          [".timeline-entry h4", ["Custom Video Game (In Development)", "Mastery: OverTheWire Bandit Levels", "Complete Vulnerability Assessment", "Hack4u Specialized Course", "Secure SQL Filter System", "Advanced Linux Permissions Manager", "Google Cybersecurity Certification", "Google AI and Productivity Certification", "AI Applied to Process Management", "UAS Operations in Open Category A1/A3", "Basic Cybersecurity Course", "Information and Communication Technologies Security Course", "National Security Framework (ENS)", "Autopsy Tool Practice", "Verified edX Certificate: Cybersecurity Fundamentals - Practical Approach"]],
          [".timeline-entry p", ["Development of a complete video game using RPG Maker and Ruby programming language. The project includes innovative mechanics, custom graphics, a basic physics system and modular architecture for future expansions.", "I completed all levels of the OverTheWire Bandit challenge, a set of 34 progressive levels that teach cybersecurity fundamentals in Linux environments. I developed skills in forensic analysis, basic cryptography, scripting and penetration testing techniques.", "I prepared a full technical report with vulnerability analysis in enterprise systems. It includes attack vector identification, risk assessment, impact matrix and a detailed mitigation plan with prioritized solutions.", "I completed Hack4u's intensive Intro to Ethical Hacking course, gaining practical skills in penetration testing, malware analysis, social engineering and ethical hacking methodologies within legal frameworks.", "I developed a robust SQL injection protection system for enterprise web applications. I implemented input validation, query sanitization, prepared statements and security logging for real-time threat monitoring.", "I built a specialized script set for automation and permission auditing in enterprise Linux environments. It includes insecure configuration detection, compliance reporting and automatic correction tools.", "I successfully completed the Google Cybersecurity Certificate program, covering security fundamentals, risk management, threat analysis and incident response. This certification gave me a strong base in industry best practices.", "I successfully completed the Google AI and Productivity Certificate program, covering Google AI fundamentals (Gemini), machine learning and productivity improvements in business environments.", "I completed the AI Applied to Process Management course, gaining practical skills to implement AI solutions that optimize workflows and improve decision-making in business environments.", "I completed the intensive UAS operations course in open category A1/A3, gaining practical skills in drone operations and applications across industries.", "I completed a basic cybersecurity course, gaining practical skills to protect systems and data from digital threats.", "I completed the Information and Communication Technologies Security course, gaining practical skills in data protection and risk management in digital environments.", "I completed the National Security Framework (ENS) course, gaining skills in protecting information, systems and services in both public and private sectors according to current regulations.", "I performed a digital forensic analysis using Autopsy, focusing on data recovery and identifying possible security breaches in compromised systems.", "First completed course in my cybersecurity path, covering key foundational concepts and recommended practices."]]
        ]
      },
      recursos: {
        title: "Resources - Jorge Herrera",
        metaDescription: "Technical resources by Jorge Herrera: guides, scripts and tools for cybersecurity, programming and game design.",
        textEntries: [
          [".hero-badge span:last-child", "Technical Resource Center"],
          [".hero-title", "Resources"],
          [".hero-subtitle", "Explore the technologies, languages and tools I use in my projects. Each resource includes practical guides, official documentation and learning material for real-world cybersecurity and development solutions."],
          [".hero-cta.primary span:first-child", "Explore Resources"],
          [".hero-cta.secondary span:first-child", "View Projects"],
          ["#resources .section-title", "Technology Stack and Resources"],
          ["#resources .section-subtitle", "Technologies I use in my projects with learning guides and official documentation"],
          [".cta-section h3", "Technology Stack in Action"],
          [".cta-section p", "These technologies are the core of my cybersecurity and development projects. Each tool has been selected for practical value and professional real-world application."],
          [".cta-buttons .cta-button.primary", "View Implemented Projects"],
          [".cta-buttons .cta-button.secondary", "Learn About My Experience"],
          ["footer p", "© 2025 Jorge Herrera. All rights reserved."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Languages", "Tools", "Specialties"]],
          [".tag-cloud .tag", ["All", "Languages", "Cybersecurity", "Frameworks", "Tools", "Systems", "Databases"]],
          [".timeline-item > h3", ["Programming Languages", "Cybersecurity Tools", "Systems and Platforms", "Development Tools", "Data Management", "Specialization Platforms"]],
          [".timeline-entry .timeline-date", ["Primary", "Queries", "Web", "Gaming", "Scripting", "Essential", "Analysis", "Web Security", "Primary", "Virtualization", "Editor", "Version Control", "Relational", "CTF", "Wargames"]],
          [".timeline-entry h4", ["Bash/Shell Scripting", "SQL", "HTML, CSS & JavaScript", "Python", "Ruby", "Nmap", "Wireshark", "Burp Suite", "Linux (Ubuntu, Kali)", "VirtualBox", "Visual Studio Code", "Git & GitHub", "MySQL", "TryHackMe", "OverTheWire"]],
          [".timeline-entry p", ["Specialized language for Linux automation, audit scripts and cybersecurity tools. Used in my port scanner and permissions auditing projects.", "Query language for relational databases. Specialized in security log analysis, data filtering and anomaly pattern detection.", "Core frontend stack used to build user interfaces, professional portfolios and interactive responsive web applications.", "Versatile language for 2D game development with Pygame, automation scripts and data analysis. Clear syntax ideal for rapid prototyping.", "Dynamic and expressive programming language known for elegant syntax and developer productivity. Ideal for automation, scripting and web development with frameworks such as Rails.", "Leading tool for network discovery and security auditing. Advanced use in port scanning, service detection and vulnerability analysis.", "Network protocol analyzer for real-time traffic capture and analysis. Fundamental for forensic analysis and communication debugging.", "Comprehensive web application testing platform. HTTP proxy, vulnerability scanner and full suite for web penetration testing.", "Main operating system for development and cybersecurity. Specialized use of Ubuntu for servers and Kali Linux for pentesting and security audits.", "Virtualization platform to create isolated lab environments. Essential for security testing, development and experimentation with multiple systems.", "Main code editor with specialized extensions for web development, scripting and cybersecurity. Configured with themes and plugins for high productivity.", "Distributed version control and collaboration platform. Professional source-code management, project documentation and development portfolio.", "Relational database management system specialized in security log analysis, audit result storage and investigation queries.", "Gamified platform for practical cybersecurity learning with hands-on labs, CTF challenges and structured learning paths.", "Wargame collection to learn security concepts in a practical way. Bandit for Linux fundamentals, Natas for web security and more specialized challenges."]]
        ]
      },
      "sobre-mi": {
        title: "About Me - Jorge Herrera",
        metaDescription: "Learn about Jorge Herrera, ASIR student passionate about cybersecurity, programming and video game design.",
        textEntries: [
          [".hero-badge span:last-child", "Professional Profile"],
          [".hero-title", "About Me"],
          [".hero-subtitle", "Learn about my journey, passions and skills as an ASIR student specialized in cybersecurity. Discover my professional growth and vision for the future of secure technology."],
          [".hero-cta.primary span:first-child", "Learn More"],
          [".hero-cta.secondary span:first-child", "View Projects"],
          ["#about .section-title", "My Professional Profile"],
          ["#about .section-subtitle", "Explore my academic path, technical skills and experience in cybersecurity"],
          [".cta-title", "Interested in collaborating?"],
          [".cta-text", "I am always open to new projects and opportunities. Feel free to reach out!"],
          [".cta-section .cta-button:first-child span:first-child", "View my projects"],
          [".cta-section .cta-button.secondary span:first-child", "Contact"],
          ["footer p", "© 2025 Jorge Herrera. All rights reserved."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Projects", "Certifications", "In Training"]],
          [".tag-cloud .tag", ["All", "Education", "Skills", "Experience", "Certifications", "Personal"]],
          [".timeline-item > h3", ["Current Profile", "Academic Background", "Practical Experience"]],
          [".timeline-entry .timeline-date", ["Present", "Skills", "Hobbies", "Hobbies", "Hobbies", "September 2025", "2024 - 2025", "February 2025", "February 2025", "November 2022", "2021 - 2023", "Internship", "Internship"]],
          [".timeline-entry h4", ["Jorge Herrera - ASIR Student", "Cybersecurity Skills", "Software and Video Game Tester", "Graphic and Multimedia Design", "Social Media Content Creator", "Higher Technician in ASIR", "Building Engineering Degree at UPM", "Hack4U Intro to Hacking Certification", "Google Cybersecurity Certification", "42 Telefonica Student", "Higher Degree in Marketing and Advertising", "Marketing and Graphic Design Assistant at Movistar Riders", "Marketing and Graphic Design Assistant at Atletico de Madrid Esports"]],
          [".timeline-entry p", ["Higher Technician in Network Computer Systems Administration (ASIR) student with a strong passion for cybersecurity and technical development.", "Specialized in penetration testing, vulnerability analysis, security audits and CTF challenge solving. Practical experience with Burp Suite, Wireshark and Nmap, plus strong knowledge of OWASP Top 10.", "Passionate about software quality and user experience. I enjoy testing video games and applications to ensure high standards, finding bugs and suggesting improvements.", "I am passionate about graphic design and multimedia content creation. I enjoy creative projects that combine art and technology.", "I create engaging content for social platforms. I grew an account from 0 to 200k in less than a year by analyzing market and audience and combining design and marketing skills.", "Currently studying advanced training in network computer systems administration, focused on cybersecurity, process automation and secure infrastructure management.", "Building Engineering student at Universidad Politecnica de Madrid, gaining knowledge in architectural design, construction and project management.", "I successfully completed Hack4U's professional program covering network security fundamentals, gaining practical skills to identify and mitigate vulnerabilities.", "I successfully completed Google's professional program covering security fundamentals, risk management, threat analysis, incident response, networking and cryptography.", "I participated in Telefonica's 42 training program, developing skills in programming, teamwork and problem-solving through practical projects.", "I gained knowledge in digital marketing strategies, advertising campaign management and market analysis.", "I collaborated in visual content creation and digital marketing strategies to increase visibility for the Movistar Riders brand.", "I collaborated in visual content creation and digital marketing strategies to increase visibility for the Atletico de Madrid Esports brand."]]
        ]
      }
    },
    fr: {
      index: {
        title: "Jsh3lby | Jorge Herrera - Debutant passionne en cybersecurite ASIR",
        metaDescription: "Jsh3lby - portfolio de Jorge Herrera. Debutant passionne en cybersecurite et ethical hacking. Etudiant ASIR documentant son progres en pentesting, Linux et automatisation.",
        textEntries: [
          [".welcome span", "Jsh3lby | Debutant passionne en cybersecurite et developpement technique"],
          ["#proyectos .section-title a", "Mes projets en cybersecurite"],
          ["#proyectos .title-accent", "A la une"],
          ["#proyectos .section-subtitle", "Explore ma collection de projets en cybersecurite, ethical hacking et developpement technique"],
          ["#archivo .section-title a", "Mes archives"],
          ["#archivo .title-accent", "Professionnel"],
          ["#archivo .section-subtitle", "Explore mes projets et certifications organises chronologiquement"],
          ["#recursos .section-title a", "Ressources techniques"],
          ["#recursos .title-accent", "Outils"],
          ["#recursos .section-subtitle", "Explore ma collection de ressources et d'outils specialises"],
          ["#sobre-mi .section-title a", "A propos de moi"],
          ["#sobre-mi .title-accent", "Professionnel"],
          ["#sobre-mi .section-subtitle", "Decouvre mon parcours, mes competences et mon experience en technologie"],
          ["#sobre-mi .about-card:nth-child(1) .highlight", "\"Construire des connaissances jour apres jour pour un avenir plus sur.\""],
          ["#sobre-mi .about-cta .cta-button", "Voir mon parcours complet"],
          ["#contacto .title-accent", "Restons en contact"],
          ["#contacto .section-subtitle", "Une idee en tete? Parlons-en!"],
          ["footer p", "© 2025 Jorge Herrera. Tous droits reserves."]
        ],
        htmlEntries: [
          [".hero-description", "Je suis <strong>Jorge Herrera</strong> (<em>Jsh3lby</em>), etudiant ASIR passionne par la <strong>cybersecurite</strong> et l'<strong>ethical hacking</strong>. En tant que debutant engage dans l'apprentissage continu, je documente ma progression et mes projets sur <strong>Jsh3lby.github.io</strong>, y compris le pentesting, l'automatisation Linux et l'analyse de securite."]
        ],
        listEntries: [
          ["#proyectos .project-card h3", ["Guide complet OverTheWire Bandit", "Mon site web", "Gestionnaire des permissions Linux"]],
          ["#proyectos .project-card p", ["Documentation complete d'OverTheWire Bandit avec 34 niveaux resolus, techniques de pentesting Linux et ethical hacking pas a pas.", "Documentation complete du processus de creation de ce site portfolio avec toutes les decisions techniques.", "Scripts automatises pour auditer et gerer les permissions de fichiers sur Linux."]],
          ["#proyectos .project-card .project-stats .stat", ["34 niveaux termines", "100% documente", "Documente", "Automatise"]],
          ["#archivo .archive-card h3", ["Certifications actuelles", "Jalons de projets"]],
          ["#archivo .archive-card p", ["Certification Google en cybersecurite et specialisation IA appliquee a la productivite entreprise.", "Documentation de projets phares, de OverTheWire Bandit aux outils d'automatisation."]],
          ["#archivo .archive-card .archive-stats .stat", ["5 certifications", "En cours", "Documente"]],
          ["#recursos .resource-card h3", ["Guide de pentesting", "Scripts d'automatisation", "Ressources d'apprentissage"]],
          ["#recursos .resource-card p", ["Ressources et outils specialises pour audits de securite et pentesting professionnel.", "Collection de scripts Python et Bash pour administrateurs systeme.", "Liens selectionnes vers des cours et certifications en cybersecurite."]],
          ["#recursos .resource-card .resource-link", ["Voir le guide", "Explorer", "Acceder"]],
          ["#sobre-mi .about-card h3", ["Ma philosophie", "Formation academique", "Competences techniques"]],
          ["#sobre-mi .about-card p:not(.highlight)", ["Je suis Jorge Herrera, debutant passionne par l'ethical hacking et la cybersecurite. Je combine curiosite et dedication constante pour developper mes competences techniques et contribuer a l'ecosysteme de securite numerique.", "Etudiant ASIR - Technicien superieur en administration de systemes informatiques en reseau", "Connaissances en langages de programmation: Python, Bash et SQL pour l'automatisation, ainsi que HTML et C++." ]],
          ["#sobre-mi .about-card .about-stats .stat", ["Debutant passionne", "Apprentissage continu", "En cours", "5+ langages"]],
          ["#contacto .contact-card p", ["Pour projets, collaborations ou demandes professionnelles", "Connecte-toi avec moi pour des opportunites professionnelles", "Explore mes projets et mon code open source"]],
          ["#contacto .contact-card .contact-link", ["Ecris-moi", "Voir profil", "@Jsh3lby"]]
        ]
      },
      proyectos: {
        title: "Projets - Jorge Herrera",
        metaDescription: "Explore les projets de Jorge Herrera en cybersecurite, developpement technique et design de jeux video.",
        textEntries: [
          [".hero-badge span:last-child", "Portfolio de projets"],
          [".hero-title", "Mes projets"],
          [".hero-subtitle", "Explore ma collection de projets en cybersecurite, developpement technique et design creatif. Chaque projet represente une etape dans mon evolution professionnelle et technique."],
          [".hero-cta.primary span:first-child", "Voir projets"],
          [".hero-cta.secondary span:first-child", "Voir archives"],
          ["#projects .section-title", "Portfolio technique"],
          ["#projects .section-subtitle", "Projets classes par technologie et domaine de specialisation"],
          [".cta-section p", "Interesse par une collaboration ou plus de details sur un projet?"],
          [".cta-section .cta-button", "Voir archives completes"],
          ["footer p", "© 2025 Jorge Herrera. Tous droits reserves."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Projets", "Technologies", "Open Source"]],
          [".tag-cloud .tag", ["Tous", "Cybersecurite", "Python", "SQL", "Bash", "Linux", "Web", "Jeux video"]],
          [".project-card .project-badge", ["A la une", "A la une", "En developpement", "En developpement"]],
          [".project-card h3", ["Guide des niveaux Bandit", "Mon site web", "Scanner de ports en Bash", "Filtres SQL securises", "Gestionnaire des permissions Linux", "Jeu video personnalise", "Outil de securite avance"]],
          [".project-card > p", ["Documentation complete du challenge Bandit d'OverTheWire, avec 34 niveaux progressifs de securite Linux.", "Documentation complete du processus de creation de ce portfolio web, du concept a l'implementation finale.", "Outil educatif pour detecter les ports ouverts sur des hotes et reseaux complets, developpe en Bash avec /dev/tcp.", "Systeme robuste de protection contre les injections SQL pour applications web.", "Scripts specialises pour automatisation et audit des permissions Linux en environnement entreprise.", "Developpement d'un jeu complet en Python avec Pygame, mecaniques innovantes et architecture modulaire.", "Developpement d'un outil Python specialise pour analyse de securite et automatisation des processus cybersecurite."]],
          [".project-card .cta-button", ["Voir documentation", "Voir documentation", "Voir outil", "Voir projet", "Voir scripts", "En cours", "En recherche"]]
        ]
      },
      archivo: {
        title: "Archives - Jorge Herrera",
        metaDescription: "Chronologie des projets, certifications et jalons de Jorge Herrera en cybersecurite, developpement technique et design de jeux video.",
        textEntries: [
          [".hero-badge span:last-child", "Mon parcours professionnel"],
          [".hero-title", "Archives"],
          [".hero-subtitle", "Explore mon evolution professionnelle a travers projets, certifications et jalons en cybersecurite et developpement technique."],
          [".hero-cta.primary span:first-child", "Explorer archives"],
          [".hero-cta.secondary span:first-child", "Voir projets"],
          ["#archive .section-title", "Mon histoire technique"],
          ["#archive .section-subtitle", "Explore projets, certifications et jalons par categories"],
          [".cta-section p", "Interesse par plus de details sur un projet specifique?"],
          [".cta-section .cta-button", "Explorer projets complets"],
          ["footer p", "© 2025 Jorge Herrera. Tous droits reserves."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Technologies", "Mis a jour"]],
          [".tag-cloud .tag", ["Tous", "Cybersecurite", "Python", "SQL", "Bash", "Linux", "Jeux video", "Certifications"]],
          [".timeline-entry .timeline-date", ["Juin 2023", "Mai", "Avril", "Mars", "Fevrier", "Fevrier", "Fevrier", "Janvier", "Octobre", "Aout", "Janvier", "Avril", "Janvier", "Aout", "Juin"]],
          [".timeline-entry h4", ["Jeu video personnalise (En developpement)", "Maitrise: Niveaux Bandit OverTheWire", "Analyse complete des vulnerabilites", "Cours specialise Hack4u", "Systeme de filtres SQL securises", "Gestionnaire avance des permissions Linux", "Certification Google en cybersecurite", "Certification Google IA et productivite", "IA appliquee a la gestion des processus", "Operations UAS categorie ouverte A1/A3", "Cours de base en cybersecurite", "Cours securite des TIC", "Schema national de securite (ENS)", "Pratique outil Autopsy", "Certificat edX verifie: Fondamentaux cybersecurite"]],
          [".timeline-entry p", ["Developpement d'un jeu video complet avec RPG Maker et Ruby, incluant mecaniques innovantes, graphismes personnalises et architecture modulaire.", "J'ai complete tous les niveaux du challenge Bandit d'OverTheWire, developpant des competences en analyse forensique, cryptographie de base, scripting et pentesting.", "J'ai elabore un rapport technique complet d'analyse de vulnerabilites avec evaluation des risques et plan de mitigation detaille.", "J'ai complete le cours intensif d'introduction au hacking ethique de Hack4u avec competences pratiques en pentesting et analyse malware.", "J'ai developpe un systeme robuste de protection contre les injections SQL pour applications web en entreprise.", "J'ai cree un ensemble de scripts specialises pour automatisation et audit des permissions Linux en environnement entreprise.", "J'ai complete avec succes la certification Google en cybersecurite couvrant fondamentaux de securite, risques et reponse aux incidents.", "J'ai complete avec succes la certification Google IA et productivite couvrant IA, machine learning et applications entreprise.", "J'ai complete le cours IA appliquee a la gestion des processus pour optimiser flux de travail et prise de decision.", "J'ai complete le cours intensif operations UAS en categorie ouverte A1/A3.", "J'ai complete un cours de base en cybersecurite pour la protection des systemes et des donnees.", "J'ai complete le cours de securite des technologies de l'information et des communications.", "J'ai complete le cours ENS pour protection de l'information, des systemes et des services selon les normes actuelles.", "J'ai realise une analyse forensique numerique avec Autopsy, centree sur recuperation de donnees et identification de failles.", "Premier cours complete dans mon parcours cybersecurite, couvrant les concepts fondamentaux et bonnes pratiques."]]
        ]
      },
      recursos: {
        title: "Ressources - Jorge Herrera",
        metaDescription: "Ressources techniques de Jorge Herrera: guides, scripts et outils pour cybersecurite, programmation et design de jeux video.",
        textEntries: [
          [".hero-badge span:last-child", "Centre de ressources techniques"],
          [".hero-title", "Ressources"],
          [".hero-subtitle", "Explore les technologies, langages et outils que j'utilise. Chaque ressource inclut guides pratiques, documentation officielle et materiel d'apprentissage."],
          [".hero-cta.primary span:first-child", "Explorer ressources"],
          [".hero-cta.secondary span:first-child", "Voir projets"],
          ["#resources .section-title", "Stack technologique et ressources"],
          ["#resources .section-subtitle", "Technologies utilisees dans mes projets avec guides d'apprentissage et documentation officielle"],
          [".cta-section h3", "Stack technologique en action"],
          [".cta-section p", "Ces technologies forment le noyau de mes projets en cybersecurite et developpement."],
          [".cta-buttons .cta-button.primary", "Voir projets implementes"],
          [".cta-buttons .cta-button.secondary", "Connaitre mon experience"],
          ["footer p", "© 2025 Jorge Herrera. Tous droits reserves."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Langages", "Outils", "Specialites"]],
          [".tag-cloud .tag", ["Tout", "Langages", "Cybersecurite", "Frameworks", "Outils", "Systemes", "Bases de donnees"]],
          [".timeline-item > h3", ["Langages de programmation", "Outils de cybersecurite", "Systemes et plateformes", "Outils de developpement", "Gestion des donnees", "Plateformes de specialisation"]],
          [".timeline-entry .timeline-date", ["Principal", "Requetes", "Web", "Gaming", "Scripting", "Essentiel", "Analyse", "Web Security", "Principal", "Virtualisation", "Editeur", "Version Control", "Relationnel", "CTF", "Wargames"]],
          [".timeline-entry h4", ["Bash/Shell Scripting", "SQL", "HTML, CSS & JavaScript", "Python", "Ruby", "Nmap", "Wireshark", "Burp Suite", "Linux (Ubuntu, Kali)", "VirtualBox", "Visual Studio Code", "Git & GitHub", "MySQL", "TryHackMe", "OverTheWire"]],
          [".timeline-entry p", ["Langage specialise pour automatisation Linux, scripts d'audit et outils cybersecurite.", "Langage de requetes pour bases relationnelles, specialise en analyse de logs et detection d'anomalies.", "Stack frontend essentiel pour interfaces utilisateur et applications web responsives.", "Langage polyvalent pour jeux 2D avec Pygame, automatisation et analyse de donnees.", "Langage dynamique et expressif, ideal pour automatisation, scripting et developpement web.", "Outil de reference pour decouverte reseau et audit de securite.", "Analyseur de protocoles reseau pour capture et analyse de trafic en temps reel.", "Plateforme complete de test d'applications web et pentesting.", "Systeme principal pour developpement et cybersecurite, avec Ubuntu et Kali Linux.", "Plateforme de virtualisation pour laboratoires isoles.", "Editeur principal avec extensions specialisees pour web, scripting et cybersecurite.", "Controle de versions distribue et plateforme de collaboration.", "SGBD relationnel pour analyses de logs de securite et requetes d'investigation.", "Plateforme gamifiee d'apprentissage pratique de la cybersecurite.", "Collection de wargames pour apprendre la securite de facon pratique."]]
        ]
      },
      "sobre-mi": {
        title: "A propos de moi - Jorge Herrera",
        metaDescription: "Decouvre Jorge Herrera, etudiant ASIR passionne par cybersecurite, programmation et design de jeux video.",
        textEntries: [
          [".hero-badge span:last-child", "Profil professionnel"],
          [".hero-title", "A propos de moi"],
          [".hero-subtitle", "Decouvre mon parcours, mes passions et mes competences comme etudiant ASIR specialise en cybersecurite."],
          [".hero-cta.primary span:first-child", "En savoir plus"],
          [".hero-cta.secondary span:first-child", "Voir projets"],
          ["#about .section-title", "Mon profil professionnel"],
          ["#about .section-subtitle", "Explore mon parcours academique, mes competences techniques et mon experience en cybersecurite"],
          [".cta-title", "Interesse par une collaboration?"],
          [".cta-text", "Je suis toujours ouvert a de nouveaux projets et opportunites. N'hesite pas a me contacter!"],
          [".cta-section .cta-button:first-child span:first-child", "Voir mes projets"],
          [".cta-section .cta-button.secondary span:first-child", "Contacter"],
          ["footer p", "© 2025 Jorge Herrera. Tous droits reserves."]
        ],
        listEntries: [
          [".hero-stats .stat-label", ["Projets", "Certifications", "En formation"]],
          [".tag-cloud .tag", ["Tout", "Education", "Competences", "Experience", "Certifications", "Personnel"]],
          [".timeline-item > h3", ["Profil actuel", "Formation academique", "Experience pratique"]],
          [".timeline-entry .timeline-date", ["Present", "Competences", "Loisirs", "Loisirs", "Loisirs", "Septembre 2025", "2024 - 2025", "Fevrier 2025", "Fevrier 2025", "Novembre 2022", "2021 - 2023", "Stage", "Stage"]],
          [".timeline-entry h4", ["Jorge Herrera - Etudiant ASIR", "Competences en cybersecurite", "Testeur logiciel et jeux video", "Design graphique et multimedia", "Createur de contenu reseaux sociaux", "Technicien superieur en ASIR", "Diplome universitaire de batiment a UPM", "Certification Hack4U introduction au hacking", "Certification Google en cybersecurite", "Etudiant 42 Telefonica", "Diplome superieur en marketing et publicite", "Assistant marketing et design graphique chez Movistar Riders", "Assistant marketing et design graphique chez Atletico de Madrid Esports"]],
          [".timeline-entry p", ["Etudiant ASIR passionne par la cybersecurite et le developpement technique.", "Specialisation en pentesting, analyse de vulnerabilites, audits de securite et challenges CTF.", "Passionne par qualite logicielle et experience utilisateur, je teste jeux et applications pour garantir les meilleurs standards.", "Je suis passionne par le design graphique et la creation multimedia, sur des projets creatifs melant art et technologie.", "Je cree du contenu pour reseaux sociaux et ai fait croitre un compte de 0 a 200k en moins d'un an.", "Formation en administration de systemes informatiques en reseau, avec focus cybersecurite et automatisation.", "Etudiant en batiment a l'Universite Polytechnique de Madrid.", "Programme Hack4U complete avec competences pratiques en identification et mitigation de vulnerabilites.", "Programme Google complete couvrant securite, risques, menaces, incidents, reseaux et cryptographie.", "Participation au programme 42 Telefonica avec projets pratiques en programmation et travail en equipe.", "Connaissances acquises en marketing digital, campagnes publicitaires et analyse de marche.", "Collaboration en creation de contenu visuel et strategies marketing pour Movistar Riders.", "Collaboration en creation de contenu visuel et strategies marketing pour Atletico de Madrid Esports."]]
        ]
      }
    }
  };

  const pageTranslationSnapshots = {};

  const setTextContent = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === 'string') {
      element.textContent = value;
    }
  };

  const setHtmlContent = (selector, value) => {
    const element = document.querySelector(selector);
    if (element && typeof value === 'string') {
      element.innerHTML = value;
    }
  };

  const setListContent = (selector, values) => {
    if (!Array.isArray(values)) {
      return;
    }

    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      if (typeof values[index] === 'string') {
        element.textContent = values[index];
      }
    });
  };

  const getPageIdFromPath = () => {
    const pageName = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (pageName === '' || pageName === 'index.html') {
      return 'index';
    }

    return pageName.replace('.html', '');
  };

  const capturePageTranslationSnapshot = (pageId, templatePack) => {
    if (!templatePack || pageTranslationSnapshots[pageId]) {
      return;
    }

    const snapshot = {
      title: document.title,
      metaDescription: '',
      textEntries: [],
      htmlEntries: [],
      listEntries: []
    };

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      snapshot.metaDescription = metaDescription.getAttribute('content') || '';
    }

    (templatePack.textEntries || []).forEach(([selector]) => {
      const element = document.querySelector(selector);
      snapshot.textEntries.push([selector, element ? element.textContent : null]);
    });

    (templatePack.htmlEntries || []).forEach(([selector]) => {
      const element = document.querySelector(selector);
      snapshot.htmlEntries.push([selector, element ? element.innerHTML : null]);
    });

    (templatePack.listEntries || []).forEach(([selector]) => {
      const elements = document.querySelectorAll(selector);
      const values = Array.from(elements).map((element) => element.textContent);
      snapshot.listEntries.push([selector, values]);
    });

    pageTranslationSnapshots[pageId] = snapshot;
  };

  const restorePageTranslationSnapshot = (pageId) => {
    const snapshot = pageTranslationSnapshots[pageId];
    if (!snapshot) {
      return;
    }

    document.title = snapshot.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && typeof snapshot.metaDescription === 'string') {
      metaDescription.setAttribute('content', snapshot.metaDescription);
    }

    snapshot.textEntries.forEach(([selector, value]) => {
      if (typeof value === 'string') {
        setTextContent(selector, value);
      }
    });

    snapshot.htmlEntries.forEach(([selector, value]) => {
      if (typeof value === 'string') {
        setHtmlContent(selector, value);
      }
    });

    snapshot.listEntries.forEach(([selector, values]) => {
      setListContent(selector, values);
    });
  };

  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.querySelector('nav');

  let langSwitcher = null;
  let langToggleBtn = null;
  let langMenu = null;

  const safeSetStorage = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn('No se pudo guardar en localStorage:', error);
    }
  };

  const safeGetStorage = (key) => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  const normalizeLanguage = (rawLanguage) => {
    if (!rawLanguage) {
      return 'es';
    }

    const baseLanguage = rawLanguage.toLowerCase().split('-')[0];
    return SUPPORTED_LANGUAGES.includes(baseLanguage) ? baseLanguage : 'es';
  };

  const getCurrentLanguage = () => {
    const storedLanguage = safeGetStorage('portfolio-language');
    if (storedLanguage) {
      return normalizeLanguage(storedLanguage);
    }

    const htmlLanguage = document.documentElement.getAttribute('lang');
    if (htmlLanguage) {
      return normalizeLanguage(htmlLanguage);
    }

    return normalizeLanguage(navigator.language || 'es');
  };

  const closeLanguageMenu = () => {
    if (langMenu && langToggleBtn) {
      langMenu.classList.remove('open');
      langToggleBtn.setAttribute('aria-expanded', 'false');
    }
  };

  const updateLanguageSelectorUI = (language) => {
    const i18n = I18N[language] || I18N.es;
    if (langToggleBtn) {
      langToggleBtn.textContent = i18n.short;
      langToggleBtn.setAttribute('aria-label', i18n.controls.languageSelector);
      langToggleBtn.setAttribute('title', i18n.controls.languageSelector);
    }

    if (!langMenu) {
      return;
    }

    const options = langMenu.querySelectorAll('.lang-option');
    options.forEach((option) => {
      const isActive = option.dataset.lang === language;
      option.classList.toggle('active', isActive);
      option.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  };

  const applyNavTranslations = (language) => {
    const i18n = I18N[language] || I18N.es;

    navLinks.forEach((link, index) => {
      const key = NAV_KEYS[index];
      if (!key) {
        return;
      }

      if (i18n.nav[key]) {
        link.textContent = i18n.nav[key];
      }

      if (i18n.navAria[key]) {
        link.setAttribute('aria-label', i18n.navAria[key]);
      }
    });

    const hamburgerButton = document.querySelector('.hamburger');
    if (hamburgerButton) {
      const expanded = hamburgerButton.classList.contains('active');
      hamburgerButton.setAttribute('aria-label', expanded ? i18n.controls.closeMenu : i18n.controls.openMenu);
    }

    const backButton = document.querySelector('.back-btn');
    if (backButton) {
      backButton.setAttribute('aria-label', i18n.controls.back);
    }
  };

  const applyPageTranslations = (language) => {
    const pageId = getPageIdFromPath();
    const enTemplate = PAGE_CONTENT_I18N.en && PAGE_CONTENT_I18N.en[pageId];
    const frTemplate = PAGE_CONTENT_I18N.fr && PAGE_CONTENT_I18N.fr[pageId];
    const templatePack = enTemplate || frTemplate;

    capturePageTranslationSnapshot(pageId, templatePack);

    if (language === 'es') {
      restorePageTranslationSnapshot(pageId);
      return;
    }

    const languagePack = PAGE_CONTENT_I18N[language] && PAGE_CONTENT_I18N[language][pageId];
    if (!languagePack) {
      return;
    }

    if (typeof languagePack.title === 'string') {
      document.title = languagePack.title;
    }

    if (typeof languagePack.metaDescription === 'string') {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', languagePack.metaDescription);
      }
    }

    (languagePack.textEntries || []).forEach(([selector, value]) => {
      setTextContent(selector, value);
    });

    (languagePack.htmlEntries || []).forEach(([selector, value]) => {
      setHtmlContent(selector, value);
    });

    (languagePack.listEntries || []).forEach(([selector, values]) => {
      setListContent(selector, values);
    });
  };

  const applyLanguage = (language, dispatchEvent = true) => {
    const normalizedLanguage = normalizeLanguage(language);
    document.documentElement.setAttribute('lang', normalizedLanguage);
    safeSetStorage('portfolio-language', normalizedLanguage);

    applyNavTranslations(normalizedLanguage);
    applyPageTranslations(normalizedLanguage);
    updateLanguageSelectorUI(normalizedLanguage);

    if (dispatchEvent) {
      window.dispatchEvent(
        new CustomEvent('portfolio:language-changed', {
          detail: { language: normalizedLanguage }
        })
      );
    }
  };

  const createLanguageSwitcher = (initialLanguage) => {
    const themeButton = document.getElementById('theme-toggle');
    if (!nav || !themeButton || document.querySelector('.lang-switcher')) {
      return;
    }

    nav.classList.add('has-lang-switcher');

    langSwitcher = document.createElement('div');
    langSwitcher.className = 'lang-switcher';

    langToggleBtn = document.createElement('button');
    langToggleBtn.type = 'button';
    langToggleBtn.className = 'lang-btn';
    langToggleBtn.id = 'language-toggle';
    langToggleBtn.setAttribute('aria-haspopup', 'true');
    langToggleBtn.setAttribute('aria-expanded', 'false');

    langMenu = document.createElement('div');
    langMenu.className = 'lang-menu';
    langMenu.setAttribute('role', 'menu');

    SUPPORTED_LANGUAGES.forEach((languageCode) => {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = 'lang-option';
      option.dataset.lang = languageCode;
      option.textContent = (I18N[languageCode] && I18N[languageCode].short) || languageCode.toUpperCase();
      option.setAttribute('role', 'menuitemradio');

      option.addEventListener('click', () => {
        applyLanguage(languageCode);
        closeLanguageMenu();
      });

      langMenu.appendChild(option);
    });

    langToggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();

      const isOpen = langMenu.classList.contains('open');
      if (isOpen) {
        closeLanguageMenu();
      } else {
        langMenu.classList.add('open');
        langToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    langSwitcher.appendChild(langToggleBtn);
    langSwitcher.appendChild(langMenu);
    nav.insertBefore(langSwitcher, themeButton);

    updateLanguageSelectorUI(initialLanguage);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    if (navLinksContainer && hamburger) {
      navLinksContainer.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';

      const currentLanguage = getCurrentLanguage();
      const i18n = I18N[currentLanguage] || I18N.es;
      hamburger.setAttribute('aria-label', i18n.controls.openMenu);
    }
  };

  // Función para abrir el menú
  const openMenu = () => {
    if (navLinksContainer && hamburger) {
      navLinksContainer.classList.add('active');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';

      const currentLanguage = getCurrentLanguage();
      const i18n = I18N[currentLanguage] || I18N.es;
      hamburger.setAttribute('aria-label', i18n.controls.closeMenu);
    }
  };

  // Control del menú hamburguesa
  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navLinksContainer.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Cerrar menú al hacer click en un enlace (móvil)
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Cerrar menú en móvil
      if (window.innerWidth <= 768) {
        setTimeout(closeMenu, 150);
      }
      
      // Marcar enlace activo
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Smooth scroll para anclas
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', (e) => {
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      closeLanguageMenu();
    }

    if (navLinksContainer && hamburger && 
        navLinksContainer.classList.contains('active') &&
        !navLinksContainer.contains(e.target) && 
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (navLinksContainer && navLinksContainer.classList.contains('active')) {
        closeMenu();
      }

      closeLanguageMenu();
    }
  });

  // Cerrar menú al redimensionar pantalla
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  // Marcar página activa al cargar
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
    if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  const initialLanguage = getCurrentLanguage();
  createLanguageSwitcher(initialLanguage);
  applyLanguage(initialLanguage, false);

  window.addEventListener('storage', (event) => {
    if (event.key === 'portfolio-language' && event.newValue) {
      applyLanguage(event.newValue, false);
    }
  });

  // Scroll progress (si existe el elemento)
  const updateScrollProgress = () => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / scrollTotal) * 100, 100);
      progressBar.style.width = `${progress}%`;
    }
  };

  // Throttle para mejor rendimiento
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Detectar dispositivos táctiles
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
  }
});