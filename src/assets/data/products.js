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
        "origin": "Pichanaki, Perú"
    },
    {
        "id": 2,
        "name": "Naranja Cara Cara",
        "slug": "naranja-cara-cara",
        "shortDescription": "Ideal para comer fresca, dulce y sin semillas.",
        "description": "La Naranja Cara Cara es una variedad de naranja dulce que se caracteriza por su pulpa de color rosado o rojizo, similar a la sandía. Es una naranja de mesa, fácil de pelar y sin semillas. Su sabor es dulce y refrescante, con notas que recuerdan a la cereza o frutos rojos.",
        "price": 3.00,
        "unit": "kg",
        "image": NaranjaNavelImage,
        "category": "Naranjas de Mesa",
        "season": "Invierno a principio de primavera",
        "origin": "Pichanaki, Perú"
    }
];

export default products;
