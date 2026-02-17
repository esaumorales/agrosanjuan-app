import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.js';
import Button from '@/components/ui/Button';
import { Icon } from '@iconify/react';

export default function ProductsPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-8 text-center bg-gray-50 h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Producto no encontrado</h1>
                <p className="text-gray-600 mb-6">Lo sentimos, no pudimos encontrar el producto que buscas.</p>
                <Button text="Volver al Inicio" onClick={() => navigate('/')} variant="primary" />
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-7xl">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 font-medium"
            >
                <Icon icon="material-symbols:arrow-back" width="24" height="24" />
                Volver
            </button>

            <h1 className="text-4xl font-extrabold text-start mb-12 text-primary font-headline pb-4">Detalles del Producto</h1>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* {product.stock === "Limitado" && (
                        <span className="absolute top-6 right-6 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg z-10 animate-pulse">
                            Stock Limitado
                        </span>
                    )} */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-60"></div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                        <h2 className="text-5xl font-extrabold text-gray-800 font-headline leading-tight">{product.name}</h2>
                    </div>

                    {/* <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)}S/</span>
                        <span className="text-xl text-gray-500 font-medium">por {product.unit}</span>
                    </div> */}

                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
                        {product.description}
                    </p>

                    {product.features && (
                        <div className="py-2">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Fortalezas principales:</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-6 py-6">
                        <div className="p-4 rounded-xl">
                            <span className="block text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Origen</span>
                            <span className="text-lg text-gray-800 font-medium">{product.origin}</span>
                        </div>
                        <div className="p-4 rounded-xl">
                            <span className="block text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Temporada</span>
                            <span className="text-lg text-gray-800 font-medium">{product.season}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}