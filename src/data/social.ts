import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
    href: string;
    icon: LucideIcon;
    label: string;
    color: string;
}

export const socialLinks: SocialLink[] = [
    { href: 'mailto:jfranklin.a.d@gmail.com', icon: Mail, label: 'Email', color: 'hover:bg-purple' },
    { href: 'https://github.com/Franklin-Dantas', icon: Github, label: 'GitHub', color: 'hover:bg-purple' },
    { href: 'https://www.linkedin.com/in/franklin-dantas1998/', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-cyan' },
    { href: 'https://www.instagram.com/franklin.a.d/', icon: Instagram, label: 'Instagram', color: 'hover:bg-blue' },
];
