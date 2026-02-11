import LOGOSANJUAN from '@/assets/image/logo-sanjuan.png'
import Button from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const navLinks = [
    { href: '/#about', label: 'Nosotros' },
    { href: '/#products', label: 'Productos' },
    { href: '/#process', label: 'Proceso' },
    { href: '/#contact', label: 'Contacto' },
];

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <div className='flex flex-col h-full w-full'>
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
                <div className="container flex h-16 items-center justify-between">
                    <img src={LOGOSANJUAN} alt="Logo San Juan" className='w-16 h-16' />
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <Button className="hidden sm:flex" variant="link" text='Contáctanos' />
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
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button variant="link" text='Contáctanos' />
                        </nav>
                    </div>
                )}
            </header>
            {/* background={src} */}
            <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center text-white">
                <img
                    src='waza'
                    alt='waza'
                    className="object-cover"
                    priority
                    data-ai-hint='waza'
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl px-4 space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
                        De Nuestra Tierra a Tu Mundo: Naranjas de Exportación
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
                        Cultivamos las naranjas más selectas, combinando tradición y tecnología para ofrecer un sabor y una frescura inigualables.
                    </p>
                    <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors" text='Nuestros Productos' />
                </div>
            </section>
        </div>
    );
}