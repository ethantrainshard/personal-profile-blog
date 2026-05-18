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
