import NaranjaValenciaImage from '@assets/image/image-produc-1.webp';
import NaranjaNavelImage from '@assets/image/image-produc-2.webp';
import NaranjaSanguinaImage from '@assets/image/image-produc-3.webp';

const products = [
    {
        "id": 1,
        "name": "Naranja Valencia",
        "slug": "naranja-valencia",
        "shortDescription": "Perfecta para zumos, dulce y refrescante.",
        "description": "La Naranja Valencia es conocida por su alto contenido de jugo y su sabor dulce y equilibrado. Es la opción ideal para quienes disfrutan de un jugo de naranja fresco y natural cada mañana. Su piel es fina y a veces puede tener un ligero tono verdoso debido a su maduración en el árbol durante el verano, pero esto no afecta su dulzura.",
        "price": 2.50,
        "unit": "kg",
        "image": NaranjaValenciaImage,
        "category": "Naranjas de Zumo",
        "season": "Finales de primavera a verano",
        "origin": "Valencia, España"
    },
    {
        "id": 2,
        "name": "Naranja Navel",
        "slug": "naranja-navel",
        "shortDescription": "Ideal para comer fresca, dulce y sin semillas.",
        "description": "La Naranja Navel es la naranja de mesa por excelencia. Se reconoce fácilmente por su 'ombligo' en la base. Es fácil de pelar, no tiene semillas y su pulpa es firme, jugosa y muy dulce. Perfecta para comer a gajos, en ensaladas o postres.",
        "price": 3.00,
        "unit": "kg",
        "image": NaranjaNavelImage,
        "category": "Naranjas de Mesa",
        "season": "Invierno a principio de primavera",
        "origin": "Valencia, España"
    },
    {
        "id": 3,
        "name": "Naranja Sanguina",
        "slug": "naranja-sanguina",
        "shortDescription": "Exótica y refrescante, con un toque único.",
        "description": "La Naranja Sanguina destaca por el color rojizo de su pulpa y su jugo, debido a la presencia de antocianinas. Su sabor es más complejo, con notas que recuerdan a la frambuesa o la uva. Es muy apreciada en la gastronomía gourmet y para la elaboración de cócteles y postres sofisticados.",
        "price": 3.50,
        "unit": "kg",
        "image": NaranjaSanguinaImage,
        "category": "Variedades Exóticas",
        "season": "Finales de invierno",
        "origin": "Sicilia (o cultivada localmente)",
        "stock": "Limitado"
    },
    {
        "id": 4,
        "name": "Mandarina Clementina",
        "slug": "mandarina-clementina",
        "shortDescription": "Pequeña, dulce y fácil de pelar.",
        "description": "Las Clementinas son las favoritas de los niños por su tamaño pequeño, su piel fácil de retirar y su ausencia de semillas. Son un snack saludable y delicioso, perfecto para llevar a cualquier parte. Su sabor es dulce y aromático.",
        "price": 2.80,
        "unit": "kg",
        "image": "/images/mandarina-clementina.jpg",
        "category": "Mandarinas",
        "season": "Otoño e invierno",
        "origin": "Castellón, España"
    },
    {
        "id": 5,
        "name": "Limón Verna",
        "slug": "limon-verna",
        "shortDescription": "Ácido y aromático, imprescindible en la cocina.",
        "description": "El Limón Verna es una variedad española clásica, de tamaño grande y piel gruesa. Su zumo es abundante y tiene una acidez equilibrada, ideal para aderezos, bebidas y reposteria. Es un limón de larga conservación.",
        "price": 1.90,
        "unit": "kg",
        "image": "/images/limon-verna.jpg",
        "category": "Cítricos Ácidos",
        "season": "Todo el año (principalmente primavera y verano)",
        "origin": "Murcia, España"
    },
    {
        "id": 6,
        "name": "Pomelo Star Ruby",
        "slug": "pomelo-star-ruby",
        "shortDescription": "Sabor intenso, entre dulce y amargo.",
        "description": "El Pomelo Star Ruby tiene una pulpa de color rojo intenso y un sabor que equilibra el dulzor con el característico amargor del pomelo. Es muy rico en antioxidantes y vitamina C. Se consume habitualmente en el desayuno, ya sea en jugo o con cuchara.",
        "price": 2.20,
        "unit": "kg",
        "image": "/images/pomelo-star.jpg",
        "category": "Pomelos",
        "season": "Invierno y primavera",
        "origin": "Andalucía, España"
    }
];

export default products;
