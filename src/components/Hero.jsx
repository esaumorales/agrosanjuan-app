import Button from './ui/Button';
import HeroImage from '@/assets/image/fondo-hero.webp'

export default function Hero() {


    return (
        <div className='flex flex-col h-full w-full'>
            {/* background={src} */}
            <section className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center text-white">
                <img
                    src={HeroImage}
                    alt='HeroImage'
                    className="object-cover w-full h-full absolute"
                    priority
                    data-ai-hint='HeroImage'
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-4xl px-4 space-y-4">
                    <div className='w-full'>
                        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl font-headline">
                            De Nuestra Tierra a Tu Mundo: Naranjas de Exportación
                        </h1>
                    </div>
                    <div className='w-full'>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
                            Cultivamos las naranjas más selectas, combinando tradición y tecnología para ofrecer un sabor y una frescura inigualables.
                        </p>
                    </div>
                    <div className='mt-6'>
                        <Button size="lg" text='Nuestros Productos' />
                    </div>
                </div>
            </section>
        </div>
    );
}