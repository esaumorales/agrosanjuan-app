import { useNavigate } from 'react-router-dom';
import Card from "./ui/Card";
import products from '@/assets/data/products.js';

export default function Products() {
    const navigate = useNavigate();

    return (
        <section id="products" className="flex flex-col px-8 font-headline py-16">
            <div className="space-y-4 py-4">
                <h1 className="text-3xl font-bold text-center text-primary">
                    Nuestros Productos
                </h1>
                <p className="text-center font-body text-primary">
                    Desde la clásica Valencia para zumo hasta la exótica Sanguina, descubre la variedad y calidad que nos distingue.
                </p>
            </div>
            <div className="flex flex-row justify-center gap-16 flex-wrap">
                {products.slice(0, 3).map((product) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        title={product.name}
                        description={product.shortDescription}
                        buttonText="Ver más"
                        onClick={() => navigate(`/product/${product.slug}`)}
                    />
                ))}
            </div>
        </section>
    );
}