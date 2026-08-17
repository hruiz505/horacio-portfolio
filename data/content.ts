export type Language = "en" | "es";

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  metrics: string[];
  tools?: string[];
}

export interface Specimen {
  name: string;
  category: string;
  icon: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  date: string;
  coursework: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Framework {
  name: string;
  focus: string;
  icon: string;
}

export interface Methodology {
  body: string;
  videoUrl: string;
  videoTitle: string;
}

export interface SpaceImage {
  credit: string;
}

export interface SectionTitles {
  work: string;
  frameworks: string;
  methodology: string;
  contact: string;
}

export interface UiStrings {
  scroll: string;
  focusLabel: string;
  downloadResume: string;
  toolsLabel: string;
  educationLabel: string;
  certificationsLabel: string;
}

export interface ContentBundle {
  profile: Profile;
  projects: Project[];
  specimens: Specimen[];
  certifications: Certification[];
  education: Education;
  navLinks: NavLink[];
  frameworks: Framework[];
  methodology: Methodology;
  spaceImage: SpaceImage;
  sectionTitles: SectionTitles;
  ui: UiStrings;
}

const en: ContentBundle = {
  profile: {
    name: "HORACIO RUIZ",
    title: "Bilingual GRC & IT Operations Professional",
    summary:
      "B.S. in Management Information Systems. Enforcing HIPAA, RBAC, and data privacy in high-stakes environments with zero privacy violations across 900+ critical cycles.",
    email: "horacio.cr.belair1107@gmail.com",
    phone: "954-556-0429",
    linkedin: "linkedin.com/in/horaciochris-ruiz970711",
    location: "Miami, FL",
  },
  projects: [
    {
      id: "zero-error-phi",
      title: "Zero-Error PHI Compliance",
      company: "Propio Language Solutions",
      period: "April 2024 – Present",
      role: "Data Privacy & HIPAA Compliance Specialist",
      description:
        "High-acuity Cardiology and ER environments. Facilitating zero-error PHI exchange across 700+ calls per period in full compliance with HIPAA regulations.",
      metrics: [
        "91% QA Score",
        "Gold Tier Performer",
        "900+ Critical Cycles",
        "Zero Privacy Violations",
      ],
    },
    {
      id: "rbac-architecture",
      title: "RBAC Policy Architecture",
      company: "AnswerNet",
      period: "Nov 2023 – Sept 2024",
      role: "Access Control & Security Operations Lead",
      description:
        "Engineered and enforced a comprehensive Role-Based Access Control policy across enterprise systems, reducing insider threat exposure. Analyzed KPI trends and deployed a secure, centralized SharePoint knowledge base on a private VLAN.",
      metrics: [
        "45% Tier 3 Reduction in 4 Months",
        "Principle of Least Privilege",
        "Insider Threat Mitigation",
      ],
      tools: ["SharePoint", "Private VLAN"],
    },
    {
      id: "algorithmic-auditing",
      title: "Algorithmic Policy Auditing",
      company: "Welocalize (Google Project)",
      period: "Jan 2023 – Oct 2023",
      role: "Data Quality & Policy Compliance Auditor",
      description:
        "Executed rigorous compliance audits using the EWOQ Ad Rating System. Analyzed multi-variable data sets to identify content risks and policy violations, training Google Search algorithms.",
      metrics: [
        "Google Governance Frameworks",
        "Multi-Variable Data Analysis",
        "Search Algorithm Training",
      ],
      tools: ["EWOQ Ad Rating System"],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation Engine",
      company: "Concentrix",
      period: "May 2021 – Jan 2023",
      role: "IT Incident Response & Workflow Analyst",
      description:
        "Developed and deployed automated scripting tools to categorize and route incoming IT tickets. Provided Tier 1 technical troubleshooting and incident response via Zendesk CRM.",
      metrics: [
        "20% Reduction in Manual Processing",
        "SLA Exceeded",
        "Zendesk CRM Automation",
      ],
      tools: ["Zendesk CRM"],
    },
  ],
  specimens: [
    { name: "HIPAA Regulations", category: "Compliance Framework", icon: "ShieldCheck" },
    { name: "NIST CSF Mapping", category: "Cybersecurity Framework", icon: "Network" },
    { name: "ISO 27001 Fundamentals", category: "Security Standard", icon: "FileLock" },
    { name: "RBAC / IAM", category: "Access Control", icon: "Fingerprint" },
    { name: "PCI DSS", category: "Payment Compliance", icon: "CreditCard" },
    { name: "SharePoint Administration", category: "Platform", icon: "FolderTree" },
    { name: "Kali Linux / Wireshark", category: "Security Tools", icon: "Terminal" },
    { name: "Claude / Kimi / DeepSeek", category: "AI Platforms", icon: "Bot" },
    { name: "Risk Assessments", category: "GRC Practice", icon: "Gauge" },
    { name: "Incident Response", category: "Security Operations", icon: "Siren" },
    { name: "Data Privacy Auditing", category: "Compliance Framework", icon: "ScanSearch" },
  ],
  certifications: [
    { name: "Cisco Networking Foundations", date: "12/2024" },
    { name: "Asana Workflow Specialist", date: "04/2025" },
    { name: "ISC2 Certified in Cybersecurity (CC)", date: "In Progress" },
  ],
  education: {
    school: "Keiser University",
    location: "Fort Lauderdale, FL",
    degree: "B.S. Management Information Systems",
    date: "May 2022",
    coursework: [
      "Database Management",
      "Network Security",
      "Systems Analysis",
      "Software Engineering",
      "Process Optimization",
      "Project Management",
    ],
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Frameworks", href: "#frameworks" },
    { label: "Methodology", href: "#methodology" },
    { label: "Contact", href: "#contact" },
  ],
  frameworks: [
    {
      name: "HIPAA Regulations",
      focus: "Zero-error PHI exchange",
      icon: "ShieldCheck",
    },
    {
      name: "NIST CSF Mapping",
      focus: "Gap analysis & vulnerability identification",
      icon: "Network",
    },
    {
      name: "RBAC Architecture",
      focus: "Principle of least privilege",
      icon: "Fingerprint",
    },
  ],
  methodology: {
    body: "Conducting gap analysis mapping medical privacy workflows (HIPAA) to NIST Cybersecurity Framework controls to identify operational vulnerabilities. Architected and documented comprehensive RBAC policies ensuring alignment with least-privilege principles.",
    videoUrl: "https://www.youtube.com/embed/Vak79kIt1Uc",
    videoTitle: "What is HIPAA? What do I Need to Know for HIPAA Compliance?",
  },
  spaceImage: {
    credit: "NASA, ESA, CSA, STScI — Pillars of Creation, James Webb Space Telescope",
  },
  sectionTitles: {
    work: "Selected Work",
    frameworks: "Frameworks & Specimens",
    methodology: "Methodology & Approach",
    contact: "Let's Connect.",
  },
  ui: {
    scroll: "Scroll",
    focusLabel: "Focus",
    downloadResume: "Download Resume PDF",
    toolsLabel: "Tools",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
  },
};

const es: ContentBundle = {
  profile: {
    name: "HORACIO RUIZ",
    title: "Profesional Bilingüe en GRC y Operaciones de TI",
    summary:
      "Licenciatura en Sistemas de Información Gerencial. Aplicando HIPAA, RBAC y privacidad de datos en entornos de alto riesgo, con cero violaciones de privacidad en más de 900 ciclos críticos.",
    email: "horacio.cr.belair1107@gmail.com",
    phone: "954-556-0429",
    linkedin: "linkedin.com/in/horaciochris-ruiz970711",
    location: "Miami, FL",
  },
  projects: [
    {
      id: "zero-error-phi",
      title: "Cumplimiento de PHI sin Errores",
      company: "Propio Language Solutions",
      period: "Abril 2024 – Presente",
      role: "Especialista en Privacidad de Datos y Cumplimiento de HIPAA",
      description:
        "Entornos de alta complejidad en Cardiología y Urgencias. Facilitando el intercambio de PHI sin errores en más de 700 llamadas por período, en pleno cumplimiento de las regulaciones HIPAA.",
      metrics: [
        "91% en Control de Calidad",
        "Nivel Oro de Desempeño",
        "900+ Ciclos Críticos",
        "Cero Violaciones de Privacidad",
      ],
    },
    {
      id: "rbac-architecture",
      title: "Arquitectura de Políticas RBAC",
      company: "AnswerNet",
      period: "Nov 2023 – Sept 2024",
      role: "Líder de Control de Acceso y Operaciones de Seguridad",
      description:
        "Diseñé e implementé una política integral de Control de Acceso Basado en Roles en sistemas empresariales, reduciendo la exposición a amenazas internas. Analicé tendencias de KPI y desplegué una base de conocimiento centralizada y segura en SharePoint sobre una VLAN privada.",
      metrics: [
        "45% de Reducción de Nivel 3 en 4 Meses",
        "Principio de Privilegio Mínimo",
        "Mitigación de Amenazas Internas",
      ],
      tools: ["SharePoint", "VLAN privada"],
    },
    {
      id: "algorithmic-auditing",
      title: "Auditoría Algorítmica de Políticas",
      company: "Welocalize (Proyecto de Google)",
      period: "Ene 2023 – Oct 2023",
      role: "Auditor de Calidad de Datos y Cumplimiento de Políticas",
      description:
        "Ejecuté auditorías de cumplimiento rigurosas utilizando el sistema de calificación de anuncios EWOQ. Analicé conjuntos de datos multivariables para identificar riesgos de contenido y violaciones de políticas, entrenando los algoritmos de Google Search.",
      metrics: [
        "Marcos de Gobernanza de Google",
        "Análisis de Datos Multivariable",
        "Entrenamiento de Algoritmos de Búsqueda",
      ],
      tools: ["Sistema de Calificación EWOQ"],
    },
    {
      id: "workflow-automation",
      title: "Motor de Automatización de Flujos de Trabajo",
      company: "Concentrix",
      period: "Mayo 2021 – Ene 2023",
      role: "Analista de Respuesta a Incidentes de TI y Flujos de Trabajo",
      description:
        "Desarrollé e implementé herramientas de scripting automatizadas para categorizar y direccionar tickets de TI entrantes. Brindé soporte técnico de Nivel 1 y respuesta a incidentes a través de Zendesk CRM.",
      metrics: [
        "20% de Reducción en Procesamiento Manual",
        "SLA Superado",
        "Automatización de Zendesk CRM",
      ],
      tools: ["Zendesk CRM"],
    },
  ],
  specimens: [
    { name: "Regulaciones HIPAA", category: "Marco de Cumplimiento", icon: "ShieldCheck" },
    { name: "Mapeo del NIST CSF", category: "Marco de Ciberseguridad", icon: "Network" },
    { name: "Fundamentos de ISO 27001", category: "Estándar de Seguridad", icon: "FileLock" },
    { name: "RBAC / IAM", category: "Control de Acceso", icon: "Fingerprint" },
    { name: "PCI DSS", category: "Cumplimiento de Pagos", icon: "CreditCard" },
    { name: "Administración de SharePoint", category: "Plataforma", icon: "FolderTree" },
    { name: "Kali Linux / Wireshark", category: "Herramientas de Seguridad", icon: "Terminal" },
    { name: "Claude / Kimi / DeepSeek", category: "Plataformas de IA", icon: "Bot" },
    { name: "Evaluaciones de Riesgo", category: "Práctica de GRC", icon: "Gauge" },
    { name: "Respuesta a Incidentes", category: "Operaciones de Seguridad", icon: "Siren" },
    { name: "Auditoría de Privacidad de Datos", category: "Marco de Cumplimiento", icon: "ScanSearch" },
  ],
  certifications: [
    { name: "Cisco Networking Foundations", date: "12/2024" },
    { name: "Asana Workflow Specialist", date: "04/2025" },
    { name: "ISC2 Certified in Cybersecurity (CC)", date: "En Curso" },
  ],
  education: {
    school: "Keiser University",
    location: "Fort Lauderdale, FL",
    degree: "Licenciatura en Sistemas de Información Gerencial",
    date: "Mayo 2022",
    coursework: [
      "Gestión de Bases de Datos",
      "Seguridad de Redes",
      "Análisis de Sistemas",
      "Ingeniería de Software",
      "Optimización de Procesos",
      "Gestión de Proyectos",
    ],
  },
  navLinks: [
    { label: "Trabajo", href: "#work" },
    { label: "Marcos", href: "#frameworks" },
    { label: "Metodología", href: "#methodology" },
    { label: "Contacto", href: "#contact" },
  ],
  frameworks: [
    {
      name: "HIPAA Regulations",
      focus: "Intercambio de PHI sin errores",
      icon: "ShieldCheck",
    },
    {
      name: "NIST CSF Mapping",
      focus: "Análisis de brechas e identificación de vulnerabilidades",
      icon: "Network",
    },
    {
      name: "RBAC Architecture",
      focus: "Principio de privilegio mínimo",
      icon: "Fingerprint",
    },
  ],
  methodology: {
    body: "Realizando análisis de brechas que vinculan los flujos de trabajo de privacidad médica (HIPAA) con los controles del NIST Cybersecurity Framework para identificar vulnerabilidades operativas. Diseñé y documenté políticas RBAC integrales, garantizando el alineamiento con los principios de privilegio mínimo.",
    videoUrl: "https://www.youtube.com/embed/l48OWQ8Vr1E",
    videoTitle: "Normas de Privacidad y Seguridad de HIPAA (en español)",
  },
  spaceImage: {
    credit: "NASA, ESA, CSA, STScI — Pilares de la Creación, Telescopio Espacial James Webb",
  },
  sectionTitles: {
    work: "Trabajo Seleccionado",
    frameworks: "Marcos y Especímenes",
    methodology: "Metodología y Enfoque",
    contact: "Conectemos.",
  },
  ui: {
    scroll: "Desplázate",
    focusLabel: "Enfoque",
    downloadResume: "Descargar Currículum en PDF",
    toolsLabel: "Herramientas",
    educationLabel: "Educación",
    certificationsLabel: "Certificaciones",
  },
};

export const content: Record<Language, ContentBundle> = { en, es };

export const resumeDownloadUrl = "/horacio-ruiz-resume.pdf";
