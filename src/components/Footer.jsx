import LOGOSANJUAN from '@/assets/image/logo-sanjuan.png'


export default function Footer() {
    return (
        <footer className="bg-green-100 text-primary text-sm flex flex-row justify-between items-center px-8 w-full h-32">
            <div>
                <img src={LOGOSANJUAN} alt="Logo San Juan" className='w-16 h-16' />
                <p>Calidad agrícola del campo a tu mesa. Expertos en la agroexportación de naranjas.</p>
            </div>
            <div>
                <p>{new Date().getFullYear()} © Agro San Juan. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}