import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from './ui/Button';
import LOGOSANJUAN from '@/assets/image/logo-sanjuan.png';

const navLinks = [
    { href: '#about', label: 'Nosotros' },
    { href: '#products', label: 'Productos' },
    { href: '#contact', label: 'Contacto' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/60 px-8">
            <div className="container flex h-16 items-center justify-between ">
                <img src={LOGOSANJUAN} alt="Logo San Juan" className='w-20 h-20 ' />
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-primary transition-colors hover:text-secondary"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex">
                        <Button variant="link" text='Contáctanos' />
                    </div>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <Icon icon="material-symbols:close" width="24" height="24" /> : <Icon icon="material-symbols:menu" width="24" height="24" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden animate-in fade-in-20 slide-in-from-top-4">
                    <nav className="flex flex-col items-center gap-4 py-4 border-t">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-primary transition-colors hover:text-secondary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button variant="link" text='Contáctanos' />
                    </nav>
                </div>
            )}
        </header>
    );
}
