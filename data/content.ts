export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export const profile: Profile = {
  name: "HORACIO RUIZ",
  title: "Bilingual GRC & IT Operations Professional",
  summary:
    "B.S. in Management Information Systems. Enforcing HIPAA, RBAC, and data privacy in high-stakes environments with zero privacy violations across 900+ critical cycles.",
  email: "horacio.cr.belair1107@gmail.com",
  phone: "954-556-0429",
  linkedin: "linkedin.com/in/horaciochris-ruiz970711",
  location: "Miami, FL",
};

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  metrics: string[];
}

export const projects: Project[] = [
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
      "Engineered and enforced a comprehensive Role-Based Access Control policy across enterprise systems. Deployed a secure, centralized SharePoint knowledge base on a private VLAN.",
    metrics: [
      "45% Reduction in Tier 3 Escalations",
      "Principle of Least Privilege",
      "Insider Threat Mitigation",
    ],
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
  },
];

export interface Specimen {
  name: string;
  category: string;
}

export const specimens: Specimen[] = [
  { name: "HIPAA Regulations", category: "Compliance Framework" },
  { name: "NIST CSF Mapping", category: "Cybersecurity Framework" },
  { name: "ISO 27001 Fundamentals", category: "Security Standard" },
  { name: "RBAC / IAM", category: "Access Control" },
  { name: "PCI DSS", category: "Payment Compliance" },
  { name: "SharePoint Administration", category: "Platform" },
  { name: "Kali Linux / Wireshark", category: "Security Tools" },
  { name: "Claude / Kimi / DeepSeek", category: "AI Platforms" },
];

export interface Certification {
  name: string;
  date: string;
}

export const certifications: Certification[] = [
  { name: "Cisco Networking Foundations", date: "12/2024" },
  { name: "Asana Workflow Specialist", date: "04/2025" },
  { name: "ISC2 Certified in Cybersecurity (CC)", date: "In Progress" },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Methodology", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

export interface Tier {
  name: string;
  color: string;
  metric: string;
  description: string;
}

export const tiers: Tier[] = [
  {
    name: "Gold Tier",
    color: "#D4AF37",
    metric: "91% QA Score",
    description:
      "Top-band QA performance sustained across 900+ critical PHI exchange cycles at Propio Language Solutions — the highest rating in the compliance scoring framework.",
  },
  {
    name: "Silver Tier",
    color: "#C0C0C0",
    metric: "80–90% Benchmark",
    description:
      "The mid-band threshold in the same QA scoring framework — consistent compliance with HIPAA protocol, minor procedural deviations permitted.",
  },
  {
    name: "Bronze Tier",
    color: "#CD7F32",
    metric: "70–79% Baseline",
    description:
      "The entry-band compliance threshold — meets the minimum regulatory bar but signals a required corrective action plan.",
  },
];

export interface Methodology {
  body: string;
  videoUrl: string;
  videoTitle: string;
}

export const methodology: Methodology = {
  body: "Conducting gap analysis mapping medical privacy workflows (HIPAA) to NIST Cybersecurity Framework controls to identify operational vulnerabilities. Architected and documented comprehensive RBAC policies ensuring alignment with least-privilege principles.",
  videoUrl: "https://www.youtube.com/embed/Vak79kIt1Uc",
  videoTitle: "What is HIPAA? What do I Need to Know for HIPAA Compliance?",
};

export interface SectionTitles {
  work: string;
  frameworks: string;
  methodology: string;
  contact: string;
}

export const sectionTitles: SectionTitles = {
  work: "Selected Work",
  frameworks: "Frameworks & Specimens",
  methodology: "Methodology & Approach",
  contact: "Let's Connect.",
};

export const resumeDownloadUrl = "/horacio-ruiz-resume.pdf";
