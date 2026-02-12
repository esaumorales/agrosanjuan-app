import LOGOSANJUAN from '@/assets/image/logo-sanjuan.png'


export default function Footer() {
    return (
        <footer className="bg-green-100 text-primary text-sm flex xl:flex-row md:justify-between lg:justify-between justify-center items-center px-8 w-full h-auto md:flex-col sm:flex-col flex-col py-8  ">
            <div className='flex flex-col md:items-start items-center w-full'>
                <img src={LOGOSANJUAN} alt="Logo San Juan" className='w-16 h-16' />
                <p className='w-full text-center md:text-left'>Calidad agrícola del campo a tu mesa. Expertos en la agroexportación de naranjas.</p>
            </div>
            <div className='flex flex-col md:items-end items-center text-center w-full'>
                <p>{new Date().getFullYear()} © Agro San Juan. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}