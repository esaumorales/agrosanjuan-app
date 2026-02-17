import NaranjaValenciaImage from '@assets/image/image-produc-1.webp';
import NaranjaNavelImage from '@assets/image/image-produc-2.webp';

const products = [
    {
        "id": 1,
        "name": "Naranja Valencia",
        "slug": "naranja-valencia",
        "shortDescription": "Jugosa, equilibrada y llena de frescura.",
        "description": "La Naranja Valencia se caracteriza por su alto contenido de jugo y su sabor balanceado entre dulzura y acidez. Su equilibrio natural la convierte en una de las variedades más apreciadas para jugos naturales y otros usos comerciales.",
        "features": [
            "Alto contenido de jugo y sabor equilibrado",
            "Frescura y calidad constante",
            "Variedad confiable y versátil"
        ],
        "price": 2.50,
        "unit": "kg",
        "image": NaranjaValenciaImage,
        "category": "Fruta para sumo",
        "season": "Finales de primavera a verano",
        "origin": "Pichanaki, Perú"
    },
    {
        "id": 2,
        "name": "Naranja Cara Cara",
        "slug": "naranja-cara-cara",
        "shortDescription": "Dulce, sin semillas y de pulpa rojiza.",
        "description": "La Naranja Cara Cara pertenece a la familia Navel y se reconoce por su pulpa rojo coral, su dulzura suave y su baja acidez. Combina vitamina C, licopeno y bioflavonoides, generando un alto poder antioxidante que promueve bienestar y vitalidad. Su color único y sabor agradable la hacen ideal para consumo fresco y mercados que valoran productos diferenciados.",
        "features": [
            "Alto poder antioxidante natural",
            "Pulpa roja, dulce y sin semillas",
            "Variedad con gran atractivo y valor comercial"
        ],
        "price": 3.00,
        "unit": "kg",
        "image": NaranjaNavelImage,
        "category": "Fruta de mesa premium",
        "season": "Invierno a principio de primavera",
        "origin": "Pichanaki, Perú"
    }
];

export const closingText = "En Fundo San Juan, trabajamos cada día para ofrecer cítricos frescos, de sabor auténtico y calidad constante. Contáctanos para conocer más sobre nuestras cosechas y disponibilidad.";

export default products;
