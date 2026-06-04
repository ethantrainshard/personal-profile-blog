export const site = {
  title: 'Ethan Goh',
  defaultDescription:
    'Personal profile and blog of Ethan Goh — software development, cybersecurity, and infrastructure.',
  ogUrl: 'https://cyberitdad.xyz/',
};

export const navLinks = [
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ethantrainshard', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ethan-goh-9b6615a7', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'Email', href: 'mailto:info@cyberitdad.xyz', target: null, rel: null },
] as const;

export const focusAreas = [
  { label: 'Software Development', href: '/projects/vaultguard' },
  { label: 'Cybersecurity', href: '/projects/netsentinel' },
  { label: 'Infrastructure', href: '/projects/cloudforge' },
] as const;

export const heroSubtitle = 'Software Development · Cybersecurity · Infrastructure';

export const skills = {
  development: {
    label: 'Software Development',
    colorVar: '--color-link',
    tags: [
      'Python',
      'TypeScript',
      'Go',
      'Node.js',
      'React',
      'PostgreSQL',
      'Redis',
      'GraphQL',
      'REST APIs',
      'TDD',
      'Clean Architecture',
    ],
  },
  cybersecurity: {
    label: 'Cybersecurity',
    colorVar: '--color-warning',
    tags: [
      'Penetration Testing',
      'OWASP Top 10',
      'Burp Suite',
      'Threat Modeling',
      'Security Auditing',
      'Incident Response',
      'SIEM',
      'Network Security',
      'Cryptography',
      'OAuth2 / JWT',
    ],
  },
  infrastructure: {
    label: 'Infrastructure & DevOps',
    colorVar: '--color-success',
    tags: [
      'AWS',
      'Azure',
      'Terraform',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'Ansible',
      'Linux',
      'Prometheus',
      'Grafana',
      'IaC',
    ],
  },
} as const;


export const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'LinkedIn Connections', value: '500+' },
] as const;

export interface ProjectTheme {
  gradient: [string, string, string, string];
  icon: string;
}

export const projectThemes: Record<string, ProjectTheme> = {
  secrets: {
    gradient: ['#0a1628', '#0d2137', '#0e3a5c', '#1a5276'],
    icon: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
  },
  infrastructure: {
    gradient: ['#1a1400', '#2d1f00', '#4a3200', '#6b4a00'],
    icon: '<path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/>',
  },
  cybersecurity: {
    gradient: ['#0a1a0a', '#0d2d1a', '#0f3d25', '#1a5c3a'],
    icon: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  },
  development: {
    gradient: ['#0f0a1a', '#1a0d2d', '#2d0f4a', '#3d1a6b'],
    icon: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/>',
  },
  default: {
    gradient: ['#0a0a0a', '#0d0d0d', '#0f0f0f', '#1a1a1a'],
    icon: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  },
};
